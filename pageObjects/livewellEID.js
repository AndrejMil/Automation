class livewellId {
	livewellTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Last four digits of social security number*');
	}

	livewellHelpText() {
		return cy
			.get('.sl-interactive--help-text')
			.should('contain', 'Enter the last four digits of your social security number here');
	}
	livewellAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default livewellId;
