import { NavBar, RightSidebar } from "./components";
import { Hero, About, Project } from "./sections";

function App() {
  return (
    <main className="relative max-sm:bg-hero_mobile">
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
    </main>
  );
}

export default App;
