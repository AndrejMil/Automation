class daylightGif1 {
	gif1Text() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/p')
			.should('contain', 'Life can be really tough.');
	}
}
export default daylightGif1;
