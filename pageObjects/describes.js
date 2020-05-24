class describes {
	describesTitle() {
		return cy.get('.sl-page-title').should('contain', 'Which of the following best describes you?');
	}

	homeDepot() {
		return cy.get('#options-id-0').click();
	}

	spouse() {
		return cy.get('#options-id-1').click();
	}
}

export default describes;
