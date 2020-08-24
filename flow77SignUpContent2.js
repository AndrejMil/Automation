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
import flow1SignUp from './pageObjects/flow1SignUp';
import livewellId from './pageObjects/livewellEID';
import bjcId from './pageObjects/bjcId';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/bjchealthcare',
	'https://onboarding.qa.sleepio.com/sleepio/bjc',
	'https://onboarding.qa.sleepio.com/sleepio/livewell/77#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/abbott/77',
	'https://onboarding.qa.sleepio.com/sleepio/bh2020',
	'https://onboarding.qa.sleepio.com/sleepio/amerihealthcaritas',
	'https://onboarding.qa.sleepio.com/sleepio/demo2020/77#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/hp-inc',
	'https://onboarding.qa.sleepio.com/sleepio/baesystems'
];
var i = 0;
describe('Proba', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
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

			secondOfOst.dontHaveProblem();
			home.buttonClick();

			const neki5 = new howLikelyNew();
			neki5.highChance();
			home.buttonClick();

			const neki3 = new snoring();
			neki3.dontsnore();
			home.buttonClick();

			const neki4 = new breathing();
			neki4.yes();
			home.buttonClick();

			const neki6 = new improveYourSleep();

			neki6.noneOfTheAbove();
			home.buttonClick();

			const neki7 = new expertGuides();
			neki7.none();
			home.buttonClick();

			const neki0 = new gender();
			neki0.male().click();
			home.buttonClick();

			const neki9 = new dob();
			neki9.monthJan();
			neki9.day1();
			neki9.year1991();
			home.buttonClick();

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/livewell/77#3/1') {
					const livewell = new livewellId();
					livewell.livewellTitle();
					livewell.livewellHelpText();
					livewell.livewellAnswer();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/bjc/77#3/1') {
					const bjc = new bjcId();
					bjc.bjcTitle();
					bjc.bjcIdHelpText();
					bjc.bjcIdAnswer();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/bjchealthcare/77#3/1') {
					const bjc = new bjcId();
					bjc.bjcTitle();
					bjc.bjcIdHelpText();
					bjc.bjcIdAnswer();
				}
			});

			const signUp = new flow1SignUp();

			var passwordLabels = [
				'Choose a password*',
				'Password*'
			];

			var matching = 0;

			cy.get('[for="23610"]').then((num) => {
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
			cy.reload();
			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
