class threeMId {
	threeMTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Employee ID*');
	}

	threeMHelpText() {
		return cy
			.get('.sl-interactive--help-text')
			.should(
				'contain',
				"If you're the spouse / partner of a 3M employee, please enter their employee ID followed by your date of birth in mmddyy format"
			);
	}
	threeMAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default threeMId;
