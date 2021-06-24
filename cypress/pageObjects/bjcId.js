class bjcId {
	bjcTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Employee ID*');
	}

	bjcIdHelpText() {
		return cy
			.get('.sl-interactive--help-text')
			.should('contain', "If you're the spouse / partner of a BJC employee, please enter their employee ID.");
	}
	bjcIdAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default bjcId;
