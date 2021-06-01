class ukredeemEID {
	ukredeemEIDTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Enter your redeem code*');
	}

	ukredeemEIDAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default ukredeemEID;
