import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración
const QUALITY = 80;
const MAX_WIDTH = 1200;

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
  console.log('🔧 Optimizando imágenes (solución definitiva)...');
  
  let totalSaved = 0;
  let totalProcessed = 0;
  
  for (const dir of directories) {
    const fullPath = path.join(__dirname, dir);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Saltando: ${dir}`);
      continue;
    }
    
    const files = fs.readdirSync(fullPath);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(file)
    );
    
    console.log(`\n📁 Procesando ${imageFiles.length} imágenes en ${dir}`);
    
    for (const file of imageFiles) {
      const inputPath = path.join(fullPath, file);
      
      try {
        // Crear archivo temporal con nombre único
        const tempExt = path.extname(file);
        const tempName = `temp_${Date.now()}_${path.basename(file, tempExt)}${tempExt}`;
        const tempPath = path.join(fullPath, tempName);
        
        // Obtener tamaño original
        const originalStats = fs.statSync(inputPath);
        const originalSize = originalStats.size;
        
        console.log(`🔄 ${file}: ${(originalSize / 1024).toFixed(1)}KB`);
        
        // Optimizar imagen
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        
        // Configurar opciones de optimización
        const optimizeOptions = {
          quality: QUALITY,
          progressive: true,
          force: false
        };
        
        // Redimensionar si es necesario y optimizar
        if (metadata.width > MAX_WIDTH) {
          await image
            .resize({ width: MAX_WIDTH, withoutEnlargement: true })
            .jpeg(optimizeOptions)
            .png(optimifyOptions)
            .toFile(tempPath);
        } else {
          await image
            .jpeg(optimizeOptions)
            .png(optimizeOptions)
            .toFile(tempPath);
        }
        
        // Reemplazar archivo original
        const optimizedStats = fs.statSync(tempPath);
        const optimizedSize = optimizedStats.size;
        
        // Eliminar original y renombrar temporal
        fs.unlinkSync(inputPath);
        fs.renameSync(tempPath, inputPath);
        
        const saved = originalSize - optimizedSize;
        const percent = ((saved / originalSize) * 100).toFixed(1);
        totalSaved += saved;
        totalProcessed++;
        
        console.log(`✅ Optimizado: ${(optimizedSize / 1024).toFixed(1)}KB (${percent}% reducido)`);
        
      } catch (error) {
        console.error(`❌ Error con ${file}:`, error.message);
        
        // Limpiar archivos temporales si existen
        const tempFiles = fs.readdirSync(fullPath).filter(f => f.startsWith('temp_'));
        tempFiles.forEach(tempFile => {
          try {
            fs.unlinkSync(path.join(fullPath, tempFile));
          } catch (e) {
            // Ignorar errores de limpieza
          }
        });
      }
    }
  }
  
  console.log('\n🎉 Optimización completada!');
  console.log(`📊 Total procesadas: ${totalProcessed} imágenes`);
  console.log(`💾 Espacio ahorrado: ${(totalSaved / 1024).toFixed(1)}KB`);
}

// Función para optimizar PNG
function optimifyOptions(options) {
  return {
    quality: options.quality,
    progressive: true,
    compressionLevel: 9
  };
}

optimizeImages().catch(console.error);