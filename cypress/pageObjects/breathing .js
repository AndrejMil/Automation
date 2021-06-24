class breathing {
	breathingTitle() {
		return cy.get('.sl-page-title').should('contain', 'Has anyone noticed that you stop breathing during sleep?');
	}
	no() {
		return cy.get('#options-id-0').click();
	}
	yes() {
		return cy.get('#options-id-1').click();
	}
}
export default breathing;
