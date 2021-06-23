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

	emailInput() { 
		let current = new Date();
		let day;
		let month;
		let mm = current.getMonth()+1;
		if (current.getDate()<10) { day = '0' + current.getDate().toString()}
		   else {day = current.getDate().toString() };
		if (mm < 10) { month = '0'+ mm.toString()}
		   else {month = mm.toString()};
		let datestamp = day + month + current.getFullYear().toString();    
		
		let hours;
		let minutes;
		let seconds;
		if (current.getHours() < 10) { hours = '0' + current.getHours().toString()}
		   else {hours = current.getHours().toString()};
		if (current.getMinutes() < 10) { minutes ='0' + current.getMinutes().toString()}
		   else {minutes = current.getMinutes().toString()}; 
		if (current.getSeconds() < 10) { seconds ='0' + current.getSeconds().toString()}
		else {seconds = current.getSeconds().toString()};     
		let timestamp = hours + minutes + seconds;
		
		cy.location('pathname').then(path => {
            const flowstamp = path.split('/')[3].toString();
            cy.wrap(flowstamp).as('flowstamp');
			
          })
        
		return cy.get('@flowstamp').then(flowstamp => {
			cy.get('[name="email"]')
			.click({ force: true })
			.type('natalija.serovic+testdelete' + datestamp + '_' + 'flow' + `${flowstamp}` + '_' + timestamp + '@sleepio.com');
		})
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
