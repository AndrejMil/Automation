class countryLocated {
	countryLocatedTitle() {
		return cy.get('.sl-page-title').should('contain', 'What country are you located in?');
	}
	unitedStates() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('United States');
	}
	unitedKingdom() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('United Kingdom');
	}
	italy() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Italy');
	}
	checkinhEveryOption(country, value) {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select(country)
			.invoke('val')
			.should('deep.equal', value);
	}
}
export default countryLocated;
