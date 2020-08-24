class fujifilmId {
	fujifilmIdTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Employee ID*');
	}

	fujifilmIdHelpText() {
		return cy
			.get('.sl-interactive--help-text')
			.should('contain', "If you're the spouse / partner of a Fujifilm employee, please enter their employee ID");
	}
	fujifilmIdAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default fujifilmId;
