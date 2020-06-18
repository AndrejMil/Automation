class improveYourSleep {
	improveSleepTitle() {
		return cy.get('.sl-page-title').should('contain', 'How would you like to improve your sleep?');
	}

	sleepMoreEasily() {
		return cy.get('[for="options-id-0"]').click();
	}

	withoutWakingUp() {
		return cy.get('[for="options-id-1"]').click();
	}

	wakingTooEarly() {
		return cy.get('[for="options-id-2"]').click();
	}

	wakeUpRefreshed() {
		return cy.get('[for="options-id-3"]').click();
	}

	noneOfTheAbove() {
		return cy.get('[for="options-id-none-of-the-above"]').click();
	}
}

export default improveYourSleep;
