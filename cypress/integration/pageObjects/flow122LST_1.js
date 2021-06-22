class flow122LST_1 {
	
	
	getIntoBedflow122() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select')
			.select('8:00 PM', { force: true });
	}
	getIntoBedLabelflow122(){
		return cy.get('[data-semantic-id="sleep_efficiency_time_into_bed"]').should('contain','What time do you normally get into bed?').and('be.visible');
	}
	
	tryGoSleepLabelflow122() {
		return cy.get('[data-semantic-id="sleep_efficiency_time_try_to_sleep"]').should('contain', 'What time do you try to go to sleep?').and('be.visible');
	}
	
	tryGoSleepflow122() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
			.select('8:00 PM', { force: true });
	}

	fallAsleepLabelflow122() {
		return cy
			.get('[data-semantic-id="sleep_efficiency_to_fall_asleep_total_time"]')
			.should('contain', 'How long does it take you to fall asleep?').and('be.visible');
	}
	
	fallAsleepflow122() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select')
			.select('5 mins', { force: true });
	}
	
	duringNightWakeLabelflow122() {
		return cy
			.get('[data-semantic-id="sleep_efficiency_awakenings_in_night"]')
			.should('contain', 'How many times during the night do you wake up on average?').and('be.visible');
	}
	
	
	duringNightWakeflow122() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select')
			.select('2', { force: true });
	}
	
	awakeDuringNightLabelflow122() {
		return cy
			.get('[data-semantic-id="sleep_efficiency_awakenings_total_time"]')
			.should(
				'contain',
				'How long are you awake for in total during the night due to these awakenings, on average?').and('be.visible');
	}
	
	awakeDuringNightflow122() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
			.select('10 mins', { force: true });
	}

	
	finalAwakeningLabelflow122() {
		return cy
			.get('[data-semantic-id="sleep_efficiency_time_final_awakening"]')
			.should('contain', 'What time do you normally wake up for the last time?').and('be.visible');
	}
	
	finalAwakeningflow122() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select')
			.select('9:00 AM', { force: true });
	}
	
	intendedWakeUpLabelflow122() {
		return cy
			.get('[data-semantic-id="earlier_intended_wake_up"]')
			.should('contain', 'Is this earlier than you intended to wake up? If so, by how long?').and('be.visible');
	}
	
	intendedWakeUpflow122() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
			.select('More than an hour too early', { force: true });
	}
	
	getOutBedLabelflow122() {
		return cy
			.get('[data-semantic-id="sleep_efficiency_time_get_out_of_bed"]')
			.should('contain', 'What time do you normally get out of bed?').and('be.visible');
	}

	
	getOutBedflow122() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select')
			.select('10:45 AM', { force: true });
	}
	
	qualitySleepLabelflow122() {
		return cy
			.get('[data-semantic-id="sleep_efficiency_sleep_quality"]')
			.should('contain', 'How would you rate the quality of your sleep?').and('be.visible');
	}
	
	qualitySleepflow122() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select')
			.select('Very good', { force: true });
	}
	
	validator1flow122() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select')
			.select('10:00 PM', { force: true })
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
					.select('9:45 PM', { force: true })
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/p')
							.should('contain', 'This seems too early based on when you normally get into bed.').and('be.visible')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
									.select('4:00 PM', { force: true })
									.then(() => {
										cy
											.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/p')
											.should(
												'contain',
												'This seems too early based on when you normally get into bed.'
											).and('be.visible')
											.then(() => {
												cy
													.xpath(
														'/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select'
													)
													.select('8:00 PM', { force: true })
													.then(() => {
														cy
															.xpath(
																'/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/p'
															)
															.should(
																'contain',
																'This seems too early based on when you normally get into bed.'
															)
															.then(() => {
																cy
																	.xpath(
																		'/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select'
																	)
																	.select('2:00 AM', { force: true })
																	.then(() => {
																		cy
																			.xpath(
																				'/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/p'
																			)
																			.should(
																				'contain',
																				'This seems too early based on when you normally get into bed.'
																			)
																			.then(() => {
																				cy
																					.xpath(
																						'/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select'
																					)
																					.select('8:00 PM', { force: true });
																					});
																			});
																	});
															});
													});
											});
									});
							});
					});
			}
	

	validator2() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
			.select('11:00 AM', { force: true })
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select')
					.select('7:45 AM', { force: true })
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/p')
							.should(
								'contain',
								'This seems too early based on when you normally wake up for the last time.'
							)
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select')
									.select('8:45 AM', { force: true })
									.then(() => {
										cy
											.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/p')
											.should(
												'contain',
												'This seems too early based on when you normally wake up for the last time.'
											)
											.then(() => {
												cy
													.xpath(
														'/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select'
													)
													.select('9:45 AM', { force: true })
													.then(() => {
														cy
															.xpath(
																'/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/p'
															)
															.should(
																'contain',
																'This seems too early based on when you normally wake up for the last time.'
															)
															.then(() => {
																cy
																	.xpath(
																		'/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select'
																	)
																	.select('10:45 AM', { force: true })
																	.then(() => {
																		cy
																			.xpath(
																				'/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/p'
																			)
																			.should(
																				'contain',
																				'This seems too early based on when you normally wake up for the last time.'
																			)
																			.then(() => {
																				cy
																					.xpath(
																						'/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select'
																					)
																					.select('11:45 AM', {
																						force : true
																					});
																			});
																	});
															});
													});
											});
									});
							});
					});
			});
	}
}

export default flow122LST_1;

