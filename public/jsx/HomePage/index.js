import React from 'react'
import { Typography, Paper, Avatar, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import styles from './styles';

function HomePage(props) {
	const { classes } = props

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<VerifiedUserOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Hello Guest!
				</Typography>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/register"
					className={classes.submit}>
					Register
          		</Button>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/login"
					className={classes.submit}>
					Login
          		</Button>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/dashboard"
					className={classes.submit}>
					Dashboard
          		</Button>
				  <Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/medallists"
					className={classes.submit}>
					Medallists
          		</Button>
			</Paper>
		</main>
	)
}

export default withStyles(styles)(HomePage)