class daylightGif4 {
	gif4Text() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/p')
			.should('contain', 'There are things you can do that will help');
	}
}
export default daylightGif4;
