import { useContext, useEffect, useState } from "react";
import { Product } from "../types/Product";
import { fetchProducts } from "../utils/api";
import Container from "../components/Container";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { CartContext } from "../contexts/CartContext";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, SetError] = useState<string | null>(null);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const finalResponse = await fetchProducts();
        setProducts(finalResponse.products);
      } catch (error) {
        SetError(`Failed to load products: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <Loader label={"GATHERING PRODUCTS..."} />;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="pt-32 pb-20">
      <Container>
        <aside></aside>
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-10">Products</h1>
          {products && <ul className="md:flex md:flex-wrap md:-mx-3">
            {products.map((product) => (
                <li
                  key={product.id}
                  className="pb-10 max-w-[400px] mx-auto md:max-w-none md:mx-0 md:w-1/2 md:px-3 lg:w-1/3"
                >
                  <div className="rounded-lg bg-white dark:bg-slate-800 shadow-lg p-4 flex flex-col h-full">
                    <Link to={`/products/${product.id}`} className="group">
                      <div className="bg-gray-100 overflow-hidden rounded-md relative pt-96 flex-shrink-0">
                        <img
                          src={`${product.thumbnail}`}
                          alt={`${product.title}`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </Link>
                    <div className="pt-4 pb-2 flex-grow flex flex-wrap flex-col h-full md:pt-8 md:pb-4 lg:pt-12 lg:pb-6">
                      <div className="flex flex-wrap items-start mb-10">
                        <div className="flex-1 h-full pr-5">
                          <Link to={`/products/${product.id}`} className="group">
                          <h3 className="text-xl lg:text-2xl font-semibold tracking-tight mb-2 transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-400">
                            {product.title}
                          </h3>
                          </Link>
                          <span className="text-sm text-slate-500 dark:text-white">
                            {product.brand}
                          </span>
                        </div>
                        <span className="block w-auto text-lg font-medium text-purple-500">
                          {"$" + product.price}
                        </span>
                      </div>
                      <div className="mt-auto">
                      <Button
                        label={cart.find((cartItem) => cartItem.id === product.id) ? 'Remove From Cart' : 'Add To Cart'}
                        to={"#"}
                        onclick={() => cart.find((cartItem) => cartItem.id === product.id) ? removeFromCart(product.id) : addToCart(product)}
                      />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>}
        </div>
      </Container>
    </section>
  );
};

export default Products;
