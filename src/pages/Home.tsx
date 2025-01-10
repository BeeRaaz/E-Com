import Container from "../components/Container"

const Home = () => {
  return (
    <section>
        <Container classes="min-h-[calc(100dvh-72px)] flex flex-wrap justify-center items-center">
            <div className="py-32">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Welcome to E-com</h1>
            </div>
        </Container>
    </section>
  )
}

export default Home
