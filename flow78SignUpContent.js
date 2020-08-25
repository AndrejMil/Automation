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
	'https://onboarding.qa.sleepio.com/sleepio/cuhealthplan/78#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/usfoods_deprecated/78#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/libertymutual/78',
	'https://onboarding.qa.sleepio.com/sleepio/libertysleepio/78',
	'https://onboarding.qa.sleepio.com/sleepio/libertysleep/78',
	'https://onboarding.qa.sleepio.com/sleepio/liberty2/78#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/libertysleepy/78#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/libertymutual1/78',
	'https://onboarding.qa.sleepio.com/sleepio/bnymellon/78#1/1'
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

			const signUp = new flow1SignUp();

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/usfoods_deprecated/78#3/1') {
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
				}
			});

			var passwordLabels = [
				'Choose a password*',
				'Password*'
			];

			var matching = 0;

			cy.get('[for="23634"]').then((num) => {
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
			signUp.emailImput();
			signUp.passwordImput();
			signUp.passwordHint();
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
