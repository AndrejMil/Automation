class homeDepotDaylightEID {
	homeDepotDaylightEIDTitle() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Associate ID*');
	}

	homeDepotDaylightEIDHelpText() {
		return cy
			.get('.sl-interactive--help-text')
			.should(
				'contain',
				'Associate ID can be found on your pay-slip or in the Personal Information section in WorkDay. If you have trouble logging in, please contact the Benefits Choice Center at 800-555-4954 for assistance.'
			);
	}

	homeDepotDaylightEIDAnswer() {
		return cy.get('[name="employee_id"]').click({ force: true }).type('1');
	}
}

export default homeDepotDaylightEID;
