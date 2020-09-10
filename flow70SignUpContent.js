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
import rocheSignUp from '../integration/pageObjects/rocheSignUp';
import generalMillsEID from '../integration/pageObjects/generalMillsEID';
import thehartfordEID from '../integration/pageObjects/thehartfordEID';

var linkovi = [
	'https://onboarding.sleepio.com/sleepio/thehartford/70',
	'https://onboarding.sleepio.com/sleepio/capri/70',
	'https://onboarding.sleepio.com/sleepio/roche/70#1/1'
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

			cy.wait(5000);
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

			const experts = new sleepioExperts();

			experts.expertsInput();
			home.buttonClick();

			const signUp = new flow1SignUp();

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.sleepio.com/sleepio/roche/70#3/1') {
					const signUp = new flow1SignUp();
					const roche = new rocheSignUp();
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
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();

					roche.unixID();
					roche.unixIDAnswer();

					cy.visit('https://onboarding.sleepio.com/sleepio/genentech/70#3/1');
					cy.wait(2000);
					roche.unixID();
					roche.unixIDAnswer();
				}
			});

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.sleepio.com/sleepio/thehartford/70#3/1') {
					const hartford = new thehartfordEID();
					hartford.thehartfordTitle();
					hartford.thehartfordAnswer();
				}
			});

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.sleepio.com/sleepio/capri/70#3/1') {
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
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();

					cy.visit('https://onboarding.sleepio.com/sleepio/access/70#3/1');
					cy.wait(3000);
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
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();

					cy.visit('https://onboarding.sleepio.com/sleepio/demo2020HI/70#3/1');
					cy.wait(3000);
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
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();

					cy.visit('https://onboarding.sleepio.com/sleepio/caprisleep/70#1/1');
					cy.wait(3000);
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
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();

					cy.visit('https://onboarding.sleepio.com/sleepio/michaelkors');
					cy.wait(3000);
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
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();

					cy.visit('https://onboarding.sleepio.com/sleepio/hp-inc/70#3/1');
					cy.wait(3000);
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
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();

					cy.visit('https://onboarding.sleepio.com/sleepio/hpinc/70#3/1');
					cy.wait(3000);
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
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();

					cy.visit('https://onboarding.sleepio.com/sleepio/generalmillsrest/70#3/1');
					cy.wait(3000);
					const generalMills = new generalMillsEID();
					generalMills.generalMillsEIDTitle();
					generalMills.generalMillsEIDAnswer();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImput();
					signUp.passwordLabelII();
					signUp.passwordImput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();

					cy.visit('https://onboarding.sleepio.com/sleepio/generalmills/70#3/1');
					cy.wait(3000);
					generalMills.generalMillsEIDTitle();
					generalMills.generalMillsEIDAnswer();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImput();
					signUp.passwordLabelII();
					signUp.passwordImput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();

					cy.visit('https://onboarding.sleepio.com/sleepio/hpinc/70#3/1');
					cy.wait(3000);
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
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();

					cy.visit('https://onboarding.sleepio.com/sleepio/salesforce/70#3/1');
					cy.wait(3000);
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
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();

					cy.visit('https://onboarding.sleepio.com/sleepio/amerihealthcaritas/70#3/1');
					cy.wait(3000);
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
					signUp.phoneNumberLabel();
					signUp.phoneNumberImput();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();
				}
			});

			var phone = [
				'Phone Number',
				'Cell/Mobile Phone Number',
				'Mobile Number',
				'Phone Number (Personal or Cell)'
			];

			var matching = 0;

			cy.get('[data-input-name="phone_number"] > .sl-interactive--field-label').then((num) => {
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
