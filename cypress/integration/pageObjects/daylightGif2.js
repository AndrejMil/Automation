class daylightGif2 {
	gif2Text() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/p')
			.should('contain', "And you can't just snap your fingers and change how you feel");
	}
}
export default daylightGif2;
