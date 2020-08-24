class homePageNew {
	visitFirstPage(link) {
		return cy.visit(link);
	}

	buttonNew() {
		return cy.get('[type="button"].sl-button').first().click({ force: true });
	}
}
export default homePageNew;
