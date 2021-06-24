import homePageNew from '../pageObjects/homePageNew';
import HomePage from '../pageObjects/homePage';
import improveYourSleep from '../pageObjects/improveYourSleep';
import howLong from '../pageObjects/howLong';
import troubledInGeneralNew from '../pageObjects/troubledInGeneralNew';
import manyNights from '../pageObjects/manyNights';
import gender from '../pageObjects/gender';
import howLikelyNew from '../pageObjects/howLikelyNew';
import stopsYou from '../pageObjects/stopsYou';
import dob from '../pageObjects/dob';
import breathing from '../pageObjects/breathing ';
import snoring from '../pageObjects/snoring';
import expertGuides from '../pageObjects/expertGuides';
import stillProblem from '../pageObjects/stillProblem';
import improvmentProgram from '../pageObjects/improvmentProgram';
import bestReflects from '../pageObjects/bestReflects';
import following from '../pageObjects/following';
import countryLocated from '../pageObjects/countryLocated';
import stateWork from '../pageObjects/stateWork';
import workForComcast from '../pageObjects/workForComcast';
import workForSalesforce from '../pageObjects/workForSalesforce';
import nhsAccess from '../pageObjects/nhsAccess';
import eyexecutive from '../pageObjects/eyexecutive';
import eyUpn from '../pageObjects/eyUpn';
import fujifilmId from '../pageObjects/fujifilmId';
import bjcId from '../pageObjects/bjcId';
import threeMId from '../pageObjects/3mId';
import tmNumber from '../pageObjects/tmNumber';
import nhsScotlandPostcode from '../pageObjects/nhsScotlandPostcode';
import nhsSelectFunction from '../pageObjects/nhsSelectFunction';



