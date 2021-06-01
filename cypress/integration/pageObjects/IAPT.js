class IAPT {
	iaptText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[1]/label')
			.should('contain', 'Please enter your IAPT code');
	}

	iaptAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/input').type('12345');
	}
}
export default IAPT;
