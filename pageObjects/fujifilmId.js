class fujifilmId {
	fujifilmIdTitle() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/label[1]')
			.should('contain', 'Employee ID*');
	}

	fujifilmIdHelpText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/label[2]')
			.should('contain', "If you're the spouse / partner of a Fujifilm employee, please enter their employee ID");
	}
	fujifilmIdAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/div/input').type('12345');
	}
}

export default fujifilmId;
