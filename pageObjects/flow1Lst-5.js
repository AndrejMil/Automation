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
			.should('contain', "...what happened today and what I've got on tomorrow.");
	}
	happenedTodayNew() {
		return cy
			.get('[data-semantic-id="happened_today_tomorrow"]')
			.should('contain', "...what happened today and what I'm doing tomorrow.");
	}

	happenedTodayAnswer() {
		return cy.get('#45_0').click();
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
	controlSleepAnswer() {
		return cy.get('#46_0').click();
	}
	controlSleepAnswerNew() {
		return cy.get('#86_0').click();
	}
	feelingCold() {
		return cy
			.get('[data-semantic-id="feeling_cold"]')
			.should('contain', '...my body feeling hot or cold; or my heart beat pounding in my head');
	}
	feelingColdAnswer() {
		return cy.get('#47_0').click();
	}
	workedOut() {
		return cy
			.get('[data-semantic-id="happened_past_worked_out"]')
			.should('contain', '...things that have happened in the past and how they worked out');
	}
	workedOutAnswer() {
		return cy.get('#48_0').click();
	}
	lyingAwake() {
		return cy.get('[data-semantic-id="long_lying_awake"]').should('contain', "...how long I've been lying awake");
	}
	lyingAwakeAnswer() {
		return cy.get('#49_0').click();
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
	hearOutsideAnswer() {
		return cy.get('#50_0').click();
	}
	hearOutsideAnswerNew() {
		return cy.get('#87_0').click();
	}
	workWell() {
		return cy
			.get('[data-semantic-id="things_work_well"]')
			.should('contain', '...what the future might hold and what I should be doing for things to work out well');
	}
	workWellAnswer() {
		return cy.get('#51_0').click();
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
	sleepTonightAnswer() {
		return cy.get('#52_0').click();
	}
	sleepTonightAnswerNew() {
		return cy.get('#90_0').click();
	}
	throughMind() {
		return cy
			.get('[data-semantic-id="importance_through_mind"]')
			.should('contain', '...trivial things of no importance that go through my mind');
	}
	throughMindAnswer() {
		return cy.get('#53_0').click();
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
