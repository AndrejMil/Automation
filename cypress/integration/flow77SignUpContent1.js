import homePageNew from '../integration/pageObjects/homePageNew';
import HomePage from '../integration/pageObjects/homePage';
import improveYourSleep from '../integration/pageObjects/improveYourSleep';
import howLong from '../integration/pageObjects/howLong';
import troubledInGeneralNew from '../integration/pageObjects/troubledInGeneralNew';
import manyNights from '../integration/pageObjects/manyNights';
import gender from '../integration/pageObjects/gender';
import howLikelyNew from '../integration/pageObjects/howLikelyNew';
import dob from '../integration/pageObjects/dob';
import breathing from '../integration/pageObjects/breathing ';
import snoring from '../integration/pageObjects/snoring';
import expertGuides from '../integration/pageObjects/expertGuides';
import stillProblem from '../integration/pageObjects/stillProblem';
import nhspostcode from '../integration/pageObjects/NHSpostcode';
import stopsYou from '../integration/pageObjects/stopsYou';
import roleCategory from '../integration/pageObjects/roleCategory';
import roleBand from '../integration/pageObjects/roleBand';
import careerLevel from './pageObjects/careerLevel';
import DTE from './pageObjects/DTE';
import SignUp from '../integration/pageObjects/SignUp';
import homeDepotEID from './pageObjects/homeDepotEID';
import careaccesspostcode from './pageObjects/care-accessPostCode';
import queensStudentID from './pageObjects/queensStudentID';
import thdEID from './pageObjects/thdEID';
import nhsAboutSleepio from './pageObjects/nhsHearAboutSleepio';
import nhsEID from './pageObjects/nhsEID';
import ukredeemEID from './pageObjects/ukredeemEID';

