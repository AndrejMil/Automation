import HomePage from './pageObjects/homePage';
import improveYourSleep from './pageObjects/improveYourSleep';
import howLong from './pageObjects/howLong';
import stopsYou from './pageObjects/stopsYou';
import troubledInGeneral from './pageObjects/troubledInGeneral';
import importantThings from './pageObjects/importantThings';
import manyNights from './pageObjects/manyNights';
import gender from './pageObjects/gender';
import employment from './pageObjects/employment';
import manyHours from './pageObjects/howManyHours';
import howLikely from './pageObjects/howLikely';
import poorSleep from './pageObjects/poorSleep';
import dob from './pageObjects/dob';
import breathing from './pageObjects/breathing ';
import snoring from './pageObjects/snoring';
import careerLevel from './pageObjects/careerLevel';
import DTE from './pageObjects/DTE';
import describes from './pageObjects/describes';
import areaOfBusiness from './pageObjects/areaOfBusiness';
import benefitsPlans from './pageObjects/benefitsPlans';

import { url } from 'inspector';

var linkovi = [
	'https://onboarding.sleepio.com/sleepio/big-health',
	'https://onboarding.sleepio.com/sleepio/accenture',
	'https://onboarding.sleepio.com/sleepio/homedepot',
	'https://onboarding.sleepio.com/sleepio/capri'
];
var i = 0;
describe('Proba', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		// Get started page
		for (; i < linkovi.length; i++) {
			const homePage = new HomePage();

			homePage.visitFirstPage(linkovi[i]);

			homePage.buttonClick();

			// First page of OST

			const firstofOst = new improveYourSleep();

			firstofOst.improveSleepTitle();
			firstofOst.sleepMoreEasily();

			firstofOst.withoutWakingUp();
			firstofOst.wakingTooEarly();
			firstofOst.wakeUpRefreshed().click();
			homePage.buttonClick();

			// Second page of OST

			const secondOfOst = new howLong();

			secondOfOst.howLongTitle();
			secondOfOst.weeks();
			secondOfOst.months();
			secondOfOst.years();
			secondOfOst.moreYears();
			secondOfOst.dontHaveProblem();
			homePage.buttonClick();

			// Third page of OST

			const thirdOfOst = new stopsYou();

			thirdOfOst.stopsYouTitle();
			thirdOfOst.worriesFuture();
			thirdOfOst.worriesNotSleeping();
			thirdOfOst.discomfort();
			thirdOfOst.noise();
			thirdOfOst.light();
			homePage.buttonClick();

			// Fourth page of OST

			const fourthdOfOst = new troubledInGeneral();

			fourthdOfOst.veryMuch();
			homePage.buttonClick();

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
			homePage.buttonClick();

			const sixOfOst = new importantThings();

			sixOfOst.importantThingsTitle();
			sixOfOst.never();
			sixOfOst.almostNever();
			sixOfOst.sometimes();
			sixOfOst.fairlyOften();
			sixOfOst.veryOften();
			homePage.buttonClick();

			const seventhOfOst = new howLikely();

			seventhOfOst.howLikelyTitle();
			seventhOfOst.noChance();
			seventhOfOst.slightChance();
			seventhOfOst.moderatChance();
			seventhOfOst.highChance();
			homePage.buttonClick();

			const neki2 = new snoring();

			neki2.snoringTitle();
			neki2.no();
			neki2.yes();
			neki2.snore();
			homePage.buttonClick();

			const neki = new breathing();

			neki.breathingTitle();
			neki.no();
			neki.yes();
			homePage.buttonClick();

			const eightOfOst = new gender();

			eightOfOst.genderTitle();
			eightOfOst.male().click();
			eightOfOst.female().click();
			eightOfOst.another().click();
			homePage.buttonClick();

			const ninthOfOst = new dob();

			ninthOfOst.dobTitle();
			ninthOfOst.monthJan();
			ninthOfOst.monthFeb();
			ninthOfOst.day1();
			ninthOfOst.day2();
			ninthOfOst.year1991();
			ninthOfOst.year1997();
			homePage.buttonClick();

			const tenthOfOst = new employment();

			tenthOfOst.employmentTitle();
			tenthOfOst.partTime();
			tenthOfOst.unemployed();
			tenthOfOst.retired();
			tenthOfOst.student();
			tenthOfOst.homemaker();
			tenthOfOst.fullTime();
			homePage.buttonClick();

			const eleventhOfOst = new poorSleep();

			eleventhOfOst.poorSleepTitle();
			eleventhOfOst.sleep100();
			eleventhOfOst.sleep90();
			eleventhOfOst.sleep80();
			eleventhOfOst.sleep70();
			homePage.buttonClick();

			const twelfthOfOst = new manyHours();

			twelfthOfOst.manyHoursTitle();
			twelfthOfOst.numberHours().type('5');
			homePage.buttonClick();
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/accenture/1#2/15') {
					const career = new careerLevel();

					career.careerTitle();
					career.leadership();
					career.levels5();
					career.levels8();
					career.levels11();
					career.dontwork();
					homePage.buttonClick();

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
					homePage.buttonClick();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/homedepot/1#2/15') {
					const desc = new describes();
					desc.describesTitle();
					desc.homeDepot();
					desc.spouse();
					homePage.buttonClick();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/capri/1#2/15') {
					const area = new areaOfBusiness();
					area.areaOfBusinessTitle();
					area.retail();
					area.development();
					area.corporate();
					area.distribution();
					area.other();
					homePage.buttonClick();

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
