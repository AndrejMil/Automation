class nhsAboutSleepio {
	nhsAboutSleepioTitle() {
		return cy.get('.sl-page-title').should('contain', 'How did you hear about Sleepio?');
	}

	nhsAboutSleepioAnswer() {
		return cy.get('[for="options-id-0"]').should('contain', 'My GP').click({ force: true });
	}
}

export default nhsAboutSleepio;
