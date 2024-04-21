import PopularProductCard from "../Components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 font-montserrat">
      <div>
        <h2 className="text-4xl mb-4 font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mb-16">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
          quo corporis adipisci illum, quibusdam voluptatem, aspernatur numquam
          nihil neque qui quaerat recusandae.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-6">
        {products.map((product) => (
          <PopularProductCard key={product.name} imgURL={product.imgURL} price = {product.price} name={product.name} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
