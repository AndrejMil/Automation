class gender {
	genderTitle() {
		return cy.get('.sl-page-title').should('contain', 'How would you describe your gender?');
	}
	male() {
		return cy.get('#options-id-0');
	}
	female() {
		return cy.get('#options-id-1');
	}
	another() {
		return cy.get('#options-id-2');
	}
}
export default gender;
