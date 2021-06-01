import homePageNew from '../integration/pageObjects/homePageNew';
import HomePage from '../integration/pageObjects/homePage';
import improveYourSleep from '../integration/pageObjects/improveYourSleep';
import howLong from '../integration/pageObjects/howLong';
import troubledInGeneralNew from '../integration/pageObjects/troubledInGeneralNew';
import manyNights from '../integration/pageObjects/manyNights';
import gender from '../integration/pageObjects/gender';
import howLikelyNew from '../integration/pageObjects/howLikelyNew';
import dob from '../integration/pageObjects/dob';
import stopsYou from '../integration/pageObjects/stopsYou';
import breathing from '../integration/pageObjects/breathing ';
import snoring from '../integration/pageObjects/snoring';
import expertGuides from '../integration/pageObjects/expertGuides';
import stillProblem from '../integration/pageObjects/stillProblem';
import sleepioExperts from '../integration/pageObjects/sleepioExperts';
import workLocation from '../integration/pageObjects/workLocation';
import rocheSignUp from '../integration/pageObjects/rocheSignUp';
import generalMillsEID from '../integration/pageObjects/generalMillsEID';
import thehartfordEID from '../integration/pageObjects/thehartfordEID';
import SignUp from '../integration/pageObjects/SignUp';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/thehartford/70',
	'https://onboarding.qa.sleepio.com/sleepio/capri/70',
	'https://onboarding.qa.sleepio.com/sleepio/roche/70#1/1'
];

var i = 0;
describe('flow70SignUp', () => {
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
			expertGuidesQuestion.pregnancy();
			home.buttonClick();

	
			const genderQuestion = new gender();
			genderQuestion.another()
			home.buttonClick();
			home.buttonClick();

			const dobQuestion = new dob();
			dobQuestion.dobTitle();
			dobQuestion.monthJan();
			dobQuestion.day1();
			dobQuestion.year1991();
			home.buttonClick();

		
			const sleepioExpertsQuestion = new sleepioExperts();
			sleepioExpertsQuestion.expertsInput();
			home.buttonClick();

			const signUp = new SignUp();

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/roche/70#3/1') {
					const signUp = new SignUp();
					const rocheSignUpQuestion = new rocheSignUp();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImputflow77();
					signUp.passwordLabel();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberInput();
					signUp.checkBoxes();
					signUp.privacy()
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
					rocheSignUpQuestion.unixID();
					rocheSignUpQuestion.unixIDAnswer();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/genentech/70#3/1');
					rocheSignUpQuestion.unixID();
					rocheSignUpQuestion.unixIDAnswer();
				}
			});

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/thehartford/70#3/1') {
					const thehartfordEIDQuestion = new thehartfordEID();
					thehartfordEIDQuestion.thehartfordTitle();
					thehartfordEIDQuestion.thehartfordAnswer();
				}
			});

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/capri/70#3/1') {
					const signUp = new SignUp();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImputflow77();
					signUp.passwordLabel();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberInput();
					signUp.privacy();
					signUp.checkBoxes()
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/demo2020HI/70#3/1');
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImputflow77();
					signUp.passwordLabel();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.privacy();
					signUp.checkBoxes()
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/caprisleep/70#1/1');
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImputflow77();
					signUp.passwordLabel();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberInput();
					signUp.privacy();
					signUp.checkBoxes()
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/michaelkors');
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImputflow77();
					signUp.passwordLabel();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberInput();
					signUp.checkBoxes()
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/hp-inc/70#3/1');
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImputflow77();
					signUp.passwordLabel();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberInput();
					signUp.checkBoxes()
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/hpinc/70#3/1');
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImputflow77();
					signUp.passwordLabel();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberInput();
					signUp.checkBoxes();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/generalmillsrest/70#3/1');
					const generalMills = new generalMillsEID();
					generalMills.generalMillsEIDTitle();
					generalMills.generalMillsEIDAnswer();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImputflow77();
					signUp.passwordLabelII();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberInput();
					signUp.checkBoxes();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/generalmills/70#3/1');
					generalMills.generalMillsEIDTitle();
					generalMills.generalMillsEIDAnswer();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImputflow77();
					signUp.passwordLabelII();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberInput();
					signUp.checkBoxes();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/hpinc/70#3/1');
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImputflow77();
					signUp.passwordLabel();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberInput();
					signUp.checkBoxes()
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/salesforce/70#3/1');
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImputflow77();
					signUp.passwordLabel();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberInput();
					signUp.checkBoxes()
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/amerihealthcaritas/70#3/1');
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailImputflow77();
					signUp.passwordLabel();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.phoneNumberLabel();
					signUp.phoneNumberInput();
					signUp.checkBoxes()
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
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
			signUp.emailImputflow77();
			signUp.passwordLabel();
			signUp.passwordInput();
			signUp.passwordHint();
			signUp.phoneNumberInput();
			signUp.checkBoxes()
			signUp.privacy();
			signUp.terms();
			signUp.doctorLabel();
			signUp.suitable();
			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
