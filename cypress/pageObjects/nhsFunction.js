class nhsFunction {
	nhsFunctionTitle() {
		return cy.get('.sl-page-title').should('contain', 'Please select your function:');
	}

	nhsSocial() {
		return cy.get('[id="options-id-0"]').click({ force: true });
	}

	thirdSector() {
		return cy.get('[id="options-id-1"]').click({ force: true });
	}

	otherPublic() {
		return cy.get('[id="options-id-2"]').click({ force: true });
	}

	other() {
		return cy.get('[id="options-id-3"]').click({ force: true });
	}
}

export default nhsFunction;
