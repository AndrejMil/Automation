class whichSoundsLikeYou {

    whichSoundsLikeYouTitle() {
        return cy.get( '.sl-page-title' ).should( 'contain', 'Which sounds like you?' );
    }

    whichSoundsLikeYouPosetQuestion() {
        return cy.get( '.sl-page-post-question' ).should( 'contain', 'Select as many as you like.' );
    }

    feelingUnsure() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/span' ).should( 'contain', 'I can’t stand feeling unsure.' ).then( () => {
            cy.get('#options-id-0').click()
        })
    }

    worstCaseConclusions() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/span' ).should( 'contain', 'I always jump to worst case conclusions.' ).then( () => {
            cy.get('#options-id-1').click()
        })
    }

    makingMistakes() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[3]/label/span' ).should( 'contain', 'I spend way more time than I need to prevent making mistakes.' ).then( () => {
            cy.get('#options-id-2').click()
        })
    }
    
    extraResponsibilities() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[4]/label/span' ).should( 'contain', 'I often take on extra responsibilities even when it’s not necessary.' ).then( () => {
            cy.get('#options-id-3').click()
        })
    }

    avoidFeelingBad() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[5]/label/span' ).should( 'contain', 'I do everything I can to avoid feeling bad.' ).then( () => {
            cy.get('#options-id-4').click()
        })
    }

    secondGuessing() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[6]/label/span' ).should( 'contain', 'I am always second-guessing myself.' ).then( () => {
            cy.get('#options-id-5').click()
        })
    }

    button() {
        return cy.get( '.sl-button' ).should( 'contain', 'Continue' ).click();
    }
}
export default whichSoundsLikeYou;