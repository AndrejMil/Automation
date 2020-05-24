class flow1Lst2 {
	headerLst() {
		return cy.get('[data-index="0"]').contains('Your sleep (page 2 / 8)');
	}

	headerLst1() {
		return cy.get('[data-index="1"]').contains("Describe your average night's sleep over the past month");
	}
	tryGoSleep() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select').select('8:00 PM');
	}
	tryGoSleepLabel() {
		return cy.get('[data-semantic-id="try_go_sleep"]').should('contain', 'What time do you try to go to sleep?');
	}
	getIntoBad() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select').select('8:00 PM');
	}

	fallAsleepLabel() {
		return cy
			.get('[data-semantic-id="fall_asleep"]')
			.should('contain', 'How long does it take you to fall asleep?');
	}
	duringNightWake() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select').select('5 mins');
	}
	duringNightWakeLabel() {
		return cy
			.get('[data-semantic-id="during_night_wake"]')
			.should('contain', 'How many times during the night do you wake up on average?');
	}
	awakeDuringNight() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select').select('1');
	}
	awakeDuringNightLabel() {
		return cy
			.get('[data-semantic-id="awake_during_night"]')
			.should(
				'contain',
				'How long are you awake for in total during the night due to these wakenings, on average?'
			);
	}
	wakeLastTime() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('10 mins');
	}

	DuringNightLabel() {
		return cy
			.get('[data-semantic-id="normally_wake_last_time"]')
			.should('contain', 'What time do you normally wake up for the last time?');
	}
	intendedWakeUp() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select').select('9:00 AM');
	}
	intendedWakeUpLabel() {
		return cy
			.get('[data-semantic-id="earlier_intended_wake_up"]')
			.should('contain', 'Is this earlier than you intended to wake up? If so, by how long?');
	}
	getOutBed() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
			.select('More than an hour too early');
	}
	getOutBedLabel() {
		return cy
			.get('[data-semantic-id="time_normally_out_bed"]')
			.should('contain', 'What time do you normally get out of bed?');
	}
	S;
	qualitySleep() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select').select('10:45 AM');
	}
	qualitySleepLabel() {
		return cy
			.get('[data-semantic-id="rate_quality_sleep"]')
			.should('contain', 'How would you rate the quality of your sleep?');
	}
	quality() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select').select('Very good');
	}
}

export default flow1Lst2;
