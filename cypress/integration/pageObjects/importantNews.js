class importantNews {

    importantNewsTitle() {
        return cy.get( '.sl-page-title' ).should( 'contain', 'You’re waiting for some important news' );
    }

    importantNewsPosetQuestion() {
        return cy.get( '.sl-page-post-question' ).should( 'contain', 'Which sounds more like you?' );
    }

    notKnowing() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/span' ).should( 'contain', 'I can’t handle not knowing! I get worked up and check my phone repeatedly.' ).then( () => {
            cy.get('#options-id-0').click()
        })
    }

    canWait() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/span' ).should( 'contain', 'I don’t like not knowing, but I can wait.' ).then( () => {
            cy.get('#options-id-1').click()
        })
    }
}
export default importantNews;