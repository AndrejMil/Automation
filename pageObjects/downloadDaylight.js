class downloadDaylight {
	downloadText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/p')
			.should('contain', ' Download the Daylight app to continue your program.');
	}
}
export default downloadDaylight;
