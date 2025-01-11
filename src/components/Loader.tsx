import { Link } from "react-router-dom";
import { LoaderData } from "../types/Loader";
import Container from "./Container";

const Loader = ({ label, btnlabel, to }: LoaderData) => {
  return (
    <section>
      <Container
        classes={
          "min-h-[calc(100dvh-76px)] flex flex-wrap justify-center items-center"
        }
      >
        <div className="w-full text-center pt-32 pb-20">
          <h1 className="text-3xl font-bold tracking-tight">{label}</h1>
          {btnlabel && to && (
            <Link
              to={to}
              className="inline-flex flex-wrap justify-center gap-5 mt-5 items-center rounded-full py-4 px-8 text-base font-semibold tracking-tight leading-snug transition-all duration-300 group bg-black text-white hover:gap-8 hover:bg-slate-300 hover:text-black dark:bg-white dark:text-black dark:hover:bg-slate-900 dark:hover:text-white"
            >
              <span className="flex-1">{btnlabel}</span>
              <span className="block w-5 transition-transform duration-500 group-hover:rotate-45">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.46451 7.05023C7.46451 6.49795 7.91222 6.05023 8.46451 6.05023H16.9496C16.9497 6.05023 16.9498 6.05023 16.95 6.05023H16.9645C17.5168 6.05023 17.9645 6.49795 17.9645 7.05023V15.5502C17.9645 16.1025 17.5168 16.5502 16.9645 16.5502C16.4122 16.5502 15.9645 16.1025 15.9645 15.5502V9.44973L7.7574 17.6568C7.36688 18.0474 6.73371 18.0474 6.34319 17.6568C5.95266 17.2663 5.95266 16.6331 6.34319 16.2426L14.5356 8.05023H8.46451C7.91222 8.05023 7.46451 7.60252 7.46451 7.05023Z"
                    className="transition-colors duration-500 fill-white group-hover:fill-black dark:fill-black dark:group-hover:fill-white"
                  />
                </svg>
              </span>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Loader;
