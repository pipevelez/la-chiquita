import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de calidad
const QUALITY = 80;
const MAX_WIDTH = 1200;

// Directorios a optimizar
const directories = [
  '../public/panaderia',
  '../public/dulces',
  '../public/bebidas',
  '../public/especialidades',
  '../public/postres',
  '../public/tortas',
  '../public/apariencia'
];

async function optimizeImages() {
  console.log('🔧 Optimizando imágenes...');
  
  // Crear directorio temporal si no existe
  const tempDir = path.join(__dirname, '../public/temp_optimized');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  
  let totalSaved = 0;
  let totalImages = 0;
  
  for (const dir of directories) {
    const fullPath = path.join(__dirname, dir);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Directorio no encontrado: ${fullPath}`);
      continue;
    }
    
    const files = fs.readdirSync(fullPath);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|JPG|JPEG|PNG|webp)$/i.test(file)
    );
    
    console.log(`\n📁 Procesando ${imageFiles.length} imágenes en ${dir}`);
    
    for (const file of imageFiles) {
      totalImages++;
      const inputPath = path.join(fullPath, file);
      const tempOutputPath = path.join(tempDir, file);
      
      try {
        // Obtener metadatos de la imagen original
        const originalStats = fs.statSync(inputPath);
        const metadata = await sharp(inputPath).metadata();
        
        console.log(`🔄 Procesando: ${file} (${(originalStats.size / 1024).toFixed(1)}KB)`);
        
        // Determinar opciones de redimensionamiento
        const resizeOptions = metadata.width > MAX_WIDTH ? 
          { width: MAX_WIDTH } : 
          { width: metadata.width };
        
        // Optimizar imagen y guardar en temporal
        await sharp(inputPath)
          .resize(resizeOptions)
          .jpeg({ 
            quality: QUALITY,
            progressive: true,
            optimizeScans: true,
            force: false // No forzar JPEG si es PNG
          })
          .png({
            quality: QUALITY - 10,
            progressive: true,
            force: false
          })
          .toFile(tempOutputPath);
        
        // Reemplazar archivo original con el optimizado
        const optimizedStats = fs.statSync(tempOutputPath);
        const saved = originalStats.size - optimizedStats.size;
        const percentSaved = (saved / originalStats.size * 100).toFixed(1);
        
        // Mover archivo optimizado al directorio original
        fs.copyFileSync(tempOutputPath, inputPath);
        fs.unlinkSync(tempOutputPath); // Eliminar temporal
        
        totalSaved += saved;
        
        console.log(`✅ ${file}: ${(optimizedStats.size / 1024).toFixed(1)}KB (${percentSaved}% reducido)`);
      } catch (error) {
        console.error(`❌ Error con ${file}:`, error.message);
        
        // Limpiar archivo temporal si existe
        if (fs.existsSync(tempOutputPath)) {
          fs.unlinkSync(tempOutputPath);
        }
      }
    }
  }
  
  // Limpiar directorio temporal
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  
  console.log('\n🎉 Optimización completada!');
  console.log(`📊 Total de imágenes procesadas: ${totalImages}`);
  console.log(`💾 Espacio total ahorrado: ${(totalSaved / 1024).toFixed(1)}KB`);
}

// Manejar la ejecución del script
optimizeImages().catch(console.error);