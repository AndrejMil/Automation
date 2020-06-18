class howOften {
	howOftenTitle() {
		return cy
			.get('.sl-page-title')
			.should(
				'contain',
				'How often do you find that you don’t have time for yourself because you’ve been focused on others?'
			);
	}
	almostAlways() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input').click();
	}

	mostOf() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/input').click();
	}

	aboutHalf() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[3]/label/input').click();
	}

	sometimes() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[4]/label/input').click();
	}

	almostNever() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/input').click();
	}
}
export default howOften;
