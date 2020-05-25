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

import { url } from 'inspector';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/holman/76#1/1'
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

			fourthdOfOst.little();
			fourthdOfOst.somewhat();
			fourthdOfOst.much();
			fourthdOfOst.veryMuch();
			fourthdOfOst.notAtAll();
			home.buttonClick();

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
			home.buttonClick();

			const still = new stillProblem();
			still.stillProblemTitle();
			still.yes();
			still.no();
			home.buttonClick();

			const secondOfOst = new howLong();

			secondOfOst.howLongTitle();
			secondOfOst.weeks();
			secondOfOst.months();
			secondOfOst.years();
			secondOfOst.moreYears();
			secondOfOst.dontHaveProblem();
			home.buttonClick();

			const seventhOfOst = new howLikelyNew();

			seventhOfOst.howLikelyTitle();
			seventhOfOst.noChance();
			seventhOfOst.slightChance();
			seventhOfOst.moderatChance();
			seventhOfOst.highChance();
			home.buttonClick();

			const neki2 = new snoring();

			neki2.snoringTitle();
			neki2.no();
			neki2.yes();
			neki2.snore();
			home.buttonClick();

			const neki = new breathing();

			neki.breathingTitle();
			neki.no();
			neki.yes();
			home.buttonClick();

			const firstofOst = new improveYourSleep();

			firstofOst.improveSleepTitle();
			firstofOst.sleepMoreEasily();
			firstofOst.withoutWakingUp();
			firstofOst.wakingTooEarly();
			firstofOst.wakeUpRefreshed();
			firstofOst.noneOfTheAbove();
			home.buttonClick();

			const guides = new expertGuides();
			guides.jetlag();
			guides.shiftWork();
			guides.parent();
			guides.none();
			home.buttonClick();

			const eightOfOst = new gender();

			eightOfOst.genderTitle();
			eightOfOst.male().click();
			eightOfOst.female().click();
			eightOfOst.another().click();
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

			const experts = new sleepioExperts();
			experts.expertsTitle();
			experts.expertsTitle1();
			experts.expertsInput();
			home.buttonClick();
			cy.go(-1);
			experts.expertsSkip();

			const signUp = new flow76SignUp();

			signUp.signUpHeader();
			signUp.firstNameLabel();
			signUp.firstNameImput();
			signUp.lastNameLabel();
			signUp.lastNameImput();
			signUp.emailLabel();
			signUp.emailImput();
			signUp.passwordLabel();
			signUp.passwordImput();
			signUp.phoneLabel();
			signUp.phoneImput();
			signUp.passwordHint();
			signUp.signUpCheckBox();
			signUp.privacy();
			signUp.terms();
			signUp.suitable();

			signUp.signUpButton();

			const report = new flow1SleepReport();
			report.headerSleepReport();
			report.logOut();
			cy.wait(5000);
			cy.get('.dark-blue-bg > div > .sl-button').click();

			const eligibility = new flow76Eligibility();
			eligibility.coverage();
			eligibility.firstNameLabel();
			eligibility.firstName();
			eligibility.midleNameLabel();
			eligibility.midleName();
			eligibility.lastNameLabel();
			eligibility.lastName();
			eligibility.dobLabel();
			eligibility.zipLabel();
			eligibility.zipImput();

			cy.visit('https://onboarding.qa.sleepio.com/sleepio/holman/76#6/1');

			const lst2 = new flow1Lst2();

			lst2.tryGoSleepNew();
			lst2.getIntoBadNew();
			lst2.tryGoSleepLabel();
			lst2.fallAsleepLabel();
			lst2.duringNightWakeNew();
			lst2.duringNightWakeLabel();
			lst2.awakeDuringNightNew();
			lst2.awakeDuringNightLabel();
			lst2.wakeLastTimeNew();
			lst2.DuringNightLabel();
			lst2.intendedWakeUpNew();
			lst2.intendedWakeUpLabel();
			lst2.getOutBedNew();
			lst2.getOutBedLabel();
			lst2.qualitySleepNew();
			lst2.qualitySleepLabel();
			lst2.qualityNew();
			home.buttonClick();

			const lst4 = new flow1Lst4();

			lst4.comfortablePosition();
			lst4.comfortablePositionAnswer();
			lst4.relaxMyBody();
			lst4.relaxMyBodyAnswer();
			lst4.hardSleep();
			lst4.hardSleepAnswer();
			lst4.feelTired();
			lst4.feelTiredAnswer();

			lst4.difficult();
			lst4.difficultAnswer();
			home.buttonClick();

			const lst3 = new flow1Lst3();

			lst3.abilityStayAwake();
			lst3.abilityStayAwakeAnswer();
			lst3.affectedRelationships();
			lst3.affectedRelationshipsAnswer();
			home.buttonClick();

			const lst5 = new flow1Lst5();

			lst5.happenedTodayNew();
			lst5.happenedTodayAnsweNew();

			lst5.controlSleepNew();
			lst5.controlSleepAnswerNew();

			lst5.hearOutsideNew();
			lst5.hearOutsideAnswerNew();

			lst5.future();
			lst5.futureAnswer();

			lst5.lyingAwake();
			lst5.lyingAwakeAnswerNew();

			lst5.sleepTonightNew();
			lst5.sleepTonightAnswerNew();

			home.buttonClick();

			const lstpills = new perscription();
			lstpills.perscriptionTitle();
			lstpills.prescriptionPills();
			lstpills.prescriptionPillsAnswer();
			lstpills.nonPrescriptionPills();
			lstpills.nonPrescriptionPillsAnswer();
			home.buttonClick();

			const lst6 = new flow1Lst6();

			lst6.littleInterest();
			lst6.littleInterestAnsver();

			lst6.feelingDepressed();
			lst6.feelingDepressedAnswer();

			lst6.feelingAnxious();
			lst6.feelingAnxiousAnswer();

			lst6.controlWorrying();
			lst6.controlWorryingAnswer();

			lst6.unableToControl();
			lst6.unableToControlAnswer();

			lst6.yourHealthIs();
			lst6.yourHealthIsAnswer();

			lst6.overweight();
			lst6.overweightAnswer();

			home.buttonClick();

			const lst7 = new flow1Lst7();

			lst7.exercise();
			lst7.exerciseAnswer();

			lst7.nicotine();
			lst7.nicotineAnswer();

			lst7.drinkAlcoholNew();
			lst7.drinkAlcoholNewAnswer();

			lst7.disruptedChildren();
			lst7.disruptedChildrenAnswer();

			lst7.shiftWorker();
			lst7.shiftWorkerAnswer();

			lst7.employmentStatus();
			lst7.employmentStatusAnswer();

			lst7.affectProductivity();
			lst7.affectProductivityAnswer();

			lst7.hoursMissed();
			lst7.hoursMissedAnswer();

			lst7.disruptedPartner();
			lst7.disruptedPartnerAnswer();

			home.buttonClick();

			const lst8 = new flow1Lst8();

			lst8.timeOfDay();
			lst8.timeOfDayAnswer();
			lst8.helpfulSleepioExpert();
			lst8.helpfulSleepioExpertAnswer();
			lst8.communityUsername();
			lst8.communityUsernameAnswer();
			lst8.reachOutSoon();
			home.buttonClick();
			cy.wait(5000);
		}
	});
});
