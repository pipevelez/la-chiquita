import Products from "./Products";

export default function ProductsPage() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Todos nuestros productos</h2>
        <Products />
      </div>
    </section>
  );
}
