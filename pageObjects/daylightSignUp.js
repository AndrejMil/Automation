class daylightSignUp {
	firstName() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[1]/div/input').type('Andrej23');
	}

	lastName() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[2]/div/input').type('Mil23');
	}

	email() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.type('andrej.milosavljevic+19087@sleepio.com');
	}

	password() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[4]/div/input').type('Qwerty123');
	}
	passwordText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[4]/label[2]')
			.should(
				'contain',
				'Your password should contain at least 8 characters and at least three of the following: an uppercase letter, a lowercase letter, a symbol and a number.'
			);
	}

	checkBox() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[5]/input').click();
	}

	privacy() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[5]/label/a[1]')
			.contains('Privacy Policy')
			.should('have.attr', 'href', 'http://www.trydaylight.com/privacy');
	}

	terms() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[5]/label/a[2]')
			.contains('Terms of Service')
			.should('have.attr', 'href', 'http://www.trydaylight.com/terms');
	}

	suitable() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[7]/div/a')
			.contains('click here')
			.should('have.attr', 'href', 'http://www.trydaylight.com/suitable');
	}

	signUpButton() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[6]/button').click();
	}
}
export default daylightSignUp;
