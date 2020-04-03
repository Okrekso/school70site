import React,{useEffect} from 'react'
import { CircularProgress } from '@material-ui/core'

import { Typography, Paper, Avatar, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import {auth } from "../../js/firebase";
import { withRouter } from 'react-router-dom'
import styles from './styles';

function Dashboard(props) {
	const { classes } = props

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if(!user){
				alert('Please login first')
				props.history.replace('/login')
			}
		})
	  });

	if(!auth.currentUser){
		return <div id="loader"><CircularProgress /></div>
	}

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<VerifiedUserOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Hello { auth.currentUser.displayName }
				</Typography>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					onClick={logout}
					className={classes.submit}>
					Logout
          		</Button>
			</Paper>
		</main>
	)

	function logout() {
		auth.signOut()
		props.history.push('/')
	}
}

export default withRouter(withStyles(styles)(Dashboard))