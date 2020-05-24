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
	comfortablePositionAnswer() {
		return cy.get('#39_0').click();
	}
	properRoutine() {
		return cy
			.get('[data-semantic-id="sleep_proper_routine"]')
			.should('contain', "...I can't get my sleep pattern into a proper routine.");
	}
	properRoutineAnswer() {
		return cy.get('#40_0').click();
	}
	relaxMyBody() {
		return cy
			.get('[data-semantic-id="relax_my_body"]')
			.should('contain', "...I find it hard to 'let go' and relax my body.");
	}
	relaxMyBodyAnswer() {
		return cy.get('#41_0').click();
	}
	hardSleep() {
		return cy.get('[data-semantic-id="hard_sleep"]').should('contain', '...I try too hard to get to sleep.');
	}
	hardSleepAnswer() {
		return cy.get('#42_0').click();
	}
	feelTired() {
		return cy
			.get('[data-semantic-id="feel_tired_bedtime"]')
			.should('contain', "...I don't feel tired enough at bedtime.");
	}
	feelTiredAnswer() {
		return cy.get('#43_0').click();
	}
	sleepWell() {
		return cy
			.get('[data-index="7"]')
			.should('contain', "...I worry that I won't cope tomorrow if I don't sleep well");
	}
	sleepWellAnswer() {
		return cy.get('#44_0').click();
	}
	difficult() {
		return cy.get('[data-index="5"]').should('contain', '...my thoughts and worries make it difficult to sleep.');
	}

	difficultAnswer() {
		return cy.get('#84_0').click();
	}
}

export default flow1Lst4;
