class poorSleep {
	poorSleepTitle() {
		return cy
			.get('.sl-page-title')
			.should('contain', 'How much did poor sleep affect your productivity while you were working?');
	}
	sleep100() {
		return cy.get('.sl-select').select('100%-Unable to work');
	}
	sleep90() {
		return cy.get('.sl-select').select('90%');
	}
	sleep80() {
		return cy.get('.sl-select').select('80%');
	}
	sleep70() {
		return cy.get('.sl-select').select('70%');
	}
}
export default poorSleep;
