import homePageNew from '../integration/pageObjects/homePageNew';
import HomePage from '../integration/pageObjects/homePage';
import improveYourSleep from '../integration/pageObjects/improveYourSleep';
import howLong from '../integration/pageObjects/howLong';
import troubledInGeneralNew from '../integration/pageObjects/troubledInGeneralNew';
import manyNights from '../integration/pageObjects/manyNights';
import gender from '../integration/pageObjects/gender';
import howLikelyNew from '../integration/pageObjects/howLikelyNew';
import stopsYou from '../integration/pageObjects/stopsYou';
import dob from '../integration/pageObjects/dob';
import breathing from '../integration/pageObjects/breathing ';
import snoring from '../integration/pageObjects/snoring';
import expertGuides from '../integration/pageObjects/expertGuides';
import stillProblem from '../integration/pageObjects/stillProblem';
import sleepioExperts from '../integration/pageObjects/sleepioExperts';
import workLocation from '../integration/pageObjects/workLocation';
import SignUp from '../integration/pageObjects/SignUp';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/newscorpsleep/76',
	'https://onboarding.qa.sleepio.com/sleepio/newscorp',
	'https://onboarding.qa.sleepio.com/sleepio/holmansleep',
	'https://onboarding.qa.sleepio.com/sleepio/amerigasrest/76',
	'https://onboarding.qa.sleepio.com/sleepio/amerigas',
	'https://onboarding.qa.sleepio.com/sleepio/holman',
	'https://onboarding.qa.sleepio.com/sleepio/hubbell',
	'https://onboarding.qa.sleepio.com/sleepio/hubbellrest/76#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/hubbellsleep',
	'https://onboarding.qa.sleepio.com/sleepio/usfoods1/',
	'https://onboarding.qa.sleepio.com/sleepio/usfoods2',
	'https://onboarding.qa.sleepio.com/sleepio/usfoodsrest/76'
];

var i = 0;
describe('flow 76 sign up', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		
		// Get started page
		for (; i < linkovi.length; i++) {
			const home = new HomePage();
			const homePage = new homePageNew();
			homePage.visitFirstPage(linkovi[i]);
			homePage.buttonNew();

			const troubledInGeneralNewQuestion = new troubledInGeneralNew();
			troubledInGeneralNewQuestion.notAtAll();
			home.buttonClick();
		
			const manyNightsQuestion = new manyNights();
			manyNightsQuestion.night7();
			home.buttonClick();

			const stillProblemQuestion = new stillProblem();
			stillProblemQuestion.no();
			home.buttonClick();

			const stopsYouQuestion = new stopsYou();
			stopsYouQuestion.light();
			home.buttonClick();


			const howLongQuestion = new howLong();
			howLongQuestion.sixYears();
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
			genderQuestion.another()
			home.buttonClick();

		
			const dobQuestion = new dob();
			dobQuestion.monthJan();
			dobQuestion.day1();
			dobQuestion.year1991();
			home.buttonClick();

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/hubbell/76#2/13') {
					const hubbellCustom = new workLocation();

					hubbellCustom.dontWork();
					home.buttonClick();
				}
			});
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/hubbellrest/76#2/13') {
					const hubbellCustom = new workLocation();

					hubbellCustom.dontWork();
					home.buttonClick();
				}
			});
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/hubbellsleep/76#2/13') {
					const hubbellCustom = new workLocation();

					hubbellCustom.dontWork();
					home.buttonClick();
				}
			});

			const experts = new sleepioExperts();

			experts.expertsInput();
			home.buttonClick();

			const signUp = new SignUp();

			var phone = [
				'Phone Number',
				'Cell/Mobile Phone Number',
				'Mobile Number'
			];

			var matching = 0;

			cy.get('[for="23633"]').then((num) => {
				var m = 0;
				for (; m < phone.length; m++) {
					if (phone[m] == num.text()) {
						matching += 1;
					}
				}
				// This must always be 1 - the phone number label must match only one of the phone list
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
			signUp.passwordLabel();
			signUp.passwordInput();
			signUp.passwordHint();
			signUp.phoneNumberInput();
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
