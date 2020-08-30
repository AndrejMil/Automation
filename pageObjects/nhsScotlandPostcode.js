class nhsScotlandPostcode {
	nhsScotPostcodeTitle() {
		return cy
			.get('.sl-page-title')
			.should('contain', 'We have partnered with NHS Scotland to provide you access. Please enter your postcode');
	}
	nhsScotPostcodeAnswer() {
		return cy.get('.sl-input-text ').click({ force: true }).type('12345');
	}
}
export default nhsScotlandPostcode;
