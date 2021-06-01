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
import stopsYou from '../integration/pageObjects/stopsYou';
import snoring from '../integration/pageObjects/snoring';
import expertGuides from '../integration/pageObjects/expertGuides';
import stillProblem from '../integration/pageObjects/stillProblem';
import sleepioExperts from '../integration/pageObjects/sleepioExperts';
import workLocation from '../integration/pageObjects/workLocation';
import SignUp from '../integration/pageObjects/SignUp';

var links = [
	'https://onboarding.qa.sleepio.com/sleepio/bnymsleep/78#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/bnysleep/78#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/cuhealthplan/78#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/libertymutual/78',
	'https://onboarding.qa.sleepio.com/sleepio/libertysleepio/78',
	'https://onboarding.qa.sleepio.com/sleepio/libertysleep/78',
	'https://onboarding.qa.sleepio.com/sleepio/liberty2/78#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/libertysleepy/78#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/libertymutual1/78',
	'https://onboarding.qa.sleepio.com/sleepio/bnymellon/78#1/1'
];

var i = 0;
describe('flow78 signup content', () => {
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

			const dobQuestion = new dob();
			dobQuestion.monthJan();
			dobQuestion.day1();
			dobQuestion.year1991();
			home.buttonClick();

			const signUp = new SignUp();

			var passwordLabels = [
				'Choose a password*',
				'Password*'
			];

			let matching = 0;

			cy.get('[for="23634"]').then((num) => {
				let m = 0;
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
			signUp.emailInputFlow1(); 
			signUp.passwordInput();
			signUp.passwordHint();
			signUp.doctorLabel();
			signUp.checkBoxes();
			signUp.privacy();
			signUp.terms();
			signUp.signUpButton();
			cy.clearCookies();
			cy.clearLocalStorage();
		}
	}); 
});
