class daylightGif3 {
	gif3Text() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/p')
			.should('contain', "But, you're not alone in feeling this way");
	}
}
export default daylightGif3;
