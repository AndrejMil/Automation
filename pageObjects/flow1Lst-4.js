class flow1Lst4 {
	fourthlstHeader() {
		return cy.get('[data-index="0"]').contains('Your sleep (page 4 / 8)');
	}

	fourthlstHeader1() {
		return cy
			.get('[data-index="1"]')
			.contains("On the nights when I don't sleep well the problem seems to be that…");
	}

	comfortablePosition() {
		return cy
			.get('[data-semantic-id="comfortable_position_bed"]')
			.should('contain', "...I can't get into a comfortable position in bed.");
	}
	comfortablePositionNever() {
		return cy.get('#39_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	comfortablePositionRarely() {
		return cy.get('#39_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	comfortablePositionSometimes() {
		return cy.get('#39_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	comfortablePositionOften() {
		return cy.get('#39_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	comfortablePositionVeryOften() {
		return cy.get('#39_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	properRoutine() {
		return cy
			.get('[data-semantic-id="sleep_proper_routine"]')
			.should('contain', "...I can't get my sleep pattern into a proper routine.");
	}
	properRoutineNever() {
		return cy.get('#40_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	properRoutineRarely() {
		return cy.get('#40_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	properRoutineSometimes() {
		return cy.get('#40_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	properRoutineOften() {
		return cy.get('#40_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	properRoutineVeryOften() {
		return cy.get('#40_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	relaxMyBody() {
		return cy
			.get('[data-semantic-id="relax_my_body"]')
			.should('contain', "...I find it hard to 'let go' and relax my body.");
	}
	relaxMyBodyNever() {
		return cy.get('#41_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	relaxMyBodyRarely() {
		return cy.get('#41_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	relaxMyBodySometimes() {
		return cy.get('#41_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	relaxMyBodyOften() {
		return cy.get('#41_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	relaxMyBodyVeryOften() {
		return cy.get('#41_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	hardSleep() {
		return cy.get('[data-semantic-id="hard_sleep"]').should('contain', '...I try too hard to get to sleep.');
	}
	hardSleepNever() {
		return cy.get('#42_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	hardSleepRarely() {
		return cy.get('#42_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	hardSleepSometimes() {
		return cy.get('#42_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	hardSleepOften() {
		return cy.get('#42_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	hardSleepVeryOften() {
		return cy.get('#42_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	feelTired() {
		return cy
			.get('[data-semantic-id="feel_tired_bedtime"]')
			.should('contain', "...I don't feel tired enough at bedtime.");
	}
	feelTiredNever() {
		return cy.get('#43_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	feelTiredRarely() {
		return cy.get('#43_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	feelTiredSometimes() {
		return cy.get('#43_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	feelTiredOften() {
		return cy.get('#43_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	feelTiredVeryOften() {
		return cy.get('#43_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	sleepWell() {
		return cy
			.get('[data-index="7"]')
			.should('contain', "...I worry that I won't cope tomorrow if I don't sleep well");
	}
	sleepWellNever() {
		return cy.get('#44_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	sleepWellRarely() {
		return cy.get('#44_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	sleepWellSometimes() {
		return cy.get('#44_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	sleepWellOften() {
		return cy.get('#44_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	sleepWellVeryOften() {
		return cy.get('#44_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	difficult() {
		return cy.get('[data-index="5"]').should('contain', '...my thoughts and worries make it difficult to sleep.');
	}

	difficultAnswer() {
		return cy.get('#84_0').click();
	}
}

export default flow1Lst4;
