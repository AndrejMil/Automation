class troubledInGeneralNew {
	troubledGeneralTitle() {
		return cy.get('.sl-page-title').should('contain', 'To what extent has sleep troubled you in general?');
	}

	little() {
		return cy.get('#options-id-1').click();
	}

	somewhat() {
		return cy.get('#options-id-2').click();
	}

	much() {
		return cy.get('#options-id-3').click();
	}

	veryMuch() {
		return cy.get('#options-id-4').click();
	}

	notAtAll() {
		return cy.get('#options-id-4').click();
	}
}

export default troubledInGeneralNew;
