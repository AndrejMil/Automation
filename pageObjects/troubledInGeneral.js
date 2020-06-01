class troubledInGeneral {
	troubledGeneralTitle() {
		return cy.get('.sl-page-title').should('contain', 'To what extent has sleep troubled you in general?');
	}

	little() {
		return cy.get('.sl-select').select('A little');
	}
	notAtAll() {
		return cy.get('.sl-select').select('Not at all');
	}

	somewhat() {
		return cy.get('.sl-select').select('Somewhat');
	}

	much() {
		return cy.get('.sl-select').select('Much');
	}

	veryMuch() {
		return cy.get('.sl-select').select('Very much');
	}
}

export default troubledInGeneral;
