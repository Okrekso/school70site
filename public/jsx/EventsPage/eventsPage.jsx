import React, { useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch } from "react-router-dom"

import './eventsPage-style.scss'

import firebase from "../../js/firebase"
import { CircularProgress } from '@material-ui/core';

import EventCard from '../eventBlockComponent/eventCard'

export default function EventsPage(){
    const [events, setevents] = useState([]);
    const path = useRouteMatch().path;
    useEffect(() => {
      firebase.collection("events").get()
        .then( (eventDocs) => {
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

    <Switch>
        <Route exact path={path}>
          <div>
          <CircularProgress size={20} color="secondary" />
            {/* {events.map(event => <EventCard eventId={event.eventId} id={event.id} title={event.title} />)} */}
          </div>
        </Route>

        <Route exact path={`${path}/:eventId`}>
            {/* <EventFull /> */}
            <CircularProgress size={20} color="secondary" />
        </Route>
    </Switch> 
  
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