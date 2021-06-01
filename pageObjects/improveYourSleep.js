class improveYourSleep {
	improveSleepTitle() {
		return cy.get('.sl-page-title').should('contain', 'How would you like to improve your sleep?');
	}

	sleepMoreEasily() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
	}

	withoutWakingUp() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/input').click();
	}

	wakingTooEarly() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[3]/label/input').click();
	}

	wakeUpRefreshed() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[4]/label/input').click();
	}

	noneOfTheAbove() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/input').click();
	}

	noneOfTheAboveFlow132() {
		return cy.get('[id="options-id-none-of-the-above"]').click();
	}
}

export default improveYourSleep;
