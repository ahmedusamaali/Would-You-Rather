import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


class UserStats extends Component {
	render() {
		const { user } = this.props;
		const { name, avatarURL, answers, questions } = user;

		return (
			<Container 
				component="main" 
				marginTop="25%"
			>
				<Paper>
					<Box
						display= "flex"
						flexDirection = "row"
					>
						<Avatar
							style={{ height: '60px', width: '60px' }}
							src={avatarURL}
						/>
						<h4>{name}</h4>	
					</Box>
					<Card.Body className="text-center">
						<br />
						<h4>Total Votes:{Object.keys(answers).length + questions.length} </h4>
						<h4>Questions: {questions.length}</h4> 
						<h4>Answers: {Object.keys(answers).length} </h4>
					</Card.Body> 
				</Paper>
				<br />
			</Container>
				
		
		);
	}
}

function mapStateToProps({ users }, { id }) {
	return {
		user: users[id]
	};
}

export default connect(mapStateToProps)(UserStats);
