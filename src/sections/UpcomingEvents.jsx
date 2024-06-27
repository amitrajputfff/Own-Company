import UpcomingEventCard from "../components/UpcomingEventCard"
import { UpcomingEventsDetail } from "../constants"

const UpcomingEvents = () => {
  return (
    <section className="bg-white w-full flex flex-col gap-10 px-4 sm:px-8 md:px-16 lg:px-24 py-6 mt-6">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
        <h1 className="text-black text-2xl sm:text-3xl font-sf-pro text-left font-semibold">Upcoming Events</h1>
        <p className="text-black hidden md:block text-md sm:text-lg font-sf-pro font-medium">View More</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
  {UpcomingEventsDetail.map((event, index) => (
    <UpcomingEventCard
      key={index}
      label={event.label}
      event={event.event}
      price={event.price}
      image={event.image}
      date={event.date}
    />
  ))}
</div>

    </section>
  )
}

export default UpcomingEvents
