class homePageNew {
	visitFirstPage(link) {
		return cy.visit(link);
	}

	buttonNew() {
		return cy.get('[type="button"]').first().click();
	}
}
export default homePageNew;
