/// <reference types="cypress" />

describe('Flow1 testiranje custom pitanja', () => {
	it.only('Testiranje prvog flow-a', () => {
		cy.visit('https://onboarding.sleepio.com/sleepio/accenture/1#1/1');
		cy.get('[type="button"].sl-button').click(); // nalazi dugme po tipu i klasi i klikne na njega

		// Prva strana OST-a
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/input').click();
		cy.get('[type="button"]').click();

		// Druga strana OST-a

		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvorimo ga, a posle biramo svaku opciju
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('2-4 weeks');
		cy.get('[type="button"]').click();

		// Treca strana OST-a
		// isti sistem kao gore - dodeljujemo varijable, poredimo sa onim sto se nalazi na stranici
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
		cy.get('[for="options-id-4"]').click();
		cy.get('[type="button"]').click();

		// Cetvrta strana OST-a
		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvaramo ga i svaku opciju biramo sa .select()
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Very much');
		cy.get('[type="button"]').click();

		// Peta strana OST-a
		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvaramo ga i svaku opciju biramo sa .select()
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('0 nights');
		cy.get('[type="button"]').click();

		// Peta strana OST-a
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Very often');
		cy.get('[type="button"]').click();

		// Sesta strana OST-a
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('High chance');
		cy.get('[type="button"]').click();

		cy.get('.sl-options-wrapper').then(function(treciTest) {
			const prvaOpcija = treciTest.find('[for="options-id-0"]').text();
			const drugaOpcija = treciTest.find('[for="options-id-1"]').text();
			const trecaOpcija = treciTest.find('[for="options-id-2"]').text();

			expect(prvaOpcija).to.equal('Yes');
			expect(drugaOpcija).to.equal('No');
			expect(trecaOpcija).to.equal("I don't snore");
		});
		cy.get('[for="options-id-2"]').click();
		cy.get('[type="button"]').click();

		cy.get('.sl-options-wrapper').then(function(cetvrtiTest) {
			const prvaOpcija = cetvrtiTest.find('[for="options-id-0"]').text();
			const drugaOpcija = cetvrtiTest.find('[for="options-id-1"]').text();

			expect(prvaOpcija).to.equal('No');
			expect(drugaOpcija).to.equal('Yes');
		});
		cy.get('[for="options-id-0"]').click();
		cy.get('[type="button"]').click();

		// Gender pitanje
		cy.get('.sl-options-wrapper').then(function(petiTest) {
			const prvaOpcija = petiTest.find('[for="options-id-0"]').text();
			const drugaOpcija = petiTest.find('[for="options-id-1"]').text();
			const trecaOpcija = petiTest.find('[for="options-id-2"]').text();

			expect(prvaOpcija).to.equal('Male');
			expect(drugaOpcija).to.equal('Female');
			expect(trecaOpcija).to.equal('In another way');
		});
		cy.get('[for="options-id-1"]').click();
		cy.get('[type="button"]').click();

		// DOB pitanje
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper');
		// preko id-a biramo opciju i tvrdimo da je njena vrednost 1
		cy.get('#select-month').select('January').should('have.value', '1');
		cy.get('#select-day').select('1').should('have.value', '1');
		cy.get('#select-year').select('1991');
		// Proveravamo da li Privacy Policy ima href - https://www.sleepio.com/privacy/
		cy
			.get('.sl-page-post-answer')
			.contains('Privacy Policy')
			.should('have.attr', 'href', 'https://www.sleepio.com/privacy/');
		cy.get('[type="button"]').click();

		//employment pitanje, biramo svaku opciju sa .select()
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Employed full-time');
		cy.get('[type="button"]').click();

		// Prvo kondicionalno pitanje
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('10%');
		cy.get('[type="button"]').click();

		cy.get('input').type('0');
		cy.get('[type="button"]').click();

		cy.get('.sl-page-title').should('contain', 'What is your career level?');
		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('Accenture Leadership');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Levels 5-7');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Levels 8-10');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Levels 11-13');
		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select("I don't work at Accenture");
		cy.get('[type="button"]').click();

		cy.get('.sl-page-title').should('contain', 'What DTE do you belong to?');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Corporate Functions');
		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('Accenture Operations');
		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('Accenture Technology');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Accenture Strategy');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Accenture Digital');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Financial Services');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Products');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Resources');
		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('Health & Public Services');
		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('Communications, Media, & Technology');
		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select("I don't work for Accenture");
		cy.get('[type="button"]').click();

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
		cy.get('[for="options-id-none-of-the-above"]').click();
		cy.get('[type="button"]').click();

		// sledeci Flow
		cy.clearCookies();
		cy.clearLocalStorage();
		cy.visit('https://onboarding.sleepio.com/sleepio/roche/1#1/1');
		cy.get('[type="button"]').click(); // nalazi dugme po tipu i klasi i klikne na njega

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/input').click();
		cy.get('[type="button"]').click();

		// Druga strana OST-a

		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvorimo ga, a posle biramo svaku opciju
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('2-4 weeks');
		cy.get('[type="button"]').click();

		// Treca strana OST-a
		// isti sistem kao gore - dodeljujemo varijable, poredimo sa onim sto se nalazi na stranici
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
		cy.get('[for="options-id-4"]').click();
		cy.get('[type="button"]').click();

		// Cetvrta strana OST-a
		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvaramo ga i svaku opciju biramo sa .select()
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Very much');
		cy.get('[type="button"]').click();

		// Peta strana OST-a
		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvaramo ga i svaku opciju biramo sa .select()
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('0 nights');
		cy.get('[type="button"]').click();

		// Peta strana OST-a
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Very often');
		cy.get('[type="button"]').click();

		// Sesta strana OST-a
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('High chance');
		cy.get('[type="button"]').click();

		cy.get('.sl-options-wrapper').then(function(treciTest) {
			const prvaOpcija = treciTest.find('[for="options-id-0"]').text();
			const drugaOpcija = treciTest.find('[for="options-id-1"]').text();
			const trecaOpcija = treciTest.find('[for="options-id-2"]').text();

			expect(prvaOpcija).to.equal('Yes');
			expect(drugaOpcija).to.equal('No');
			expect(trecaOpcija).to.equal("I don't snore");
		});
		cy.get('[for="options-id-2"]').click();
		cy.get('[type="button"]').click();

		cy.get('.sl-options-wrapper').then(function(cetvrtiTest) {
			const prvaOpcija = cetvrtiTest.find('[for="options-id-0"]').text();
			const drugaOpcija = cetvrtiTest.find('[for="options-id-1"]').text();

			expect(prvaOpcija).to.equal('No');
			expect(drugaOpcija).to.equal('Yes');
		});
		cy.get('[for="options-id-0"]').click();
		cy.get('[type="button"]').click();

		// Gender pitanje
		cy.get('.sl-options-wrapper').then(function(petiTest) {
			const prvaOpcija = petiTest.find('[for="options-id-0"]').text();
			const drugaOpcija = petiTest.find('[for="options-id-1"]').text();
			const trecaOpcija = petiTest.find('[for="options-id-2"]').text();

			expect(prvaOpcija).to.equal('Male');
			expect(drugaOpcija).to.equal('Female');
			expect(trecaOpcija).to.equal('In another way');
		});
		cy.get('[for="options-id-1"]').click();
		cy.get('[type="button"]').click();

		// DOB pitanje
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper');
		// preko id-a biramo opciju i tvrdimo da je njena vrednost 1
		cy.get('#select-month').select('January').should('have.value', '1');
		cy.get('#select-day').select('1').should('have.value', '1');
		cy.get('#select-year').select('1991');

		cy
			.get('.sl-page-post-answer')
			.contains('Privacy Policy')
			.should('have.attr', 'href', 'https://www.sleepio.com/privacy/');
		cy.get('[type="button"]').click();

		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Employed full-time');
		cy.get('[type="button"]').click();

		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('10%');
		cy.get('[type="button"]').click();

		cy.get('input').type('0');
		cy.get('[type="button"]').click();

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
		cy.get('[for="options-id-none-of-the-above"]').click();
		cy.get('[type="button"]').click();

		cy.get('.sl-interactive--field-label').contains('UNIX ID or User ID');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[1]/div[3]/div/div/input').type('123456789');

		// sledeci Flow
		cy.clearCookies();
		cy.clearLocalStorage();
		cy.visit('https://onboarding.sleepio.com/sleepio/homedepot/1#1/1');
		cy.get('[type="button"]').click();

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/input').click();
		cy.get('[type="button"]').click();

		// Druga strana OST-a

		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvorimo ga, a posle biramo svaku opciju
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('2-4 weeks');
		cy.get('[type="button"]').click();

		// Treca strana OST-a
		// isti sistem kao gore - dodeljujemo varijable, poredimo sa onim sto se nalazi na stranici
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
		cy.get('[for="options-id-4"]').click();
		cy.get('[type="button"]').click();

		// Cetvrta strana OST-a
		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvaramo ga i svaku opciju biramo sa .select()
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Very much');
		cy.get('[type="button"]').click();

		// Peta strana OST-a
		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvaramo ga i svaku opciju biramo sa .select()
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('0 nights');
		cy.get('[type="button"]').click();

		// Peta strana OST-a
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Very often');
		cy.get('[type="button"]').click();

		// Sesta strana OST-a
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('High chance');
		cy.get('[type="button"]').click();

		cy.get('.sl-options-wrapper').then(function(treciTest) {
			const prvaOpcija = treciTest.find('[for="options-id-0"]').text();
			const drugaOpcija = treciTest.find('[for="options-id-1"]').text();
			const trecaOpcija = treciTest.find('[for="options-id-2"]').text();

			expect(prvaOpcija).to.equal('Yes');
			expect(drugaOpcija).to.equal('No');
			expect(trecaOpcija).to.equal("I don't snore");
		});
		cy.get('[for="options-id-2"]').click();
		cy.get('[type="button"]').click();

		cy.get('.sl-options-wrapper').then(function(cetvrtiTest) {
			const prvaOpcija = cetvrtiTest.find('[for="options-id-0"]').text();
			const drugaOpcija = cetvrtiTest.find('[for="options-id-1"]').text();

			expect(prvaOpcija).to.equal('No');
			expect(drugaOpcija).to.equal('Yes');
		});
		cy.get('[for="options-id-0"]').click();
		cy.get('[type="button"]').click();

		// Gender pitanje
		cy.get('.sl-options-wrapper').then(function(petiTest) {
			const prvaOpcija = petiTest.find('[for="options-id-0"]').text();
			const drugaOpcija = petiTest.find('[for="options-id-1"]').text();
			const trecaOpcija = petiTest.find('[for="options-id-2"]').text();

			expect(prvaOpcija).to.equal('Male');
			expect(drugaOpcija).to.equal('Female');
			expect(trecaOpcija).to.equal('In another way');
		});
		cy.get('[for="options-id-1"]').click();
		cy.get('[type="button"]').click();

		// DOB pitanje
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper');
		// preko id-a biramo opciju i tvrdimo da je njena vrednost 1
		cy.get('#select-month').select('January').should('have.value', '1');
		cy.get('#select-day').select('1').should('have.value', '1');
		cy.get('#select-year').select('1991');

		// Proveravamo da li Privacy Policy ima href - https://www.sleepio.com/privacy/
		cy
			.get('.sl-page-post-answer')
			.contains('Privacy Policy')
			.should('have.attr', 'href', 'https://www.sleepio.com/privacy/');
		cy.get('[type="button"]').click();

		//employment pitanje, biramo svaku opciju sa .select()
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Employed full-time');
		cy.get('[type="button"]').click();

		// Prvo kondicionalno pitanje
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('10%');
		cy.get('[type="button"]').click();

		cy.get('input').type('0');
		cy.get('[type="button"]').click();

		cy.get('.sl-page-title').should('contain', 'Which of the following best describes you?');
		cy
			.get('.sl-page-post-question')
			.should('contain', 'If both apply to you, please select "Home Depot associate"');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/input').click();
		cy.get('[type="button"]').click();

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/input').click();
		cy.get('[type="button"]').click();

		cy.get('.sl-interactive--field-label').contains('Your 9-digit Associate ID or Healthy Living Program ID');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[1]/div[3]/div[2]/div/input').type('123456789');

		// novi flow

		cy.clearCookies();
		cy.clearLocalStorage();
		cy.visit('https://onboarding.sleepio.com/sleepio/capri/1#1/1');
		cy.get('[type="button"]').click();

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/input').click();
		cy.get('[type="button"]').click();

		// Druga strana OST-a

		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvorimo ga, a posle biramo svaku opciju
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('2-4 weeks');
		cy.get('[type="button"]').click();

		// Treca strana OST-a
		// isti sistem kao gore - dodeljujemo varijable, poredimo sa onim sto se nalazi na stranici
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
		cy.get('[for="options-id-4"]').click();
		cy.get('[type="button"]').click();

		// Cetvrta strana OST-a
		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvaramo ga i svaku opciju biramo sa .select()
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Very much');
		cy.get('[type="button"]').click();

		// Peta strana OST-a
		cy.get('.sl-select-form');
		// kliknemo na padajuci meni i otvaramo ga i svaku opciju biramo sa .select()
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('0 nights');
		cy.get('[type="button"]').click();

		// Peta strana OST-a
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Very often');
		cy.get('[type="button"]').click();

		// Sesta strana OST-a
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('High chance');
		cy.get('[type="button"]').click();

		cy.get('.sl-options-wrapper').then(function(treciTest) {
			const prvaOpcija = treciTest.find('[for="options-id-0"]').text();
			const drugaOpcija = treciTest.find('[for="options-id-1"]').text();
			const trecaOpcija = treciTest.find('[for="options-id-2"]').text();

			expect(prvaOpcija).to.equal('Yes');
			expect(drugaOpcija).to.equal('No');
			expect(trecaOpcija).to.equal("I don't snore");
		});
		cy.get('[for="options-id-2"]').click();
		cy.get('[type="button"]').click();

		cy.get('.sl-options-wrapper').then(function(cetvrtiTest) {
			const prvaOpcija = cetvrtiTest.find('[for="options-id-0"]').text();
			const drugaOpcija = cetvrtiTest.find('[for="options-id-1"]').text();

			expect(prvaOpcija).to.equal('No');
			expect(drugaOpcija).to.equal('Yes');
		});
		cy.get('[for="options-id-0"]').click();
		cy.get('[type="button"]').click();

		// Gender pitanje
		cy.get('.sl-options-wrapper').then(function(petiTest) {
			const prvaOpcija = petiTest.find('[for="options-id-0"]').text();
			const drugaOpcija = petiTest.find('[for="options-id-1"]').text();
			const trecaOpcija = petiTest.find('[for="options-id-2"]').text();

			expect(prvaOpcija).to.equal('Male');
			expect(drugaOpcija).to.equal('Female');
			expect(trecaOpcija).to.equal('In another way');
		});
		cy.get('[for="options-id-1"]').click();
		cy.get('[type="button"]').click();

		// DOB pitanje
		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper');
		// preko id-a biramo opciju i tvrdimo da je njena vrednost 1
		cy.get('#select-month').select('January').should('have.value', '1');
		cy.get('#select-day').select('1').should('have.value', '1');
		cy.get('#select-year').select('1991');

		cy
			.get('.sl-page-post-answer')
			.contains('Privacy Policy')
			.should('have.attr', 'href', 'https://www.sleepio.com/privacy/');
		cy.get('[type="button"]').click();

		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('Employed full-time');
		cy.get('[type="button"]').click();

		cy.get('.sl-select-form');
		cy.get('.sl-select-wrapper').click();
		cy.get('.sl-select').select('10%');
		cy.get('[type="button"]').click();

		cy.get('input').type('0');
		cy.get('[type="button"]').click();

		cy.get('.sl-page-title').should('contain', 'In which area of the business do you work?');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Retail');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Retail Development');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Corporate');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Distribution Center');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Other');

		cy.get('[type="button"]').click();

		cy.get('.sl-page-title').should('contain', 'Are you enrolled in any of the following benefits plans?');
		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('Yes, Cigna Enhanced Medical Plan');
		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('Yes, Cigna Core Medical Plan');
		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('Yes, Cigna CDHP Medical Plan');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('No');
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Other');

		cy.get('[type="button"]').click();
	});
});
