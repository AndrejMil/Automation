class howLong {
	howLongTitle() {
		return cy.get('.sl-page-title').should('contain', 'How long have you had a problem with your sleep?');
	}

	dontHaveProblem() {
		return cy.get('.sl-select').select("I don't have a problem");
	}
	weekOrLess() {
		return cy.get('.sl-select').select('A week or less');
	}

	weeks() {
		return cy.get('.sl-select').select('2-4 weeks');
	}
	month() {
		return cy.get('.sl-select').select('1-2 months');
	}

	months() {
		return cy.get('.sl-select').select('3-6 months');
	}
	sevenMonths() {
		return cy.get('.sl-select').select('7-12 months');
	}

	years() {
		return cy.get('.sl-select').select('1-2 years');
	}
	fiveYears() {
		return cy.get('.sl-select').select('3-5 years');
	}
	sixYears() {
		return cy.get('.sl-select').select('6-10 years');
	}

	moreYears() {
		return cy.get('.sl-select').select('11 or more years');
	}
}

export default howLong;
