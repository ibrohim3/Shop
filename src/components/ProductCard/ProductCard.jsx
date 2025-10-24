import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.isSale && <div className="badge">Aksiya</div>}
      <button className="favorite">♡</button>

      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-detail">Do‘kon: {product.shop}</p>
        <p className="product-detail">Marka: {product.brand}</p>
        <p className="product-price">1m = {product.pricePerMeter} so‘m</p>
        <p className="product-price">1t = {product.pricePerTon} so‘m</p>

        <div className="buttons">
          <button className="btn cart">🛒 Savat</button>
          <button className="btn more">Ko‘proq ⌄</button>
        </div>

        <p className="usage">
          Qayerga ishlatiladi:
          <br />
          {product.usage}
        </p>
      </div>
    </div>
  );
}
