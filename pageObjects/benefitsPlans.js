class benefitsPlans {
	benefitsPlansTitle() {
		return cy.get('.sl-page-title').should('contain', 'Are you enrolled in any of the following benefits plans?');
	}

	cignaEnh() {
		cy.get('.sl-select').select('Yes, Cigna Enhanced Medical Plan');
	}

	cignaCore() {
		cy.get('.sl-select').select('Yes, Cigna Core Medical Plan');
	}

	cignaMedical() {
		cy.get('.sl-select').select('Yes, Cigna CDHP Medical Plan');
	}

	no() {
		cy.get('.sl-select').select('No');
	}

	other() {
		cy.get('.sl-select').select('Other');
	}
}

export default benefitsPlans;
