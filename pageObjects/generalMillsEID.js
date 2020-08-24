class generalMillsEID {
	generalMillsEIDTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Employee ID*');
	}

	generalMillsEIDAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default generalMillsEID;
