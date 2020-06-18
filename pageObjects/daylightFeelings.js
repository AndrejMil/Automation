class daylightFeelings {
	feelingsText() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[1]/label')
			.should('contain', "Pick some words that describe how you're feeling");
	}

	exhausted() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/span')
					.should('contain', 'Exhausted');
			});
	}

	worried() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/span')
					.should('contain', 'Worried');
			});
	}

	sad() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[3]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[3]/label/span')
					.should('contain', 'Sad');
			});
	}

	nervous() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[4]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[4]/label/span')
					.should('contain', 'Nervous');
			});
	}

	angry() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/span')
					.should('contain', 'Angry');
			});
	}

	distracted() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[6]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[6]/label/span')
					.should('contain', 'Distracted');
			});
	}

	fedUp() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[7]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[7]/label/span')
					.should('contain', 'Fed up');
			});
	}

	restless() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[8]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[8]/label/span')
					.should('contain', 'Restless');
			});
	}

	afraid() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[9]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[9]/label/span')
					.should('contain', 'Afraid');
			});
	}

	tense() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[10]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[10]/label/span')
					.should('contain', 'Tense');
			});
	}

	anxious() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[11]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[11]/label/span')
					.should('contain', 'Anxious');
			});
	}

	irritated() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[12]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[12]/label/span')
					.should('contain', 'Irritated');
			});
	}

	onEdge() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[13]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[13]/label/span')
					.should('contain', 'On edge');
			});
	}

	stressed() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[14]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[14]/label/span')
					.should('contain', 'Stressed');
			});
	}

	helpless() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[15]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[15]/label/span')
					.should('contain', 'Helpless');
			});
	}

	lonely() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[16]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[16]/label/span')
					.should('contain', 'Lonely');
			});
	}

	wornOut() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[17]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[17]/label/span')
					.should('contain', 'Worn out');
			});
	}

	notSure() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[18]/label/input')
			.click()
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[18]/label/span')
					.should('contain', "I'm not sure");
			});
	}
}
export default daylightFeelings;
