class nhsAboutSleepio {
	nhsAboutSleepioTitle() {
		return cy.get('.sl-page-title').should('contain', 'How did you hear about Sleepio?');
	}

	nhsAboutDaylightTitle() {
		return cy.get('.sl-page-title').should('contain', 'How did you hear about Daylight?');
	}

	nhsAboutSleepioAnswer() {
		return cy.get('[for="options-id-7"]').should('contain', 'Other').click({ force: true });
	}
}

export default nhsAboutSleepio;
