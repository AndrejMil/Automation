class importantThings {
	importantThingsTitle() {
		return cy
			.get('.sl-page-title')
			.should(
				'contain',
				'How often have you felt that you were unable to control the important things in your life?'
			);
	}

	never() {
		return cy.get('.sl-select').select('Never');
	}

	almostNever() {
		return cy.get('.sl-select').select('Almost never');
	}

	sometimes() {
		return cy.get('.sl-select').select('Sometimes');
	}

	fairlyOften() {
		return cy.get('.sl-select').select('Fairly often');
	}

	veryOften() {
		return cy.get('.sl-select').select('Very often');
	}
}

export default importantThings;
