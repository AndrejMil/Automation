class improveYourSleep {
	improveSleepTitle() {
		return cy.get('.sl-page-title').should('contain', 'How would you like to improve your sleep?');
	}

	sleepMoreEasily() {
		return cy.get('[for="options-id-0"]');
	}

	withoutWakingUp() {
		return cy.get('[for="options-id-1"]');
	}

	wakingTooEarly() {
		return cy.get('[for="options-id-2"]');
	}

	wakeUpRefreshed() {
		return cy.get('[for="options-id-3"]');
	}

	noneOfTheAbove() {
		return cy.get('[for="options-id-none-of-the-above"]').click();
	}
}

export default improveYourSleep;
