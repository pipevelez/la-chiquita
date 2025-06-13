import { Link } from 'react-router-dom';

const recomendados = [
  { id: 1, nombre: 'Pan de Queso', imagen: 'https://via.placeholder.com/300x200', precio: '$3.500' },
  { id: 2, nombre: 'Torta de Chocolate', imagen: 'https://via.placeholder.com/300x200', precio: '$8.000' },
  { id: 3, nombre: 'Café Americano', imagen: 'https://via.placeholder.com/300x200', precio: '$2.500' },
];

export default function RecommendedProducts() {
  return (
    <section className="py-5" style={{ backgroundColor: '#faf7e7' }}>
      <div className="container text-center">
        <h2 className="mb-4" style={{ color: '#321808' }}>Recomendados</h2>
        <div className="row">
          {recomendados.map(producto => (
            <div key={producto.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text fw-bold">{producto.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/productos" className="btn btn-lg mt-4" style={{ backgroundColor: '#af6a18', color: '#fff' }}>
          Ver más productos
        </Link>
      </div>
    </section>
  );
}
