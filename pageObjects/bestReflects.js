class bestReflects {
	bestReflectsTitle() {
		return cy.get('.sl-page-title').should('contain', 'Which statement best reflects your current state of mind?');
	}
	noPoint() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
	}
	thinking() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/input').click();
	}
	readyToWork() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[3]/label/input').click();
	}
}
export default bestReflects;
