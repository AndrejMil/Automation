class flow76Eligibility {
	coverage() {
		return cy.get('.sl-interactive-v2 > h1').should('contain', 'Activate Your Coverage ');
	}

	firstNameLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'First Name');
	}
	firstName() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[1]/div/input').type('An23');
	}
	midleNameLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'M.I.');
	}
	midleName() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[2]/div/input').type('S');
	}
	lastNameLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Last Name');
	}
	lastName() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[3]/div/input').type('Mil23');
	}
	dobLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Date of Birth');
	}
	zipLabel() {
		return cy.get('.sl-interactive--field-label').should('contain', 'Zip Code');
	}
	zipImput() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[5]/div/input').type('123457');
	}
}

export default flow76Eligibility;
