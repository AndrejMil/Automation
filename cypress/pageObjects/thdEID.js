class thdEID {
	thdEIDTitle() {
		return cy
			.get('.sl-interactive--field-label')
			.should('contain', 'Your 9-Digit Associate ID or Healthy Living Program ID*');
	}

	thdEIDAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default thdEID;
