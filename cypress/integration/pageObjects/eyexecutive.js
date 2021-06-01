class eyexecutive {
	eyexecutiveTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Your EY UPN*');
	}

	eyexecutiveHeltText() {
		return cy
			.get('.sl-interactive--help-text')
			.should(
				'contain',
				'If you are the spouse or domestic partner of an EY Staff or Partner, please fill in their EY UPN'
			);
	}

	eyexecutiveAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default eyexecutive;
