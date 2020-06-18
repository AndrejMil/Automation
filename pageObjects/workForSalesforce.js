class workForSalesforce {
	workForSalesforceTitle() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[1]/label')
			.should('contain', 'In which country do you work for Salesforce?');
	}

	checkinhEveryOptionSalesForce(state, value) {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select(state)
			.invoke('val')
			.should('deep.equal', value);
	}
}

export default workForSalesforce;
