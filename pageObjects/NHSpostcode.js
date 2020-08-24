class nhspostcode {
	nhspostcodeTitle() {
		return cy
			.get('.sl-page-title')
			.should('contain', 'We’ve partnered with the NHS to provide you access. Please enter your postcode.');
	}

	nhspostcodeAnswer() {
		return cy.get('.sl-input-text ').type('5');
	}
}

export default nhspostcode;
