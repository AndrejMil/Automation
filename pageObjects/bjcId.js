class bjcId {
	bjcTitle() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/label[1]')
			.should('contain', 'Employee ID*');
	}

	bjcIdHelpText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/label[2]')
			.should('contain', "If you're the spouse / partner of a BJC employee, please enter their employee ID.");
	}
	bjcIdAnswer() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/div/input')
			.click({ force: true })
			.type('12345');
	}
}

export default bjcId;
