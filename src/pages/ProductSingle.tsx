import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Product } from "../types/Product";
import { fetchProductDetails } from "../utils/api";
import Loader from "../components/Loader";
import Container from "../components/Container";

const ProductSingle = () => {

    const { id } = useParams<{ id: string }>();
    const [ product, setProduct ] = useState<Product | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<string | null>(null);

    useEffect(() => {

        const getProduct = async () => {
            try {
                setLoading(true);
                if(!id) throw new Error(`Product with ${id} was not found.`);

                const productDetails = await fetchProductDetails(Number(id));
                setProduct(productDetails);
            } catch (error) {
                setError(`Error while loading product with ${id}: ${error}`);
            } finally {
                setLoading(false);
            }
        }

        getProduct();

    }, []);
    
  if (loading) return <Loader label={'GATHERING PRODUCT DETAILS...'} />;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found!</p>;
  console.log(product);
  

  return (
    <section className="py-32 min-h-[calc(100dvh-72px)]">
        <Container>
            {product && 
            <div className="md:flex md:flex-wrap md:items-center">
            <div className="max-w-[300px] mx-auto mb-20 md:max-w-none md:m-0 md:w-1/2 lg:w-2/5">
                <img src={product.thumbnail} alt={product.title} className="w-full"/>
            </div>
            <div className="md:flex-1 md:ps-5">
                <h1 className="text-4xl font-bold tracking-tight mb-2">{product.title}</h1>
                <span className="inline-block text-xl text-slate-500 dark:text-white mb-8">{product.brand}</span>
                <p>{product.description}</p>
            </div>
            </div>
            }
        </Container>
    </section>
  )
}

export default ProductSingle
