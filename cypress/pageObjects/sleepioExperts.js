class sleepioExperts {
	expertsTitle() {
		return cy
			.get('.sl-page-title')
			.should('contain', "Lastly, do you have any questions you'd like to share with our Sleepio Experts?");
	}
	expertsTitle1() {
		return cy
			.get('.sl-page-post-question')
			.should(
				'contain',
				'Please note that Sleepio Experts are unable to provide medical advice. Consult your doctor for questions about diagnoses, treatments, medications, or other medical questions.'
			);
	}
	expertsInput() {
		return cy.get('.sl-input-text').type('Ništa');
	}
	expertsSkip() {
		return cy.get('.sl-skip-question').should('contain', 'No, continue').click();
	}
}
export default sleepioExperts;
