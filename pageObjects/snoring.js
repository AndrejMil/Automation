class snoring {
	snoringTitle() {
		return cy.get('.sl-page-title').should('contain', 'Has your snoring ever bothered other people?');
	}
	yes() {
		return cy.get('#options-id-0').click();
	}
	no() {
		return cy.get('#options-id-1').click();
	}
	snore() {
		return cy.get('#options-id-2').click();
	}
}
export default snoring;
