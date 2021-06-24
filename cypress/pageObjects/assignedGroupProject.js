class assignedGroupProject {

    assignedGroupProjectTitle() {
        return cy.get( '.sl-page-title' ).should( 'contain', 'You’re assigned a group project ' );
    }

    assignedGroupProjectPosetQuestion() {
        return cy.get( '.sl-page-post-question' ).should( 'contain', 'Which sounds more like you?' );
    }

    feelResponsible() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[1]/label/span' ).should( 'contain', 'I wear myself out because I feel responsible for making sure it goes well.' ).then( () => {
            cy.get('#options-id-0').click()
        })
    }

    doMyPart() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[1]/div/div[2]/div/div/div[2]/label/span' ).should( 'contain', 'I do my part. It’s not my responsibility to carry the load.' ).then( () => {
            cy.get('#options-id-1').click()
        })
    }
}
export default assignedGroupProject;