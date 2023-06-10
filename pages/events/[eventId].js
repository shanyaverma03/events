import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data";

const EventDetail = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>no event found</p>;
  }

  return (
    <div>
      <h1>Event detail page</h1>
      <p>{event.title}</p>
    </div>
  );
};

export default EventDetail;
