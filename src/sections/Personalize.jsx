import Button from '../components/Button'
import { PersonalizeDetail } from '../constants'
import arrow from '../assets/arrow-right.svg'

const Personalize = () => {
  return (
    <section className="bg-[url('src/assets/bg-personalize.svg')] w-full px-4 sm:px-8 md:px-16 lg:px-24 py-10 flex flex-col items-start justify-start gap-10 mt-6">
      <div className="flex flex-col gap-2 justify-center text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold px-6 font-sf-pro text-white">Personalize your feed</h1>
        <p className="text-sm sm:text-md font-sf-pro px-6 text-left font-medium text-[#D9FF2F]">Just For You, To Your Inbox.</p>
      </div>

      <div className="grid grid-cols-2  px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-2/3 overflow-hidden sm:overflow-auto max-h-40 sm:max-h-none">
        {PersonalizeDetail.map((item, index) => (
          <button
            key={index}
            className="hover:bg-white hover:text-black transition-all duration-100 bg-[#1E1E1E] text-white font-sf-pro font-medium text-sm sm:text-sm border-2 border-white py-2 px-4 sm:px-4 rounded-full"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className='flex flex-col gap-6 px-6 items-start'>
        <Button label="Get Recommendations" backgroundColor="white" iconUrl={arrow} textColor="black" />
        <p className='text-white text-sm font-sf-pro font-semibold text-left'>Already have an OWN account? <span className='font-sf-pro font-bold underline'>Sign in</span> to see your recommendations.</p>
      </div>
    </section>
  )
}

export default Personalize
