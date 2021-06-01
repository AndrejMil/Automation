class downloadDaylight {
	downloadText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/p')
			.should('contain', 'Download the Daylight app and review the');
	}

	downloadLink() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/p/a')
			.should('contain', 'Instructions for Use');
	}
}
export default downloadDaylight;
