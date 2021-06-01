import HomePage from '../integration/pageObjects/homePage';
import improveYourSleep from '../integration/pageObjects/improveYourSleep';
import howLong from '../integration/pageObjects/howLong';
import stopsYou from '../integration/pageObjects/stopsYou';
import troubledInGeneral from '../integration/pageObjects/troubledInGeneral';
import importantThings from '../integration/pageObjects/importantThings';
import manyNights from '../integration/pageObjects/manyNights';
import gender from '../integration/pageObjects/gender';
import employment from '../integration/pageObjects/employment';
import manyHours from '../integration/pageObjects/howManyHours';
import howLikely from '../integration/pageObjects/howLikely';
import poorSleep from '../integration/pageObjects/poorSleep';
import dob from '../integration/pageObjects/dob';
import breathing from '../integration/pageObjects/breathing ';
import snoring from '../integration/pageObjects/snoring';
import expertGuides from '../integration/pageObjects/expertGuides';
import SignUp from '../integration/pageObjects/SignUp';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/abbott_deprecated/1',
	'https://onboarding.qa.sleepio.com/sleepio/stjames',
	'https://onboarding.qa.sleepio.com/sleepio/big-health'
];
var i = 0;
describe('Flow 1 sign up', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		// Get started page
		for (; i < linkovi.length; i++) {
			const homePage = new HomePage();

			homePage.visitFirstPage(linkovi[i]);
			homePage.buttonClick();

			const improveYourSleepQuestion = new improveYourSleep();
			improveYourSleepQuestion.noneOfTheAbove();
			homePage.buttonClick();


			const howLongQuestion = new howLong();
			howLongQuestion.howLongTitle();
			howLongQuestion.dontHaveProblem();
			homePage.buttonClick();


			const stopsYouQuestion = new stopsYou();
			stopsYouQuestion.light();
			homePage.buttonClick();

			const troubledInGeneralQuestion = new troubledInGeneral();
			troubledInGeneralQuestion.veryMuch();
			homePage.buttonClick();


			const manyNightsQuestion = new manyNights();
			manyNightsQuestion.manyNightsTitle();
			manyNightsQuestion.night7();
			homePage.buttonClick();

			const importantThingsQuestion = new importantThings();
			importantThingsQuestion.veryOften();
			homePage.buttonClick();

			const howLikelyQuestion = new howLikely();
			howLikelyQuestion.highChance();
			homePage.buttonClick();

			const snoringQuestion = new snoring();
			snoringQuestion.dontsnore();
			homePage.buttonClick();

			const breathingQuestion = new breathing();
			breathingQuestion.yes();
			homePage.buttonClick();

			const genderQuestion = new gender();
			genderQuestion.another();
			homePage.buttonClick();

			const dobQuestion = new dob();
			dobQuestion.dobTitle();
			dobQuestion.monthJan();
			dobQuestion.day1();
			dobQuestion.year1991();
			homePage.buttonClick();


			const employmentQuestion = new employment();
			employmentQuestion.fullTime();
			homePage.buttonClick();


			const poorSleepQuestion = new poorSleep();
			poorSleepQuestion.poorSleepTitle();
			poorSleepQuestion.sleep70();
			homePage.buttonClick();

			const manyHoursQuestion = new manyHours();
			manyHoursQuestion.manyHoursTitle();
			manyHoursQuestion.numberHours().type('5');
			homePage.buttonClick();

			const guides = new expertGuides();
			guides.jetlag();
			homePage.buttonClick();

			const signUp = new SignUp();
			signUp.signUpHeader();
			signUp.firstNameLabel();
			signUp.firstNameImput();
			signUp.lastNameLabel();
			signUp.lastNameImput();
			signUp.emailLabel();
			signUp.emailInputFlow1();
			signUp.passwordLabel();
			signUp.passwordInput();
			signUp.passwordHint();
			signUp.checkBoxes();
			signUp.terms();
			signUp.signUpGoogle();
			signUp.signUpFacebook();
			signUp.doctorLabel();
			signUp.suitable();
			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
