class nhsScotland {
	nhsScotlandTitle() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[1]/label')
			.should('contain', 'We have partnered with NHS Scotland to provide you access. Please enter your postcode');
	}

	nhsScotlandAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/input').type('5');
	}
}

export default nhsScotland;
