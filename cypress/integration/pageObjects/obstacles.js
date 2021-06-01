class obstacles {
	obstaclesTitle() {
		return cy
			.get('.sl-page-title')
			.should('contain', 'How often do daily inconveniences feel like huge obstacles?');
	}
}
export default obstacles;
