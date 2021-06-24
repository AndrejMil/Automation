class upsettingNews {

    upsettingNewsTitle() {
        return cy.get( '.sl-page-title' ).should( 'contain', 'You receive some upsetting news' );
    }

    upsettingNewsPosetQuestion() {
        return cy.get( '.sl-page-post-question' ).should( 'contain', 'Which sounds more like you?' );
    }

    unpleasant() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/span' ).should( 'contain', 'I try to deal with my feelings the best I can. It may be unpleasant, but I know it will get easier with time.' ).then( () => {
            cy.get('#options-id-0').click()
        })
    }

    avoidFeeling() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/span' ).should( 'contain', 'I can’t handle it. I do everything I can to distract myself to avoid feeling bad in the moment.' ).then( () => {
            cy.get('#options-id-1').click()
        })
    }
}
export default upsettingNews;