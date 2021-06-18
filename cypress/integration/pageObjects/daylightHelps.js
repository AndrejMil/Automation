class daylightHelps {

    daylightHelpsTitle() {
        return cy.get( '.dl-take-control-details > h1' ).should( 'contain', "Daylight helps you take control" );
    }

    daylightHelpsTitleII() {
        return cy.get( '.dl-take-control-details > p' ).should( 'contain', "Daylight is a confidential, clinically proven app that can help you take control of anxiety. Here’s how it works:" );
    }

    biteSized() {
        return cy.get('ul > :nth-child(1) > h2').should( 'contain', "Learn bite-sized techniques");   
    }

    biteSizedText() {
        return cy.get('ul > :nth-child(1) > p').should( 'contain', "Master practical cognitive and behavioral techniques to handle worry and anxiety");   
    }

    practice() {
        return cy.get('ul > :nth-child(2) > h2').should( 'contain', "Practice");   
    }

    practiceText() {
        return cy.get('ul > :nth-child(2) > p').should( 'contain', "Build your skills through practice and take control of challenging feelings");   
    }

    startFeelingBetter() {
        return cy.get('ul > :nth-child(3) > h2').should( 'contain', "Start feeling better");   
    }

    startFeelingBetterText() {
        return cy.get('ul > :nth-child(3) > p').should( 'contain', "Worry less and spend more time being present");   
    }

    clinicallyProven() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[4]/h1').should( 'contain', "Daylight is clinically proven to help");   
    }

    clinicallyProvenText() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[4]/p[1]').should( 'contain', "Clinical trials show significant reductions in worry and anxiety after using Daylight");   
    }

    highlyEffective() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div/div/div[4]/div/div[1]/h2' ).should( 'contain', "Highly effective" );
    }

    highlyEffectiveText() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div/div/div[4]/div/div[1]/p' ).should( 'contain', "71% of clinical trial participants resolved their anxiety problem using Daylight" );
    }

    speedyBenefits() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[4]/div/div[2]/h2').should( 'contain', "Speedy benefits" );
    }

    speedyBenefitsText() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[4]/div/div[2]/p').should( 'contain', "Clinical trial participants noticed a difference in as little as 3 weeks of using Daylight" );
    }

    longLasting() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[4]/div/div[3]/h2').should( 'contain', "Long-lasting" );
    }

    longLastingText() {
        return cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div/div/div[4]/div/div[3]/p' ).should( 'contain', "Improvements to anxiety were maintained for 6 months in a clinical trial" );
    }
    
    footNote() {
        return cy.get('.footnote').should( 'contain', "Carl et al. (2020). Efficacy of cognitive behavioral therapy for moderate-to-severe symptoms of generalized anxiety disorder: a randomized controlled trial. Depression and Anxiety. Trial conducted at Oxford University." );
    }

    skipButton() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[4]/input').click()
    }

    skipButtonII() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[6]/input').click()
    }

    scienceBasedTechniques() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[5]/h1').should( 'contain', "Science-based techniques" );
    }

    learnHowToRelax() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[5]/div[1]/div/h3').should( 'contain', "Learn how to relax" );
    }

    learnHowToRelaxTextI() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[5]/div[1]/div/h4').should( 'contain', "Scientific principle: Applied Relaxation" );
    }

    learnHowToRelaxTextII() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[5]/div[1]/div/p').should( 'contain', " to discover how tensing your body can actually calm your mind." );
    }

    controlYourWorry() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[5]/div[2]/div/h3').should( 'contain', "Control your worry" );
    }

    controlYourWorryText() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[5]/div[2]/div/p').should( 'contain', " trains you to worry only at a specific time and place, so you can be more present." );
    }
    
    tackleUnhelpfulThoughts() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[5]/div[3]/div/h3').should( 'contain', "Tackle unhelpful thoughts" );
    }

    tackleUnhelpfulThoughtsText() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[5]/div[3]/div/p').should( 'contain', " can help you identify and reframe thoughts that keep you stuck." );
    }

    addressYourFears() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[5]/div[4]/div/h3').should( 'contain', "Address your fears" );
    }

    addressYourFearsText() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[5]/div[4]/div/p').should( 'contain', " empowers you to face your fears so they have less control over you." );
    }

    daylightCanHelp() {
        return cy.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/div[6]/p').should( 'contain', "No matter your anxiety type, Daylight can help" );
    }

    disclaimer() {
        return cy.get( 'disclaimer' ).should( 'contain', 'Disclaimer: Daylight is not intended for diagnosis or treatment of a disease or condition, such as Insomnia Disorder, Generalized Anxiety Disorder or Major Depressive Disorder' );
    }

}
export default daylightHelps;