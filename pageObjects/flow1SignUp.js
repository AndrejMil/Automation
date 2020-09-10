class flow1SignUp {
	signUpHeader() {
		return cy.get('h1').should('contain', 'Get Your Sleep Score');
	}

	firstNameLabel() {
		return cy.get('[data-input-name="first_name"]').should('contain', 'First Name*');
	}
	firstNameImput() {
		return cy.get('[name="first_name"]').click({ force: true }).type('An23');
	}
	lastNameLabel() {
		return cy.get('[data-input-name="last_name"]').should('contain', 'Last Name*');
	}
	lastNameImput() {
		return cy.get("[name = 'last_name']").click({ force: true }).type('Mil234');
	}

	emailLabel() {
		return cy.get('[data-input-name="email"]').should('contain', 'Email*');
	}
	emailLabelII() {
		return cy.get('[data-input-name="email"]').should('contain', 'Email (Personal Email Recommended)*');
	}
	emailImput() {
		return cy.get('[name= "email"]').click({ force: true }).type('andrej.milosavljevic+090910@sleepio.com');
	}
	passwordLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Choose a password*');
	}

	passwordLabelII() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Password*');
	}

	passwordImput() {
		return cy.get('[name="password"]').click({ force: true }).type('Qwerty123');
	}
	phoneNumberImput() {
		return cy.get('[data-input-name="phone_number"]').click({ force: true }).type('555-777');
	}
	phoneNumberLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Phone Number');
	}
	passwordHint() {
		return cy
			.get('.sl-interactive--help-text')
			.should(
				'contain',
				'Your password should contain at least 8 characters and at least three of the following: an uppercase letter, a lowercase letter, a symbol and a number.'
			);
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
	doctorLabel() {
		return cy
			.get('.sl-interactive--field-label')
			.contains(
				'I acknowledge that if I have been previously diagnosed with insomnia disorder, I should review the'
			);
	}

	doctorLink() {
		return cy
			.get('[href="https://www.sleepio.com/suitable/"]')
			.contains('suitability information')
			.should('have.attr', 'href', 'https://www.sleepio.com/suitable/');
	}
	privacyCheck() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[5]/input').click();
	}
	doctorCheck() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[6]/input').click();
	}
}
export default flow1SignUp;
