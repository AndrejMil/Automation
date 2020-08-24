class dob {
	dobTitle() {
		return cy.get('.sl-page-title').should('contain', 'What is your date of birth?');
	}
	monthJan() {
		return cy.get('[title="month"]').select('January');
	}
	monthFeb() {
		return cy.get('[title="month"]').select('February');
	}
	day1() {
		return cy.get('[title="day"]').select('1');
	}
	day2() {
		return cy.get('[title="day"]').select('2');
	}
	year1991() {
		return cy.get('[title="year"]').select('1991');
	}
	year1997() {
		return cy.get('[title="year"]').select('1997');
	}
	postAnswer() {
		return cy
			.get('.sl-page-post-answer')
			.should(
				'contain',
				"People's sleep patterns change with age so knowing how old you are helps us interpret your sleep problems.  Not to worry, we will maintain the privacy of this and any other health information you give us in compliance with the law and with our own"
			);
	}
	privacy() {
		return cy
			.get('.sl-page-post-answer')
			.contains('Privacy Policy')
			.should('have.attr', 'href', 'https://www.sleepio.com/privacy/');
	}
}
export default dob;
