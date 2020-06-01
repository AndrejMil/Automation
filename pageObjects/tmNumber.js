class tmNumber {
	tmNumberTitle() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/label[1]')
			.should('contain', 'TM Number**');
	}

	tmNumberHelpText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/label[2]')
			.should(
				'contain',
				'Target team members, don’t forget to add leading 00’s to make your TM Number into a 10 digit number. If you’re the spouse/domestic partner of a Target team member, please enter their TM Number with an ‘S’ at the end.'
			);
	}
	tmNumberAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/div/input').type('12345');
	}
}

export default tmNumber;
