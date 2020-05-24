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
	littleInterestAnsver() {
		return cy.get('#54_0').click();
	}
	feelingDepressed() {
		return cy
			.get('[data-semantic-id="feeling_down_depressed"]')
			.should('contain', '...how often have you been bothered by feeling down, depressed or hopeless?');
	}
	feelingDepressedAnswer() {
		return cy.get('#55_0').click();
	}
	feelingAnxious() {
		return cy
			.get('[data-semantic-id="feeling_nervous_anxious"]')
			.should('contain', '...how often have you been bothered by feeling nervous, anxious or on edge?');
	}
	feelingAnxiousAnswer() {
		return cy.get('#56_0').click();
	}
	controlWorrying() {
		return cy
			.get('[data-semantic-id="able_stop_control_worrying"]')
			.should('contain', '...how often have you been bothered by not being able to stop or control worrying?');
	}
	controlWorryingAnswer() {
		return cy.get('#57_0').click();
	}
	sayHealth() {
		return cy.get('[data-semantic-id="say_health"]').should('contain', 'In general, would you say your health is…');
	}
	sayHealthAnswer() {
		return cy.get('#58_0').click();
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
}

export default flow1Lst6;
