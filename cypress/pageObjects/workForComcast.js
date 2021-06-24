class workForComcast {
	workForComcastTitle() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[1]/label')
			.should('contain', 'Where do you work for Comcast?');
	}

	usa() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('USA');
	}

	uk() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('UK');
	}

	dontWorkComcast() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select("I don't work for Comcast");
	}
}

export default workForComcast;
