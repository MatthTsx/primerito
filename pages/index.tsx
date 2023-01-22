import Layout from "../layout/layout.jsx"
import { Header, Hero, About, Skills } from "../components/"


export default function Home() {
  return (
    <Layout title={"Home"}>
      <div className="h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll z-0
      scrollbar scrollbar-thumb-black/80 scrollbar-track-white/10">
        <Header/>

        <section id="hero" className="snap-center">
          <Hero/>
        </section>

        <section id="about" className="snap-center">
          <About/>
        </section>

        <section id="Experiences" className="snap-center">
          <Skills/>
        </section>

        <section id="" className="snap-center">

        </section>

      </div>
    </Layout>
  )
}
