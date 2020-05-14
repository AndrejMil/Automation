class howLong {
	howLongTitle() {
		return cy.get('.sl-page-title').should('contain', 'How long have you had a problem with your sleep?');
	}

	dontHaveProblem() {
		return cy.get('.sl-select').select("I don't have a problem");
	}

	weeks() {
		return cy.get('.sl-select').select('2-4 weeks');
	}

	months() {
		return cy.get('.sl-select').select('3-6 months');
	}

	years() {
		return cy.get('.sl-select').select('1-2 years');
	}

	moreYears() {
		return cy.get('.sl-select').select('11 or more years');
	}
}

export default howLong;
