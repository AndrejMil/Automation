class daylightVideo {
	daylightVideoText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div/div[2]')
			.should('contain', 'What Drives Anxiety');
	}

	daylightVideoButton() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div/div[3]/button').click();
	}
}
export default daylightVideo;