var salesforceStates = [
	{ state: "I don't work for Salesforce", value: 'notSalesforce' },
	{ state: 'Argentina', value: 'argentina' },
	{ state: 'Australia', value: 'australia' },
	{ state: 'Belgium', value: 'belgium' },
	{ state: 'Brazil', value: 'brazil' },
	{ state: 'Canada', value: 'canada' },
	{ state: 'Denmark', value: 'denmark' },
	{ state: 'Finland', value: 'finland' },
	{ state: 'France', value: 'france' },
	{ state: 'Germany', value: 'germany' },
	{ state: 'Hong Kong', value: 'hongkong' },
	{ state: 'India', value: 'india' },
	{ state: 'Ireland', value: 'ireland' },
	{ state: 'Israel', value: 'israel' },
	{ state: 'Italy', value: 'italy' },
	{ state: 'Japan', value: 'japan' },
	{ state: 'Korea', value: 'korea' },
	{ state: 'Mexico', value: 'mexico' },
	{ state: 'Morocco', value: 'morocco' },
	{ state: 'Norway', value: 'norway' },
	{ state: 'The Netherlands', value: 'thenetherlands' },
	{ state: 'New Zealand', value: 'newzealand' },
	{ state: 'Singapore', value: 'singapore' },
	{ state: 'Spain', value: 'spain' },
	{ state: 'Sweden', value: 'sweden' },
	{ state: 'Switzerland', value: 'switzerland' },
	{ state: 'United Kingdom', value: 'unitedkingdom' },
	{ state: 'United States', value: 'unitedstates' }
];

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/fujifilm/77#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/comcast',
	'https://onboarding.qa.sleepio.com/sleepio/salesforce/77',
	'https://onboarding.qa.sleepio.com/sleepio/nhs-staff',
	'https://onboarding.qa.sleepio.com/sleepio/healthandcare-scot'
];
var i = 0;
describe('flow77custom', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		// Get started page
		for (; i < linkovi.length; i++) {
			const home = new HomePage();
			const homePage = new homePageNew();
			homePage.visitFirstPage(linkovi[i]);
			cy.get('.sl-order-2 > .sl-button').click({ force: true });

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
			howLongQuestion.howLongTitle();
			howLongQuestion.weeks();
			home.buttonClick();

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/google/77#2/6') {
					const improvmentProgramQuestion = new improvmentProgram();
					improvmentProgramQuestion.improvmentProgramTitle();
					improvmentProgramQuestion.notReady();
					improvmentProgramQuestion.undecided();
					improvmentProgramQuestion.ready();
					home.buttonClick();

					const bestReflectsQuestion = new bestReflects();
					bestReflectsQuestion.bestReflectsTitle();
					bestReflectsQuestion.noPoint();
					bestReflectsQuestion.thinking();
					bestReflectsQuestion.readyToWork();
					home.buttonClick();

					const howLikelyNewQuestion = new howLikelyNew();
					howLikelyNewQuestion.highChance();
					home.buttonClick();

					const snoringQuestion = new snoring();
					snoringQuestion.snoringTitle();
					snoringQuestion.no();
					home.buttonClick();

					const breathingQuestion = new breathing();
					breathingQuestion.breathingTitle();
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

					const followingQuestion = new following();

					followingQuestion.followingTitle();
					followingQuestion.googler();
					followingQuestion.alphabet();
					followingQuestion.googleAlphabet();
					home.buttonClick();

					const countryLocatedQuestion = new countryLocated();

					countryLocatedQuestion.countryLocatedTitle();
					countryLocatedQuestion.unitedStates();
					countryLocatedQuestion.unitedKingdom();
					countryLocatedQuestion.italy();

					for (var p = 0; p < countryes.length; p++) {
						country.checkinhEveryOption(countryes[p].country, countryes[p].value);
					}
					home.buttonClick();
					const stateGoogle = new stateWork();
					stateGoogle.stateWorkTitle();
					for (var p = 0; p < states.length; p++) {
						stateGoogle.checkinhEveryOptionGoogle(states[p].state, states[p].value);
					}
					home.buttonClick();
				}
			});

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
					genderQuestion.genderTitle();
					genderQuestion.male()
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
					workComcast.workForComcastTitle();
					workComcast.usa();
					workComcast.uk();
					workComcast.dontWorkComcast();
				}

				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/salesforce/70#2/13') {
					const workSalesforce = new workForSalesforce();
					workSalesforce.workForSalesforceTitle();

					for (var p = 0; p < salesforceStates.length; p++) {
						workSalesforce.checkinhEveryOptionSalesForce(
							salesforceStates[p].state,
							salesforceStates[p].value
						);
					}
				}

				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/nhs-staff/77#2/13') {
					const nhs = new nhsAccess();
					nhs.nhsAccessTitle();
					nhs.nhsAccessAnswer();
				}

				if ( urlString == 'https://onboarding.qa.sleepio.com/sleepio/fujifilm/77#3/1' ) {
					
					const fujifilm = new fujifilmId();
					fujifilm.fujifilmIdTitle();
					fujifilm.fujifilmIdHelpText();
					fujifilm.fujifilmIdAnswer();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/bjc/77#3/1');

					const bjc = new bjcId();
					bjc.bjcTitle();
					bjc.bjcIdHelpText();
					bjc.bjcIdAnswer();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/3m/77#3/1');
					const threeM = new threeMId();
					threeM.threeMTitle();
					threeM.threeMHelpText();
					threeM.threeMAnswer();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/target/77#3/1');

					const tmNum = new tmNumber();
					tmNum.tmNumberTitle();
					tmNum.tmNumberHelpText();
					tmNum.tmNumberAnswer();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/healthandcare-scot/77#2/13') {
					const nhsScotPostcode = new nhsScotlandPostcode();
					nhsScotPostcode.nhsScotPostcodeTitle();
					nhsScotPostcode.nhsScotPostcodeAnswer();
					home.buttonClick();

					const nhsFunction = new nhsSelectFunction();
					nhsFunction.nhsSelectFunctionTitle();
					nhsFunction.nhs();
					nhsFunction.socialCare();
					nhsFunction.thirdsector();
					nhsFunction.publicSector();
					nhsFunction.other();
				}
			});

			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
