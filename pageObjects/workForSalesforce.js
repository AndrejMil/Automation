class workForSalesforce {
	workForSalesforceTitle() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[1]/label')
			.should('contain', 'In which country do you work for Salesforce?');
	}

	italy() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Italy');
	}

	france() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('France');
	}

	dontWorkSalesforce() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select("I don't work for Salesforce");
	}
}

export default workForSalesforce;
