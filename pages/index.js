import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { getFeaturedEvents } from "@/dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventsSearch />
        <EventList items={featuredEvents} />
      </ul>
    </div>
  );
}
