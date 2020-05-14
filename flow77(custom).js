it('Flow 77', () => {
	cy.visit('https://onboarding.qa.sleepio.com/sleepio/google/77');
	cy.get('[type="button"]').first().click();

	cy.get('[for="options-id-4"]').should('contain', 'Very much').click();
	cy.get('[type="button"]').click();

	cy.get('.sl-select').select('7 nights');
	cy.get('[type="button"]').click();

	cy.get('[for="options-id-1"]').click();
	cy.get('[type="button"]').click();

	cy.get('.sl-select').select('11 or more years');
	cy.get('[type="button"]').click();

	//prvo custom pitanje

	cy
		.get('.sl-page-title')
		.should(
			'contain',
			'How ready are you to participate in a sleep improvement program that requires changing your lifestyle and habits at this time?'
		);
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/input').click();
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[3]/label/input').click();
	cy.get('[type="button"]').click();

	//drugo custom pitanje

	cy.get('.sl-page-title').should('contain', ' Which statement best reflects your current state of mind?');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/input').click();
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[3]/label/input').click();
	cy.get('[type="button"]').click();

	cy.get('[for="options-id-3"]').should('contain', 'High chance').click();
	cy.get('[type="button"]').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/input').click();
	cy.get('[type="button"]').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
	cy.get('[type="button"]').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/input').click();
	cy.get('[type="button"]').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/input').click();
	cy.get('[type="button"]').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
	cy.get('[type="button"]').click();

	cy.get('.sl-page-title').should('contain', 'What is your date of birth?');
	cy.get('.sl-select-wrapper');
	cy.get('#select-month').select('January').should('have.value', '1');
	cy.get('#select-day').select('1').should('have.value', '1');
	cy.get('#select-year').select('1991');
	cy.get('[type="button"]').click();

	// trece custom pitanje

	cy.get('.sl-page-title').should('contain', ' Which of the following are you?');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Googler');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Alphabet character');
	cy
		.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
		.select('Google/Alphabet dependent');
	cy.get('[type="button"]').click();

	//cetvrto custom pitanje

	cy.get('.sl-page-title').should('contain', 'What country are you located in? ');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('United States');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('United Kingdom');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Afghanistan');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Åland Islands');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Albania');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Algeria');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('American Samoa');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Andorra');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Angola');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Anguilla');

	// Sigh up strana
});
