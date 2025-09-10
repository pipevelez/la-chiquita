// components/OptimizedImage.jsx
import { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "",
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div 
      className={`image-container ${className}`} 
      style={{ width, height }}
    >
      {!loaded && !error && (
        <div 
          className="image-placeholder"
          style={{ 
            width: width || '100%', 
            height: height || '200px',
            background: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px'
          }}
        >
          <span style={{ color: '#888', fontSize: '14px' }}>Cargando...</span>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{ 
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          width: '100%',
          height: 'auto',
          ...props.style
        }}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;