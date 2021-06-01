class roleCategory {
	roleTitle() {
		return cy.get('.sl-page-title').should('contain', 'Select your role category');
	}

	clinical() {
		return cy.get('[id="options-id-0"]').click({ force: true });
	}

	nonClinical() {
		return cy.get('[id="options-id-1"]').click({ force: true });
	}
}

export default roleCategory;
