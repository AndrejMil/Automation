class reportText {

	reportTextI() {
		return cy.get('.sl-report-text').should('contain', 'When you sleep, you sleep -- that’s great! Whether you’ve always been a good sleeper or you’ve had to work hard at it, you’re part of the 17% of Sleepio users who don’t have an issue with sleep.');
	}

	reportTextII() {
		return cy.get('.sl-report-text').should('contain', 'You’re not alone. 1 in 3 people aren’t getting enough sleep on a regular basis. Whether you have too much to do or a restrictive schedule, it can be challenging to prioritize sleep. The benefits of getting at least 7-7.5 hours of sleep is so great – you don’t want to miss out.');
	}
	

}
export default reportText;
