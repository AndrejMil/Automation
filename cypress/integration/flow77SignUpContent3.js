import homePageNew from '../pageObjects/homePageNew';
import HomePage from '../pageObjects/homePage';
import improveYourSleep from '../pageObjects/improveYourSleep';
import howLong from '../pageObjects/howLong';
import troubledInGeneralNew from '../pageObjects/troubledInGeneralNew';
import manyNights from '../pageObjects/manyNights';
import gender from '../pageObjects/gender';
import howLikelyNew from '../pageObjects/howLikelyNew';
import dob from '../pageObjects/dob';
import stopsYou from '../pageObjects/stopsYou';
import breathing from '../pageObjects/breathing ';
import snoring from '../pageObjects/snoring';
import expertGuides from '../pageObjects/expertGuides';
import stillProblem from '../pageObjects/stillProblem';
import workForComcast from '../pageObjects/workForComcast';
import eyUpn from '../pageObjects/eyUpn';
import fujifilmId from '../pageObjects/fujifilmId';
import bjcId from '../pageObjects/bjcId';
import threeMId from '../pageObjects/3mId';
import tmNumber from '../pageObjects/tmNumber';
import nhsScotlandPostcode from '../pageObjects/nhsScotlandPostcode';
import nhsSelectFunction from '../pageObjects/nhsSelectFunction';
import SignUp from '../pageObjects/SignUp';
import stanfordEID from '../pageObjects/stanfordEID';

var links = [
	'https://onboarding.qa.sleepio.com/sleepio/comcast',
	'https://onboarding.qa.sleepio.com/sleepio/healthandcare-scot',
	'https://onboarding.qa.sleepio.com/sleepio/harvardpilgrim',
	
];
var i = 0;
describe('flow 77 signup content3', () => {
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


			cy.url().then((urlString) => {
				if (urlString != 'https://onboarding.qa.sleepio.com/sleepio/google/77#3/1') {
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
				}
			});
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/comcast/77#2/13') {
					const workComcast = new workForComcast();
					workComcast.dontWorkComcast();
					home.buttonClick();

					const signUp1 = new SignUp();
					signUp1.signUpHeader();
				}

				if ( urlString == 'https://onboarding.qa.sleepio.com/sleepio/access/77#3/1' ) {
					
					const signUp = new SignUp();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailInput();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.checkBoxes();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
					cy.clearCookies();
					cy.clearLocalStorage();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/stanford/77#3/1');
					const stanford = new stanfordEID();
					stanford.stanfordEIDTitle();
					stanford.stanfordEIDsEIDAnswer();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailInput();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.checkBoxes();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
					cy.clearCookies();
					cy.clearLocalStorage();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/southerncompany/77#3/1');
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailInput();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.privacy();
					signUp.checkBoxes();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
					cy.clearCookies();
					cy.clearLocalStorage();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/sonymusic/77#3/1');
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailInput();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.privacy();
					signUp.checkBoxes();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
					cy.clearCookies();
					cy.clearLocalStorage();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/dhscstaff/77#3/1');
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailInput();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.checkBoxes();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
					cy.clearCookies();
					cy.clearLocalStorage();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/dhsc-staff/77#3/1');
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailInput();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.checkBoxes()
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
					cy.clearCookies();
					cy.clearLocalStorage();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/ey/77#3/1');
					const ey = new eyUpn();
					ey.eyUpnTitle();
					ey.eyUpnHelpText();
					ey.eyUpnAnswer();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailInput();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.checkBoxes()
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
					cy.clearCookies();
					cy.clearLocalStorage();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/fujifilm/77#3/1');
					const fujifilm = new fujifilmId();
					fujifilm.fujifilmIdTitle();
					fujifilm.fujifilmIdHelpText();
					fujifilm.fujifilmIdAnswer();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailInput();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.privacy();
					signUp.checkBoxes();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
					cy.clearCookies();
					cy.clearLocalStorage();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/bjc/77#3/1');
					const bjc = new bjcId();
					bjc.bjcTitle();
					bjc.bjcIdHelpText();
					bjc.bjcIdAnswer();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailInput();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.checkBoxes();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
					cy.clearCookies();
					cy.clearLocalStorage();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/3m/77#3/1');
					const threeM = new threeMId();
					threeM.threeMTitle();
					threeM.threeMHelpText();
					threeM.threeMAnswer();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailInput();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.checkBoxes();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
					cy.clearCookies();
					cy.clearLocalStorage();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/target/77#3/1');
					const tmNum = new tmNumber();
					tmNum.tmNumberTitle();
					tmNum.tmNumberHelpText();
					tmNum.tmNumberAnswer();
					signUp.signUpHeader();
					signUp.firstNameLabel();
					signUp.firstNameImput();
					signUp.lastNameLabel();
					signUp.lastNameImput();
					signUp.emailLabel();
					signUp.emailInput();
					signUp.passwordInput();
					signUp.passwordHint();
					signUp.checkBoxes();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.suitable();
					cy.clearCookies();
					cy.clearLocalStorage();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/healthandcare-scot/77#2/13') {
					const nhsScotPostcode = new nhsScotlandPostcode();
					nhsScotPostcode.nhsScotPostcodeAnswer();
					home.buttonClick();

					const nhsFunction = new nhsSelectFunction();
					nhsFunction.other();
					home.buttonClick();
				}
			});

			const signUp = new SignUp();

			var passwordLabels = [
				'Choose a password*',
				'Password*'
			];

			var matching = 0;

			cy.get('[for="36133"]').then((num) => {
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
			signUp.emailInput();
			signUp.passwordInput();
			signUp.passwordHint();
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
