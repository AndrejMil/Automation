class daylightSlider {
	sliderText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/p')
			.should('contain', 'And how intense are these feelings?');
	}

	slider() {
		return cy
			.get('#intensityValue')
			.trigger('mousedown')
			.trigger('mousemove', { clientX: 1500, clientY: 50 })
			.trigger('mouseup');
	}
}
export default daylightSlider;
