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
import flow1SignUp from '../integration/pageObjects/flow1SignUp';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/abbott_deprecated/1',
	'https://onboarding.qa.sleepio.com/sleepio/stjames',
	'https://onboarding.qa.sleepio.com/sleepio/acme/1#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/big-health',
	'https://onboarding.qa.sleepio.com/sleepio/test_product',
	'https://onboarding.qa.sleepio.com/sleepio/bh'
];
var i = 0;
describe('Flow 1', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		Cypress.currentTest.retries(5);
		// Get started page
		for (; i < linkovi.length; i++) {
			const homePage = new HomePage();

			homePage.visitFirstPage(linkovi[i]);

			cy.wait(3000);
			homePage.buttonClick();

			// First page of OST

			const firstofOst = new improveYourSleep();

			firstofOst.sleepMoreEasily();
			homePage.buttonClick();

			// Second page of OST

			const secondOfOst = new howLong();

			secondOfOst.weeks();
			homePage.buttonClick();

			// Third page of OST

			const thirdOfOst = new stopsYou();

			thirdOfOst.light();
			homePage.buttonClick();

			// Fourth page of OST

			const fourthdOfOst = new troubledInGeneral();

			fourthdOfOst.notAtAll();

			homePage.buttonClick();

			const fiveOfOst = new manyNights();

			fiveOfOst.night7();
			homePage.buttonClick();

			const sixOfOst = new importantThings();

			sixOfOst.veryOften();
			homePage.buttonClick();

			const seventhOfOst = new howLikely();

			seventhOfOst.highChance();
			homePage.buttonClick();

			const neki2 = new snoring();

			neki2.dontsnore();
			homePage.buttonClick();

			const neki = new breathing();

			neki.yes();
			homePage.buttonClick();

			const eightOfOst = new gender();

			eightOfOst.another().click();
			homePage.buttonClick();

			const ninthOfOst = new dob();

			ninthOfOst.monthJan();

			ninthOfOst.day1();

			ninthOfOst.year1991();
			ninthOfOst.year1997();

			homePage.buttonClick();

			const tenthOfOst = new employment();

			tenthOfOst.fullTime();
			homePage.buttonClick();

			const eleventhOfOst = new poorSleep();

			eleventhOfOst.sleep0();
			homePage.buttonClick();

			const twelfthOfOst = new manyHours();

			twelfthOfOst.manyHoursTitle();
			twelfthOfOst.numberHours().type('5');
			homePage.buttonClick();

			const guides = new expertGuides();

			guides.jetlag();
			homePage.buttonClick();

			const signUp = new flow1SignUp();

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
			signUp.privacy();
			signUp.terms();
			signUp.signUpGoogle();
			signUp.signUpFacebook();
			signUp.doctorLabel();
			signUp.doctorLabel();
			signUp.doctorLink();
			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
