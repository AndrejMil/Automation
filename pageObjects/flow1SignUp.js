class flow1SignUp {
	signUpHeader() {
		return cy.get('.sl-interactive-v2 > h1').should('contain', 'Get Your Sleep Score');
	}

	firstNameLabel() {
		return cy.get('[data-input-name="first_name"] > .sl-interactive--field-label').should('contain', 'First Name*');
	}
	firstNameImput() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[1]/div/input').type('An23');
	}
	lastNameLabel() {
		return cy.get('[data-input-name="last_name"] > .sl-interactive--field-label').should('contain', 'Last Name*');
	}
	lastNameImput() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[2]/div/input').type('Mil234');
	}

	emailLabel() {
		return cy.get('[data-input-name="email"] > .sl-interactive--field-label').should('contain', 'Email*');
	}
	emailImput() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.type('andrej.milosavljevic+200537@sleepio.com');
	}
	passwordLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Choose a password*');
	}

	passwordImput() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[4]/div/input').type('Qwerty123');
	}
	passwordHint() {
		return cy
			.get('.sl-interactive--help-text')
			.should(
				'contain',
				'Your password should contain at least 8 characters and at least three of the following: an uppercase letter, a lowercase letter, a symbol and a number.'
			);
	}
	signUpCheckBox() {
		return cy.get('[data-hidden="false"] > .sl-input-checkbox').click();
	}
	privacy() {
		return cy
			.get('[href="https://www.sleepio.com/privacy"]')
			.contains('Privacy Policy')
			.should('have.attr', 'href', 'https://www.sleepio.com/privacy');
	}
	terms() {
		return cy
			.get('[href="https://www.sleepio.com/terms"]')
			.contains('Terms')
			.should('have.attr', 'href', 'https://www.sleepio.com/terms');
	}
	suitable() {
		return cy
			.get('[data-hidden="true"] > .sl-interactive--field-label > a')
			.contains('Sleepio course is suitable for you')
			.should('have.attr', 'href', 'https://sleepio.com/suitable/');
	}
	signUpGoogle() {
		return cy.get('#sl-google-sso').contains('with Google');
	}
	signUpFacebook() {
		return cy.get('#sl-facebook-sso').contains(' with Facebook');
	}

	signUpButton() {
		return cy.get('.sl-button').click();
	}
}
export default flow1SignUp;
