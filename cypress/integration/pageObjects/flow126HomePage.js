class flow126HomePage {

    visitFirstPage(link) {
		return cy.visit(link);
	}

	flow126HomePageTitleI() {
		return cy.get('#wyat-landing-cta > h1').should('contain', "What's your");
    }

    flow126HomePageTitleII() {
		return cy.get('#wyat-landing-cta > h1').should('contain', "anxiety type?");
    }

    discoverYourAnxiety() {
		return cy.get('p').should('contain', "Discover your anxiety type and how to improve it");
    }

    skipButton() {
        return cy.get( '.sl-skip-to-signup' ).should( 'have.value', 'Skip to sign up  →' ).click();
    }
    
    discoverYourAnxietyButton() {
		return cy.get('.discover-your-anxiety-type').should('have.value', 'Discover your anxiety type')
    }

    footerI() {
        return cy.xpath('/html/body/div[1]/div/footer/div[1]/div[1]').should('contain', "© 2021 Big Health.");
    }

    footerII() {
        return cy.xpath('/html/body/div[1]/div/footer/div[1]/div[2]').should('contain', "Daylight Onboarding Version 1.0.0");
    }

    discoverYourAnxietyType() {
        return cy.get('.discover-your-anxiety-type').should( 'have.value', 'Discover your anxiety type' ).click();
      }
}
export default flow126HomePage;
