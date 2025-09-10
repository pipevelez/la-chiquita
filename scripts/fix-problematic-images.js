// scripts/fix-problematic-images.js
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const problematicImages = [
  'public/postres/oreo.JPG',
  'public/tortas/torta1.JPG',
  'public/tortas/torta2.JPG', 
  'public/tortas/torta3.jpg',
  'public/tortas/torta_cafe.JPG',
  'public/apariencia/Cristo_Rey.jpg',
  'public/apariencia/fachada.JPG',
  'public/apariencia/fondo_home.JPG',
  'public/apariencia/fondo_home2.JPG',
  'public/apariencia/visitanos.JPG'
];

async function fixImages() {
  console.log('🔧 Corrigiendo imágenes problemáticas...');
  
  for (const imagePath of problematicImages) {
    if (!fs.existsSync(imagePath)) continue;
    
    try {
      const originalSize = fs.statSync(imagePath).size;
      console.log(`🔄 ${path.basename(imagePath)}: ${(originalSize/1024).toFixed(1)}KB`);
      
      // Para JPEG que aumentaron, usar mejor compresión
      await sharp(imagePath)
        .resize({ width: 1000, withoutEnlargement: true })
        .jpeg({ 
          quality: 65,  // Calidad más baja para JPEG
          progressive: true,
          optimiseScans: true
        })
        .toFile(imagePath + '.temp');
      
      // Reemplazar original
      const optimizedSize = fs.statSync(imagePath + '.temp').size;
      fs.unlinkSync(imagePath);
      fs.renameSync(imagePath + '.temp', imagePath);
      
      console.log(`✅ ${(optimizedSize/1024).toFixed(1)}KB (${((originalSize-optimizedSize)/originalSize*100).toFixed(1)}% reducido)`);
      
    } catch (error) {
      console.error(`❌ Error con ${imagePath}:`, error.message);
    }
  }
}

fixImages().catch(console.error);