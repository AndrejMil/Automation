class howLikelyNew {
	howLikelyTitle() {
		return cy
			.get('.sl-page-title')
			.should(
				'contain',
				'How likely is it that you would fall asleep during the day without intending to, or that you would struggle to stay awake while you were doing things?'
			);
	}
	noChance() {
		return cy.get('#options-id-0').click();
	}
	slightChance() {
		return cy.get('#options-id-1').click();
	}
	moderatChance() {
		return cy.get('#options-id-2').click();
	}
	highChance() {
		return cy.get('#options-id-3').click();
	}
}
export default howLikelyNew;
