import homePageNew from '../integration/pageObjects/homePageNew';
import HomePage from '../integration/pageObjects/homePage';
import improveYourSleep from '../integration/pageObjects/improveYourSleep';
import howLong from '../integration/pageObjects/howLong';
import stopsYou from '../integration/pageObjects/stopsYou';
import troubledInGeneralNew from '../integration/pageObjects/troubledInGeneralNew';
import manyNights from '../integration/pageObjects/manyNights';
import gender from '../integration/pageObjects/gender';
import howLikelyNew from '../integration/pageObjects/howLikelyNew';
import dob from '../integration/pageObjects/dob';
import breathing from '../integration/pageObjects/breathing ';
import snoring from '../integration/pageObjects/snoring';
import expertGuides from '../integration/pageObjects/expertGuides';
import stillProblem from '../integration/pageObjects/stillProblem';
import SignUp from '../integration/pageObjects/SignUp';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/bmcsleep/107',
	'https://onboarding.qa.sleepio.com/sleepio/bmc/107#1/1'
];

var i = 0;
describe('flow 107 signup content', () => {
	console.log(linkovi[i]);
	it('Start the test', () => { 
		// Get started page
		for ( ; i < linkovi.length; i++ ) {
			
			const home = new HomePage();
			const homePage = new homePageNew();
			homePage.visitFirstPage(linkovi[i]);
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

			const dobQuestion = new dob();
			dobQuestion.monthJan();
			dobQuestion.day1();
			dobQuestion.year1991();
			home.buttonClick();

			const signUp = new SignUp();
			signUp.signUpHeader();
			signUp.firstNameLabel();
			signUp.firstNameImput();
			signUp.lastNameLabel();
			signUp.lastNameImput();
			signUp.emailLabel();
			signUp.emailImputflow107();
			signUp.passwordLabel();
			signUp.passwordInput();
			signUp.passwordHint();
			signUp.checkBoxes();
			signUp.privacy();
			signUp.terms();
			signUp.doctorLabel();
			signUp.suitable();
			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
