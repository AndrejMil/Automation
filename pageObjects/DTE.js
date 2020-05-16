class DTE {
	DTETitle() {
		return cy.get('.sl-page-title').should('contain', 'What DTE do you belong to?');
	}

	acg() {
		cy.get('.sl-select').select('ACG');
	}

	copFunctions() {
		cy.get('.sl-select').select('Corporate Functions');
	}

	aceOperations() {
		cy.get('.sl-select').select('Accenture Operations');
	}

	aceTehnology() {
		cy.get('.sl-select').select('Accenture Technology');
	}

	aceStrategy() {
		cy.get('.sl-select').select('Accenture Strategy');
	}

	aceDigital() {
		cy.get('.sl-select').select('Accenture Digital');
	}
	finService() {
		cy.get('.sl-select').select('Financial Services');
	}
	products() {
		cy.get('.sl-select').select('Products');
	}
	resource() {
		cy.get('.sl-select').select('Resources');
	}
	heaktPublicSer() {
		cy.get('.sl-select').select('Health & Public Services');
	}
	communMedi() {
		cy.get('.sl-select').select('Communications, Media, & Technology');
	}
	iDont() {
		cy.get('.sl-select').select("I don't work for Accenture");
	}
}

export default DTE;
