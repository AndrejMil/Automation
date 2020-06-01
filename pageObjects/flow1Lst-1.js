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
	discomfortNever() {
		return cy.get('#16_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	discomfortRarely() {
		return cy.get('#16_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	discomfortSometimes() {
		return cy.get('#16_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	discomfortOften() {
		return cy.get('#16_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	discomfortVeryOften() {
		return cy.get('#16_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[3]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	noiseLabel() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_by_noise"]')
			.should('contain', '...how often has your sleep been disrupted by noise?');
	}
	noiseNever() {
		return cy.get('#17_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	noiseRarely() {
		return cy.get('#17_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	noiseSometimes() {
		return cy.get('#17_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	noiseOften() {
		return cy.get('#17_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	noiseVeryOften() {
		return cy.get('#17_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[4]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	uncomfortableBedNever() {
		return cy.get('#18_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	uncomfortableBedRarely() {
		return cy.get('#18_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	uncomfortableBedSometimes() {
		return cy.get('#18_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	uncomfortableBedOften() {
		return cy.get('#18_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	uncomfortableBedVeryOften() {
		return cy.get('#18_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[5]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	uncomfortableBedLabel() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_uncomfortable_bed"]')
			.should('contain', '...how often has your sleep been disrupted by an uncomfortable bed?');
	}
	disruptedTemperatureNever() {
		return cy.get('#19_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	disruptedTemperatureRarely() {
		return cy.get('#19_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	disruptedTemperatureSometimes() {
		return cy.get('#19_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	disruptedTemperatureOften() {
		return cy.get('#19_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	disruptedTemperatureVeryOften() {
		return cy.get('#19_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[6]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	disruptedTemperatureLabel() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_temperature"]')
			.should('contain', '...how often has your sleep been disrupted by room temperature?');
	}
	disruptedLightNever() {
		return cy.get('#20_0').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[1]/label/span')
				.should('contain', 'Never');
		});
	}
	disruptedLightRarely() {
		return cy.get('#20_1').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[2]/label/span')
				.should('contain', 'Rarely');
		});
	}
	disruptedLightSometimes() {
		return cy.get('#20_2').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[3]/label/span')
				.should('contain', 'Sometimes');
		});
	}
	disruptedLightOften() {
		return cy.get('#20_3').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[4]/label/span')
				.should('contain', 'Often');
		});
	}
	disruptedLightVeryOften() {
		return cy.get('#20_4').click().then(() => {
			cy
				.xpath('/html/body/div[1]/div/div[3]/div/div/div[7]/div/div[2]/fieldset/div/div[5]/label/span')
				.should('contain', 'Very often');
		});
	}
	disruptedLightLabel() {
		return cy
			.get('[data-semantic-id="sleep_disrupted_light_levels"]')
			.should('contain', '...how often has your sleep been disrupted by light levels?');
	}
}
export default flow1Lst1;
