class nhsEID {
	nhsEIDTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Enter the first half of your postcode*');
	}

	nhsEIDAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default nhsEID;
