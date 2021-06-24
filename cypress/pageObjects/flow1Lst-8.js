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
	shiftWorkerNo() {
		return cy.get('[name="71_0"]').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'No');
		});
	}
	shiftWorkerYes() {
		return cy.get('[name="71_1"]').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Yes');
		});
	}
	communityUsername() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[1]/label')
			.should('contain', 'Please choose a community username');
	}
	communityUsernameAnswer() {
		let current = new Date();
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/input')
		.type('Test'+current.getDate()+current.getMonth()+current.getFullYear()+'_'+current.getHours()+current.getMinutes()+current.getSeconds());
	}
	IFUlink() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[1]/div/p/a')
			.contains('Instructions for Use')
			.should('have.attr', 'href', 'https://go.bighealth.com/hubfs/Sleepio%20Instructions%20for%20Use.pdf');
	}
}
export default flow1Lst8;
