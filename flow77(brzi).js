it('Flow 77', () => {
	cy.visit('https://onboarding.qa.sleepio.com/sleepio/amerihealthcaritas/77#1/1');
	cy.get('[type="button"]').first().click();

	cy.get('[for="options-id-4"]').should('contain', 'Very much').click();
	cy.get('[type="button"]').click();

	cy.get('.sl-select').select('7 nights');
	cy.get('[type="button"]').click();

	cy.get('[for="options-id-1"]').click();
	cy.get('[type="button"]').click();

	cy.get('.sl-select').select('11 or more years');
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

	// Sigh up strana

	cy.get('#first_name').type('An23');
	cy.get('#last_name').type('Mil234');
	cy.get('#email').type('andrej.milosavljevic+07051@sleepio.com');
	cy.get('#password').type('Qwerty123');
	cy.get('[type="checkbox"]').click();

	cy.get('[type="submit"]').click();
	cy.wait(1000);

	cy.get('.sl-button.sl-tailor').first().click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select').select('8:00 PM');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select').select('8:00 PM');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select').select('5 mins');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select').select('1');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('10 mins');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select').select('9:00 AM');

	cy
		.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
		.select('More than an hour too early');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select').select('10:45 AM');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select').select('Very good');

	cy.get('[type="button"]').click();

	cy.get('#39_3').click();

	cy.get('#41_3').click();

	cy.get('#42_4').click();

	cy.get('#43_4').click();

	cy.get('#84_4').click();

	cy.get('[type="button"]').click();

	cy.get('#30_1').click();

	cy.get('#31_1').click();

	cy.get('[type="button"]').click();

	cy.get('#85_2').click();

	cy.get('#86_2').click();

	cy.get('#87_2').click();

	cy.get('#88_2').click();

	cy.get('#89_2').click();

	cy.get('#90_2').click();

	cy.get('[type="button"]').click();

	cy
		.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select')
		.select("No, I'm not taking any right now");

	cy
		.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
		.select("No, I'm not taking any right now");

	cy.get('[type="button"]').click();

	cy.get('#54_2').click();

	cy.get('#55_3').click();

	cy.get('#56_3').click();

	cy.get('#57_3').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('Never');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select').select('Excellent');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[1]/label/input').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[2]/label/input').click();

	cy.get('[type="button"]').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select').select('Once a week');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select').select('Never');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select').select('Never');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('Sometimes');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select').select('Sometimes');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[1]/label/input').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[2]/label/input').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select').select('Employed full-time');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select').select('10%');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/input').type('0');

	cy.get('[type="button"]').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/input').click().type('11deyguvbjgzbf');

	cy.get('[type="button"]').click();
});
