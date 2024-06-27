import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import Featured from "./sections/Featured"
import UpcomingEvents from "./sections/UpcomingEvents"
import Personalize from "./sections/Personalize"
import Watch from "./sections/Watch"
import Listen from "./sections/Listen"
import Subscribe from "./sections/Subscribe"
import Footer from "./sections/Footer"
const App = () => {
  return (
    <main className='relative scroll-smooth pb-4'>
      <Nav />

      <section>
        <Hero />
      </section>

      <section>
        <Featured />
      </section>

      <section>
        <UpcomingEvents />
      </section>

      <section>
      <Personalize />
      </section>

      <section>
      <Watch />
      </section>

      <section>
      <Listen />
      </section>

      <section>
      <Subscribe />
      </section>

      <section>
      <Footer />
      </section>
    </main>
  )
}

export default App