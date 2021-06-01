class expertGuides {
	expertGuidesTitle() {
		return cy
			.get('.sl-page-title')
			.should('contain', 'Which of the following expert guides might be of interest to you?');
	}
	jetlag() {
		return cy.get('[for="options-id-0"]').click();
	}
	shiftWork() {
		return cy.get('[for="options-id-1"]').click();
	}
	parent() {
		return cy.get('[for="options-id-2"]').click();
	}
	pregnancy() {
		return cy.get('[for="options-id-3"]').click();
	}
	none() {
		return cy.get('#options-id-none-of-the-above').click();
	}
}
export default expertGuides;
