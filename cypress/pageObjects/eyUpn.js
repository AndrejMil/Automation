class eyUpn {
	eyUpnTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Your EY UPN*');
	}

	eyUpnHelpText() {
		return cy
			.get('.sl-interactive--help-text')
			.should(
				'contain',
				'If you are the spouse or domestic partner of an EY Staff or Partner, please fill in their EY UPN'
			);
	}
	eyUpnAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default eyUpn;
