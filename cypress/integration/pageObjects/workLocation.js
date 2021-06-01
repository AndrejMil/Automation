class workLocation {
	workLocationTitle() {
		return cy.get('.sl-page-title').should('contain', 'What is your work location?');
	}

	checkinhEveryOption76(country, value) {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select(country)
			.invoke('val')
			.should('deep.equal', value);
	}
	dontWork() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select("I don't work for Hubbell");
	}
}

export default workLocation;
