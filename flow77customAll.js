import homePageNew from '../integration/pageObjects/homePageNew';
import HomePage from '../integration/pageObjects/homePage';
import improveYourSleep from '../integration/pageObjects/improveYourSleep';
import howLong from '../integration/pageObjects/howLong';
import stopsYou from '../integration/pageObjects/stopsYou';
import troubledInGeneralNew from '../integration/pageObjects/troubledInGeneralNew';
import importantThings from '../integration/pageObjects/importantThings';
import manyNights from '../integration/pageObjects/manyNights';
import gender from '../integration/pageObjects/gender';
import employment from '../integration/pageObjects/employment';
import manyHours from '../integration/pageObjects/howManyHours';
import howLikelyNew from '../integration/pageObjects/howLikelyNew';
import poorSleep from '../integration/pageObjects/poorSleep';
import dob from '../integration/pageObjects/dob';
import breathing from '../integration/pageObjects/breathing ';
import snoring from '../integration/pageObjects/snoring';
import expertGuides from '../integration/pageObjects/expertGuides';
import flow76SignUp from '../integration/pageObjects/flow76SignUp';
import flow1SleepReport from '../integration/pageObjects/flow1SleepReport';
import flow1Lst1 from '../integration/pageObjects/flow1Lst-1';
import flow1Lst2 from '../integration/pageObjects/flow1Lst-2';
import flow1Lst3 from '../integration/pageObjects/flow1Lst-3';
import flow1Lst4 from '../integration/pageObjects/flow1Lst-4';
import flow1Lst5 from '../integration/pageObjects/flow1Lst-5';
import flow1Lst6 from '../integration/pageObjects/flow1Lst-6';
import flow1Lst7 from '../integration/pageObjects/flow1Lst-7';
import stillProblem from '../integration/pageObjects/stillProblem';
import sleepioExperts from '../integration/pageObjects/sleepioExperts';
import flow76Eligibility from '../integration/pageObjects/flow76Eligibility';
import perscription from '../integration/pageObjects/flow76prescription ';
import flow1Lst8 from '../integration/pageObjects/flow76Lst-8';
import workLocation from '../integration/pageObjects/workLocation';
import improvmentProgram from '../integration/pageObjects/improvmentProgram';
import bestReflects from '../integration/pageObjects/bestReflects';
import following from '../integration/pageObjects/following';
import countryLocated from '../integration/pageObjects/countryLocated';
import stateWork from '../integration/pageObjects/stateWork';
import workForComcast from '../integration/pageObjects/workForComcast';
import workForSalesforce from '../integration/pageObjects/workForSalesforce';
import nhsAccess from '../integration/pageObjects/nhsAccess';
import eyexecutive from '../integration/pageObjects/eyexecutive';

import { url } from 'inspector';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/google',
	'https://onboarding.qa.sleepio.com/sleepio/comcast',
	'https://onboarding.qa.sleepio.com/sleepio/salesforce',
	'https://onboarding.qa.sleepio.com/sleepio/nhs-staff',
	'https://onboarding.qa.sleepio.com/sleepio/eyexecutive'
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

					improvment.improvmentProgramTitle();
					improvment.notReady();
					improvment.undecided();
					improvment.ready();
					home.buttonClick();

					const reflects = new bestReflects();
					reflects.bestReflectsTitle();
					reflects.noPoint();
					reflects.thinking();
					reflects.readyToWork();

					home.buttonClick();

					const seventhOfOst = new howLikelyNew();

					seventhOfOst.highChance();
					home.buttonClick();

					const neki2 = new snoring();

					neki2.snoringTitle();
					neki2.no();

					home.buttonClick();

					const neki = new breathing();

					neki.breathingTitle();

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

					follow.followingTitle();
					follow.googler();
					follow.alphabet();
					follow.googleAlphabet();
					home.buttonClick();

					const country = new countryLocated();

					country.countryLocatedTitle();
					country.unitedStates();
					country.unitedKingdom();
					country.italy();

					home.buttonClick();

					const state = new stateWork();

					state.stateWorkTitle();
					state.alabama();
					state.outside();
					state.arizona();

					home.buttonClick();
				}

				const seventhOfOst = new howLikelyNew();

				seventhOfOst.howLikelyTitle();
				seventhOfOst.noChance();
				home.buttonClick();

				const neki2 = new snoring();

				neki2.snoringTitle();
				neki2.yes();
				neki2.snore();
				home.buttonClick();

				const neki = new breathing();

				neki.breathingTitle();
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

				ninthOfOst.dobTitle();
				ninthOfOst.monthJan();
				ninthOfOst.monthFeb();
				ninthOfOst.day1();
				ninthOfOst.day2();
				ninthOfOst.year1991();
				ninthOfOst.year1997();
				home.buttonClick();

				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/comcast/77#2/12') {
					const workComcast = new workForComcast();
					workComcast.workForComcastTitle();
					workComcast.usa();
					workComcast.uk();
					workComcast.dontWorkComcast();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/salesforce/77#2/12') {
					const workSalesforce = new workForSalesforce();
					workSalesforce.workForSalesforceTitle();
					workSalesforce.italy();
					workSalesforce.france();
					workSalesforce.dontWorkSalesforce();
				}
			});

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/nhs-staff/77#2/12') {
					const nhs = new nhsAccess();
					nhs.nhsAccessTitle();
					nhs.nhsAccessAnswer();
				}
			});
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/eyexecutive/77#3/1') {
					const eyeExecut = new eyexecutive();
					eyeExecut.eyexecutiveTitle();
					eyeExecut.eyexecutiveHeltText();
					eyeExecut.eyexecutiveAnswer();
				}
			});

			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
