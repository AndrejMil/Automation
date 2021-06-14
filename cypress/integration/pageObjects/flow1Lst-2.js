class flow1Lst2 {
	headerLst() {
		return cy.get('[data-index="0"]').contains('Your sleep (page 2 / 8)');
	}

	headerLst1() {
		return cy.get('[data-index="1"]').contains("Describe your average night's sleep over the past month");
	}
	getIntoBad() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
			.select('8:00 PM', { force: true });
	}
	getIntoBadNew() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select')
			.select('8:00 PM', { force: true });
	}
	getIntoBedLabelPG(){
		return cy.get('[data-semantic-id="sleep_efficiency_time_into_bed"]').should('contain','What time do you normally get into bed?').and('be.visible');
	}
	tryGoSleepLabel() {
		return cy.get('[data-semantic-id="try_go_sleep"]').should('contain', 'What time do you try to go to sleep?').and('be.visible');
	}
	tryGoSleepLabelPG() {
		return cy.get('[data-semantic-id="sleep_efficiency_time_try_to_sleep"]').should('contain', 'What time do you try to go to sleep?').and('be.visible');
	}
	
	tryGoSleep() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select')
			.select('8:00 PM', { force: true });
	}
	tryGoSleepNew() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
			.select('8:00 PM', { force: true });
	}

	fallAsleepLabel() {
		return cy
			.get('[data-semantic-id="fall_asleep"]')
			.should('contain', 'How long does it take you to fall asleep?').and('be.visible');
	}
	duringNightWake() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select')
			.select('5 mins', { force: true });
	}
	duringNightWakeNew() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select')
			.select('5 mins', { force: true });
	}
	duringNightWakeLabel() {
		return cy
			.get('[data-semantic-id="during_night_wake"]')
			.should('contain', 'How many times during the night do you wake up on average?').and('be.visible');
	}
	awakeDuringNight() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
			.select('1', { force: true });
	}
	awakeDuringNightNew() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select')
			.select('1', { force: true });
	}
	awakeDuringNightLabel() {
		return cy
			.get('[data-semantic-id="awake_during_night"]')
			.should(
				'contain',
				'How long are you awake for in total during the night due to these wakenings, on average?').and('be.visible');
	}
	wakeLastTime() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select')
			.select('10 mins', { force: true });
	}
	wakeLastTimeNew() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
			.select('10 mins', { force: true });
	}

	DuringNightLabel() {
		return cy
			.get('[data-semantic-id="normally_wake_last_time"]')
			.should('contain', 'What time do you normally wake up for the last time?').and('be.visible');
	}
	intendedWakeUp() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
			.select('9:00 AM', { force: true });
	}
	intendedWakeUpNew() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select')
			.select('9:00 AM', { force: true });
	}
	intendedWakeUpLabel() {
		return cy
			.get('[data-semantic-id="earlier_intended_wake_up"]')
			.should('contain', 'Is this earlier than you intended to wake up? If so, by how long?').and('be.visible');
	}
	getOutBed() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select')
			.select('More than an hour too early', { force: true });
	}
	getOutBedNew() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
			.select('More than an hour too early', { force: true });
	}
	getOutBedLabel() {
		return cy
			.get('[data-semantic-id="time_normally_out_bed"]')
			.should('contain', 'What time do you normally get out of bed?').and('be.visible');
	}

	qualitySleep() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select')
			.select('10:45 AM', { force: true });
	}
	qualitySleepNew() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select')
			.select('10:45 AM', { force: true });
	}
	qualitySleepLabel() {
		return cy
			.get('[data-semantic-id="rate_quality_sleep"]')
			.should('contain', 'How would you rate the quality of your sleep?').and('be.visible');
	}
	quality() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/div/div/select')
			.select('Very good', { force: true });
	}
	qualityNew() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/div/select')
			.select('Very good', { force: true });
	}
	validator1() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
			.select('12:00 AM', { force: true })
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select')
					.select('8:00 PM', { force: true })
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/p')
							.should('contain', 'This seems too early based on when you normally get into bed.')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select')
									.select('9:00 PM', { force: true })
									.then(() => {
										cy
											.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/p')
											.should(
												'contain',
												'This seems too early based on when you normally get into bed.'
											)
											.then(() => {
												cy
													.xpath(
														'/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select'
													)
													.select('10:00 PM', { force: true })
													.then(() => {
														cy
															.xpath(
																'/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/p'
															)
															.should(
																'contain',
																'This seems too early based on when you normally get into bed.'
															)
															.then(() => {
																cy
																	.xpath(
																		'/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select'
																	)
																	.select('11:00 PM', { force: true })
																	.then(() => {
																		cy
																			.xpath(
																				'/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/p'
																			)
																			.should(
																				'contain',
																				'This seems too early based on when you normally get into bed.'
																			)
																			.then(() => {
																				cy
																					.xpath(
																						'/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select'
																					)
																					.select('8:00 PM', { force: true })
																					.then(() => {
																						cy
																							.xpath(
																								'/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select'
																							)
																							.select('8:00 PM', {
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
			});
	}
	validator1new() {
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
							.should('contain', 'This seems too early based on when you normally get into bed.')
							and('be.visible')
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
											)
											.then(() => {
												cy
													.xpath(
														'/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select'
													)
													.select('8:00 PM', { force: true })
													.then(() => {
														cy
															.xpath(
																'/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/p'
															)
															.should(
																'contain',
																'This seems too early based on when you normally get into bed.'
															)
															.then(() => {
																cy
																	.xpath(
																		'/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select'
																	)
																	.select('11:00 PM', { force: true })
																	.then(() => {
																		cy
																			.xpath(
																				'/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/p'
																			)
																			.should(
																				'contain',
																				'This seems too early based on when you normally get into bed.'
																			)
																			.then(() => {
																				cy
																					.xpath(
																						'/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select'
																					)
																					.select('8:00 PM', { force: true })
																					.then(() => {
																						cy
																							.xpath(
																								'/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select'
																							)
																							.select('8:00 PM', {
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

export default flow1Lst2;
