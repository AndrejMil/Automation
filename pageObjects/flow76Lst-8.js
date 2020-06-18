class flow1Lst8 {
	timeOfDay() {
		return cy
			.get('[data-semantic-id="time_of_day"]')
			.should('contain', "What's the best time for your Sleepio Expert to reach you?");
	}

	timeOfDayAnswers() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/div[1]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/div[2]/label/input')
					.click()
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/div[3]/label/input')
							.click()
							.then(() => {
								cy
									.xpath(
										'/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/div[4]/label/input'
									)
									.click();
							});
					});
			});
	}

	helpfulSleepioExpert() {
		return cy
			.get('[data-semantic-id="form_of_support_v2"]')
			.should('contain', 'Would you find any of the following helpful from a Sleepio Expert?');
	}

	helpfulSleepioExpertAnswers() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/div[1]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/div[2]/label/input')
					.click()
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/div[3]/label/input')
							.click()
							.then(() => {
								cy
									.xpath(
										'/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/div[4]/label/input'
									)
									.click();
							});
					});
			});
	}

	communityUsername() {
		return cy.get('[data-semantic-id="community_username"]').contains('Choose a community username');
	}

	communityUsernameAnswer() {
		return cy.get('.sl-input-text').click().type('11csdfcffgfvsdf');
	}
	reachOutSoon() {
		return cy.get('.sl-continue-button-img-text').contains('Your Sleepio Expert will reach out soon!');
	}
}

export default flow1Lst8;
