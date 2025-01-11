import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-slate-200 py-5 text-center dark:bg-slate-950">
      <Container>
        <p className="text-xl md:text-2xl"><Link to={'/'} className="underline hover:no-underline transition-all duration-300">E-com</Link> Presented By BeeRaaz</p>
      </Container>
    </footer>
  );
};

export default Footer;
