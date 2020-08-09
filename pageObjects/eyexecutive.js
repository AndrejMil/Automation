class eyexecutive {
	eyexecutiveTitle() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/label[1]')
			.should('contain', 'Your EY UPN*');
	}

	eyexecutiveHeltText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/label[2]')
			.should(
				'contain',
				'If you are the spouse or domestic partner of an EY Staff or Partner, please fill in their EY UPN'
			);
	}

	eyexecutiveAnswer() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/div/input')
			.click({ force: true })
			.type('12345');
	}
}

export default eyexecutive;
