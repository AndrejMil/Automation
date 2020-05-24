it('Flow 78', () => {
	cy.visit('https://onboarding.qa.sleepio.com/sleepio/libertymutual/78#1/1');
	cy.get('[type="button"]').first().click();

	cy.get('.sl-page-title').should('contain', 'To what extent has sleep troubled you in general?');

	cy.get('.sl-options-wrapper ');
	cy.get('[for="options-id-0"]').should('contain', 'Not at all').click();
	cy.get('[for="options-id-1"]').should('contain', 'A little').click();
	cy.get('[for="options-id-2"]').should('contain', 'Somewhat').click();
	cy.get('[for="options-id-3"]').should('contain', 'Much').click();
	cy.get('[for="options-id-4"]').should('contain', 'Very much').click();

	cy.get('[type="button"]').click();

	cy.get('.sl-page-title').should('contain', 'How many nights a week have you had a problem with your sleep?');
	cy.get('.sl-select-form');
	cy.get('.sl-select-wrapper').click();
	cy.get('option[value="0"]').should('contain', '0 nights');
	cy.get('option[value="1"]').should('contain', '1 nights');
	cy.get('option[value="2"]').should('contain', '2 nights');
	cy.get('option[value="3"]').should('contain', '3 nights');
	cy.get('option[value="4"]').should('contain', '4 nights');
	cy.get('option[value="5"]').should('contain', '5 nights');
	cy.get('option[value="6"]').should('contain', '6 nights');
	cy.get('option[value="7"]').should('contain', '7 nights');
	cy.get('.sl-select').select('0 nights');
	cy.get('.sl-select').select('1 nights');
	cy.get('.sl-select').select('2 nights');
	cy.get('.sl-select').select('3 nights');
	cy.get('.sl-select').select('4 nights');
	cy.get('.sl-select').select('5 nights');
	cy.get('.sl-select').select('6 nights');
	cy.get('.sl-select').select('7 nights');
	cy.get('[type="button"]').click();

	cy.get('.sl-page-title').should('contain', 'Would you still have a sleep problem if you had more time to sleep?');
	cy.get('[for="options-id-0"]').click();
	cy.get('[for="options-id-1"]').click();
	cy.get('[type="button"]').click();

	cy.get('.sl-page-title').should('contain', 'How long have you had a problem with your sleep?');
	cy.get('.sl-select-form');
	cy.get('.sl-select-wrapper').click();
	cy.get('option[value="0"]').should('contain', "I don't have a problem");
	cy.get('option[value="1"]').should('contain', 'A week or less');
	cy.get('option[value="2"]').should('contain', '2-4 weeks');
	cy.get('option[value="3"]').should('contain', '1-2 months');
	cy.get('option[value="4"]').should('contain', '3-6 months');
	cy.get('option[value="5"]').should('contain', '7-12 months');
	cy.get('option[value="6"]').should('contain', '1-2 years');
	cy.get('option[value="7"]').should('contain', '3-5 years');
	cy.get('option[value="8"]').should('contain', '6-10 years');
	cy.get('option[value="9"]').should('contain', '11 or more years');
	cy.get('.sl-select').select("I don't have a problem");
	cy.get('.sl-select').select('A week or less');
	cy.get('.sl-select').select('2-4 weeks');
	cy.get('.sl-select').select('1-2 months');
	cy.get('.sl-select').select('3-6 months');
	cy.get('.sl-select').select('7-12 months');
	cy.get('.sl-select').select('1-2 years');
	cy.get('.sl-select').select('3-5 years');
	cy.get('.sl-select').select('6-10 years');
	cy.get('.sl-select').select('11 or more years');
	cy.get('.sl-header').should('have.css', 'background-color', 'rgb(0, 24, 72)');
	cy.get('[type="button"]').click();

	cy
		.get('.sl-page-title')
		.should(
			'contain',
			'How likely is it that you would fall asleep during the day without intending to, or that you would struggle to stay awake while you were doing things?'
		);

	cy.get('[for="options-id-0"]').should('contain', 'No chance').click();
	cy.get('[for="options-id-1"]').should('contain', 'Slight chance').click();
	cy.get('[for="options-id-2"]').should('contain', 'Moderate chance').click();
	cy.get('[for="options-id-3"]').should('contain', 'High chance').click();
	cy.get('[type="button"]').click();

	cy.get('.sl-page-title').should('contain', 'Has your snoring ever bothered other people?');
	cy.get('.sl-options-wrapper').then(function(treciTest) {
		const prvaOpcija = treciTest.find('[for="options-id-0"]').text();
		const drugaOpcija = treciTest.find('[for="options-id-1"]').text();
		const trecaOpcija = treciTest.find('[for="options-id-2"]').text();

		expect(prvaOpcija).to.equal('Yes');
		expect(drugaOpcija).to.equal('No');
		expect(trecaOpcija).to.equal("I don't snore");
	});
	cy.get('[for="options-id-0"]').click();
	cy.get('[type="button"]').click();

	cy.get('.sl-page-title').should('contain', 'Has anyone noticed that you stop breathing during sleep?');
	cy.get('.sl-options-wrapper').then(function(cetvrtiTest) {
		const prvaOpcija = cetvrtiTest.find('[for="options-id-0"]').text();
		const drugaOpcija = cetvrtiTest.find('[for="options-id-1"]').text();

		expect(prvaOpcija).to.equal('No');
		expect(drugaOpcija).to.equal('Yes');
	});
	cy.get('[for="options-id-0"]').click();
	cy.get('[type="button"]').click();

	cy.get('.sl-page-title').should('contain', 'How would you like to improve your sleep?');
	cy.get('.sl-options-wrapper').then(function(prviTest) {
		const prvaOpcija = prviTest.find('[for="options-id-0"]').text();
		const drugaOpcija = prviTest.find('[for="options-id-1"]').text();
		const trecaOpcija = prviTest.find('[for="options-id-2"]').text();
		const cetvrtaOpcija = prviTest.find('[for="options-id-3"]').text();
		const petaOpcija = prviTest.find('[for="options-id-none-of-the-above"]').text();

		expect(prvaOpcija).to.equal('Fall asleep more easily');
		expect(drugaOpcija).to.equal('Sleep through the night without waking up');
		expect(trecaOpcija).to.equal('Stop waking up too early');
		expect(cetvrtaOpcija).to.equal('Wake up feeling refreshed');
		expect(petaOpcija).to.equal('None of the above');
	});
	cy.get('[for="options-id-none-of-the-above"]').click();
	cy.get('[type="button"]').click();

	cy.get('.sl-page-title').should('contain', 'Which of the following expert guides might be of interest to you?');
	cy.get('.sl-options-wrapper').then(function(sestiTest) {
		const prvaOpcija = sestiTest.find('[for="options-id-0"]').text();
		const drugaOpcija = sestiTest.find('[for="options-id-1"]').text();
		const trecaOpcija = sestiTest.find('[for="options-id-2"]').text();
		const cetvrtaOpcija = sestiTest.find('[for="options-id-3"]').text();
		const petaOpcija = sestiTest.find('[for="options-id-none-of-the-above"]').text();

		expect(prvaOpcija).to.equal('Dealing with jet lag');
		expect(drugaOpcija).to.equal('Shift work and sleep');
		expect(trecaOpcija).to.equal('Managing your sleep as a parent');
		expect(cetvrtaOpcija).to.equal('Pregnancy and sleep');
		expect(petaOpcija).to.equal('None of the above');
	});
	cy.get('[for="options-id-0"]').click();
	cy.get('[for="options-id-1"]').click();
	cy.get('[for="options-id-2"]').click();
	cy.get('[for="options-id-3"]').click();
	cy.get('[for="options-id-none-of-the-above"]').click();
	cy.get('[type="button"]').click();

	cy.get('.sl-page-title').should('contain', 'How would you describe your gender?');
	cy.get('.sl-options-wrapper').then(function(petiTest) {
		const prvaOpcija = petiTest.find('[for="options-id-0"]').text();
		const drugaOpcija = petiTest.find('[for="options-id-1"]').text();
		const trecaOpcija = petiTest.find('[for="options-id-2"]').text();

		expect(prvaOpcija).to.equal('Male');
		expect(drugaOpcija).to.equal('Female');
		expect(trecaOpcija).to.equal('In another way');
	});
	cy.get('[for="options-id-0"]').click();
	cy.get('[type="button"]').click();

	cy.get('.sl-page-title').should('contain', 'What is your date of birth?');
	cy.get('.sl-select-wrapper');
	cy.get('#select-month').select('January').should('have.value', '1');
	cy.get('#select-month').select('February').should('have.value', '2');
	cy.get('#select-month').select('December').should('have.value', '12');
	cy.get('#select-month').select('January').should('have.value', '1');
	cy.get('#select-day').select('1').should('have.value', '1');
	cy.get('#select-day').select('5').should('have.value', '5');
	cy.get('#select-day').select('7').should('have.value', '7');
	cy.get('#select-day').select('25').should('have.value', '25');
	cy.get('#select-day').select('1').should('have.value', '1');
	cy.get('#select-year').select('1997');
	cy.get('#select-year').select('1991');
	cy
		.get('.sl-page-post-answer')
		.should(
			'contain',
			"People's sleep patterns change with age so knowing how old you are helps us interpret your sleep problems.  Not to worry, we will maintain the privacy of this and any other health information you give us in compliance with the law and with our own "
		);
	cy
		.get('.sl-page-post-answer')
		.contains('Privacy Policy')
		.should('have.attr', 'href', 'https://www.sleepio.com/privacy/');
	cy.get('[type="button"]').click();

	// Sigh up strana
	cy.get('.sl-interactive--field-label').should('contain', 'First Name*');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[1]/div/input').type('An23');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[2]/div/input').type('Mil23');

	cy
		.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[3]/div/input')
		.type('andrej.milosavljevic+220527@sleepio.com');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/div/input').type('Qwerty123');

	//selektujemo checkbox
	cy.get('[data-hidden="false"] > .sl-input-checkbox').click();
	// pronalazimo linkove i proveravamo im href

	cy.get('[type="submit"]').click();
	// Sleep report

	cy.get('h1').should('contain', 'Your sleep score');
	cy.get('.sl-header__login').should('contain', 'Log Out');
	cy.wait(1000);
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div[2]/div/a').click();

	// Eligibility

	cy.visit('https://onboarding.qa.sleepio.com/sleepio/libertymutual/78#5/1');

	cy.get('[data-semantic-id="normally_into_bed"]').should('contain', 'What time do you normally get into bed?');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select').select('8:00 PM');

	cy.get('[data-semantic-id="try_go_sleep"]').should('contain', 'What time do you try to go to sleep?');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select').select('8:00 PM');

	cy.get('[data-semantic-id="fall_asleep"]').should('contain', 'How long does it take you to fall asleep?');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select').select('5 mins');

	cy
		.get('[data-semantic-id="during_night_wake"]')
		.should('contain', 'How many times during the night do you wake up on average?');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select').select('1');

	cy
		.get('[data-semantic-id="awake_during_night"]')
		.should('contain', 'How long are you awake for in total during the night due to these wakenings, on average?');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('10 mins');

	cy
		.get('[data-semantic-id="normally_wake_last_time"]')
		.should('contain', 'What time do you normally wake up for the last time?');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select').select('9:00 AM');

	cy
		.get('[data-semantic-id="earlier_intended_wake_up"]')
		.should('contain', 'Is this earlier than you intended to wake up? If so, by how long?');

	cy
		.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
		.select('More than an hour too early');

	cy.get('[data-semantic-id="time_normally_out_bed"]').should('contain', 'What time do you normally get out of bed?');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select').select('10:45 AM');

	cy
		.get('[data-semantic-id="rate_quality_sleep"]')
		.should('contain', 'How would you rate the quality of your sleep?');

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select').select('Very good');

	cy.get('[type="button"]').click();

	cy.get('.HQExp-padding-for-p1').contains('Your Sleep Pattern');
	cy
		.get('[data-semantic-id="comfortable_position_bed"]')
		.should('contain', "...I can't get into a comfortable position in bed.");
	cy.get('#39_0').click();
	cy.get('#39_1').click();
	cy.get('#39_2').click();
	cy.get('#39_3').click();
	cy.get('#39_4').click();

	cy.get('[data-semantic-id="relax_my_body"]').should('contain', "...I find it hard to 'let go' and relax my body.");
	cy.get('#41_0').click();
	cy.get('#41_1').click();
	cy.get('#41_2').click();
	cy.get('#41_3').click();
	cy.get('#41_4').click();

	cy.get('[data-semantic-id="hard_sleep"]').should('contain', '...I try too hard to get to sleep.');
	cy.get('#42_0').click();
	cy.get('#42_1').click();
	cy.get('#42_2').click();
	cy.get('#42_3').click();
	cy.get('#42_4').click();

	cy.get('[data-semantic-id="feel_tired_bedtime"]').should('contain', "...I don't feel tired enough at bedtime.");
	cy.get('#43_0').click();
	cy.get('#43_1').click();
	cy.get('#43_2').click();
	cy.get('#43_3').click();
	cy.get('#43_4').click();

	cy.get('[data-index="5"]').should('contain', '...my thoughts and worries make it difficult to sleep.');
	cy.get('#84_0').click();
	cy.get('#84_1').click();
	cy.get('#84_2').click();
	cy.get('#84_3').click();
	cy.get('#84_4').click();

	cy.get('[type="button"]').click();

	cy.get('.HQExp-padding-for-p1').contains('Your Sleep Pattern');
	cy
		.get('[data-semantic-id="affected_ability_stay_awake"]')
		.should('contain', '...affected, your concentration, productivity or ability to stay awake?');
	cy.get('#30_0').click();
	cy.get('#30_1').click();
	cy.get('#30_2').click();
	cy.get('#30_3').click();
	cy.get('#30_4').click();

	cy
		.get('[data-semantic-id="affected_relationships"]')
		.should('contain', '...affected, your mood, energy or relationships?');
	cy.get('#31_0').click();
	cy.get('#31_1').click();
	cy.get('#31_2').click();
	cy.get('#31_3').click();
	cy.get('#31_4').click();

	cy.get('[type="button"]').click();

	cy.get('.HQExp-padding-for-p1').contains('Your Sleep Pattern');

	cy
		.get('[data-semantic-id="happened_today_tomorrow"]')
		.should('contain', "...what happened today and what I'm doing tomorrow.");
	cy.get('#85_0').click();
	cy.get('#85_1').click();
	cy.get('#85_2').click();

	cy
		.get('[data-semantic-id="control_sleep"]')
		.should('contain', "...how out of control my sleep is and how I don't know what to do about it.");
	cy.get('#86_0').click();
	cy.get('#86_1').click();
	cy.get('#86_2').click();

	cy
		.get('[data-semantic-id="feeling_cold"]')
		.should('contain', '...sensations in my body or noises I can hear from outside.');
	cy.get('#87_0').click();
	cy.get('#87_1').click();
	cy.get('#87_2').click();

	cy
		.get('[data-semantic-id="things_work_well"]')
		.should('contain', '...things that have happened in the past or what might happen in the future.');
	cy.get('#88_0').click();
	cy.get('#88_1').click();
	cy.get('#88_2').click();

	cy.get('[data-semantic-id="long_lying_awake"]').should('contain', "...how long I've been lying awake.");
	cy.get('#89_0').click();
	cy.get('#89_1').click();
	cy.get('#89_2').click();

	cy
		.get('[data-semantic-id="tomorrow_sleep_tonight"]')
		.should('contain', "...how I'm going to cope tomorrow if I don't sleep well tonight.");
	cy.get('#90_0').click();
	cy.get('#90_1').click();
	cy.get('#90_2').click();

	cy.get('[type="button"]').click();

	cy.get('.HQExp-padding-for-p1').contains('Your Sleep Pattern');

	cy
		.get('[data-semantic-id="sleeping_pills_prescribed_doctor"]')
		.should('contain', 'Do you use prescription sleeping pills (like Ambien or Trazodone)?');
	cy
		.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select')
		.select("No, I'm not taking any right now");

	cy
		.get('[data-semantic-id="taken_non-prescription_sleep_remedies"]')
		.should('contain', 'Do you use non-prescription sleep remedies (like melatonin or Zzzquil)?');
	cy
		.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
		.select("No, I'm not taking any right now");

	cy.get('[type="button"]').click();

	cy
		.get('.HQExp-padding-for-p1')
		.contains('Sleep is an important factor for your health. Tell us more about your overall wellbeing.');

	cy
		.get('[data-semantic-id="often_bothered_little_interest"]')
		.should('contain', '...how often have you been bothered by little interest or pleasure in doing things?');
	cy.get('#54_0').click();
	cy.get('#54_1').click();
	cy.get('#54_2').click();
	cy.get('#54_2').click();

	cy
		.get('[data-semantic-id="feeling_down_depressed"]')
		.should('contain', '...how often have you been bothered by feeling down, depressed or hopeless?');
	cy.get('#55_0').click();
	cy.get('#55_1').click();
	cy.get('#55_2').click();
	cy.get('#55_3').click();

	cy
		.get('[data-semantic-id="feeling_nervous_anxious"]')
		.should('contain', '...how often have you been bothered by feeling nervous, anxious or on edge?');
	cy.get('#56_0').click();
	cy.get('#56_1').click();
	cy.get('#56_2').click();
	cy.get('#56_3').click();

	cy
		.get('[data-semantic-id="able_stop_control_worrying"]')
		.should('contain', '...how often have you been bothered by not being able to stop or control worrying?');
	cy.get('#57_0').click();
	cy.get('#57_1').click();
	cy.get('#57_2').click();
	cy.get('#57_3').click();

	cy
		.get('[data-semantic-id="unable_to_control"]')
		.should('contain', '...how often have you felt that you were unable to control the important things in life?');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('Never');

	cy.get('[data-semantic-id="say_health"]').should('contain', 'In general, would you say your health is…');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select').select('Excellent');

	cy.get('[data-semantic-id="yourself_overweight"]').should('contain', 'Do you consider yourself to be overweight?');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[1]/label/input').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[2]/label/input').click();

	cy.get('[type="button"]').click();

	cy
		.get('.HQExp-padding-for-p1')
		.contains('Your home and work life may be impacting your sleep. Tell us about your style of living.');

	cy.get('[data-semantic-id="regularly_exercise"]').should('contain', 'How regularly do you exercise?');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select').select('Once a week');

	cy
		.get('[data-semantic-id="smoke_tobacco"]')
		.should('contain', 'How often do you smoke or use products with nicotine?');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select').select('Never');

	cy
		.get('[data-semantic-id="drink_alcohol"]')
		.should('contain', 'How often do you drink alcohol within 4 hours of bed?');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select').select('Never');

	cy
		.get('[data-semantic-id="sleep_disrupted_children"]')
		.should('contain', 'Do you have children? How often has your sleep been disrupted by your children?');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('Sometimes');

	cy
		.get('[data-semantic-id="sleep_disrupted_partner"]')
		.should('contain', 'Do you have a partner? How often has your sleep been disrupted by your partner?');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select').select('Sometimes');

	cy.get('[data-semantic-id="shift_worker"]').should('contain', 'Are you a shift worker?');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[1]/label/input').click();

	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[2]/label/input').click();

	cy.get('[data-semantic-id="employment_status"]').should('contain', 'What is your employment status?');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select').select('Employed full-time');

	cy
		.get('[data-semantic-id="affect_productivity"]')
		.should('contain', 'How much did poor sleep affect your productivity while you were working?');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select').select('10%');

	cy
		.get('[data-semantic-id="hours_missed"]')
		.should(
			'contain',
			'How many hours did you miss from your work per week because of problems associated with your sleep?'
		);
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/input').type('0');

	cy.get('[type="button"]').click();

	cy.get('[data-index="0"]').contains('One last thing...');
	cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/input').click().type('11dsfderfjgtyf');

	cy.wait(1000);
	cy.get('[type="button"]').click();
	cy.wait(5000);
});
