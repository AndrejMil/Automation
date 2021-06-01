class howLong {
	howLongTitle() {
		return cy.get('.sl-page-title').should('contain', 'How long have you had a problem with your sleep?');
	}

	dontHaveProblem() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select("I don't have a problem");
	}
	weekOrLess() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('A week or less');
	}

	weeks() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('2-4 weeks');
	}
	month() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('1-2 months');
	}

	months() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('3-6 months');
	}
	sevenMonths() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('7-12 months');
	}

	years() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('1-2 years');
	}
	fiveYears() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('3-5 years');
	}
	sixYears() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('6-10 years');
	}

	moreYears() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('11 or more years');
	}

	moreYearsFlow132() {
		return cy.get('[id="id-59"]').select('11 or more years');
	}
}

export default howLong;
