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
	sleep60() {
		return cy.get('.sl-select').select('60%');
	}
	sleep50() {
		return cy.get('.sl-select').select('50%');
	}
	sleep40() {
		return cy.get('.sl-select').select('40%');
	}
	sleep30() {
		return cy.get('.sl-select').select('30%');
	}
	sleep20() {
		return cy.get('.sl-select').select('20%');
	}
	sleep10() {
		return cy.get('.sl-select').select('10%');
	}
	sleep0() {
		return cy.get('.sl-select').select('0% - No effect');
	}
}
export default poorSleep;
