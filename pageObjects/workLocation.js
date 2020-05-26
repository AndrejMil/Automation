class workLocation {
	workLocationTitle() {
		return cy.get('.sl-page-title').should('contain', 'What is your work location?');
	}

	dontWork() {
		return cy.get('.sl-select').select("I don't work for Hubbell");
	}

	ABChance() {
		return cy.get('.sl-select').select('AB Chance');
	}

	aclara() {
		return cy.get('.sl-select').select('Aclara');
	}

	aclaraSGS() {
		return cy.get('.sl-select').select('Aclara - SGS Installers');
	}

	acmeElectric() {
		return cy.get('.sl-select').select('Acme Electric');
	}

	anderson() {
		return cy.get('.sl-select').select('Anderson (Connectors)');
	}

	beacon() {
		return cy.get('.sl-select').select('Beacon');
	}

	burndy() {
		return cy.get('.sl-select').select('Burndy - Lincoln');
	}

	burndyLittleton() {
		return cy.get('.sl-select').select('Burndy - Littleton');
	}

	burndyManchester() {
		return cy.get('.sl-select').select('Burndy - Manchester');
	}

	cmc() {
		return cy.get('.sl-select').select('CMC - OH');
	}
}

export default workLocation;
