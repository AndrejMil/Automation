import flow126HomePage from './pageObjects/flow126HomePage';
import daylightHelps from './pageObjects/daylightHelps';
import whichSoundsLikeYou from './pageObjects/whichSoundsLikeYou';
import assignedGroupProject from './pageObjects/assignedGroupProject';
import importantDecision from './pageObjects/importantDecision';
import importantNews from './pageObjects/importantNews';
import wedding from './pageObjects/wedding';
import upsettingNews from './pageObjects/upsettingNews';
import returnYourCall from './pageObjects/returnYourCall';

let links = [
	'https://onboarding.qa.trydaylight.com/daylight/deltaday/126#1/1'
];
let i = 0;
describe('Flow 126', () => {
	console.log(links[i]);
	it('Start the test', () => {
		// Get started page
        for ( ; i < links.length; i++ ) {
            const homePage = new flow126HomePage;
            homePage.visitFirstPage(links[i])
            homePage.flow126HomePageTitleI();
            homePage.flow126HomePageTitleII();
            homePage.discoverYourAnxiety();
            homePage.footerI();
            homePage.footerII();
            homePage.skipButton();

            const helps = new daylightHelps;
            helps.daylightHelpsTitle();
            helps.daylightHelpsTitleII();
            helps.biteSized();
            helps.biteSizedText();
            helps.practice();
            helps.practiceText();
            helps.startFeelingBetter();
            helps.startFeelingBetterText();
            helps.clinicallyProven();
            helps.clinicallyProvenText();
            helps.highlyEffective();
            helps.highlyEffectiveText();
            helps.speedyBenefits();
            helps.speedyBenefitsText();
            helps.longLasting();
            helps.longLastingText();
            helps.footNote();
            helps.skipButton();
            cy.go( 'back' );
            helps.scienceBasedTechniques();
            helps.learnHowToRelax();
            helps.learnHowToRelaxTextI();
            helps.learnHowToRelaxTextII();
            helps.controlYourWorry();
            helps.controlYourWorryText();
            helps.tackleUnhelpfulThoughts();
            helps.tackleUnhelpfulThoughtsText();
            helps.addressYourFears();
            helps.addressYourFearsText();
            helps.daylightCanHelp();
            helps.skipButtonII();
            cy.go( 'back' );
            cy.go( 'back' );
            homePage.discoverYourAnxietyType();

            const soundsLike = new whichSoundsLikeYou;
            soundsLike.whichSoundsLikeYouTitle();
            soundsLike.whichSoundsLikeYouPosetQuestion();
            soundsLike.feelingUnsure();
            soundsLike.worstCaseConclusions();
            soundsLike.makingMistakes();
            soundsLike.extraResponsibilities();
            soundsLike.avoidFeelingBad();
            soundsLike.secondGuessing()
            soundsLike.button();

            const assigned = new assignedGroupProject;
            assigned.assignedGroupProjectTitle();
            assigned.assignedGroupProjectPosetQuestion();
            assigned.feelResponsible();
            assigned.doMyPart();
            soundsLike.button();

            const decision = new importantDecision;
            decision.importantDecisionTitle();
            decision.importantDecisionPosetQuestion();
            decision.inputFromOthers();
            decision.decisionsIsStressful();
            soundsLike.button();

            const news = new importantNews;
            news.importantNewsTitle();
            news.importantNewsPosetQuestion();
            news.notKnowing();
            news.canWait();
            soundsLike.button();

            const weddingQuestion = new wedding;
            weddingQuestion.weddingTitle();
            weddingQuestion.weddingPosetQuestion();
            weddingQuestion.tonOfTimePreparing();
            weddingQuestion.tryMyBest();
            soundsLike.button();

            const upsetting = new upsettingNews;
            upsetting.upsettingNewsTitle();
            upsetting.upsettingNewsPosetQuestion();
            upsetting.unpleasant();
            upsetting.avoidFeeling();
            soundsLike.button();

            const returnCall = new returnYourCall;
            returnCall.returnYourCallTitle();
            returnCall.returnYourCallPosetQuestion();
            returnCall.mad();
            returnCall.busy();
            soundsLike.button();
        }
	});
});
