class tmNumber {
	tmNumberTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'TM Number*');
	}

	tmNumberHelpText() {
		return cy
			.get('.sl-interactive--help-text')
			.should(
				'contain',
				'Target team members, don’t forget to add leading 00’s to make your TM Number into a 10 digit number. If you’re the spouse/domestic partner of a Target team member, please enter their TM Number with an ‘S’ at the end.'
			);
	}
	tmNumberAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default tmNumber;
