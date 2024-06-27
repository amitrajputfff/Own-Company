import featured from '../assets/featured.svg'
import Button from '../components/Button'

const Featured = () => {
  return (
    <section className="bg-white w-full flex flex-col gap-10 px-4 sm:px-8 md:px-16 lg:px-24 py-6 mt-6">
      <div className="bg-[#F5F5F5] px-4 sm:px-8 md:px-16 py-12 gap-10 rounded-[20px] w-full flex flex-col justify-between items-start">
        <div>
          <p className="text-black text-2xl sm:text-3xl md:text-4xl font-sf-pro font-semibold">
            Between where you are now and where you want to be is one of life’s great journeys.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between items-start">
          <Button label='Our Story'/>
          <button className="bg-transparent border-black border-2 text-black px-6 py-3 text-sm rounded-full font-sf-pro uppercase font-semibold">
            Our Speakers
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <h1 className="text-black text-2xl sm:text-3xl text-left font-sf-pro font-semibold">Featured</h1>
        <p className="text-black hidden md:block text-md sm:text-lg font-sf-pro font-medium">View More</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
        <div className="w-full lg:w-1/2">
          <img
            src={featured}
            alt='featured'
            className="w-full h-[476px]"
          />
        </div>

        <div className="bg-[#F5F5F5] px-4 sm:px-8 md:px-16 py-12 gap-10 rounded-[20px] w-full lg:w-1/2 flex flex-col justify-start items-start max-h-full">
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-sf-pro font-semibold break-words'>
            Hong Kong International Congress on Multimedia
          </h1>
          <div className='flex flex-col gap-4 items-start'>
            <p className='text-[#6E6E73] text-sm font-sf-pro font-normal'>
              We wanted to show there was another way. So, The DO Lectures was born. The idea was a simple one.
              We wanted to gather together the world's leading DOers, disruptors and changemakers, have them share
              their hearts and stories, and encourage others to DO amazing things too.
            </p>
            <p className='text-[#6E6E73] text-sm font-sf-pro font-normal'>
              That was over fourteen years ago. Since then we've welcomed more than 300 speakers at our annual
              lecture events in Wales, the USA and Australia. And we've held courses and workshops with over 3,000 people.
              Simple ideas are often the best.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between items-center w-full'>
            <p>2,000 HKD Onwards</p>
            <Button label='Apply Now'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
