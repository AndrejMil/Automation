class flow76SignUp {
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

	emailImput() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.click({ force: true })
			.type('andrej.milosavljevic+111322020@sleepio.com');
	}

	emailImputflow70() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.click({ force: true })
			.type('andrej.milosavljevic+1124552020@sleepio.com');
	}

	emailImputflow77() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.click({ force: true })
			.type('andrej.milosavljevic+1124572020@sleepio.com');
	}


	emailImputflow78() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.click({ force: true })
			.type('andrej.milosavljevic+1124702020@sleepio.com');
	}


	emailImputflow106() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input')
			.click({ force: true })
			.type('andrej.milosavljevic+1124712020@sleepio.com');
	}
	passwordLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Choose a password*');
	}
	phoneLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Phone Number*');
	}
	phoneLabel76() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/label')
			.should('contain', 'Mobile Number');
	}
	phoneImput() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/div/input')
			.click({ force: true })
			.type('555-777');
	}

	passwordImput() {
		return cy.get('[type="password"]')
			.click({ force: true })
			.type('Qwerty123');
	}

	passwordImput70() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/div/input').type('Qwerty123');
	}
	passwordImput77() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[4]/div/input').type('Qwerty123');
	}
	passwordHint() {
		return cy
			.get('.sl-interactive--help-text')
			.should(
				'contain',
				'Your password should contain at least 8 characters and at least three of the following: an uppercase letter, a lowercase letter, a symbol and a number.'
			);
	}
	doctorLabelNew() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[7]/label')
			.contains(
				'I acknowledge that if I have been previously diagnosed with insomnia disorder, I should review the'
			);
	}

	doctorLabel77() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[6]/label')
			.contains(
				'I acknowledge that if I have been previously diagnosed with insomnia disorder, I should review the'
			);
	}

	doctorLinkNew() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[7]/label/a')
			.should('have.attr', 'href', 'https://www.sleepio.com/suitable/');
	}
	doctorLink77() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[6]/label/a')
			.should('have.attr', 'href', 'https://www.sleepio.com/suitable/');
	}
	privacyCheckNew() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[6]/input').click();
	}

	privacyCheck77() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[5]/input').click();
	}
	doctorCheckNew() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[7]/input').click();
	}
	doctorCheck77() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/form/div[6]/input').click();
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

	signUpButton() {
		return cy.get('.sl-button').click();
	}
}
export default flow76SignUp;
