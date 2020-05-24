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
import expertGuides from '../integration/pageObjects/expertGuides';
import homeDepotSignUp from '../integration/pageObjects/homeDepotSigUp';
import rocheSignUp from '../integration/pageObjects/rocheSignUp';

import { url } from 'inspector';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/big-health',
	'https://onboarding.qa.sleepio.com/sleepio/accenture',
	'https://onboarding.qa.sleepio.com/sleepio/homedepot',
	'https://onboarding.qa.sleepio.com/sleepio/capri',
	'https://onboarding.qa.sleepio.com/sleepio/roche'
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

			const firstofOst = new improveYourSleep();

			firstofOst.noneOfTheAbove();
			homePage.buttonClick().click();

			// Second page of OST

			const secondOfOst = new howLong();

			secondOfOst.dontHaveProblem();
			homePage.buttonClick().click();

			// Third page of OST

			const thirdOfOst = new stopsYou();

			thirdOfOst.light();
			homePage.buttonClick().click();

			// Fourth page of OST

			const fourthdOfOst = new troubledInGeneral();

			fourthdOfOst.notAtAll();
			homePage.buttonClick().click();

			const fiveOfOst = new manyNights();

			fiveOfOst.night7();
			homePage.buttonClick().click();

			const sixOfOst = new importantThings();

			sixOfOst.veryOften();
			homePage.buttonClick().click();

			const seventhOfOst = new howLikely();

			seventhOfOst.highChance();
			homePage.buttonClick().click();

			const neki2 = new snoring();

			neki2.yes();
			neki2.snore();
			homePage.buttonClick().click();

			const neki = new breathing();

			neki.yes();
			homePage.buttonClick().click();

			const eightOfOst = new gender();

			eightOfOst.another().click();
			homePage.buttonClick().click();

			const ninthOfOst = new dob();

			ninthOfOst.monthJan();

			ninthOfOst.day1();

			ninthOfOst.year1991();

			homePage.buttonClick().click();

			const tenthOfOst = new employment();

			tenthOfOst.fullTime();
			homePage.buttonClick().click();

			const eleventhOfOst = new poorSleep();

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

					const guides = new expertGuides();
					guides.expertGuidesTitle();
					guides.none();
					homePage.buttonClick().click();

					const homeDepotSign = new homeDepotSignUp();
					homeDepotSign.homeZip();
					homeDepotSign.associateID();
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

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/roche/1#2/15') {
					const expertGuide = new expertGuides();
					expertGuide.expertGuidesTitle();
					expertGuide.jetlag();
					expertGuide.none();
					homePage.buttonClick().click();

					const rocheSign = new rocheSignUp();
					rocheSign.unixID();
				}
			});

			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
