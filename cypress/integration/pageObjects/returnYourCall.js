class returnYourCall {

    returnYourCallTitle() {
        return cy.get( '.sl-page-title' ).should( 'contain', 'Your friend doesn’t return your call' );
    }

    returnYourCallPosetQuestion() {
        return cy.get( '.sl-page-post-question' ).should( 'contain', 'Which sounds more like you?' );
    }

    mad() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/span' ).should( 'contain', 'I lay in bed staring at the ceiling thinking about how they’re definitely mad at me.' ).then( () => {
            cy.get('#options-id-0').click()
        })
    }

    busy() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/span' ).should( 'contain', 'I assume they’re busy and don’t worry too much about it.' ).then( () => {
            cy.get('#options-id-1').click()
        })
    }
}
export default returnYourCall;