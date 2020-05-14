class manyNights {
	manyNightsTitle() {
		return cy
			.get('.sl-page-title')
			.should('contain', 'How many nights a week have you had a problem with your sleep?');
	}
	night0() {
		return cy.get('.sl-select').select('0 nights');
	}
	night1() {
		return cy.get('.sl-select').select('1 nights');
	}
	night2() {
		return cy.get('.sl-select').select('2 nights');
	}
	night3() {
		return cy.get('.sl-select').select('3 nights');
	}
	night4() {
		return cy.get('.sl-select').select('4 nights');
	}
	night5() {
		return cy.get('.sl-select').select('5 nights');
	}
	night6() {
		return cy.get('.sl-select').select('6 nights');
	}
	night7() {
		return cy.get('.sl-select').select('7 nights');
	}
}
export default manyNights;
