import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';



class NewQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
		toHome: false
	};

	handleInputChange = (e) => {
		
		const name = e.target.id;
		const value = e.target.value;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		const { optionOne, optionTwo } = this.state;
		const { dispatch } = this.props;

		e.preventDefault();

		this.setState(
			{
				optionOne: '',
				optionTwo: '',
				toHome: true
			},
			() => dispatch(handleAddQuestion(optionOne, optionTwo))
		);
	};

	render() {
		const { optionOne, optionTwo, toHome } = this.state;

		if (toHome === true) return <Redirect to="/" />;

		return (
		
			<Box 
				display= "flex"
				flexDirection = "column"
				ajustifyContent="center"
				p={25}
			>  
				<Container 
				component="main" 
				>
					<Typography 
					component="h1" 
					variant="h5">
					Create New Question
					</Typography>
					
					<br />
					<form>
						<Box>
							<TextField 
							id="optionOne" 
							label="Would you rather ..!" 
							variant="outlined" 
							fullWidth
							value={optionOne}
							onChange={this.handleInputChange}
							/>
						</Box>
						<br />
						<Box>
							<TextField 
							id="optionTwo" 
							label="Or" 
							variant="outlined" 
							fullWidth
							value={optionTwo}
							onChange={this.handleInputChange}
							/>
						</Box>
						<br />
						<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						disabled={optionOne === '' || optionTwo === ''}
						onClick={this.handleSubmit}
						>
						submit
						</Button>
					</form>
				</Container>
			</Box>
			
		);
	}
}

export default connect()(NewQuestion);
