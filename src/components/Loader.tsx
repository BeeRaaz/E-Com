import { LoaderData } from "../types/Loader";
import Container from "./Container";

const Loader = ({ label }: LoaderData) => {
  return (
    <section>
      <Container
        classes={
          "min-h-[calc(100dvh-76px)] flex flex-wrap justify-center items-center"
        }
      >
        <div className="pt-32 pb-20">
          <h1 className="text-3xl font-bold tracking-tight">{label}</h1>
        </div>
      </Container>
    </section>
  );
};

export default Loader;
