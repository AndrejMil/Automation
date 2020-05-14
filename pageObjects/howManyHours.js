class manyHours {
	manyHoursTitle() {
		return cy
			.get('.sl-page-title')
			.should(
				'contain',
				'How many hours did you miss from your work per week because of problems associated with your sleep?'
			);
	}
	numberHours() {
		return cy.get('.sl-input-number ');
	}
}
export default manyHours;
