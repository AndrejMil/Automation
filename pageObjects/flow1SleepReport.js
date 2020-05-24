class flow1SleepReport {
	headerSleepReport() {
		return cy.get('.sl-header__text').should('contain', 'Your sleep score');
	}

	logOut() {
		return cy.get('.sl-header__login').should('contain', 'Log Out');
	}
	reportButton() {
		return cy.get('.sl-button').click();
	}
}

export default flow1SleepReport;
