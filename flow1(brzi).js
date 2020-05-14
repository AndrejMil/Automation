/// <reference types="cypress" />

describe('Flow1 testiranje', () => {
	it.only('Testiranje prvog flow-a', () => {
		cy.visit('https://onboarding.qa.sleepio.com/sleepio/big-health#1/1'); //odlazak na big-health
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
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
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

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
		cy.get('[type="button"]').click();

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
		cy.get('[type="button"]').click();

		// Gender pitanje
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
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

		//biramo expert guide

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/input').click();
		cy.get('[type="button"]').click();
		//prvo proveravamo heder

		cy.get('.sl-input-text#first_name').type('An23');
		cy.get('.sl-input-text#last_name').type('Mil234');
		cy.get('.sl-input-text#email').type('andrej.milosavljevic+040591@sleepio.com');
		cy.get('.sl-input-text#password').type('Qwerty123');

		cy.get('[type="checkbox"]').click();
		// pronalazimo linkove i proveravamo im href

		cy.get('[type="submit"]').click();
		// cekamo 5 sekundi zbog proglema sa sinkom
		cy.wait(3000);

		cy.get('.sl-header__login').should('contain', 'Log Out');
		cy.wait(3000);
		cy.get('.sl-button').click();

		// Prva strana LST-a

		cy.get('#16_4').click();

		cy.get('#17_4').click();

		cy.get('#18_4').click();

		cy.get('#19_4').click();

		cy.get('#20_4').click();

		cy.get('[type="button"]').click();

		// Druga strana LST-a

		// zbog promena u id-u polje za odgovor uzimamo preko xpath-a
		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select').select('8:00 PM');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select').select('8:00 PM');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select').select('5 mins');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('1');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select').select('10 mins');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select').select('9:00 AM');

		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select')
			.select('More than an hour too early');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select').select('10:45 AM');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/div/div/select').select('Very good');

		cy.get('[type="button"]').click();

		cy.get('#30_4').click();

		cy.get('#31_4').click();

		cy.get('#32_4').click();

		cy.get('#33_4').click();

		cy.get('#34_4').click();

		cy.get('#35_4').click();

		cy.get('#36_4').click();

		cy.get('#37_4').click();

		cy.get('#38_4').click();

		cy.get('[type="button"]').click();

		// Cetvrta strana LST-a

		cy.get('#39_4').click();

		cy.get('#40_4').click();

		cy.get('#41_4').click();

		cy.get('#42_4').click();

		cy.get('#43_4').click();

		cy.get('#44_4').click();

		cy.get('[type="button"]').click();

		// Peta strana LST-a

		cy.get('#45_4').click();

		cy.get('#46_4').click();

		cy.get('#47_4').click();

		cy.get('#48_4').click();

		cy.get('#49_4').click();

		cy.get('#50_4').click();

		cy.get('#51_4').click();

		cy.get('#52_4').click();

		cy.get('#53_4').click();

		cy.get('[type="button"]').click();

		// Sesta strana LST-a

		cy.get('#54_3').click();

		cy.get('#55_3').click();

		cy.get('#56_3').click();

		cy.get('#57_3').click();

		cy.get('#58_4').click();

		cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
			.select('10 - Extremely satisfied');
		cy.get('[type="button"]').click();

		cy.get('#60_4').click();

		cy.get('#61_4').click();

		cy.get('#62_4').click();

		cy.get('#63_4').click();

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('1 night');

		cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select').select('1 night');

		cy.get('#66_1').click();

		cy.get('#67_1').click();

		cy.get('#68_3').click();

		cy.get('#69_1').click();

		cy.get('#69_1').click();

		cy.get('#70_4').click();

		cy.get('[type="button"]').click();

		cy.get('#71_1').click();

		cy.get('[data-index="2"]').contains('Please choose a community username');
		cy.get('.sl-page-post-question').contains('You can change your username later in Account Settings');
		// unosim i comunity username
		cy.get('.sl-input-text').click().type('11yfftggubva');
		cy.get('[type="button"]').click();
		// cekamo 5 sekundi zbog problema sa sinkom
		cy.wait(5000);
	});
});
