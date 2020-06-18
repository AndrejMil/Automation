class rocheSignUp {
	unixID() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[4]/label')
			.contains('UNIX ID or User ID')
			.then(() => {
				cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/div[4]/div/input').click().type('12345');
			});
	}
}
export default rocheSignUp;
