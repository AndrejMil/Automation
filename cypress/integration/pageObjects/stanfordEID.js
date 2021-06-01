class stanfordEID {
	stanfordEIDTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Enter your redeem code*');
	}

	stanfordEIDsEIDAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default stanfordEID;
