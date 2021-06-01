class queensStudentID {
	queensStudentIDTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Student ID Number');
	}

	queensStudentIDpostQuestionTitle() {
		return cy.get('.sl-interactive--help-text').should('contain', 'Please enter your 8 digit Student ID Number');
	}

	queensStudentIDInput() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('5');
	}
}
export default queensStudentID;
