class importantDecision {

    importantDecisionTitle() {
        return cy.get( '.sl-page-title' ).should( 'contain', 'You have to make an important decision' );
    }

    importantDecisionPosetQuestion() {
        return cy.get( '.sl-page-post-question' ).should( 'contain', 'Which sounds more like you?' );
    }

    inputFromOthers() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/span' ).should( 'contain', 'I get input from others, but trust my gut. I usually make good decisions.' ).then( () => {
            cy.get('#options-id-0').click()
        })
    }

    decisionsIsStressful() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/span' ).should( 'contain', 'Making decisions is stressful. I rely on others for advice or really second-guess my abilities. ' ).then( () => {
            cy.get('#options-id-1').click()
        })
    }
}
export default importantDecision;