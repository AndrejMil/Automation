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
import improvmentProgram from '../integration/pageObjects/improvmentProgram';
import bestReflects from '../integration/pageObjects/bestReflects';
import following from '../integration/pageObjects/following';
import countryLocated from '../integration/pageObjects/countryLocated';
import stateWork from '../integration/pageObjects/stateWork';
import workForComcast from '../integration/pageObjects/workForComcast';
import workForSalesforce from '../integration/pageObjects/workForSalesforce';
import eyexecutive from '../integration/pageObjects/eyexecutive';
import eyUpn from '../integration/pageObjects/eyUpn';
import fujifilmId from '../integration/pageObjects/fujifilmId';
import bjcId from '../integration/pageObjects/bjcId';
import threeMId from '../integration/pageObjects/3mId';
import tmNumber from '../integration/pageObjects/tmNumber';
import nhsScotlandPostcode from '../integration/pageObjects/nhsScotlandPostcode';
import nhsSelectFunction from '../integration/pageObjects/nhsSelectFunction';
import flow76SignUp from '../integration/pageObjects/flow76SignUp';
import flow1SignUp from './pageObjects/flow1SignUp';
import generalMillsEID from './pageObjects/generalMillsEID';
import rocheSignUp from './pageObjects/rocheSignUp';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/eyexecutive',
	'https://onboarding.qa.sleepio.com/sleepio/healthandcare-scot',
	'https://onboarding.qa.sleepio.com/sleepio/Roche',
	'https://onboarding.qa.sleepio.com/sleepio/GeneralMills',
	'https://onboarding.qa.sleepio.com/sleepio/hubbellaccess/77#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/harvardpilgrim',
	'https://onboarding.qa.sleepio.com/sleepio/google',
	'https://onboarding.qa.sleepio.com/sleepio/comcast',
	'https://onboarding.qa.sleepio.com/sleepio/salesforce'
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

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/google/77#2/5') {
					const improvment = new improvmentProgram();

					improvment.ready();
					home.buttonClick();

					const reflects = new bestReflects();
					reflects.readyToWork();

					home.buttonClick();

					const seventhOfOst = new howLikelyNew();

					seventhOfOst.highChance();
					home.buttonClick();

					const neki2 = new snoring();

					neki2.no();

					home.buttonClick();

					const neki = new breathing();

					neki.yes();
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

					const follow = new following();
					follow.googleAlphabet();
					home.buttonClick();

					const country = new countryLocated();
					country.italy();
					home.buttonClick();

					const stateGoogle = new stateWork();

					stateGoogle.arizona();
					home.buttonClick();

					const signUp = new flow76SignUp();
					signUp.signUpHeader();
				}
			});

			cy.url().then((urlString) => {
				if (urlString != 'https://onboarding.qa.sleepio.com/sleepio/google/77#3/1') {
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
				}
			});
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/generalmills/77#3/1') {
					const generalMills = new generalMillsEID();
					generalMills.generalMillsEIDTitle();
					generalMills.generalMillsEIDAnswer();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/comcast/77#2/12') {
					const workComcast = new workForComcast();
					workComcast.dontWorkComcast();
					home.buttonClick();

					const signUp1 = new flow76SignUp();
					signUp1.signUpHeader();
				}

				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/salesforce/77#2/12') {
					const workSalesforce = new workForSalesforce();
					workSalesforce.dontWorkSF();

					home.buttonClick();

					const signUp2 = new flow76SignUp();
					signUp2.signUpHeader();
				}

				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/eyexecutive/77#3/1') {
					const eyeExecut = new eyexecutive();
					eyeExecut.eyexecutiveTitle();
					eyeExecut.eyexecutiveHeltText();
					eyeExecut.eyexecutiveAnswer();

					const signUp = new flow1SignUp();
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
					signUp.emailImput();
					signUp.passwordImput();
					signUp.passwordHint();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();
					cy.clearCookies();

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
					signUp.emailImput();
					signUp.passwordImput();
					signUp.passwordHint();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();
					cy.clearCookies();

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
					signUp.emailImput();
					signUp.passwordImput();
					signUp.passwordHint();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();
					cy.clearCookies();

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
					signUp.emailImput();
					signUp.passwordImput();
					signUp.passwordHint();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();
					cy.clearCookies();

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
					signUp.emailImput();
					signUp.passwordImput();
					signUp.passwordHint();
					signUp.privacy();
					signUp.terms();
					signUp.doctorLabel();
					signUp.doctorLabel();
					signUp.doctorLink();
					cy.clearCookies();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/healthandcare-scot/77#2/12') {
					const nhsScotPostcode = new nhsScotlandPostcode();
					nhsScotPostcode.nhsScotPostcodeAnswer();
					home.buttonClick();

					const nhsFunction = new nhsSelectFunction();
					nhsFunction.other();
					home.buttonClick();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/roche/77#3/1') {
					const roche = new rocheSignUp();
					roche.unixID();
					roche.unixIDAnswer();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/roche/105') {
					const roche = new rocheSignUp();
					roche.unixID();
					roche.unixIDAnswer();
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
