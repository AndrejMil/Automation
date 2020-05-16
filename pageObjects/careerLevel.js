class careerLevel {
	careerTitle() {
		return cy.get('.sl-page-title').should('contain', 'What is your career level?');
	}
	leadership() {
		return cy.get('.sl-select').select('Accenture Leadership');
	}
	levels5() {
		return cy.get('.sl-select').select('Levels 5-7');
	}
	levels8() {
		return cy.get('.sl-select').select('Levels 8-10');
	}
	levels11() {
		return cy.get('.sl-select').select('Levels 11-13');
	}
	dontwork() {
		return cy.get('.sl-select').select("I don't work at Accenture");
	}
}
export default careerLevel;
