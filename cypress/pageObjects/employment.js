class employment {
	employmentTitle() {
		return cy.get('.sl-page-title').should('contain', 'What is your employment status?');
	}
	fullTime() {
		return cy.get('.sl-select').select('Employed full-time');
	}
	partTime() {
		return cy.get('.sl-select').select('Employed part-time');
	}
	unemployed() {
		return cy.get('.sl-select').select('Unemployed');
	}
	retired() {
		return cy.get('.sl-select').select('Retired');
	}
	student() {
		return cy.get('.sl-select').select('Full-time student');
	}
	homemaker() {
		return cy.get('.sl-select').select('Full-time homemaker or carer');
	}
}
export default employment;
