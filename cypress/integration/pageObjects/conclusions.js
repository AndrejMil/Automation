class conclusions {
	decisionsTitle() {
		return cy.get('.sl-page-title').should('contain', 'How often do you jump to the worst possible conclusions?');
	}
}
export default conclusions;
