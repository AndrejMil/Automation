class thought {
	thoughtTitle() {
		return cy
			.get('.sl-page-title')
			.should('contain', 'How often do you have the thought, “if I don’t do it, nobody will”?');
	}
}
export default thought;
