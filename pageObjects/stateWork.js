class stateWork {
	stateWorkTitle() {
		return cy.get('.sl-page-title').should('contain', 'What state do you work in?');
	}
	alabama() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Alabama');
	}
	outside() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('Outside the US');
	}
	arizona() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Arizona');
	}
}
export default stateWork;
