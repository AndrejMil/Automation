class challenges {
	challengesTitle() {
		return cy
			.get('.sl-page-title')
			.should(
				'contain',
				'How often do you feel that others are more capable of handling life’s challenges than you are?'
			);
	}
}
export default challenges;
