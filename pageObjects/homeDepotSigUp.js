class homeDepotSignUp {
	homeZip() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[1]/div[3]/div[1]/label[1]')
			.contains('Home ZIP Code');
	}
	associateID() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[1]/div[3]/div[2]/label[1]')
			.contains('Your 9-Digit Associate ID or Healthy Living Program ID');
	}
}
export default homeDepotSignUp;
