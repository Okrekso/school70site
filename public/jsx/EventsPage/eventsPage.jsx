import React, { useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom"

import './eventsPage-style.scss'

import { db } from "../../js/firebase"
import { CircularProgress } from '@material-ui/core';

import EventCard from '../eventBlockComponent/eventCard'
import CurrentEventPage from '../currentEventPage/CurrentEventPage'

export default function EventsPage() {
  const [events, setevents] = useState([]);
  const path = useRouteMatch().path;
  const { urlPage } = useParams();

  useEffect(() => {
    db.collection("events").get()
      .then((eventDocs) => {
        setevents(eventDocs.docs.map(doc => {
          return ({ eventId: doc.id, ...doc.data() })
        }));
      }
      );
  }, []);

  useEffect(() => {
    console.log("events", events);
  }, [events]);

  if (events.length == 0)
    return <CircularProgress size={20} color="secondary" />
  return (
    <div id = "events">
      <Switch>
        <Route exact path={path}>
          {events.map(event => <EventCard eventId={event.eventId} description = {event.description} title={event.title} imgSrc = {event.imgSrc} color = {event.color} /> )}
        </Route>

        {/* <Route exact path={`${path}/:eventId`}>
          {
            events.map( event => event.eventID === :eventID ? <CurrentEventPage description = {event.description} title={event.title} imgSrc = {event.imgSrc} color = {event.color} /> )
          }
        </Route> */}

      </Switch>

    </div>
  )
}


// function Events() {
//     const [events, setevents] = useState([]);
//     const path = useRouteMatch().path;
//     useEffect(() => {
//       db.collection("events").get()
//         .then(eventDocs => {
//           setevents(eventDocs.docs.map(doc => {
//             return ({ eventId: doc.id, ...doc.data() })
//           }));
//         }
//         );
//     }, []);

//     useEffect(() => {
//       console.log("events", events);
//     }, [events]);

//     if (events.length == 0)
//       return <CircularProgress size={20} color="secondary" />
//     return (
//       <Switch>
//         <Route exact path={path}>
//           <div>
//             {events.map(event => <Event eventId={event.eventId} id={event.id} title={event.title} />)}
//           </div>
//         </Route>
//         <Route exact path={`${path}/:eventId`}>
//           <EventFull />
//         </Route>
//       </Switch>

//     )
//   }