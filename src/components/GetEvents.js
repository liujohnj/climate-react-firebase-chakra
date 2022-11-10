import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Event from "./Event";

const GetEvents = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "events"));
    onSnapshot(q, (snapshot) => {
      setEvents(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    });
  }, []);

  return (
    <div>
      {events.map((event) => (
        <Event
          id={event.id}
          key={event.id}
          eventName={event.data.eventName}
        />
      ))}
    </div>
  )
}

export default GetEvents;