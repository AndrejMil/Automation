class emotions {
	emotionsTitle() {
		return cy
			.get('.sl-page-title')
			.should('contain', 'How often have you felt uneasy about letting yourself feel strong emotions?');
	}
}
export default emotions;
