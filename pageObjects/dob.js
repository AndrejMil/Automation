class dob {
	dobTitle() {
		return cy.get('.sl-page-title').should('contain', 'What is your date of birth?');
	}
	monthJan() {
		return cy.get('#select-month').select('January');
	}
	monthFeb() {
		return cy.get('#select-month').select('February');
	}
	day1() {
		return cy.get('#select-day').select('1');
	}
	day2() {
		return cy.get('#select-day').select('2');
	}
	year1991() {
		return cy.get('#select-year').select('1991');
	}
	year1997() {
		return cy.get('#select-year').select('1997');
	}
}
export default dob;
