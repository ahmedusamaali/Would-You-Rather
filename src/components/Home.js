import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BriefQuestionsList from './BriefQuestionsList';

class Home extends Component {
	render() {
		const { answeredQuestionIds, unansweredQuestionIds } = this.props;

		return (
			<div>
				<br />
				<br />
				<br />
				<Tabs>
					<Tab eventKey="unanswered" title="Unanswered Questions">
						<BriefQuestionsList
							idsList={unansweredQuestionIds}
							emptyListNote="you answerd all unanswerd Qusetion"
						/>
					</Tab>
					<Tab eventKey="answered" title="Answered Questions">
						<BriefQuestionsList
							idsList={answeredQuestionIds}
							emptyListNote="No Answered Questions yet"
						/>
					</Tab>
				</Tabs>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, questions, users }) {
	const answeredQuestionIds = Object.keys(questions)
		.filter((id) => users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	const unansweredQuestionIds = Object.keys(questions)
		.filter((id) => !users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	return {
		answeredQuestionIds,
		unansweredQuestionIds
	};
}

export default connect(mapStateToProps)(Home);
