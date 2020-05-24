class flow1Lst3 {
	lst3header() {
		return cy.get('[data-index="0"]').contains('Your sleep (page 3 / 8)');
	}
	lst3header1() {
		return cy.get('[data-index="1"]').contains('Over the past month, to what extent has poor sleep…');
	}
	abilityStayAwake() {
		return cy
			.get('[data-semantic-id="affected_ability_stay_awake"]')
			.should('contain', '...affected, your concentration, productivity or ability to stay awake?');
	}
	abilityStayAwakeAnswer() {
		return cy.get('#30_0').click();
	}
	affectedRelationships() {
		return cy
			.get('[data-semantic-id="affected_relationships"]')
			.should('contain', '...affected, your mood, energy or relationships?');
	}
	affectedRelationshipsAnswer() {
		return cy.get('#31_0').click();
	}
	feelHelpless() {
		return cy.get('[data-semantic-id="sleep_feel_helpless"]').should('contain', '...sleep made you feel helpless?');
	}
	feelHelplessAnswer() {
		return cy.get('#32_0').click();
	}
	feelFrustrated() {
		return cy.get('[data-semantic-id="feel_frustrated"]').should('contain', '...made you feel frustrated?');
	}
	feelFrustratedAnswer() {
		return cy.get('#33_0').click();
	}
	feelNegative() {
		return cy.get('[data-semantic-id="feel_negative"]').should('contain', '...made you feel negative?');
	}
	feelNegativeAnswer() {
		return cy.get('#34_0').click();
	}
	feelAlone() {
		return cy.get('[data-semantic-id="feel_alone"]').should('contain', '...made you feel alone?');
	}
	feelAloneAnswer() {
		return cy.get('#35_0').click();
	}
	feelWorried() {
		return cy.get('[data-semantic-id="feel_worried"]').should('contain', '...made you feel worried?');
	}
	feelWorriedAnswer() {
		return cy.get('#36_0').click();
	}
	affectedBehaviour() {
		return cy.get('[data-semantic-id="affected_behaviour"]').should('contain', '...affected your behaviour?');
	}
	affectedBehaviourAnswer() {
		return cy.get('#37_0').click();
	}
	affectedPeople() {
		return cy
			.get('[data-semantic-id="affected_people"]')
			.should('contain', '...affected your ability to look after other people?');
	}
	affectedPeopleAnswer() {
		return cy.get('#38_0').click();
	}
}
export default flow1Lst3;
