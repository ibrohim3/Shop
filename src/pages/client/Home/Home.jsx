// import AdSwiper from "../../../Swiper/AdSwiper";
// import "./Home.css";
// import Catalog from "../Catalog/Catalog";
// import Service from "../Service/Service";
// function Home() {
//   return (
//     <main className="home">
//       <AdSwiper />
//       <Catalog />
//       <Service />
//     </main>
//   );
// }

// export default Home;
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProducts } from "../../../hooks/useProducts";
import ProductCard from "../../../components/ProductCard/ProductCard";
import AdSwiper from "../../../Swiper/AdSwiper";
import "./Home.css";
import Catalog from "../Catalog/Catalog";
import Service from "../Service/Service";
import Products from "../../client/Products/Products";

function Home() {
  // const { searchQuery } = useOutletContext();
  // const { data: products = [] } = useProducts();
  // const [popularProducts, setPopularProducts] = useState([]);

  // Eng ko‘p qidirilgan mahsulotlarni olish
  // useEffect(() => {
  //   const counts = JSON.parse(localStorage.getItem("searchCounts")) || {};
  //   const sorted = Object.entries(counts)
  //     .sort((a, b) => b[1] - a[1])
  //     .slice(0, 5)
  //     .map(([name]) => name.toLowerCase());

  //   const topProducts = products.filter((p) =>
  //     sorted.includes(p.name.toLowerCase())
  //   );

  //   setPopularProducts(topProducts);
  // }, [products, searchQuery]);

  return (
    <main className="home">
      <AdSwiper />
      <Catalog />

      /* {popularProducts.length > 0 && (
        <section className="popular-products">
          <h2>🔥 Eng ko‘p qidirilgan mahsulotlar</h2>
          <div className="popular-grid">
            {popularProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )} */

      <Service />
      <Products />
    </main>
  );
}

export default Home;
