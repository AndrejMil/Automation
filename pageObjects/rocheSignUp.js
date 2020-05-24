class rocheSignUp {
	unixID() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[1]/div[3]/div/label[1]')
			.contains('UNIX ID or User ID');
	}
}
export default rocheSignUp;
