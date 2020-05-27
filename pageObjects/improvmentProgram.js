class improvmentProgram {
	improvmentProgramTitle() {
		return cy
			.get('.sl-page-title')
			.should(
				'contain',
				'How ready are you to participate in a sleep improvement program that requires changing your lifestyle and habits at this time?'
			);
	}
	notReady() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
	}
	undecided() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/input').click();
	}
	ready() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[3]/label/input').click();
	}
}
export default improvmentProgram;
