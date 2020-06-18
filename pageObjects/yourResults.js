class yourResults {
	yourResultsText() {
		return cy.get('.body-text').should('contain', 'Make sure you’re in a quiet place and have headphones');
	}
}
export default yourResults;
