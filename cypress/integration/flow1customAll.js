import HomePage from '../pageObjects/homePage';
import improveYourSleep from '../pageObjects/improveYourSleep';
import howLong from '../pageObjects/howLong';
import stopsYou from '../pageObjects/stopsYou';
import importantThings from '../pageObjects/importantThings';
import manyNights from '../pageObjects/manyNights';
import gender from '../pageObjects/gender';
import employment from '../pageObjects/employment';
import manyHours from '../pageObjects/howManyHours';
import howLikely from '../pageObjects/howLikely';
import poorSleep from '../pageObjects/poorSleep';
import dob from '../pageObjects/dob';
import breathing from '../pageObjects/breathing ';
import snoring from '../pageObjects/snoring';
import careerLevel from '../pageObjects/careerLevel';
import DTE from '../pageObjects/DTE';
import describes from '../pageObjects/describes';
import areaOfBusiness from '../pageObjects/areaOfBusiness';
import benefitsPlans from '../pageObjects/benefitsPlans';
import expertGuides from '../pageObjects/expertGuides';
import rocheSignUp from '../pageObjects/rocheSignUp';
import troubledInGeneral from '../pageObjects/troubledInGeneral';

import { url } from 'inspector';

var linkovi = [];
var i = 0;
describe('flow1custom', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		
		for (; i < linkovi.length; i++) {
			const homePage = new HomePage();

			homePage.visitFirstPage(linkovi[i]);
			homePage.buttonClick();


			const troubledInGeneralQuestion = new troubledInGeneral();

			troubledInGeneralQuestion.veryMuch();
			homePage.buttonClick();


			const improveYourSleepQuestion = new improveYourSleep();

			improveYourSleepQuestion.improveSleepTitle();
			improveYourSleepQuestion.wakeUpRefreshed()
			homePage.buttonClick();


			const howLongQuestion = new howLong();

			howLongQuestion.howLongTitle();
			howLongQuestion.dontHaveProblem();
			homePage.buttonClick();


			const stopsYouQuestion = new stopsYou();

			stopsYouQuestion.light();
			homePage.buttonClick();


			const manyNightsQuestion = new manyNights();

			manyNightsQuestion.manyNightsTitle();
			manyNightsQuestion.night7();
			homePage.buttonClick();

			const importantThingsQuestion = new importantThings();

			importantThingsQuestion.veryOften();
			homePage.buttonClick();

			const howLikelyQuestion = new howLikely();

			howLikelyQuestion.highChance();
			homePage.buttonClick();

			const snoringQuestion = new snoring();

			snoringQuestion.dontsnore();
			homePage.buttonClick();

			const breathingQuestion = new breathing();

			breathingQuestion.yes();
			homePage.buttonClick();

			const genderQuestion = new gender();

			genderQuestion.another();
			homePage.buttonClick();

			const dobQuestion = new dob();

			dobQuestion.dobTitle();
			dobQuestion.monthJan();
			dobQuestion.day1();
			dobQuestion.year1991();
			homePage.buttonClick();

			const employmentQuestion = new employment();

			employmentQuestion.fullTime();
			homePage.buttonClick();

			const poorSleepQuestion = new poorSleep();

			poorSleepQuestion.poorSleepTitle();
			poorSleepQuestion.sleep70();
			homePage.buttonClick();

			const manyHoursQuestion = new manyHours();

			manyHoursQuestion.manyHoursTitle();
			manyHoursQuestion.numberHours().type('5');
			homePage.buttonClick();

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/accenture/1#2/15') {
					const careerLevelQuestion = new careerLevel();

					careerLevelQuestion.careerTitle();
					careerLevelQuestion.leadership();
					careerLevelQuestion.levels5();
					careerLevelQuestion.levels8();
					careerLevelQuestion.levels11();
					careerLevelQuestion.dontwork();
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
				if ( urlString == 'https://onboarding.qa.sleepio.com/sleepio/homedepot/1#2/15' ) {
					
					const describesQuestion = new describes();
					describesQuestion.describesTitle();
					describesQuestion.homeDepot();
					describesQuestion.spouse();
					homePage.buttonClick();

					const expertGuidesQuestion = new expertGuides();
					expertGuidesQuestion.expertGuidesTitle();
					expertGuidesQuestion.none();
					homePage.buttonClick();

					const homeSignUp = new homeDepotSignUp();
					homeSignUp.associateID();
				}

				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/roche/1#2/15') {
					const expertGuidesQuestion = new expertGuides();
					expertGuidesQuestion.expertGuidesTitle();
					expertGuidesQuestion.none();
					homePage.buttonClick();

					const roche = new rocheSignUp();
					roche.unixID();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/capri/1#2/15') {
					const areaOfBusinessQuestion = new areaOfBusiness();
					areaOfBusinessQuestion.areaOfBusinessTitle();
					areaOfBusinessQuestion.retail();
					areaOfBusinessQuestion.development();
					areaOfBusinessQuestion.corporate();
					areaOfBusinessQuestion.distribution();
					areaOfBusinessQuestion.other();
					homePage.buttonClick();

					const benefitsPlansQuestion = new benefitsPlans();
					benefitsPlansQuestion.benefitsPlansTitle();
					benefitsPlansQuestion.cignaEnh();
					benefitsPlansQuestion.cignaCore();
					benefitsPlansQuestion.cignaMedical();
					benefitsPlansQuestion.no();
					benefitsPlansQuestion.other();
				}
			});
			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
