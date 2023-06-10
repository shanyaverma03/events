import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "@/dummy-data";
import { getFeaturedEvents, getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const Events = () => {
  const events = getAllEvents();
  const featuredEvents = getFeaturedEvents();
  const router = useRouter();

  const searchHandler = (year, month) => {
    const filteredEvent = getFilteredEvents(year, month);
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={searchHandler} />
      <EventList items={events} />
    </div>
  );
};

export default Events;
