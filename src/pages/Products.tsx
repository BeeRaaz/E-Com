import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { fetchProducts } from "../utils/api";
import Container from "../components/Container";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, SetError] = useState<string | null>(null);

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

  if (loading) return <Loader label={'GATHERING PRODUCTS...'} />;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="pt-32 pb-20">
      <Container>
        <aside></aside>
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-10">
            Products
          </h1>
          <ul className="md:flex md:flex-wrap md:-mx-3">
            {products &&
              products.map((product) => (
                <li
                  key={product.id}
                  className="pb-10 max-w-[400px] mx-auto md:max-w-none md:mx-0 md:w-1/2 md:px-3 lg:w-1/3"
                >
                  <Link to={`/products/${product.id}`} className="group">
                    <div className="rounded-lg bg-white dark:bg-slate-900 shadow-lg p-4 flex flex-col h-full">
                      <div className="bg-gray-100 overflow-hidden rounded-md relative pt-96 flex-shrink-0">
                        <img
                          src={`${product.thumbnail}`}
                          alt={`${product.title}`}
                          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="pt-4 pb-2 flex-grow md:pt-8 md:pb-4 lg:pt-12 lg:pb-6">
                        <div className="flex flex-wrap items-start">
                          <div className="flex-1 pr-5 ">
                            <h3 className="text-xl lg:text-2xl font-semibold tracking-tight md:pr-10 lg:pr-16 mb-2">
                              {product.title}
                            </h3>
                            <span className="text-sm text-slate-500 dark:text-white">
                              {product.brand}
                            </span>
                          </div>
                          <span className="block w-auto text-lg font-medium text-purple-500">
                            {"$" + product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Products;
