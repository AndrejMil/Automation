class careaccesspostcode {
	careaccessTitle() {
		return cy
			.get('.sl-page-title')
			.should(
				'contain',
				"We've partnered with the Social Care sector to provide you access. Please enter your postcode."
			);
	}

	careaccessAnswer() {
		return cy.get('.sl-input-text ').type('5');
	}
}

export default careaccesspostcode;
