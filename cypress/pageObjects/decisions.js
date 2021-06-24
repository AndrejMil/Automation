class decisions {
	decisionsTitle() {
		return cy
			.get('.sl-page-title')
			.should('contain', 'How often do you find yourself doubting decisions you’ve made?');
	}

	daylightButton() {
		return cy.get('.sl-button-wrapper').click();
	}
}
export default decisions;
