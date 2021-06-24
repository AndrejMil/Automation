class wedding {

    weddingTitle() {
        return cy.get( '.sl-page-title' ).should( 'contain', 'You need to give a speech at a wedding' );
    }

    weddingPosetQuestion() {
        return cy.get( '.sl-page-post-question' ).should( 'contain', 'Which sounds more like you?' );
    }

    tonOfTimePreparing() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/span' ).should( 'contain', 'I spend a ton of time preparing. I would hate to make a mistake.' ).then( () => {
            cy.get('#options-id-0').click()
        })
    }

    tryMyBest() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/span' ).should( 'contain', 'I try my best, but sometimes I wing it. Best not to over-prepare.' ).then( () => {
            cy.get('#options-id-1').click()
        })
    }
}
export default wedding;

