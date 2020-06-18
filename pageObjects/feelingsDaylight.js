class feelingsDaylight {
	feelingsTitle() {
		return cy.get('.sl-page-title').should('contain', 'How often do you try hard to avoid difficult feelings?');
	}
}
export default feelingsDaylight;
