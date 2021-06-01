class rocheSignUp {
	unixID() {
		return cy.get('.sl-interactive--field-label').should('contain', 'UNIX ID or User ID*');
	}

	unixIDAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default rocheSignUp;
