import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import {_getUsers} from '../api/_DATA'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


class Login extends Component {
	
	handleSubmit = (e) => {
		const userID = this.userID;
		const { dispatch } = this.props;
		e.preventDefault();
		dispatch(setAuthedUser(userID));
	};

	handleChange = (event) => {
		this.userID=event.target.value;
	  };
	

	render() {
		const { userNames } = this.props;
		
		return (
			<Box 
				display= "flex"
				flexDirection = "column"
				
				p={25}
			>
				<Container 
					component="main" 
					maxWidth="xs"
					
        		>
					<div>
						<Typography component="h1" variant="h5">
						Sign in
						</Typography>
						<form >
								<Select
									variant="outlined"
									fullWidth
									labelId="signin"
									id="signin"
									value={this.userID}
          							onChange={this.handleChange}
									 		
								>
									{userNames.map((item) => (
										<MenuItem 
											value={item.value} 
											key={item.value}
										>
											{item.label}
										</MenuItem>
									))}
								</Select>

							<Button 
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								onClick={this.handleSubmit}
							>
								Login
							</Button>
						</form>
					</div>
				</Container>
			</Box>	
					
				
			
		);
	}
}

function mapStateToProps({ users }) {
	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	};
}

export default connect(mapStateToProps)(Login);
