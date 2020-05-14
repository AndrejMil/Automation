class stopsYou {
	stopsYouTitle() {
		return cy.get('.sl-page-title').should('contain', 'Which of the following stops you from sleeping most often?');
	}

	worriesFuture() {
		return cy.get('[for="options-id-0"]').click();
	}

	worriesNotSleeping() {
		return cy.get('[for="options-id-1"]').click();
	}

	discomfort() {
		return cy.get('[for="options-id-2"]').click();
	}

	noise() {
		return cy.get('[for="options-id-3"]').click();
	}

	light() {
		return cy.get('[for="options-id-4"]').click();
	}
}

export default stopsYou;
