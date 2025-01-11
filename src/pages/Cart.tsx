import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Container from "../components/Container";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if(cart.length === 0) return (
    <div>
      <Loader label={'No Items In Cart'} btnlabel="Browse Products" to="/products" />
    </div>

)

  return (
    <section className="pt-32 pb-20">
      <Container>
        <div className="mb-16 md:flex md:flex-wrap md:items-center">
          <h1 className="text-4xl font-bold tracking-tight mb-10 last-of-type:mb-0 md:mb-3 md:flex-1 md:pe-5">
            Cart Items
          </h1>
          <div className="md:justify-end">
          <Button label={'Clear Cart'} to={'#'} onclick={clearCart} />
          </div>
        </div>
        <ul className="md:flex md:flex-wrap md:-mx-3">
          {cart.map((cartItem) => (
            <li
              key={cartItem.id}
              className="pb-10 max-w-[400px] mx-auto md:max-w-none md:mx-0 md:w-1/2 md:px-3 lg:w-1/3"
            >
              <div className="rounded-lg bg-white dark:bg-slate-800 shadow-lg p-4 flex flex-col h-full">
                <Link to={`/cartItems/${cartItem.id}`} className="group">
                  <div className="bg-gray-100 overflow-hidden rounded-md relative pt-96 flex-shrink-0">
                    <img
                      src={`${cartItem.thumbnail}`}
                      alt={`${cartItem.title}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="pt-4 pb-2 flex-grow flex flex-wrap flex-col items-start h-full md:pt-8 md:pb-4 lg:pt-12 lg:pb-6">
                  <div className="flex flex-wrap items-start mb-10">
                    <div className="flex-1 pr-5">
                      <Link to={`/cartItems/${cartItem.id}`} className="group">
                        <h3 className="text-xl lg:text-2xl font-semibold tracking-tight md:pr-10 lg:pr-16 mb-2 transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-400">
                          {cartItem.title}
                        </h3>
                      </Link>
                      <span className="text-sm text-slate-500 dark:text-white">
                        {cartItem.brand}
                      </span>
                    </div>
                    <span className="block w-auto text-lg font-medium text-purple-500">
                      {"$" + cartItem.price}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <Button
                      label={"Remove From Cart"}
                      to={"#"}
                      onclick={() => removeFromCart(cartItem.id)}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Cart;
