class gender {
	genderTitle() {
		return cy.get('.sl-page-title').should('contain', 'How would you describe your gender?');
	}
	male() {
		return cy.get('#options-id-0').click();
	}
	female() {
		return cy.get('#options-id-1').click();
	}
	another() {
		return cy.get('#options-id-2').click();
	}
}
export default gender;
