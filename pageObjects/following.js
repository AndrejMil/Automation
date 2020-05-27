class following {
	followingTitle() {
		return cy.get('.sl-page-title').should('contain', 'Which of the following are you?');
	}
	googler() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select').select('Googler');
	}
	alphabet() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('Alphabet character');
	}
	googleAlphabet() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/select')
			.select('Google/Alphabet dependent');
	}
}
export default following;
