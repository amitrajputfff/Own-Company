import { PodcastCard } from "../components/PodcastCard";
import { PodcastCardDetail } from "../constants";

const Listen = () => {
  return (
    <section className="bg-[url(/src/assets/listen-bg.svg)] px-24 py-24">
        <div className="flex flex-col justify-start items-center gap-12 w-full ">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-8xl font-semibold text-black">Lis<span className="font-Mrs-Sheppards text-8xl text-black">te</span>n</h1>
                <p className="text-md text-[#626060] max-w-md text-center">Little pieces of gold. Full of heart, ideas and insight. 
                These talks will be your mentor. And best of all, thev're free.</p>
            </div>

        <div className="flex justify-between items-center mt-4 mb-4 w-full h-fit ">

            <div className="w-1/3 hover:cursor-pointer hover:shadow-xl transition-all duration-200 bg-black h-auto flex flex-col px-8 py-8 justify-start items-start rounded-[20px] gap-6 ">
                
                <img
                src="/src/assets/pod.svg"
                alt="podcast"
                />

                <h1 className="text-white text-2xl sm:text-3xl font-sf-pro text-left font-semibold">Mystery goop</h1>

                <img
                src="/src/assets/Group 175.svg"
                alt="podcast"
                />
                
                <div className="flex flex-col gap-1">
                    <p className="uppercase text-[#D9FF2F] text-sm text-left">by dan kennedy</p>
                    <p className="uppercase text-[#B2B2B2] text-sm text-left">design</p>
                </div>

            </div>
            
            <div className="bg-[#F5F5F5] w-1/2 min-h-100% flex flex-col px-8 py-8 justify-between items-start rounded-[20px] gap-[130px] ">
                <div className="flex flex-col gap-4">
                <h1 className="text-black capitalize text-4xl sm:text-6xl font-sf-pro text-left font-semibold">hear from the world’s
                greatest thinkers</h1>
                <p className="text-[#505050] opacity-85 text-lg max-w-md text-left">Get insights from thought leaders across all fields and industries.</p>
                </div>
                <div>
                <img
                    src="/src/assets/Group 172.svg"
                    alt="lines"
                />
                </div>  
            </div>
        </div>


        <div className="flex flex-col sm:flex-row items-start w-full justify-between gap-4">
            <h1 className="text-black text-2xl sm:text-3xl font-sf-pro text-left font-semibold">Podcasts</h1>
            <p className="text-black hidden md:block text-md sm:text-lg font-sf-pro font-medium">Listen More</p>
      </div>
        
      <div className="flex items-center justify-between flex-wrap xl:flex-nowrap gap-4 flex-1 w-full ">
            {PodcastCardDetail.map((pod, index) => (
                    <PodcastCard
                    key={index}
                    title={pod.title}
                    category={pod.category}
                    author={pod.author}
                    image={pod.image}
                    />
                ))}
            </div>

        </div>

    </section>
  )
}

export default Listen;