class flow1Lst7 {
	sevenHeader() {
		return cy.get('[data-index="0"]').contains('Your lifestyle (page 7 / 8)');
	}

	smokeTobacco() {
		return cy
			.get('[data-semantic-id="smoke_tobacco"]')
			.should('contain', 'How often (if ever) do you smoke tobacco?');
	}

	smokeTobaccoAnswer() {
		return cy.get('#60_0').click();
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
	drinkAlcoholAnswer1() {
		return cy.get('#61_0').click();
	}
	consumeCaffeine() {
		return cy
			.get('[data-semantic-id="consume_caffeine"]')
			.should('contain', 'How often (if ever) do you consume caffeine?');
	}
	consumeCaffeineAnswer1() {
		return cy.get('#62_0').click();
	}
	regularlyExercise() {
		return cy
			.get('[data-semantic-id="regularly_exercise"]')
			.should('contain', 'How regularly (if ever) do you exercise?');
	}
	regularlyExerciseAnswer1() {
		return cy.get('#63_0').click();
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
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/div/div/select').select('1 night');
	}

	nonPrescription() {
		return cy
			.get('[data-semantic-id="taken_non-prescription_sleep_remedies"]')
			.should('contain', 'How many nights in the last 2 weeks have you taken non-prescription sleep remedies?');
	}
	nonPrescriptionAnswer1() {
		return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/div/div/select').select('1 night');
	}
	yourselfOverweight() {
		return cy
			.get('[data-semantic-id="yourself_overweight"]')
			.should('contain', 'Do you consider yourself to be overweight?');
	}
	yourselfOverweightAnswer1() {
		return cy.get('#66_1').click();
	}
	currentlyPartner() {
		return cy.get('[data-semantic-id="currently_partner"]').should('contain', 'Do you currently have a partner?');
	}
	currentlyPartnerAnswer1() {
		return cy.get('#67_1').click();
	}
	disruptedPartner1() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_partner"]')
			.should('contain', 'Over the past month, how often has your sleep been disrupted by your partner?');
	}
	disruptedPartnerAnswer1() {
		return cy.get('#68_0').click();
	}
	childrenLiveYou() {
		return cy
			.get('[data-semantic-id="children_live_you"]')
			.should('contain', 'Do you have children who live with you?');
	}
	childrenLiveYouAnswer1() {
		return cy.get('#69_1').click();
	}
	disruptedChildren1() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_children"]')
			.should('contain', 'Over the past month, how often has your sleep been disrupted by your children?');
	}
	disruptedChildrenAnswer1() {
		return cy.get('#70_0').click();
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
}

export default flow1Lst7;
