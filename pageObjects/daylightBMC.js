class daylightBmcId {
	bmcTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Employee ID*');
	}

	bmcIdAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default daylightBmcId;
