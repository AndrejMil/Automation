class queensStudentID {
	queensStudentIDTitle() {
		return cy.get('.sl-page-title').should('contain', 'Student ID Number');
	}

	queensStudentIDpostQuestionTitle() {
		return cy.get('.sl-page-post-question').should('contain', 'Please enter your Student ID number (8 digits)');
	}

	queensStudentIDInput() {
		return cy.get('.sl-input-number ').click({ force: true }).type('5');
	}
}
export default queensStudentID;
