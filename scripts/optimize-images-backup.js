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
  console.log('🔧 Optimizando imágenes con respaldo...');
  
  // Crear carpeta de respaldo
  const backupDir = path.join(__dirname, '../public/backup_original');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
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
      const backupPath = path.join(backupDir, file);
      
      try {
        // Hacer copia de seguridad primero
        if (!fs.existsSync(backupPath)) {
          fs.copyFileSync(inputPath, backupPath);
        }
        
        const originalSize = fs.statSync(inputPath).size;
        console.log(`🔄 ${file}: ${(originalSize / 1024).toFixed(1)}KB`);
        
        // Optimizar y reemplazar
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        
        if (metadata.width > MAX_WIDTH) {
          await image
            .resize({ width: MAX_WIDTH })
            .jpeg({ quality: QUALITY, progressive: true })
            .toFile(inputPath); // Sobrescribir directamente
        } else {
          await image
            .jpeg({ quality: QUALITY, progressive: true })
            .toFile(inputPath);
        }
        
        const optimizedSize = fs.statSync(inputPath).size;
        const saved = originalSize - optimizedSize;
        const percent = ((saved / originalSize) * 100).toFixed(1);
        
        console.log(`✅ Optimizado: ${(optimizedSize / 1024).toFixed(1)}KB (${percent}% reducido)`);
        
      } catch (error) {
        console.error(`❌ Error con ${file}:`, error.message);
        
        // Restaurar desde respaldo si hay error
        if (fs.existsSync(backupPath)) {
          fs.copyFileSync(backupPath, inputPath);
          console.log(`🔄 Restaurado ${file} desde respaldo`);
        }
      }
    }
  }
  
  console.log('\n🎉 Optimización completada!');
  console.log('📦 Las imágenes originales se guardaron en: public/backup_original/');
}

optimizeImages().catch(console.error);