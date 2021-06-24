class googleCompanyInsurance {
	googleCompanyInsuranceTitle() {
		return cy.get('.sl-page-title').should('contain', 'Are you a US employee receiving medical insurance through Google?');
    }
    
    googleCompanyInsuranceYes() {
		return cy.get('#options-id-0').click().then(() => {
            cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/span' ).should( 'contain', "Yes. I am a US Employee receiving insurance through Google" );
		});;
	}

	googleCompanyInsuranceNo() {
		return cy.get('#options-id-1').click().then(() => {
            cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/span' ).should( 'contain', "No. I am Outside of the US, a Dependent, or do not have medical insurance through Google" );
		});;
	}
}

export default googleCompanyInsurance;
