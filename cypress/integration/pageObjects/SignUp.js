class SignUp {

	signUpHeader() {
		return cy.get('h1').should('contain', 'Get Your Sleep Score');
	}

	firstNameLabel() {
		return cy.get('[data-input-name="first_name"]').should('contain', 'First Name*');
	}

	firstNameImput() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[1]/div/input')
			.click({ force: true })
			.type('An23');
	}

	lastNameLabel() {
		return cy.get('[data-input-name="last_name"] > .sl-interactive--field-label').should('contain', 'Last Name*');
	}

	lastNameImput() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[2]/div/input')
			.click({ force: true })
			.type('Mil234');
	}

	emailLabel() {
		return cy.get('[data-input-name="email"] > .sl-interactive--field-label').should('contain', 'Email*');
	}

	emailLabelII() {
		return cy.get('[data-input-name="email"]').should('contain', 'Email (Personal Email Recommended)*');
	}

	emailInputFlow1() {
		return cy.get('[name= "email"]').click({ force: true }).type('andrej.milosavljevic+00600051@sleepio.com');
	}

	emailInputFlow76() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.click({ force: true })
			.type('andrej.milosavljevic+000060157@sleepio.com');
	}

	emailImputflow70() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.click({ force: true })
			.type('andrej.milosavljevic+0000060153@sleepio.com');
	}

	emailImputflow77() { 
		return cy.get('[name="email"]')
			.click({ force: true })
			.type('andrej.milosavljevic+0000006057@sleepio.com');
	}

	emailImputflow132() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.click({ force: true })
			.type('andrej.milosavljevic+000006015@sleepio.com');
	}


	emailImputflow78() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.click({ force: true })
			.type('andrej.milosavljevic+0000006010@sleepio.com');
	}


	emailInputflow107() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.click({ force: true })
			.type('andrej.milosavljevic+0000006011@sleepio.com');
	}

	emailInputflow122() { 
		return cy.get('[name="email"]')
			.click({ force: true })
			.type('andrej.milosavljevic+006088@sleepio.com');
	}

	passwordLabel() { 
		return cy.get('.sl-interactive--field-label').should('contain', 'Choose a password*');
	}

	passwordLabelII() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Password*');
	}

	phoneLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Phone Number*');
	}

	phoneLabel76() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/label')
			.should('contain', 'Mobile Number');
	}
	
	phoneNumberLabel() {
		return cy.get('[data-input-name="phone_number"]').should(
			'contain',
			'Phone Number'
		);
	}

	phoneNumberInput() {
		return cy.get('[name="phone_number"]').type('12345')
	}

	passwordInput() {
		return cy.get('[name="password"]').type('Qwerty123');
	}

	passwordHint() {
		return cy
			.get('.sl-interactive--help-text')
			.should(
				'contain',
				'Your password should contain at least 8 characters and at least three of the following: an uppercase letter, a lowercase letter, a symbol and a number.'
			);
	}

	doctorLabel() {
		return cy
			.get('.sl-interactive--field-label')
			.contains(
				'I acknowledge that if I have been previously diagnosed with insomnia disorder, I should review the'
			);
	}

	suitable() {
		return cy
			.get('[href="https://www.sleepio.com/suitable/"]')
			.contains('suitability information')
			.should('have.attr', 'href', 'https://www.sleepio.com/suitable/');
	}

	checkBoxes() {
		return cy.get( '[type="checkbox"]' ).each( (checkbox) => {
			checkbox.click();
		})
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
export default SignUp;
