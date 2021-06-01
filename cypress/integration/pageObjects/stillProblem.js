class stillProblem {
	stillProblemTitle() {
		return cy
			.get('.sl-page-title')
			.should('contain', 'Would you still have a sleep problem if you had more time to sleep?');
	}
	yes() {
		return cy.get('#options-id-0').click();
	}
	no() {
		return cy.get('#options-id-1').click();
	}
}

export default stillProblem;
