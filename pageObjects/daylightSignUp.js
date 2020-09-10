class daylightSignUp {
	firstName() {
		return cy.get('[name="first_name"]').type('An');
	}

	firstNameLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'First Name*');
	}

	lastName() {
		return cy.get('[name="last_name"]').type('Mi');
	}

	lastNameLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Last Name*');
	}

	email() {
		return cy.get('[name="email"]').click({ force: true }).type('andrej.milosavljevic+09097@sleepio.com');
	}

	emailLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Email*');
	}

	emailLabelQueens() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Email (Personal Email Recommended)*');
	}

	password() {
		return cy.get('[name="password"]').click({ force: true }).type('Qwerty123');
	}

	passwordLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Choose a password*');
	}

	passwordLabelII() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Password*');
	}
	passwordText() {
		return cy
			.get('.sl-interactive--help-text')
			.should(
				'contain',
				'Your password should contain at least 8 characters and at least three of the following: an uppercase letter, a lowercase letter, a symbol and a number.'
			);
	}

	privacyCheckBox() {
		return cy.get('[type="checkbox"]').first().click({ force: true });
	}

	doctorCheckBox() {
		return cy.get('[type="checkbox"]').last().click({ force: true });
	}

	privacy() {
		return cy
			.get('.sl-interactive--field-label')
			.contains('Privacy Policy')
			.should('have.attr', 'href', 'http://www.trydaylight.com/privacy');
	}

	terms() {
		return cy
			.get('.sl-interactive--field-label')
			.contains('Terms of Service')
			.should('have.attr', 'href', 'http://www.trydaylight.com/terms');
	}

	suitable() {
		return cy
			.get('.sl-interactive--field-label')
			.contains('suitability information')
			.should('have.attr', 'href', ' https://www.trydaylight.com/suitable');
	}

	signUpButton() {
		return cy.get('[type="submit"]').click({ force: true });
	}
}
export default daylightSignUp;
