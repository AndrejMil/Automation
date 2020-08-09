class homePageNew {
	visitFirstPage(link) {
		return cy.visit(link);
	}

	buttonNew() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div/input').click({ force: true });
	}
}
export default homePageNew;
