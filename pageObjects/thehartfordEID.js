class thehartfordEID {
	thehartfordTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Last Four of SSN*');
	}

	thehartfordAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default thehartfordEID;
