import React, { useState, useEffect } from 'react'
import './styles.css'
import HomePage from '../HomePage'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import Dashboard from '../Dashboard'
import Medallists from '../Medallists/medallistList';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from "../../js/firebase";

const theme = createMuiTheme()

export default function App() {

	const [CurrentUser, setCurrentUser] = useState(false)

	 useEffect(() => {
		setCurrentUser(auth.currentUser);
	 })

	return CurrentUser !== false ? (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/medallists" component={Medallists} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/dashboard" component={Dashboard} />
				</Switch>
			</Router>
		</MuiThemeProvider>
	) : <div id="loader"><CircularProgress /></div>
}