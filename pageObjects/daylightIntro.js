class daylightIntro {
	introText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/p')
			.should('contain', "Take 5 minutes to learn what's driving these feelings and how to overcome them.");
	}

	daylightButton() {
		return cy.get('.sl-button-wrapper').click();
	}
}
export default daylightIntro;
