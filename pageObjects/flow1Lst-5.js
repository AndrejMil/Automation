class flow1Lst5 {
	fiveLstHeader() {
		return cy.get('[data-index="0"]').contains('Your sleep (page 5 / 8)');
	}
	fiveLstHeader1() {
		return cy.get('[data-index="1"]').contains('When I lie awake in bed I think about...');
	}
	happenedToday() {
		return cy
			.get('[data-semantic-id="happened_today_tomorrow"]')
			.should('contain', "...what happened today and what I've got on tomorrow");
	}
	happenedTodayNew() {
		return cy
			.get('[data-semantic-id="happened_today_tomorrow"]')
			.should('contain', "...what happened today and what I'm doing tomorrow.");
	}

	happenedTodayNever() {
		return cy.get('#45_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	happenedTodayRarely() {
		return cy.get('#45_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	happenedTodaySometimes() {
		return cy.get('#45_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	happenedTodayOften() {
		return cy.get('#45_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	happenedTodayVeryOften() {
		return cy.get('#45_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	happenedTodayAnsweNew() {
		return cy.get('#85_0').click();
	}
	controlSleep() {
		return cy
			.get('[data-semantic-id="control_sleep"]')
			.should('contain', "...how out of control my sleep is and I don't know what to do about it");
	}
	controlSleepNew() {
		return cy
			.get('[data-semantic-id="control_sleep"]')
			.should('contain', "...how out of control my sleep is and how I don't know what to do about it.");
	}
	controlSleepNever() {
		return cy.get('#46_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	controlSleepRarely() {
		return cy.get('#46_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	controlSleepSometimes() {
		return cy.get('#46_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	controlSleepOften() {
		return cy.get('#46_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	controlSleepVeryOften() {
		return cy.get('#46_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	controlSleepAnswerNew() {
		return cy.get('#86_0').click();
	}
	feelingCold() {
		return cy
			.get('[data-semantic-id="feeling_cold"]')
			.should('contain', '...my body feeling hot or cold; or my heart beat pounding in my head');
	}
	feelingColdNever() {
		return cy.get('#47_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	feelingColdRarely() {
		return cy.get('#47_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	feelingColdSometimes() {
		return cy.get('#47_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	feelingColdOften() {
		return cy.get('#47_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	feelingColdVeryOften() {
		return cy.get('#47_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	workedOut() {
		return cy
			.get('[data-semantic-id="happened_past_worked_out"]')
			.should('contain', '...things that have happened in the past and how they worked out');
	}
	workedOutNever() {
		return cy.get('#48_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	workedOutRarely() {
		return cy.get('#48_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	workedOutSometimes() {
		return cy.get('#48_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	workedOutOften() {
		return cy.get('#48_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	workedOutVeryOften() {
		return cy.get('#48_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	lyingAwake() {
		return cy.get('[data-semantic-id="long_lying_awake"]').should('contain', "...how long I've been lying awake");
	}
	lyingAwakeNever() {
		return cy.get('#49_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	lyingAwakeRarely() {
		return cy.get('#49_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	lyingAwakeSometimes() {
		return cy.get('#49_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	lyingAwakeOften() {
		return cy.get('#49_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	lyingAwakeVeryOften() {
		return cy.get('#49_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	lyingAwakeAnswerNew() {
		return cy.get('#89_0').click();
	}
	hearOutside() {
		return cy
			.get('[data-semantic-id="noises_hear_outside"]')
			.should('contain', '...noises I can hear in the house or from outside');
	}
	hearOutsideNew() {
		return cy
			.get('[data-index="3"] > .sl-question > .sl-page-title-area > .sl-page-title')
			.should('contain', '...sensations in my body or noises I can hear from outside.');
	}
	hearOutsideNever() {
		return cy.get('#50_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	hearOutsideRarely() {
		return cy.get('#50_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	hearOutsideSometimes() {
		return cy.get('#50_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	hearOutsideOften() {
		return cy.get('#50_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	hearOutsideVeryOften() {
		return cy.get('#50_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	hearOutsideAnswerNew() {
		return cy.get('#87_0').click();
	}
	workWell() {
		return cy
			.get('[data-semantic-id="things_work_well"]')
			.should('contain', '...what the future might hold and what I should be doing for things to work out well');
	}
	workWellNever() {
		return cy.get('#51_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	workWellRarely() {
		return cy.get('#51_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	workWellSometimes() {
		return cy.get('#51_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	workWellOften() {
		return cy.get('#51_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	workWellVeryOften() {
		return cy.get('#51_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	sleepTonight() {
		return cy
			.get('[data-semantic-id="tomorrow_sleep_tonight"]')
			.should('contain', "...how I'm going to cope tomorrow if I don't sleep well tonight");
	}
	sleepTonightNew() {
		return cy
			.get('[data-semantic-id="tomorrow_sleep_tonight"]')
			.should('contain', "...how I'm going to cope tomorrow if I don't sleep well tonight.");
	}
	sleepTonightNever() {
		return cy.get('#52_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	sleepTonightRarely() {
		return cy.get('#52_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	sleepTonightSometimes() {
		return cy.get('#52_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	sleepTonightOften() {
		return cy.get('#52_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	sleepTonightVeryOften() {
		return cy.get('#52_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	sleepTonightAnswerNew() {
		return cy.get('#90_0').click();
	}
	throughMind() {
		return cy
			.get('[data-semantic-id="importance_through_mind"]')
			.should('contain', '...trivial things of no importance that go through my mind');
	}
	throughMindNever() {
		return cy.get('#53_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	throughMindRarely() {
		return cy.get('#53_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	throughMindSometimes() {
		return cy.get('#53_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	throughMindOften() {
		return cy.get('#53_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	throughMindVeryOften() {
		return cy.get('#53_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	future() {
		return cy
			.get('[data-index="4"] > .sl-question > .sl-page-title-area > .sl-page-title')
			.should('contain', '...things that have happened in the past or what might happen in the future.');
	}
	futureAnswer() {
		return cy.get('#88_0').click();
	}
}
export default flow1Lst5;
