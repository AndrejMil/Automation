/// <reference types="cypress" />

describe('Flow1 testiranje', () => {
	it('Testiranje prvog flow-a', () => {
		cy.visit('https://onboarding.qa.sleepio.com/sleepio/big-health'); //odlazak na big-health
		cy.get('.sl-button').click(); // nalazi dugme po tipu i klasi i klikne na njega

		// Prva strana OST-a
		cy.get('.sl-page-title').should('contain', 'How would you like to improve your sleep?'); // tvrdi da se ovaj naslov nalazi na stranici
		cy.get('.sl-options-wrapper').then(function(prviTest) {
			// svakoj opciji dodeljujemo varijablu i uzimamo tekst
			const prvaOpcija = prviTest.find('[for="options-id-0"]').text();
			const drugaOpcija = prviTest.find('[for="options-id-1"]').text();
			const trecaOpcija = prviTest.find('[for="options-id-2"]').text();
			const cetvrtaOpcija = prviTest.find('[for="options-id-3"]').text();
			const petaOpcija = prviTest.find('[for="options-id-none-of-the-above"]').text();

			// poredimo da li je .text() jednak onome sto se nalazi na stranici
			expect(prvaOpcija).to.equal('Get to sleep more easily');
			expect(drugaOpcija).to.equal('Sleep right through the night without waking up');
			expect(trecaOpcija).to.equal('Stop waking up too early');
			expect(cetvrtaOpcija).to.equal('Wake up feeling refreshed');
			expect(petaOpcija).to.equal('None of the above');
		});
		// kliknemo na svaku opciju na strani
		cy.get('[for="options-id-0"]').click();
		cy.get('[for="options-id-1"]').click();
		cy.get('[for="options-id-2"]').click();
		cy.get('[for="options-id-3"]').click();
		cy.get('[for="options-id-none-of-the-above"]').click();
		cy.get('[type="button"]').click();

		// Druga strana OST-a

		cy.get('.sl-page-title').should('contain', 'How long have you had a problem with your sleep?');
		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvorimo ga, a posle biramo svaku opciju
		cy.get('.sl-select-wrapper').click();
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

		// Treca strana OST-a
		// isti sistem kao gore - dodeljujemo varijable, poredimo sa onim sto se nalazi na stranici
		cy.get('.sl-page-title').should('contain', 'Which of the following stops you from sleeping most often?');
		cy.get('.sl-options-wrapper').then(function(drugiTest) {
			const prvaOpcija = drugiTest.find('[for="options-id-0"]').text();
			const drugaOpcija = drugiTest.find('[for="options-id-1"]').text();
			const trecaOpcija = drugiTest.find('[for="options-id-2"]').text();
			const cetvrtaOpcija = drugiTest.find('[for="options-id-3"]').text();
			const petaOpcija = drugiTest.find('[for="options-id-4"]').text();

			expect(prvaOpcija).to.equal('Worries about future events');
			expect(drugaOpcija).to.equal('Worries about not sleeping');
			expect(trecaOpcija).to.equal('Bodily discomfort or pain');
			expect(cetvrtaOpcija).to.equal('Noise');
			expect(petaOpcija).to.equal('Light levels');
		});

		//kliknemo na svaku opciju
		cy.get('[for="options-id-0"]').click();
		cy.get('[for="options-id-1"]').click();
		cy.get('[for="options-id-2"]').click();
		cy.get('[for="options-id-3"]').click();
		cy.get('[for="options-id-4"]').click();
		cy.get('[type="button"]').click();

		// Cetvrta strana OST-a
		cy.get('.sl-page-title').should('contain', 'To what extent has sleep troubled you in general?');
		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvaramo ga i svaku opciju biramo sa .select()
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Not at all');
		cy.get('.sl-select').select('A little');
		cy.get('.sl-select').select('Somewhat');
		cy.get('.sl-select').select('Much');
		cy.get('.sl-select').select('Very much');
		cy.get('[type="button"]').click();

		// Peta strana OST-a

		cy.get('.sl-page-title').should('contain', 'How many nights a week have you had a problem with your sleep?');
		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvaramo ga i svaku opciju biramo sa .select()
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('0 nights');
		cy.get('.sl-select').select('1 nights');
		cy.get('.sl-select').select('2 nights');
		cy.get('.sl-select').select('3 nights');
		cy.get('.sl-select').select('4 nights');
		cy.get('.sl-select').select('5 nights');
		cy.get('.sl-select').select('6 nights');
		cy.get('.sl-select').select('7 nights');
		cy.get('[type="button"]').click();

		// Peta strana OST-a
		cy
			.get('.sl-page-title')
			.should(
				'contain',
				'How often have you felt that you were unable to control the important things in your life?'
			);
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Never');
		cy.get('.sl-select').select('Almost never');
		cy.get('.sl-select').select('Sometimes');
		cy.get('.sl-select').select('Fairly often');
		cy.get('.sl-select').select('Very often');
		cy.get('[type="button"]').click();

		// Sesta strana OST-a
		cy
			.get('.sl-page-title')
			.should(
				'contain',
				'How likely is it that you would fall asleep during the day without intending to, or that you would struggle to stay awake while you were doing things?'
			);
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('No chance');
		cy.get('.sl-select').select('Slight chance');
		// biramo Moderate chance da otvorimo kondiciju
		cy.get('.sl-select').select('Moderate chance');
		cy.get('.sl-select').select('High chance');
		cy.get('[type="button"]').click();

		// Prvo kondicionalno pitanje (sedma strana OST-a)
		cy.get('.sl-page-title').should('contain', 'Has your snoring ever bothered other people?');
		// tvrdimo da se ove ponudjene opcije nalaze na stranici
		cy.get('.sl-option').should('contain', 'Yes', 'No', "I don't snore");
		cy.get('.sl-options-wrapper').then(function(treciTest) {
			const prvaOpcija = treciTest.find('[for="options-id-0"]').text();
			const drugaOpcija = treciTest.find('[for="options-id-1"]').text();
			const trecaOpcija = treciTest.find('[for="options-id-2"]').text();

			expect(prvaOpcija).to.equal('Yes');
			expect(drugaOpcija).to.equal('No');
			expect(trecaOpcija).to.equal("I don't snore");
		});
		//biramo svaku varijablu
		cy.get('[for="options-id-0"]').click();
		cy.get('[for="options-id-1"]').click();
		cy.get('[for="options-id-2"]').click();
		cy.get('[type="button"]').click();

		// Drugo kondicionalno pitanje
		cy.get('.sl-page-title').should('contain', 'Has anyone noticed that you stop breathing during sleep?');
		cy.get('.sl-option').should('contain', 'No', 'Yes');
		cy.get('.sl-options-wrapper').then(function(cetvrtiTest) {
			const prvaOpcija = cetvrtiTest.find('[for="options-id-0"]').text();
			const drugaOpcija = cetvrtiTest.find('[for="options-id-1"]').text();

			expect(prvaOpcija).to.equal('No');
			expect(drugaOpcija).to.equal('Yes');
		});
		cy.get('[for="options-id-1"]').click();
		cy.get('[for="options-id-0"]').click();
		cy.get('[type="button"]').click();

		// Gender pitanje
		cy.get('.sl-page-title').should('contain', 'How would you describe your gender?');
		cy.get('.sl-option').should('contain', 'Male', 'Female', 'In another way');
		cy.get('.sl-options-wrapper').then(function(petiTest) {
			const prvaOpcija = petiTest.find('[for="options-id-0"]').text();
			const drugaOpcija = petiTest.find('[for="options-id-1"]').text();
			const trecaOpcija = petiTest.find('[for="options-id-2"]').text();

			expect(prvaOpcija).to.equal('Male');
			expect(drugaOpcija).to.equal('Female');
			expect(trecaOpcija).to.equal('In another way');
		});
		cy.get('[for="options-id-0"]').click();
		cy.get('[for="options-id-2"]').click();
		cy.get('[for="options-id-1"]').click();
		cy.get('[type="button"]').click();

		// DOB pitanje
		cy.get('.sl-page-title').should('contain', 'What is your date of birth?');
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper');
		// preko id-a biramo opciju i tvrdimo da je njena vrednost 1
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
		// proveravamo post answer tekst
		cy
			.get('.sl-page-post-answer')
			.should(
				'contain',
				"People's sleep patterns change with age so knowing how old you are helps us interpret your sleep problems.  Not to worry, we will maintain the privacy of this and any other health information you give us in compliance with the law and with our own "
			);
		// Proveravamo da li Privacy Policy ima href - https://www.sleepio.com/privacy/
		cy
			.get('.sl-page-post-answer')
			.contains('Privacy Policy')
			.should('have.attr', 'href', 'https://www.sleepio.com/privacy/');
		cy.get('[type="button"]').click();

		//employment pitanje, biramo svaku opciju sa .select()
		cy.get('.sl-page-title').should('contain', 'What is your employment status?');
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Employed full-time');
		cy.get('.sl-select').select('Employed part-time');
		cy.get('.sl-select').select('Unemployed');
		cy.get('.sl-select').select('Retired');
		cy.get('.sl-select').select('Full-time student');
		cy.get('.sl-select').select('Full-time Homemaker or carer');
		// ovo nam je poslednji odgovor da bi aktivirali kondiciju
		cy.get('.sl-select').select('Employed full-time');
		cy.get('[type="button"]').click();

		// Prvo kondicionalno pitanje
		cy
			.get('.sl-page-title')
			.should('contain', 'How much did poor sleep affect your productivity while you were working?');
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('100%-Unable to work');
		cy.get('.sl-select').select('90%');
		cy.get('.sl-select').select('80%');
		cy.get('.sl-select').select('70%');
		cy.get('.sl-select').select('60%');
		cy.get('.sl-select').select('50%');
		cy.get('.sl-select').select('40%');
		cy.get('.sl-select').select('30%');
		cy.get('.sl-select').select('20%');
		cy.get('.sl-select').select('10%');
		cy.get('.sl-select').select('0% - No effect');
		cy.get('.sl-select').select('10%');
		cy.get('[type="button"]').click();

		// proverimo tekst pre unosa
		cy.get('.sl-page-pre-question').should('contain', 'Over the past 2 weeks');
		// proverimo naslov
		cy
			.get('.sl-page-title')
			.should(
				'contain',
				'How many hours did you miss from your work per week because of problems associated with your sleep?'
			);
		// proverimo post answer tekst
		cy.get('.sl-page-post-question').should('contain', '(Include sick days, late starts, early finishes etc.)');
		// unsemo odgovor sa .type()
		cy.get('input').type('0');
		cy.get('[type="button"]').click();

		//biramo expert guide
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

		//prvo proveravamo heder

		// Proveravamo tekst svakog input polja i kucamo odgovor

		cy.get('.sl-interactive--field-label').should('contain', 'First Name*');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[1]/div/input').type('An23');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[2]/div/input').type('Mil23');

		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.type('andrej.milosavljevic+220517@sleepio.com');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[4]/div/input').type('Qwerty123');

		//selektujemo checkbox
		cy.get('[data-hidden="false"] > .sl-input-checkbox').click();
		// pronalazimo linkove i proveravamo im href

		cy.get('[type="submit"]').click();

		// tekst u hederu
		cy.get('.sl-header__text').should('contain', 'Your sleep score');
		// potvrdimo da je user ulogovan tj. da je promenio u Log Out
		cy.get('.sl-header__login').should('contain', 'Log Out');
		cy.wait(3000);
		cy.get('.sl-button').click();

		// Prva strana LST-a
		cy.get('[data-index="0"]').contains('Your sleep (page 1 / 8)');
		cy.get('[data-index="1"]').contains('Over the past month...');
		// hvatamo pitanje preko semantic id-a
		// preko id-a hvatamo svaku opciju i biramo je
		cy
			.get('[data-semantic-id="bodily_discomfort"]')
			.should(
				'contain',
				'...how often has your sleep been disrupted by bodily discomfort? (e.g. overheating, pain, bladder)'
			);
		cy.get('#16_0').click();
		cy.get('#16_1').click();
		cy.get('#16_2').click();
		cy.get('#16_3').click();
		cy.get('#16_4').click();

		cy
			.get('[data-semantic-id="sleep_disrupted_by_noise"]')
			.should('contain', '...how often has your sleep been disrupted by noise?');
		cy.get('#17_0').click();
		cy.get('#17_1').click();
		cy.get('#17_2').click();
		cy.get('#17_3').click();
		cy.get('#17_4').click();

		cy
			.get('[data-semantic-id="sleep_disrupted_uncomfortable_bed"]')
			.should('contain', '...how often has your sleep been disrupted by an uncomfortable bed?');
		cy.get('#18_0').click();
		cy.get('#18_1').click();
		cy.get('#18_2').click();
		cy.get('#18_3').click();
		cy.get('#18_4').click();

		cy
			.get('[data-semantic-id="sleep_disrupted_temperature"]')
			.should('contain', '...how often has your sleep been disrupted by room temperature?');
		cy.get('#19_0').click();
		cy.get('#19_1').click();
		cy.get('#19_2').click();
		cy.get('#19_3').click();
		cy.get('#19_4').click();

		cy
			.get('[data-semantic-id="sleep_disrupted_light_levels"]')
			.should('contain', '...how often has your sleep been disrupted by light levels?');
		cy.get('#20_0').click();
		cy.get('#20_1').click();
		cy.get('#20_2').click();
		cy.get('#20_3').click();
		cy.get('#20_4').click();

		cy.get('[type="button"]').click();

		// Druga strana LST-a

		cy.get('[data-index="0"]').contains('Your sleep (page 2 / 8)');
		cy.get('[data-index="1"]').contains("Describe your average night's sleep over the past month");

		// zbog promena u id-u polje za odgovor uzimamo preko xpath-a
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select').select('8:00 PM');

		cy.get('[data-semantic-id="try_go_sleep"]').should('contain', 'What time do you try to go to sleep?');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select').select('8:00 PM');

		cy.get('[data-semantic-id="fall_asleep"]').should('contain', 'How long does it take you to fall asleep?');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select').select('5 mins');

		cy
			.get('[data-semantic-id="during_night_wake"]')
			.should('contain', 'How many times during the night do you wake up on average?');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('1');

		cy
			.get('[data-semantic-id="awake_during_night"]')
			.should(
				'contain',
				'How long are you awake for in total during the night due to these wakenings, on average?'
			);

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select').select('10 mins');

		cy
			.get('[data-semantic-id="normally_wake_last_time"]')
			.should('contain', 'What time do you normally wake up for the last time?');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select').select('9:00 AM');

		cy
			.get('[data-semantic-id="earlier_intended_wake_up"]')
			.should('contain', 'Is this earlier than you intended to wake up? If so, by how long?');

		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select')
			.select('More than an hour too early');

		cy
			.get('[data-semantic-id="time_normally_out_bed"]')
			.should('contain', 'What time do you normally get out of bed?');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select').select('10:45 AM');

		cy
			.get('[data-semantic-id="rate_quality_sleep"]')
			.should('contain', 'How would you rate the quality of your sleep?');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/div/div/select').select('Very good');

		cy.get('[type="button"]').click();

		// Treca strana LST-a

		cy.get('[data-index="0"]').contains('Your sleep (page 3 / 8)');
		cy.get('[data-index="1"]').contains('Over the past month, to what extent has poor sleep…');
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

		cy.get('[data-semantic-id="sleep_feel_helpless"]').should('contain', '...sleep made you feel helpless?');
		cy.get('#32_0').click();
		cy.get('#32_1').click();
		cy.get('#32_2').click();
		cy.get('#32_3').click();
		cy.get('#32_4').click();

		cy.get('[data-semantic-id="feel_frustrated"]').should('contain', '...made you feel frustrated?');
		cy.get('#33_0').click();
		cy.get('#33_1').click();
		cy.get('#33_2').click();
		cy.get('#33_3').click();
		cy.get('#33_4').click();

		cy.get('[data-semantic-id="feel_negative"]').should('contain', '...made you feel negative?');
		cy.get('#34_0').click();
		cy.get('#34_1').click();
		cy.get('#34_2').click();
		cy.get('#34_3').click();
		cy.get('#34_4').click();

		cy.get('[data-semantic-id="feel_alone"]').should('contain', '...made you feel alone?');
		cy.get('#35_0').click();
		cy.get('#35_1').click();
		cy.get('#35_2').click();
		cy.get('#35_3').click();
		cy.get('#35_4').click();

		cy.get('[data-semantic-id="feel_worried"]').should('contain', '...made you feel worried?');
		cy.get('#36_0').click();
		cy.get('#36_1').click();
		cy.get('#36_2').click();
		cy.get('#36_3').click();
		cy.get('#36_4').click();

		cy.get('[data-semantic-id="affected_behaviour"]').should('contain', '...affected your behaviour?');
		cy.get('#37_0').click();
		cy.get('#37_1').click();
		cy.get('#37_2').click();
		cy.get('#37_3').click();
		cy.get('#37_4').click();

		cy
			.get('[data-semantic-id="affected_people"]')
			.should('contain', '...affected your ability to look after other people?');
		cy.get('#38_0').click();
		cy.get('#38_1').click();
		cy.get('#38_2').click();
		cy.get('#38_3').click();
		cy.get('#38_4').click();

		cy.get('[type="button"]').click();

		// Cetvrta strana LST-a

		cy.get('[data-index="0"]').contains('Your sleep (page 4 / 8)');
		cy.get('[data-index="1"]').contains("On the nights when I don't sleep well the problem seems to be that…");
		cy
			.get('[data-semantic-id="comfortable_position_bed"]')
			.should('contain', "...I can't get into a comfortable position in bed.");
		cy.get('#39_0').click();
		cy.get('#39_1').click();
		cy.get('#39_2').click();
		cy.get('#39_3').click();
		cy.get('#39_4').click();

		cy
			.get('[data-semantic-id="sleep_proper_routine"]')
			.should('contain', "...I can't get my sleep pattern into a proper routine.");
		cy.get('#40_0').click();
		cy.get('#40_1').click();
		cy.get('#40_2').click();
		cy.get('#40_3').click();
		cy.get('#40_4').click();

		cy
			.get('[data-semantic-id="relax_my_body"]')
			.should('contain', "...I find it hard to 'let go' and relax my body.");
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

		cy.get('[data-index="7"]').should('contain', "...I worry that I won't cope tomorrow if I don't sleep well");
		cy.get('#44_0').click();
		cy.get('#44_1').click();
		cy.get('#44_2').click();
		cy.get('#44_3').click();
		cy.get('#44_4').click();

		cy.get('[type="button"]').click();

		// Peta strana LST-a

		cy.get('[data-index="0"]').contains('Your sleep (page 5 / 8)');
		cy.get('[data-index="1"]').contains('When I lie awake in bed I think about...');
		cy
			.get('[data-semantic-id="happened_today_tomorrow"]')
			.should('contain', "...what happened today and what I've got on tomorrow");
		cy.get('#45_0').click();
		cy.get('#45_1').click();
		cy.get('#45_2').click();
		cy.get('#45_3').click();
		cy.get('#45_4').click();

		cy
			.get('[data-semantic-id="control_sleep"]')
			.should('contain', "...how out of control my sleep is and I don't know what to do about it");
		cy.get('#46_0').click();
		cy.get('#46_1').click();
		cy.get('#46_2').click();
		cy.get('#46_3').click();
		cy.get('#46_4').click();

		cy
			.get('[data-semantic-id="feeling_cold"]')
			.should('contain', '...my body feeling hot or cold; or my heart beat pounding in my head');
		cy.get('#47_0').click();
		cy.get('#47_1').click();
		cy.get('#47_2').click();
		cy.get('#47_3').click();
		cy.get('#47_4').click();

		cy
			.get('[data-semantic-id="happened_past_worked_out"]')
			.should('contain', '...things that have happened in the past and how they worked out');
		cy.get('#48_0').click();
		cy.get('#48_1').click();
		cy.get('#48_2').click();
		cy.get('#48_3').click();
		cy.get('#48_4').click();

		cy.get('[data-semantic-id="long_lying_awake"]').should('contain', "...how long I've been lying awake");
		cy.get('#49_0').click();
		cy.get('#49_1').click();
		cy.get('#49_2').click();
		cy.get('#49_3').click();
		cy.get('#48_4').click();

		cy
			.get('[data-semantic-id="noises_hear_outside"]')
			.should('contain', '...noises I can hear in the house or from outside');
		cy.get('#50_0').click();
		cy.get('#50_1').click();
		cy.get('#50_2').click();
		cy.get('#50_3').click();
		cy.get('#50_4').click();

		cy
			.get('[data-semantic-id="things_work_well"]')
			.should('contain', '...what the future might hold and what I should be doing for things to work out well');
		cy.get('#51_0').click();
		cy.get('#51_1').click();
		cy.get('#51_2').click();
		cy.get('#51_3').click();
		cy.get('#51_4').click();

		cy
			.get('[data-semantic-id="tomorrow_sleep_tonight"]')
			.should('contain', "...how I'm going to cope tomorrow if I don't sleep well tonight");
		cy.get('#52_0').click();
		cy.get('#52_1').click();
		cy.get('#52_2').click();
		cy.get('#52_3').click();
		cy.get('#52_4').click();

		cy
			.get('[data-semantic-id="importance_through_mind"]')
			.should('contain', '...trivial things of no importance that go through my mind');
		cy.get('#53_0').click();
		cy.get('#53_1').click();
		cy.get('#53_2').click();
		cy.get('#53_3').click();
		cy.get('#53_4').click();

		cy.get('[type="button"]').click();

		// Sesta strana LST-a

		cy.get('[data-index="0"]').contains('Your wellbeing (page 6 / 8)');
		cy.get('[data-index="1"]').contains('Over the past 2 weeks...');
		cy
			.get('[data-semantic-id="often_bothered_little_interest"]')
			.should('contain', '...how often have you been bothered by little interest or pleasure in doing things?');
		cy.get('#54_0').click();
		cy.get('#54_1').click();
		cy.get('#54_2').click();
		cy.get('#54_3').click();

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

		cy.get('[data-semantic-id="say_health"]').should('contain', 'In general, would you say your health is…');
		cy.get('#58_0').click();
		cy.get('#58_1').click();
		cy.get('#58_2').click();
		cy.get('#58_3').click();
		cy.get('#58_4').click();

		cy
			.get('[data-index="7"]')
			.should('contain', 'All things considered, how satisfied are you with your life as a whole these days?');

		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
			.select('10 - Extremely satisfied');
		cy.get('[type="button"]').click();

		// Sedma strana LST-a

		cy.get('[data-index="0"]').contains('Your lifestyle (page 7 / 8)');

		cy.get('[data-semantic-id="smoke_tobacco"]').should('contain', 'How often (if ever) do you smoke tobacco?');
		cy.get('#60_0').click();
		cy.get('#60_1').click();
		cy.get('#60_2').click();
		cy.get('#60_3').click();
		cy.get('#60_4').click();

		cy.get('[data-semantic-id="drink_alcohol"]').should('contain', 'How often (if ever) do you drink alcohol?');
		cy.get('#61_0').click();
		cy.get('#61_1').click();
		cy.get('#61_2').click();
		cy.get('#61_3').click();
		cy.get('#61_4').click();

		cy
			.get('[data-semantic-id="consume_caffeine"]')
			.should('contain', 'How often (if ever) do you consume caffeine?');
		cy.get('#62_0').click();
		cy.get('#62_1').click();
		cy.get('#62_2').click();
		cy.get('#62_3').click();
		cy.get('#62_4').click();

		cy.get('[data-semantic-id="regularly_exercise"]').should('contain', 'How regularly (if ever) do you exercise?');
		cy.get('#63_0').click();
		cy.get('#63_1').click();
		cy.get('#63_2').click();
		cy.get('#63_3').click();
		cy.get('#63_4').click();

		cy
			.get('[data-semantic-id="sleeping_pills_prescribed_doctor"]')
			.should(
				'contain',
				'How many nights in the last 2 weeks have you taken sleeping pills prescribed by your doctor?'
			);
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('1 night');

		cy
			.get('[data-semantic-id="taken_non-prescription_sleep_remedies"]')
			.should('contain', 'How many nights in the last 2 weeks have you taken non-prescription sleep remedies?');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select').select('1 night');
		cy
			.get('[data-semantic-id="yourself_overweight"]')
			.should('contain', 'Do you consider yourself to be overweight?');
		cy.get('#66_0').click();
		cy.get('#66_1').click();

		cy.get('[data-semantic-id="currently_partner"]').should('contain', 'Do you currently have a partner?');
		cy.get('#67_0').click();
		cy.get('#67_1').click();

		cy
			.get('[data-semantic-id="sleep_disrupted_partner"]')
			.should('contain', 'Over the past month, how often has your sleep been disrupted by your partner?');
		cy.get('#68_0').click();
		cy.get('#68_1').click();
		cy.get('#68_2').click();
		cy.get('#68_3').click();

		cy.get('[data-semantic-id="children_live_you"]').should('contain', 'Do you have children who live with you?');
		cy.get('#69_0').click();
		cy.get('#69_1').click();

		cy.get('[data-semantic-id="children_live_you"]').should('contain', 'Do you have children who live with you?');
		cy.get('#69_0').click();
		cy.get('#69_1').click();

		cy
			.get('[data-semantic-id="sleep_disrupted_children"]')
			.should('contain', 'Over the past month, how often has your sleep been disrupted by your children?');
		cy.get('#70_0').click();
		cy.get('#70_1').click();
		cy.get('#70_2').click();
		cy.get('#70_3').click();
		cy.get('#70_4').click();

		cy.get('[type="button"]').click();

		// Osma strana LST-a

		cy.get('[data-index="0"]').contains('About you (page 8 / 8)');
		cy.get('[data-semantic-id="shift_worker"]').should('contain', 'Are you a shift worker?');
		cy.get('#71_0').click();
		cy.get('#71_1').click();

		cy.get('[data-index="2"]').contains('Please choose a community username');
		cy.get('.sl-page-post-question').contains('You can change your username later in Account Settings');
		// unosim i comunity username
		cy.get('.sl-input-text').click().type('11fddsweva');
		cy.get('[type="button"]').click();
		// cekamo 5 sekundi zbog problema sa sinkom
		cy.wait(5000);
	});
});
