import { NavBar, RightSidebar } from "./components";
import { Hero, About } from "./sections";

function App() {
  return (
    <main className="relative overflow-hidden">
      <NavBar />
      <section className="relative">
        <RightSidebar />
        <Hero />
      </section>
      <section className="">
        <About />
      </section>
    </main>
  );
}

export default App;
