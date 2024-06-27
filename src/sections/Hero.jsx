import logoWhite from '../assets/white-logo.svg'
import hero from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className="bg-black w-full flex flex-col">
      <div className="bg-black w-full flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-6">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-start justify-start">
          <div className="flex flex-col gap-2 items-start justify-start">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-sf-pro font-semibold text-left">Become a Own Generation.</h1>
            <p className="text-left flex flex-wrap break-words max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] text-sm sm:text-md text-slate-300">
              Access worldclass education & opportunities with top industry leaders & change drivers.
              Bring real-world experiences & purpose-driven career exploration to your students.
            </p>
          </div>
          <button className="bg-white text-black px-4 py-2 text-sm rounded-full font-sf-pro uppercase font-semibold">Join Now</button>
        </div>
        <div className="flex justify-center items-center mt-6 md:mt-0">
          <img 
            src={logoWhite} 
            alt="hero" 
            className="max-md:hidden w-full"
          />
        </div>
      </div>
      <div className="w-full">
        <img
          src={hero}
          alt='hero'
          className="w-full"
        />
      </div>
    </section>
  )
}

export default Hero
