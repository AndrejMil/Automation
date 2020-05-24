class flow1Lst1 {
	firtLstHeader() {
		return cy.get('[data-index="0"]').contains('Your sleep (page 1 / 8)');
	}
	overThePastMonth() {
		return cy.get('[data-index="1"]').contains('Over the past month...');
	}
	discomfortLabel() {
		return cy
			.get('[data-semantic-id="bodily_discomfort"]')
			.should(
				'contain',
				'...how often has your sleep been disrupted by bodily discomfort? (e.g. overheating, pain, bladder)'
			);
	}
	discomfortAnswer() {
		return cy.get('#16_0').click();
	}
	noiseLabel() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_by_noise"]')
			.should('contain', '...how often has your sleep been disrupted by noise?');
	}
	noiseAnswer() {
		return cy.get('#17_0').click();
	}
	uncomfortableBed() {
		return cy.get('#18_0').click();
	}
	uncomfortableBedLabel() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_uncomfortable_bed"]')
			.should('contain', '...how often has your sleep been disrupted by an uncomfortable bed?');
	}
	disruptedTemperature() {
		return cy.get('#19_0').click();
	}
	disruptedTemperatureLabel() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_temperature"]')
			.should('contain', '...how often has your sleep been disrupted by room temperature?');
	}
	disruptedLight() {
		return cy.get('#20_0').click();
	}
	disruptedLightLabel() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_light_levels"]')
			.should('contain', '...how often has your sleep been disrupted by light levels?');
	}
}
export default flow1Lst1;
