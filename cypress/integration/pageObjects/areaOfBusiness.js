class areaOfBusiness {
	areaOfBusinessTitle() {
		return cy.get('.sl-page-title').should('contain', 'In which area of the business do you work?');
	}

	retail() {
		cy.get('.sl-select').select('Retail');
	}
	development() {
		cy.get('.sl-select').select('Retail Development');
	}
	corporate() {
		cy.get('.sl-select').select('Corporate');
	}
	distribution() {
		cy.get('.sl-select').select('Distribution Center');
	}
	other() {
		cy.get('.sl-select').select('Other');
	}
}

export default areaOfBusiness;
