class nhsAccess {
	nhsAccessTitle() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[1]/label')
			.should('contain', 'We’ve partnered with the NHS to provide you access. Please enter your postcode.');
	}

	nhsAccessAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/input').type('5');
	}
}

export default nhsAccess;
