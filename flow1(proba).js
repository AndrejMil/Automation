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
import careerLevel from '../integration/pageObjects/careerLevel';
import DTE from '../integration/pageObjects/DTE';
import describes from '../integration/pageObjects/describes';
import areaOfBusiness from '../integration/pageObjects/areaOfBusiness';
import benefitsPlans from '../integration/pageObjects/benefitsPlans';

import { url } from 'inspector';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/big-health',
	'https://onboarding.qa.sleepio.com/sleepio/accenture',
	'https://onboarding.qa.sleepio.com/sleepio/homedepot',
	'https://onboarding.qa.sleepio.com/sleepio/capri'
];
var i = 0;
describe('Proba', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		// Get started page
		for (; i < linkovi.length; i++) {
			const homePage = new HomePage();

			homePage.visitFirstPage(linkovi[i]);
			homePage.buttonClick().click();

			// First page of OST
			cy.screenshot();
			const firstofOst = new improveYourSleep();

			firstofOst.improveSleepTitle();
			firstofOst.sleepMoreEasily();
			firstofOst.withoutWakingUp();
			firstofOst.wakingTooEarly();
			firstofOst.wakeUpRefreshed();
			firstofOst.noneOfTheAbove();
			homePage.buttonClick().click();

			// Second page of OST
			cy.screenshot();
			const secondOfOst = new howLong();

			secondOfOst.howLongTitle();
			secondOfOst.weeks();
			secondOfOst.months();
			secondOfOst.years();
			secondOfOst.moreYears();
			secondOfOst.dontHaveProblem();
			homePage.buttonClick().click();

			// Third page of OST

			const thirdOfOst = new stopsYou();

			thirdOfOst.stopsYouTitle();
			thirdOfOst.worriesFuture();
			thirdOfOst.worriesNotSleeping();
			thirdOfOst.discomfort();
			thirdOfOst.noise();
			thirdOfOst.light();
			homePage.buttonClick().click();

			// Fourth page of OST

			const fourthdOfOst = new troubledInGeneral();

			fourthdOfOst.little();
			fourthdOfOst.somewhat();
			fourthdOfOst.much();
			fourthdOfOst.veryMuch();
			fourthdOfOst.notAtAll();
			homePage.buttonClick().click();

			const fiveOfOst = new manyNights();

			fiveOfOst.manyNightsTitle();
			fiveOfOst.night0();
			fiveOfOst.night1();
			fiveOfOst.night2();
			fiveOfOst.night3();
			fiveOfOst.night4();
			fiveOfOst.night5();
			fiveOfOst.night6();
			fiveOfOst.night7();
			homePage.buttonClick().click();

			const sixOfOst = new importantThings();

			sixOfOst.importantThingsTitle();
			sixOfOst.never();
			sixOfOst.almostNever();
			sixOfOst.sometimes();
			sixOfOst.fairlyOften();
			sixOfOst.veryOften();
			homePage.buttonClick().click();

			const seventhOfOst = new howLikely();

			seventhOfOst.howLikelyTitle();
			seventhOfOst.noChance();
			seventhOfOst.slightChance();
			seventhOfOst.moderatChance();
			seventhOfOst.highChance();
			homePage.buttonClick().click();

			const neki2 = new snoring();

			neki2.snoringTitle();
			neki2.no();
			neki2.yes();
			neki2.snore();
			homePage.buttonClick().click();

			const neki = new breathing();

			neki.breathingTitle();
			neki.no();
			neki.yes();
			homePage.buttonClick().click();

			const eightOfOst = new gender();

			eightOfOst.genderTitle();
			eightOfOst.male().click();
			eightOfOst.female().click();
			eightOfOst.another().click();
			homePage.buttonClick().click();

			const ninthOfOst = new dob();

			ninthOfOst.dobTitle();
			ninthOfOst.monthJan();
			ninthOfOst.monthFeb();
			ninthOfOst.day1();
			ninthOfOst.day2();
			ninthOfOst.year1991();
			ninthOfOst.year1997();
			homePage.buttonClick().click();

			const tenthOfOst = new employment();

			tenthOfOst.employmentTitle();
			tenthOfOst.partTime();
			tenthOfOst.unemployed();
			tenthOfOst.retired();
			tenthOfOst.student();
			tenthOfOst.homemaker();
			tenthOfOst.fullTime();
			homePage.buttonClick().click();

			const eleventhOfOst = new poorSleep();

			eleventhOfOst.poorSleepTitle();
			eleventhOfOst.sleep100();
			eleventhOfOst.sleep90();
			eleventhOfOst.sleep80();
			eleventhOfOst.sleep70();
			homePage.buttonClick().click();

			const twelfthOfOst = new manyHours();

			twelfthOfOst.manyHoursTitle();
			twelfthOfOst.numberHours().type('5');
			homePage.buttonClick().click();
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/accenture/1#2/15') {
					const career = new careerLevel();

					career.careerTitle();
					career.leadership();
					career.levels5();
					career.levels8();
					career.levels11();
					career.dontwork();
					homePage.buttonClick().click();

					const dte = new DTE();
					dte.DTETitle();
					dte.acg();
					dte.copFunctions();
					dte.aceOperations();
					dte.aceTehnology();
					dte.aceStrategy();
					dte.aceDigital();
					dte.finService();
					dte.products();
					dte.resource();
					dte.heaktPublicSer();
					dte.communMedi();
					dte.iDont();
					homePage.buttonClick().click();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/homedepot/1#2/15') {
					const desc = new describes();
					desc.describesTitle();
					desc.homeDepot();
					desc.spouse();
					homePage.buttonClick().click();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/capri/1#2/15') {
					const area = new areaOfBusiness();
					area.areaOfBusinessTitle();
					area.retail();
					area.development();
					area.corporate();
					area.distribution();
					area.other();
					homePage.buttonClick().click();

					const benefits = new benefitsPlans();
					benefits.benefitsPlansTitle();
					benefits.cignaEnh();
					benefits.cignaCore();
					benefits.cignaMedical();
					benefits.no();
					benefits.other();
				}
			});
			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
