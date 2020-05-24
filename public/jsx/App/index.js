import React, { useState, useEffect } from 'react'
import './styles.css'

import HomePage from '../HomePage/HomePageComponent'

import RegLog from '../RegLog'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
//import Dashboard from '../Dashboard'

import EventsPage from '../EventsPage/eventsPage'
import Gallery from '../GalleryComponent/GalleryComponent'
import CurrentEventPage from '../currentEventPage/CurrentEventPage'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from "../../js/firebase";

// const theme = createMuiTheme()



export default function App() {

	// const [firebaseInitialized, setFirebaseInitialized] = useState(true)

	// useEffect(() => {
	// 	firebase.isInitialized().then(val => {
	// 		setFirebaseInitialized(val)
	// 	})
	// })

	//firebaseInitialized !== false ?

	return (
		// <MuiThemeProvider theme={theme}>
		// 	<CssBaseline />
		<div id = 'content'>	
			<Router>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>

					<Route path = "/events">
						<EventsPage />
					</Route>

					<Route path = "/gallery">
						<Gallery />
					</Route>

						
					{/* <Route exact path="/login" component={Login} /> */}
					{/* <Route exact path="/register" component={Register} /> */}
					{/* <Route exact path="/dashboard" component={Dashboard} /> */}
				</Switch>
			</Router>
		
		{/* // </MuiThemeProvider> */}
		</div>
	) 

	// : <div id="loader"><CircularProgress /></div>
}