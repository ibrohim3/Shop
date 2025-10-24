import { useProducts } from "../../../hooks/useProducts.jsx";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./Products.css";

export default function Products() {
  const { data: products, isLoading, isError } = useProducts();

  if (isError) return <p className="error">❌ Xatolik yuz berdi</p>;
  if (isLoading) return <p className="loading">Yuklanmoqda...</p>;

  return (
    <div className="products-container">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
