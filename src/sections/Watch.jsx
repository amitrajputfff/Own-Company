import { PlaylistCardDetail } from "../constants"
import PlaylistCard from "../components/PlaylistCard"
import TalksCard from "../components/TalksCard"
import { TalksCardDetail } from "../constants"
const Watch = () => {
  return (
    <section className="bg-[url(/src/assets/watch-bg.svg)] px-24 py-24">
        <div className="flex flex-col justify-start items-center gap-12 w-full ">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-8xl font-semibold text-black">Wa<span className="font-Mrs-Sheppards text-8xl text-black">tc</span>h</h1>
                <p className="text-md text-[#626060] max-w-md text-center">Little pieces of gold. Full of heart, ideas and insight. 
                These talks will be your mentor. And best of all, thev're free.</p>
            </div>

            <div className="flex justify-between items-center w-full">
            <h1 className="text-black text-2xl sm:text-3xl font-sf-pro text-left font-semibold">Playlists</h1>
            <p className="text-black hidden md:block text-md sm:text-lg font-sf-pro font-medium">View More</p>
            </div>

            <div className="flex items-center justify-between flex-wrap lg:flex-nowrap  w-full gap-10">
            {PlaylistCardDetail.map((play, index) => (
                    <PlaylistCard
                    key={index}
                    label={play.label}
                    subtitle={play.subtitle}
                    image={play.image}
                    />
                ))}
            </div>

            <div className="flex justify-between items-center w-full">
            <h1 className="text-black text-2xl sm:text-3xl font-sf-pro text-left font-semibold">Talks</h1>
            <p className="text-black hidden md:block text-md sm:text-lg font-sf-pro font-medium">View More</p>
            </div>


            <div className="flex items-center justify-between flex-wrap xl:flex-nowrap flex-1 w-full ">
            {TalksCardDetail.map((talk, index) => (
                    <TalksCard
                    key={index}
                    title={talk.label}
                    category={talk.category}
                    author={talk.author}
                    image={talk.image}
                    />
                ))}
            </div>

        </div>

    </section>
  )
}

export default Watch