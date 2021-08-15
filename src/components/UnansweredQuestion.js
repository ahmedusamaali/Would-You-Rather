import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { handleAddAnswer } from '../actions/questions';
import PageNotFound from './PageNotFound';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';


class UnansweredQuestion extends Component {
	state = {
		errorMsg: ''
	};

	handleSubmit = (id, e) => {
		const answer = this.form.answer.value;
		const { dispatch } = this.props;

		e.preventDefault();

		if (answer !== '') {
			dispatch(handleAddAnswer(id, answer));
		} else {
			this.setState({ errorMsg: 'You must make a choice' });
		}
	};

	render() {
		const { question, author } = this.props;

		if (question === null) {
			return <PageNotFound />;
		}

		const { optionOne, optionTwo, timestamp, id } = question;
		const { name, avatarURL } = author;
		const { errorMsg } = this.state;

		return (
			
			<Box >
				<br /> 
				<br /> 
				<br /> 
				<br /> 
				<br />
				<Container 
					component="main" 
        		>
				<Paper>
					<br />      
					<Typography component="h1" variant="h4">
							{name} :
					</Typography>   
					<br /> 
					<br />
					<Card.Body className="text-center">
						<Form
							onSubmit={(e) => this.handleSubmit(id, e)}
							ref={(f) => (this.form = f)}
						>
							{errorMsg ? (
								<p className="text-danger">{errorMsg}</p>
							) : null}
							<Form.Check
								custom
								type="radio"
								id="optionOne"
								label={optionOne.text}
								value="optionOne"
								name="answer"
								className="mb-2"
							/>
							<Form.Check
								custom
								type="radio"
								id="optionTwo"
								label={optionTwo.text}
								value="optionTwo"
								name="answer"
								className="mb-2"
							/>
							<Button 
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
							>
								Vote
							</Button>
						</Form>
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

export default connect(mapStateToProps)(UnansweredQuestion);
