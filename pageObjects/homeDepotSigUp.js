class homeDepotSignUp {
	homeZip() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[1]/div[3]/div[1]/label[1]')
			.contains('Home ZIP Code');
	}
	associateID() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[5]/label')
			.contains('Your 9-Digit Associate ID or Healthy Living Program ID')
			.then(() => {
				cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[5]/div/input').click().type('12345');
			});
	}
}
export default homeDepotSignUp;
