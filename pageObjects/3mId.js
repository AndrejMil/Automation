class threeMId {
	threeMTitle() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/label[1]')
			.should('contain', 'Employee ID*');
	}

	threeMHelpText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/label[2]')
			.should(
				'contain',
				"If you're the spouse / partner of a 3M employee, please enter their employee ID followed by your date of birth in mmddyy format"
			);
	}
	threeMAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/div/input').type('12345');
	}
}

export default threeMId;
