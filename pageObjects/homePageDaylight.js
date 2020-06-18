class homePageDaylight {
	visitFirstPage(link) {
		return cy.visit(link);
	}

	started() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/h2').should('contain', "Let's get started");
	}

	picture() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/a/img').click();
	}
}
export default homePageDaylight;
