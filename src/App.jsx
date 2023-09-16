import { NavBar, RightSidebar } from "./components";
import { Hero, About, Project, Footer } from "./sections";

function App() {
  return (
    <main className="relative ">
      <NavBar />
      <RightSidebar />
      <section className="relative">
        <Hero />
      </section>
      <section className="">
        <About />
      </section>
      <section>
        <Project />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
