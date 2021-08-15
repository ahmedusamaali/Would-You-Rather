import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reSetAuthedUser } from '../actions/authedUser';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Box from '@material-ui/core/Box';


function NavigationBar(props) {
	const { user, dispatch } = props;

	const handleLogout = () => {
		dispatch(reSetAuthedUser());
	};

	return (
		<div>
			<AppBar >
				<Box  
				display="flex"
				flexDirection="row"
				p={1}
				>
				<Box display="flex" flexGrow={1}>
            		<Box>
					<Link to="/" exact>
						<Typography variant="h6" >
							WYR!? 
						</Typography>
					</Link>
					</Box>
					<Box ml={3}>
						<ButtonGroup 
							p={2}
							color="primary" 
							aria-label="outlined primary button group"
						>
							

							<Link to="/add">
							<Button
								variant="contained"
								startIcon={<AddCircleIcon />}
								>
								New_Question 
							</Button>
							</Link>
						
							<Link to="/leaderboard">
							<Button
								variant="contained"
								startIcon={<DashboardIcon />}
								>
								LeaderBoard
							</Button>
							</Link>
						</ButtonGroup>
					</Box>
          		</Box>
					<Box justifyContent="flex-end" ml={2} >
						<Typography 
						variant="h6"
						>
						{user.name} 
						</Typography>
					</Box >
					<Box justifyContent="flex-end" ml={2}>
          				  <Avatar src={user.avatarURL} />
          			</Box>
					<Box justifyContent="flex-end" ml={2}>
						<Link to="/">
							<Button
							color="primary"
							variant="contained"
							startIcon={<ExitToAppIcon />}
							onClick={handleLogout}
							>
							Logout
							</Button>
						</Link>
					</Box>
				</Box>
      		</AppBar>
		</div>
	);
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(NavigationBar);