var links = [
    'https://onboarding.qa.sleepio.com/sleepio/thdsleep',
	'https://onboarding.qa.sleepio.com/sleepio/nhsstaff/',
	'https://onboarding.qa.sleepio.com/sleepio/nhs-staff',
	'https://onboarding.qa.sleepio.com/sleepio/homedepot/77',
	'https://onboarding.qa.sleepio.com/sleepio/frontlineaccess/77#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/carbon/77',
	'https://onboarding.qa.sleepio.com/sleepio/accenture'
];
var i = 0;
describe('flow 77 signup content1', () => {
    console.log(links[i]);
    it('Start the test', () => {
        
      for (; i < links.length; i++) {
        const home = new HomePage();
        const homePage = new homePageNew();
        homePage.visitFirstPage(links[i]);
        homePage.buttonNew();

        const troubledInGeneralNewQuestion = new troubledInGeneralNew();
        troubledInGeneralNewQuestion.notAtAll();
        home.buttonClick();

        const manyNightsQuestion = new manyNights();
        manyNightsQuestion.night5();
        home.buttonClick();

        const stillProblemQuestion = new stillProblem();
        stillProblemQuestion.no();
        home.buttonClick();

        const stopsYouQuestion = new stopsYou();
        stopsYouQuestion.worriesFuture();
        home.buttonClick();

        const howLongQuestion = new howLong();
        howLongQuestion.years();
        home.buttonClick();
		
        const howLikelyNewQuestion = new howLikelyNew();
        howLikelyNewQuestion.highChance();
        home.buttonClick();

        const snoringQuestion = new snoring();
        snoringQuestion.dontsnore();
        home.buttonClick();
			
        const breathingQuestion = new breathing();
        breathingQuestion.yes();
        home.buttonClick();

        const improveYourSleepQuestion = new improveYourSleep();
        improveYourSleepQuestion.noneOfTheAbove();
        home.buttonClick();

		
        const expertGuidesQuestion = new expertGuides();
        expertGuidesQuestion.none();
        home.buttonClick();

        const genderQuestion = new gender();
        genderQuestion.male();
        home.buttonClick();
          

        cy.url().then((urlString) => {
            if (urlString != 'https://onboarding.qa.sleepio.com/sleepio/accenture/77#3/1') {
                const dobQuestion = new dob();
                dobQuestion.monthJan();
                dobQuestion.day1();
                dobQuestion.year1991();
                home.buttonClick();
            }
        });

          cy.url().then( ( urlString ) => {
            if ( urlString == 'https://onboarding.qa.sleepio.com/sleepio/thdsleep/77#3/1' ) {
        
                const thd = new thdEID();
                thd.thdEIDTitle();
                thd.thdEIDAnswer();
                signUp.signUpHeader();
                signUp.firstNameLabel();
                signUp.firstNameImput();
                signUp.lastNameLabel();
                signUp.lastNameImput();
                signUp.emailLabel();
                signUp.emailInput();
                signUp.passwordInput();
                signUp.passwordHint();
                signUp.privacy();
                signUp.checkBoxes();
                signUp.terms();
                signUp.doctorLabel();
                signUp.suitable();

                cy.visit( 'https://onboarding.qa.sleepio.com/sleepio/ukredeem/77#3/1' );
                const ukredeem = new ukredeemEID();
                ukredeem.ukredeemEIDTitle();
                ukredeem.ukredeemEIDAnswer();
            }
          } );
        cy.url().then((urlString) => {
            if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/accenture/1#2/15') {
                const career = new careerLevel();
                career.careerTitle();
                career.leadership();
                career.levels5();
                career.levels8();
                career.levels11();
                career.dontwork();
                home.buttonClick();

                const dte = new DTE();
                dte.DTETitle();
                dte.acg();
                dte.copFunctions();
                dte.aceOperations();
                dte.aceTehnology();
                dte.aceStrategy();
                dte.aceDigital();
                dte.finService();
                dte.products();
                dte.resource();
                dte.heaktPublicSer();
                dte.communMedi();
                dte.iDont();
                home.buttonClick();
            }

            
            if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/homedepot/77#3/1') {
                const homeSignUp = new homeDepotEID();
                homeSignUp.homeDepotEIDTitle();
                homeSignUp.homeDepotEIDAnswer();
            }

            if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/care-access/77#2/13') {
                const social = new careaccesspostcode();
                social.careaccessTitle();
                social.careaccessAnswer();
                home.buttonClick();
            }

            if ( urlString == 'https://onboarding.qa.sleepio.com/sleepio/nhs-staff/77#2/13' ) {
                const nhsPCNew = new nhspostcode();
                nhsPCNew.nhspostcodeTitle();
                nhsPCNew.nhspostcodeAnswer();
                home.buttonClick();

                const roleNew = new roleCategory();
                roleNew.roleTitle();
                roleNew.clinical();
                roleNew.nonClinical();
                home.buttonClick();

                const bandNew = new roleBand();
                bandNew.roleBandTitle();
                bandNew.band2();
                bandNew.band3();
                bandNew.band4();
                bandNew.band5();
                bandNew.band6();
                bandNew.band7();
                bandNew.band8a();
                bandNew.band8b();
                bandNew.band8c();
                bandNew.band8d();
                bandNew.band9();
                bandNew.vsm();
                bandNew.contracted();
                home.buttonClick();
            }
            if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/nhsstaff/77#2/13') {
                const nhsPCNew = new nhspostcode();
                nhsPCNew.nhspostcodeTitle();
                nhsPCNew.nhspostcodeAnswer();
                home.buttonClick();

                const roleNew = new roleCategory();
                roleNew.roleTitle();
                roleNew.clinical();
                roleNew.nonClinical();
                home.buttonClick();

                const bandNew = new roleBand();
                bandNew.roleBandTitle();
                bandNew.band2();
                bandNew.band3();
                bandNew.band4();
                bandNew.band5();
                bandNew.band6();
                bandNew.band7();
                bandNew.band8a();
                bandNew.band8b();
                bandNew.band8c();
                bandNew.band8d();
                bandNew.band9();
                bandNew.vsm();
                bandNew.contracted();
                home.buttonClick();
            }
        });

        const signUp = new SignUp();

        var passwordLabels = [
            'Choose a password*',
            'Password*'
        ];

        var matching = 0;

        cy.get('[for="36133"]').then((num) => {
            var m = 0;
            for (; m < passwordLabels.length; m++) {
                if (passwordLabels[m] == num.text()) {
                    matching += 1;
                }
            }

            expect(matching).to.equal(1);
            matching -= 1;
        });
        signUp.signUpHeader();
        signUp.firstNameLabel();
        signUp.firstNameImput();
        signUp.lastNameLabel();
        signUp.lastNameImput(); 
        signUp.emailLabel();
        signUp.emailInput();
        signUp.passwordInput();
        signUp.passwordHint();
        signUp.privacy();
        signUp.terms();
        signUp.checkBoxes();
        signUp.doctorLabel();
        signUp.suitable();
        cy.clearCookies();
        cy.clearLocalStorage();
    }
});
});