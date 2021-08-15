import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageNotFound from './PageNotFound';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from 'react-bootstrap/Card';



class AnsweredQuestion extends Component {
	render() {
		const { question, author, authedUser } = this.props;

		if (question === null) {
			return <PageNotFound />;
		}

		const { optionOne, optionTwo, timestamp } = question;
		const { name, avatarURL } = author;
		const totalVotes = optionOne.votes.length + optionTwo.votes.length;
		const optionOnePercent = Math.round((optionOne.votes.length / totalVotes) * 100);
		const optionTwoPercent = Math.round((optionTwo.votes.length / totalVotes) * 100);

		return (
			<Box>
				<br />   
				<br /> 
				<br /> 
				<br /> 
				<br /> 
				<br /> 
				<Container 
					component="main" 
					
        		>
				<Paper>
					   
					<Typography component="h1" variant="h4">
							{name} :
					</Typography>   
					<br /> 
					<br />  
					<Card.Body className="text-center">
						<ul>
							<li>
								<Typography component="h1" variant="h6">
									{optionOne.text}
								</Typography> 
								
								{optionOne.votes.includes(authedUser) ? (
									<span className="text-danger ml-2">
										&lt;- Your choice
									</span>
								) : null}
							</li>
							<br /> 
							<br /> 
							<li>
							<Typography component="h1" variant="h6">
								{optionTwo.text}	
							</Typography> 
								
								{optionTwo.votes.includes(authedUser) ? (
									<span className="text-danger ml-2">
										&lt;- Your choice
									</span>
								) : null}
							</li>
							
						</ul>
						<br />      
					</Card.Body>     
					
				</Paper>
				
				</Container>
        </Box>
		);
	}
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null,
		authedUser
	};
}

export default connect(mapStateToProps)(AnsweredQuestion);
