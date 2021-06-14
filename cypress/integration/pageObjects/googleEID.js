class googleEID {
	googleEIDTitle() {
		return cy.get('.sl-page-title').should('contain', 'Employee ID');
    }
    
    googleEIDPostQuestion() {
		return cy.get('.sl-page-post-question').should('contain', "Find your employee ID at go/me. Dependents, use your Googler's employee ID");
	}

	googleEIDAnswer() {
		return cy.get('.sl-input-text').click({ force: true }).type('5');
	}
}

export default googleEID;
