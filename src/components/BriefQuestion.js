import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


class BriefQuestion extends Component {
	render() {
		const { question, author } = this.props;
		const { optionOne, timestamp, id } = question;
		const { name, avatarURL } = author;

		return (
			<Box >
				<Container 
					component="main" 
					
        		>
				<br />  
				<Paper
				>
					<Typography component="h1" variant="h6">
							{name} :
					</Typography>   
					
					<Card.Body className="text-center">
						<Typography component="h1" variant="h6">
							{optionOne.text.slice(0, 50)}..
						</Typography>   
						<Link to={`/questions/${id}`}>
							<Button 
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								>View Question</Button>
						</Link>
					</Card.Body>
				</Paper>
				
						
				</Container>	
			</Box>	
		);
	}
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(BriefQuestion);
