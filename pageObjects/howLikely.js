class howLikely {
	howLikelyTitle() {
		return cy
			.get('.sl-page-title')
			.should(
				'contain',
				'How likely is it that you would fall asleep during the day without intending to, or that you would struggle to stay awake while you were doing things?'
			);
	}
	noChance() {
		return cy.get('.sl-select').select('No chance');
	}
	slightChance() {
		return cy.get('.sl-select').select('Slight chance');
	}
	moderatChance() {
		return cy.get('.sl-select').select('Moderate chance');
	}
	highChance() {
		return cy.get('.sl-select').select('High chance');
	}
}
export default howLikely;
