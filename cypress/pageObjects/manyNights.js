class manyNights {
	manyNightsTitle() {
		return cy
			.get('.sl-page-title')
			.should('contain', 'How many nights a week have you had a problem with your sleep?');
	}
	night0() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('0 nights');
	}
	night1() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('1 night');
	}
	night2() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('2 nights');
	}
	night3() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('3 nights');
	}
	night4() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('4 nights');
	}
	night5() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('5 nights');
	}
	night6() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('6 nights');
	}
	night7() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('7 nights');
	}
}
export default manyNights;
