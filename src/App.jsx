import { NavBar, RightSidebar } from "./components";
import { Hero, About, Project, Footer } from "./sections";

function App() {
  return (
    <main className="relative max-sm:bg-mobile max-sm:bg-no-repeat max-sm:bg-contain">
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
