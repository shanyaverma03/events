import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </div>
  );
}
