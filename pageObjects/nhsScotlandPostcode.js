class nhsScotlandPostcode {
	nhsScotPostcodeTitle() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[1]/label')
			.should(
				'contain',
				'We have partnered with NHS Scotland to provide you access. Please enter your postcode.'
			);
	}
	nhsScotPostcodeAnswer() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/input')
			.click({ force: true })
			.type('12345');
	}
}
export default nhsScotlandPostcode;
