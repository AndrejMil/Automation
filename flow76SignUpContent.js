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
import sleepioExperts from '../integration/pageObjects/sleepioExperts';
import workLocation from '../integration/pageObjects/workLocation';
import flow1SignUp from '../integration/pageObjects/flow1SignUp';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/hubbell',
	'https://onboarding.qa.sleepio.com/sleepio/hubbellrest/76#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/hubbellsleep',
	'https://onboarding.qa.sleepio.com/sleepio/usfoods1/',
	'https://onboarding.qa.sleepio.com/sleepio/usfoods2',
	'https://onboarding.qa.sleepio.com/sleepio/usfoodsrest/76',
	'https://onboarding.qa.sleepio.com/sleepio/newscorpsleep/76',
	'https://onboarding.qa.sleepio.com/sleepio/newscorp',
	'https://onboarding.qa.sleepio.com/sleepio/holman',
	'https://onboarding.qa.sleepio.com/sleepio/holmansleep',
	'https://onboarding.qa.sleepio.com/sleepio/amerigasrest/76',
	'https://onboarding.qa.sleepio.com/sleepio/amerigas'
];

var i = 0;
describe('Proba', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		Cypress.currentTest.retries(5);
		// Get started page
		for (; i < linkovi.length; i++) {
			const home = new HomePage();
			const homePage = new homePageNew();

			homePage.visitFirstPage(linkovi[i]);

			cy.wait(3000);
			homePage.buttonNew();

			const fourthdOfOst = new troubledInGeneralNew();
			fourthdOfOst.notAtAll();
			home.buttonClick();

			const fiveOfOst = new manyNights();
			fiveOfOst.night7();
			home.buttonClick();

			const still = new stillProblem();
			still.no();
			home.buttonClick();

			const secondOfOst = new howLong();
			secondOfOst.moreYears();
			home.buttonClick();

			const seventhOfOst = new howLikelyNew();
			seventhOfOst.highChance();
			home.buttonClick();

			const neki2 = new snoring();
			neki2.dontsnore();
			home.buttonClick();

			const neki = new breathing();
			neki.no();

			home.buttonClick();

			const firstofOst = new improveYourSleep();
			firstofOst.noneOfTheAbove();
			home.buttonClick();

			const guides = new expertGuides();
			guides.none();
			home.buttonClick();

			const eightOfOst = new gender();
			eightOfOst.male().click();

			home.buttonClick();

			const ninthOfOst = new dob();
			ninthOfOst.monthJan();
			ninthOfOst.day1();
			ninthOfOst.year1991();
			home.buttonClick();

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/hubbell/76#2/12') {
					const hubbellCustom = new workLocation();

					hubbellCustom.dontWork();
					home.buttonClick();
				}
			});
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/hubbellrest/76#2/12') {
					const hubbellCustom = new workLocation();

					hubbellCustom.dontWork();
					home.buttonClick();
				}
			});
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/hubbellsleep/76#2/12') {
					const hubbellCustom = new workLocation();

					hubbellCustom.dontWork();
					home.buttonClick();
				}
			});

			const experts = new sleepioExperts();

			experts.expertsInput();
			home.buttonClick();

			const signUp = new flow1SignUp();

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
			signUp.emailImput();
			signUp.passwordLabel();
			signUp.passwordImput();
			signUp.passwordHint();
			signUp.phoneNumberImput();
			signUp.privacy();
			signUp.terms();
			signUp.doctorLabel();
			signUp.doctorLabel();
			signUp.doctorLink();
			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
