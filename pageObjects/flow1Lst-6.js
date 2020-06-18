class flow1Lst6 {
	sixheader() {
		return cy.get('[data-index="0"]').contains('Your wellbeing (page 6 / 8)');
	}

	sixheader1() {
		return cy.get('[data-index="1"]').contains('Over the past 2 weeks...');
	}

	littleInterest() {
		return cy
			.get('[data-semantic-id="often_bothered_little_interest"]')
			.should('contain', '...how often have you been bothered by little interest or pleasure in doing things?');
	}
	littleInterestNot() {
		return cy.get('#54_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	littleInterestSeveral() {
		return cy.get('#54_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Several days');
		});
	}
	littleInterestMore() {
		return cy.get('#54_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'More than half the days');
		});
	}
	littleInterestNearly() {
		return cy.get('#54_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Nearly every day');
		});
	}
	feelingDepressed() {
		return cy
			.get('[data-semantic-id="feeling_down_depressed"]')
			.should('contain', '...how often have you been bothered by feeling down, depressed or hopeless?');
	}
	feelingDepressedNot() {
		return cy.get('#55_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	feelingDepressedSeveral() {
		return cy.get('#55_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Several days');
		});
	}
	feelingDepressedMore() {
		return cy.get('#55_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'More than half the days');
		});
	}
	feelingDepressedNearly() {
		return cy.get('#55_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Nearly every day');
		});
	}
	feelingAnxious() {
		return cy
			.get('[data-semantic-id="feeling_nervous_anxious"]')
			.should('contain', '...how often have you been bothered by feeling nervous, anxious or on edge?');
	}
	feelingAnxiousNot() {
		return cy.get('#56_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	feelingAnxiousSeveral() {
		return cy.get('#56_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Several days');
		});
	}
	feelingAnxiousMore() {
		return cy.get('#56_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'More than half the days');
		});
	}
	feelingAnxiousNearly() {
		return cy.get('#56_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Nearly every day');
		});
	}
	controlWorrying() {
		return cy
			.get('[data-semantic-id="able_stop_control_worrying"]')
			.should('contain', '...how often have you been bothered by not being able to stop or control worrying?');
	}
	controlWorryingNot() {
		return cy.get('#57_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	controlWorryingNotNew() {
		return cy.get('#57_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	controlWorryingSeveral() {
		return cy.get('#57_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Several days');
		});
	}
	controlWorryingSeveralNew() {
		return cy.get('#57_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Several days');
		});
	}
	controlWorryingMore() {
		return cy.get('#57_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'More than half the days');
		});
	}
	controlWorryingMoreNew() {
		return cy.get('#57_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'More than half the days');
		});
	}
	controlWorryingNearly() {
		return cy.get('#57_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Nearly every day');
		});
	}
	controlWorryingNearlyNew() {
		return cy.get('#57_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Nearly every day');
		});
	}
	sayHealth() {
		return cy.get('[data-semantic-id="say_health"]').should('contain', 'In general, would you say your health is…');
	}
	sayHealthPoor() {
		return cy.get('#58_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Poor');
		});
	}
	sayHealthAverage() {
		return cy.get('#58_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Average');
		});
	}
	sayHealthGood() {
		return cy.get('#58_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Good');
		});
	}
	sayHealthVeryGood() {
		return cy.get('#58_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Very Good');
		});
	}
	sayHealthExcellent() {
		return cy.get('#58_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Excellent');
		});
	}
	howSatisfied() {
		return cy
			.get('[data-index="7"]')
			.should('contain', 'All things considered, how satisfied are you with your life as a whole these days?');
	}
	howSatisfiedAnswer() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
			.select('10 - Extremely satisfied');
	}

	unableToControl() {
		return cy
			.get('[data-semantic-id="unable_to_control"]')
			.should(
				'contain',
				'...how often have you felt that you were unable to control the important things in life?'
			);
	}
	unableToControlAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('Never');
	}

	yourHealthIs() {
		return cy.get('[data-semantic-id="say_health"]').should('contain', 'In general, would you say your health is…');
	}

	yourHealthIsAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select').select('Excellent');
	}

	overweight() {
		return cy
			.get('[data-semantic-id="yourself_overweight"]')
			.should('contain', 'Do you consider yourself to be overweight?');
	}

	overweightAnswer() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[1]/label/input')
			.click();
	}
	overweightNo() {
		return cy.get('#192_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'No');
		});
	}
	overweightYes() {
		return cy.get('#192_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Yes');
		});
	}
	unableToControlAnswers() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
			.select('Never')
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
					.select('Almost never')
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
							.select('Sometimes')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
									.select('Fairly often')
									.then(() => {
										cy
											.xpath(
												'/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select'
											)
											.select('Very often')
											.then(() => {
												cy
													.xpath(
														'/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select'
													)
													.select('Sometimes')
													.then(() => {
														cy
															.xpath(
																'/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select'
															)
															.select('Never');
													});
											});
									});
							});
					});
			});
	}
	yourHealthIsAnswers() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select')
			.select('Poor')
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select')
					.select('Average')
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select')
							.select('Good')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select')
									.select('Very Good')
									.then(() => {
										cy
											.xpath(
												'/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select'
											)
											.select('Excellent')
											.then(() => {
												cy
													.xpath(
														'/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select'
													)
													.select('Very Good')
													.then(() => {
														cy
															.xpath(
																'/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select'
															)
															.select('Excellent');
													});
											});
									});
							});
					});
			});
	}
}

export default flow1Lst6;
