class flow1Lst8 {
	aboutYou() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[1]/p')
			.should('contain', 'About you (page 8 / 8)');
	}
	shiftWorker() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[1]')
			.should('contain', 'Are you a shift worker?');
	}

	shiftWorkerAnswer() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/fieldset/div/div[1]/label/input')
			.click();
	}
	communityUsername() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[1]/label')
			.should('contain', 'Please choose a community username');
	}
	communityUsernameAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/input').type('11csjifvsdf');
	}
}
export default flow1Lst8;
