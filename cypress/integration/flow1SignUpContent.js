import HomePage from '../pageObjects/homePage';
import improveYourSleep from '../pageObjects/improveYourSleep';
import howLong from '../pageObjects/howLong';
import stopsYou from '../pageObjects/stopsYou';
import troubledInGeneral from '../pageObjects/troubledInGeneral';
import importantThings from '../pageObjects/importantThings';
import manyNights from '../pageObjects/manyNights';
import gender from '../pageObjects/gender';
import employment from '../pageObjects/employment';
import manyHours from '../pageObjects/howManyHours';
import howLikely from '../pageObjects/howLikely';
import poorSleep from '../pageObjects/poorSleep';
import dob from '../pageObjects/dob';
import breathing from '../pageObjects/breathing ';
import snoring from '../pageObjects/snoring';
import expertGuides from '../pageObjects/expertGuides';
import SignUp from '../pageObjects/SignUp';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/abbott_deprecated/1',
	'https://onboarding.qa.sleepio.com/sleepio/stjames'
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
			signUp.emailInput();
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
