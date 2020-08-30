class HomePage {
	visitFirstPage(link) {
		return cy.visit(link);
	}

	buttonClick() {
		return cy.get('[type="button"].sl-button').first().click({ force: true });
	}
}

export default HomePage;
