class flow1Lst7 {
	sevenHeader() {
		return cy.get('[data-index="0"]').contains('Your lifestyle (page 7 / 8)');
	}

	smokeTobacco() {
		return cy
			.get('[data-semantic-id="smoke_tobacco"]')
			.should('contain', 'How often (if ever) do you smoke tobacco?');
	}

	smokeTobaccoNever() {
		return cy.get('#60_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	smokeTobaccoRarely() {
		return cy.get('#60_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	smokeTobacco10() {
		return cy.get('#60_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', '1-10 times a day');
		});
	}
	smokeTobacco20() {
		return cy.get('#60_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', '11-20 times a day');
		});
	}
	smokeTobacco21() {
		return cy.get('#60_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', '21 + times a day');
		});
	}

	drinkAlcohol() {
		return cy
			.get('[data-semantic-id="drink_alcohol"]')
			.should('contain', 'How often (if ever) do you drink alcohol?');
	}
	drinkAlcoholNew() {
		return cy
			.get('[data-semantic-id="drink_alcohol"]')
			.should('contain', 'How often do you drink alcohol within 4 hours of bed?');
	}
	drinkAlcoholNewAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select').select('Never');
	}
	drinkAlcoholNever() {
		return cy.get('#61_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	drinkAlcoholLess() {
		return cy.get('#61_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Less than once a week');
		});
	}
	drinkAlcoholOnce() {
		return cy.get('#61_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Once a week');
		});
	}
	drinkAlcohol2() {
		return cy.get('#61_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', '2-3 times a week');
		});
	}
	drinkAlcohol4() {
		return cy.get('#61_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', '4 + times a week');
		});
	}
	consumeCaffeine() {
		return cy
			.get('[data-semantic-id="consume_caffeine"]')
			.should('contain', 'How often (if ever) do you consume caffeine?');
	}
	consumeCaffeineNever() {
		return cy.get('#62_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	consumeCaffeineLess() {
		return cy.get('#62_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Less than once a day');
		});
	}
	consumeCaffeineOnce() {
		return cy.get('#62_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Once a day');
		});
	}
	consumeCaffeine2() {
		return cy.get('#62_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', '2-3 times a day');
		});
	}
	consumeCaffeine4() {
		return cy.get('#62_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', '4 + times a day');
		});
	}
	regularlyExercise() {
		return cy
			.get('[data-semantic-id="regularly_exercise"]')
			.should('contain', 'How regularly (if ever) do you exercise?');
	}
	regularlyExerciseNever() {
		return cy.get('#63_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	regularlyExerciseLess() {
		return cy.get('#63_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Less than once a week');
		});
	}
	regularlyExercisOnce() {
		return cy.get('#63_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Once a week');
		});
	}
	regularlyExercis2() {
		return cy.get('#63_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', '2 - 3 times a week');
		});
	}
	regularlyExercis4() {
		return cy.get('#63_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', '4 + times a week');
		});
	}
	sleepingPills() {
		return cy
			.get('[data-semantic-id="sleeping_pills_prescribed_doctor"]')
			.should(
				'contain',
				'How many nights in the last 2 weeks have you taken sleeping pills prescribed by your doctor?'
			);
	}
	sleepingPillsAnswer1() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
			.select('1 night')
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
					.select('2 nights')
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
							.select('3 nights')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
									.select('0 nights')
									.then(() => {
										cy
											.xpath(
												'/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select'
											)
											.select('4 nights')
											.then(() => {
												cy
													.xpath(
														'/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select'
													)
													.select('5 nights')
													.then(() => {
														cy
															.xpath(
																'/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select'
															)
															.select('6 nights');
													});
											});
									});
							});
					});
			});
	}

	nonPrescription() {
		return cy
			.get('[data-semantic-id="taken_non-prescription_sleep_remedies"]')
			.should('contain', 'How many nights in the last 2 weeks have you taken non-prescription sleep remedies?');
	}
	nonPrescriptionAnswer1() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select')
			.select('1 night')
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select')
					.select('2 nights')
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select')
							.select('3 nights')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select')
									.select('0 nights')
									.then(() => {
										cy
											.xpath(
												'/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select'
											)
											.select('4 nights')
											.then(() => {
												cy
													.xpath(
														'/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select'
													)
													.select('5 nights')
													.then(() => {
														cy
															.xpath(
																'/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select'
															)
															.select('6 nights');
													});
											});
									});
							});
					});
			});
	}
	yourselfOverweight() {
		return cy
			.get('[data-semantic-id="yourself_overweight"]')
			.should('contain', 'Do you consider yourself to be overweight?');
	}
	yourselfOverweightNo() {
		return cy.get('#66_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'No');
		});
	}
	yourselfOverweightYes() {
		return cy.get('#66_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Yes');
		});
	}
	currentlyPartner() {
		return cy.get('[data-semantic-id="currently_partner"]').should('contain', 'Do you currently have a partner?');
	}
	currentlyPartnerNo() {
		return cy.get('#67_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'No');
		});
	}
	currentlyPartnerYes() {
		return cy.get('#67_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Yes');
		});
	}
	disruptedPartner1() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_partner"]')
			.should('contain', 'Over the past month, how often has your sleep been disrupted by your partner?');
	}
	disruptedPartnerNever() {
		return cy.get('#68_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	disruptedPartnerRarely() {
		return cy.get('#68_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	disruptedPartnerSometimes() {
		return cy.get('#68_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	disruptedPartnerOften() {
		return cy.get('#68_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	disruptedPartnerVeryOften() {
		return cy.get('#68_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	childrenLiveYou() {
		return cy
			.get('[data-semantic-id="children_live_you"]')
			.should('contain', 'Do you have children who live with you?');
	}
	childrenLiveYouNo() {
		return cy.get('#69_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'No');
		});
	}
	childrenLiveYouYes() {
		return cy.get('#69_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Yes');
		});
	}
	disruptedChildren1() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_children"]')
			.should('contain', 'Over the past month, how often has your sleep been disrupted by your children?');
	}
	disruptedChildrenNever() {
		return cy.get('#70_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[12]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	disruptedChildrenRarely() {
		return cy.get('#70_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[12]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	disruptedChildrenSometimes() {
		return cy.get('#70_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[12]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	disruptedChildrenOften() {
		return cy.get('#70_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[12]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	disruptedChildrenVeryOften() {
		return cy.get('#70_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[12]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}

	exercise() {
		return cy.get('[data-semantic-id="regularly_exercise"]').should('contain', 'How regularly do you exercise?');
	}
	exerciseAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select').select('Once a week');
	}

	nicotine() {
		return cy
			.get('[data-semantic-id="smoke_tobacco"]')
			.should('contain', 'How often do you smoke or use products with nicotine?');
	}

	nicotineAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select').select('Never');
	}

	drinkAlcohol() {
		return cy
			.get('[data-semantic-id="drink_alcohol"]')
			.should('contain', 'How often (if ever) do you drink alcohol?');
	}

	drinkAlcoholAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select').select('Never');
	}

	disruptedChildren() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_children"]')
			.should('contain', 'Do you have children? How often has your sleep been disrupted by your children?');
	}

	disruptedChildrenAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('Sometimes');
	}

	shiftWorker() {
		return cy.get('[data-semantic-id="shift_worker"]').should('contain', 'Are you a shift worker?');
	}

	shiftWorkerAnswer() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[1]/label/input')
			.click();
	}

	employmentStatus() {
		return cy.get('[data-semantic-id="employment_status"]').should('contain', 'What is your employment status?');
	}
	employmentStatusAnswer() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
			.select('Employed full-time');
	}

	affectProductivity() {
		return cy
			.get('[data-semantic-id="affect_productivity"]')
			.should('contain', 'How much did poor sleep affect your productivity while you were working?');
	}

	affectProductivityAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select').select('10%');
	}

	hoursMissed() {
		return cy
			.get('[data-semantic-id="hours_missed"]')
			.should(
				'contain',
				'How many hours did you miss from your work per week because of problems associated with your sleep?'
			);
	}

	hoursMissedAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/div/input').type('0');
	}

	disruptedPartner() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_partner"]')
			.should('contain', 'Do you have a partner? How often has your sleep been disrupted by your partner?');
	}

	disruptedPartnerAnswer() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select').select('Sometimes');
	}
	regularlyExerciseAnswers() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select')
			.select('Less than once a week')
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select')
					.select('Once a week')
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select')
							.select('2 - 3 times a week')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div/select')
									.select('More than 4 times a week');
							});
					});
			});
	}
	nicotineAnswers() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
			.select('Never')
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
					.select('Rarely')
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
							.select('1-10 times a day')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select')
									.select('11-20 times a day')
									.then(() => {
										cy
											.xpath(
												'/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/div/div/select'
											)
											.select('More than 21 times a day');
									});
							});
					});
			});
	}

	drinkAlcoholAnswers() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select')
			.select('Never')
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select')
					.select('Less than once a week')
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select')
							.select('Once a week')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select')
									.select('2-3 times a week')
									.then(() => {
										cy
											.xpath(
												'/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/div/div/select'
											)
											.select('More than 4 times a week');
									});
							});
					});
			});
	}

	disruptedChildrenAnswers() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
			.select("Never / I don't have children")
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
					.select('Rarely')
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
							.select('Sometimes')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select')
									.select('Often')
									.then(() => {
										cy
											.xpath(
												'/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select'
											)
											.select('Very Often');
									});
							});
					});
			});
	}

	shiftWorkerNo() {
		return cy.get('#71_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'No');
		});
	}
	shiftWorkerYes() {
		return cy.get('#71_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Yes');
		});
	}

	employmentStatusAnswers() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
			.select('Employed part-time')
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
					.select('Unemployed')
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
							.select('Retired')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select')
									.select('Full-time student')
									.then(() => {
										cy
											.xpath(
												'/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select'
											)
											.select('Full-time Homemaker or carer')
											.then(() => {
												cy
													.xpath(
														'/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/div/div/select'
													)
													.select('Employed full-time');
											});
									});
							});
					});
			});
	}

	affectProductivityAnswers() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select')
			.select('100%-Unable to work')
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select')
					.select('90%')
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select')
							.select('80%')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select')
									.select('70%')
									.then(() => {
										cy
											.xpath(
												'/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select'
											)
											.select('60%')
											.then(() => {
												cy
													.xpath(
														'/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select'
													)
													.select('50%')
													.then(() => {
														cy
															.xpath(
																'/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select'
															)
															.select('40%')
															.then(() => {
																cy
																	.xpath(
																		'/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select'
																	)
																	.select('30%')
																	.then(() => {
																		cy
																			.xpath(
																				'/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select'
																			)
																			.select('20%')
																			.then(() => {
																				cy
																					.xpath(
																						'/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select'
																					)
																					.select('10%')
																					.then(() => {
																						cy
																							.xpath(
																								'/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/div/div/select'
																							)
																							.select('0% - No effect');
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

	disruptedPartnerAnswers() {
		return cy
			.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select')
			.select("Never / I don't have a partner")
			.then(() => {
				cy
					.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select')
					.select('Rarely')
					.then(() => {
						cy
							.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select')
							.select('Sometimes')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select')
									.select('Often')
									.then(() => {
										cy
											.xpath(
												'/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/div/div/select'
											)
											.select('Very Often');
									});
							});
					});
			});
	}
}

export default flow1Lst7;
