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
	abilityStayAwakeNot() {
		return cy.get('#30_0').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	abilityStayAwakeLitle() {
		return cy.get('#30_1').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'A little');
		});
	}
	abilityStayAwakeSomewhat() {
		return cy.get('#30_2').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Somewhat');
		});
	}
	abilityStayAwakeMuch() {
		return cy.get('#30_3').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Much');
		});
	}
	abilityStayAwakeVeryMuch() {
		return cy.get('#30_4').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very much');
		});
	}
	affectedRelationships() {
		return cy
			.get('[data-semantic-id="affected_relationships"]')
			.should('contain', '...affected, your mood, energy or relationships?');
	}
	affectedRelationshipsNot() {
		return cy.get('#31_0').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	affectedRelationshipsNotNew() {
		return cy.get('#31_0').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	affectedRelationshipsLitle() {
		return cy.get('#31_1').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'A little');
		});
	}
	affectedRelationshipsLitleNew() {
		return cy.get('#31_1').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'A little');
		});
	}
	affectedRelationshipsSomewhat() {
		return cy.get('#31_2').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Somewhat');
		});
	}
	affectedRelationshipsSomewhatNew() {
		return cy.get('#31_2').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Somewhat');
		});
	}
	affectedRelationshipsMuch() {
		return cy.get('#31_3').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Much');
		});
	}
	affectedRelationshipsMuchNew() {
		return cy.get('#31_3').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Much');
		});
	}
	affectedRelationshipsVeryMuch() {
		return cy.get('#31_4').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very much');
		});
	}
	affectedRelationshipsVeryMuchNew() {
		return cy.get('#31_4').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very much');
		});
	}
	feelHelpless() {
		return cy.get('[data-semantic-id="sleep_feel_helpless"]').should('contain', '...sleep made you feel helpless?');
	}
	feelHelplessNot() {
		return cy.get('#32_0').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	feelHelplessLitle() {
		return cy.get('#32_1').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'A little');
		});
	}
	feelHelplessSomewhat() {
		return cy.get('#32_2').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Somewhat');
		});
	}
	feelHelplessMuch() {
		return cy.get('#32_3').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Much');
		});
	}
	feelHelplessVeryMuch() {
		return cy.get('#32_4').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very much');
		});
	}
	feelFrustrated() {
		return cy.get('[data-semantic-id="feel_frustrated"]').should('contain', '...made you feel frustrated?');
	}
	feelFrustratedNot() {
		return cy.get('#33_0').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	feelFrustratedLittle() {
		return cy.get('#33_1').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'A little');
		});
	}
	feelFrustratedSomewhat() {
		return cy.get('#33_2').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Somewhat');
		});
	}
	feelFrustratedMuch() {
		return cy.get('#33_3').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Much');
		});
	}
	feelFrustratedVeryMuch() {
		return cy.get('#33_4').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very much');
		});
	}
	feelNegative() {
		return cy.get('[data-semantic-id="feel_negative"]').should('contain', '...made you feel negative?');
	}
	feelNegativeNot() {
		return cy.get('#34_0').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	feelNegativeLittle() {
		return cy.get('#34_1').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'A little');
		});
	}
	feelNegativeSomewhat() {
		return cy.get('#34_2').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Somewhat');
		});
	}
	feelNegativeMuch() {
		return cy.get('#34_3').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Much');
		});
	}
	feelNegativeVeryMuch() {
		return cy.get('#34_4').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very much');
		});
	}
	feelAlone() {
		return cy.get('[data-semantic-id="feel_alone"]').should('contain', '...made you feel alone?');
	}
	feelAloneNot() {
		return cy.get('#35_0').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	feelAloneLittle() {
		return cy.get('#35_1').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'A little');
		});
	}
	feelAloneSomewhat() {
		return cy.get('#35_2').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Somewhat');
		});
	}
	feelAloneMuch() {
		return cy.get('#35_3').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Much');
		});
	}
	feelAloneVeryMuch() {
		return cy.get('#35_4').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[8]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very much');
		});
	}
	feelWorried() {
		return cy.get('[data-semantic-id="feel_worried"]').should('contain', '...made you feel worried?');
	}
	feelWorriedNot() {
		return cy.get('#36_0').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	feelWorriedLittle() {
		return cy.get('#36_1').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'A little');
		});
	}
	feelWorriedSomewhat() {
		return cy.get('#36_2').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Somewhat');
		});
	}
	feelWorriedMuch() {
		return cy.get('#36_3').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Much');
		});
	}
	feelWorriedVeryMuch() {
		return cy.get('#36_4').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[9]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very much');
		});
	}
	affectedBehaviour() {
		return cy.get('[data-semantic-id="affected_behaviour"]').should('contain', '...affected your behaviour?');
	}
	affectedBehaviourNot() {
		return cy.get('#37_0').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	affectedBehaviourLittle() {
		return cy.get('#37_1').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'A little');
		});
	}
	affectedBehaviourSomewhat() {
		return cy.get('#37_2').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Somewhat');
		});
	}
	affectedBehaviourMuch() {
		return cy.get('#37_3').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Much');
		});
	}
	affectedBehaviourVeryMuch() {
		return cy.get('#37_4').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[10]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very much');
		});
	}
	affectedPeople() {
		return cy
			.get('[data-semantic-id="affected_people"]')
			.should('contain', '...affected your ability to look after other people?');
	}
	affectedPeopleNot() {
		return cy.get('#38_0').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Not at all');
		});
	}
	affectedPeopleLittle() {
		return cy.get('#38_1').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'A little');
		});
	}
	affectedPeopleSomewhat() {
		return cy.get('#38_2').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Somewhat');
		});
	}
	affectedPeopleMuch() {
		return cy.get('#38_3').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Much');
		});
	}
	affectedPeopleVeryMuch() {
		return cy.get('#38_4').click({ force: true }).then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[11]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very much');
		});
	}
}
export default flow1Lst3;
