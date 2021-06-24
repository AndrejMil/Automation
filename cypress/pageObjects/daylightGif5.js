class daylightGif5 {
	gif5Text() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/p/text()')
			.should(
				'contain',
				'Uncovering the patterns of thought that are driving your negative feelings is the first step.'
			);
	}
	identifyButton() {
		return cy.get('.inner-button').click();
	}
}
export default daylightGif5;
