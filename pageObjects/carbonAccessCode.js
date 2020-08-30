class carbonAccessCode {
	carbonACodeTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Access Code*');
	}

	carbonAccessCodeAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default carbonAccessCode;
