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
import expertGuides from '../integration/pageObjects/expertGuides';
import flow1SignUp from '../integration/pageObjects/flow1SignUp';
import flow1SleepReport from '../integration/pageObjects/flow1SleepReport';
import flow1Lst1 from '../integration/pageObjects/flow1Lst-1';
import flow1Lst2 from '../integration/pageObjects/flow1Lst-2';
import flow1Lst3 from '../integration/pageObjects/flow1Lst-3';
import flow1Lst4 from '../integration/pageObjects/flow1Lst-4';
import flow1Lst5 from '../integration/pageObjects/flow1Lst-5';
import flow1Lst6 from '../integration/pageObjects/flow1Lst-6';
import flow1Lst7 from '../integration/pageObjects/flow1Lst-7';

import { url } from 'inspector';

var links = [
	'https://onboarding.qa.sleepio.com/sleepio/big-health'
];
var i = 0;
describe('Test', () => {
	console.log(links[i]);
	it('Start the test', () => {
		    // Get started page
		for (; i < links.length; i++) {
			const homePage = new HomePage();

			homePage.visitFirstPage(links[i]);
			homePage.buttonClick();

			// First page of OST
			cy.screenshot();
			const firstofOst = new improveYourSleep();

			firstofOst.improveSleepTitle();
			firstofOst.sleepMoreEasily();
			firstofOst.withoutWakingUp();
			firstofOst.wakingTooEarly();
			firstofOst.wakeUpRefreshed();
			firstofOst.noneOfTheAbove();
			homePage.buttonClick();

			// Second page of OST
			cy.screenshot();
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

			fourthdOfOst.little();
			fourthdOfOst.somewhat();
			fourthdOfOst.much();
			fourthdOfOst.veryMuch();
			fourthdOfOst.notatAll();
			homePage.buttonClick();

			// Fifth page of OST

			const fifthOfOst = new manyNights();

			fifthOfOst.manyNightsTitle();
			fifthOfOst.night0();
			fifthOfOst.night1();
			fifthOfOst.night2();
			fifthOfOst.night3();
			fifthOfOst.night4();
			fifthOfOst.night5();
			fifthOfOst.night6();
			fifthOfOst.night7();
			homePage.buttonClick();

			// Sixth page of OST

			const sixthOfOst = new importantThings();

			sixthOfOst.importantThingsTitle();
			sixthOfOst.never();
			sixthOfOst.almostNever();
			sixthOfOst.sometimes();
			sixthOfOst.fairlyOften();
			sixthOfOst.veryOften();
			homePage.buttonClick();

			// Seventh page of OST

			const seventhOfOst = new howLikely();

			seventhOfOst.howLikelyTitle();
			seventhOfOst.noChance();
			seventhOfOst.slightChance();
			seventhOfOst.moderatChance();
			seventhOfOst.highChance();
			homePage.buttonClick();

			const snoringBothered = new snoring();

			snoringBothered.snoringTitle();
			snoringBothered.no();
			snoringBothered.yes();
			snoringBothered.snore();
			homePage.buttonClick();

			const stopBreathing = new breathing();

			stopBreathing.breathingTitle();
			stopBreathing.no();
			stopBreathing.yes();
			homePage.buttonClick();

			// Eight page of OST

			const eightOfOst = new gender();

			eightOfOst.genderTitle();
			eightOfOst.male().click();
			eightOfOst.female().click();
			eightOfOst.another().click();
			homePage.buttonClick();

			// Ninth page of OST

			const ninthOfOst = new dob();

			ninthOfOst.dobTitle();
			ninthOfOst.monthJan();
			ninthOfOst.monthFeb();
			ninthOfOst.day1();
			ninthOfOst.day2();
			ninthOfOst.year1991();
			ninthOfOst.year1997();
			homePage.buttonClick();

			// Tenth page of OST

			const tenthOfOst = new employment();

			tenthOfOst.employmentTitle();
			tenthOfOst.partTime();
			tenthOfOst.unemployed();
			tenthOfOst.retired();
			tenthOfOst.student();
			tenthOfOst.homemaker();
			tenthOfOst.fullTime();
			homePage.buttonClick();

			// Eleventh page of OST

			const eleventhOfOst = new poorSleep();

			eleventhOfOst.poorSleepTitle();
			eleventhOfOst.sleep100();
			eleventhOfOst.sleep90();
			eleventhOfOst.sleep80();
			eleventhOfOst.sleep70();
			homePage.buttonClick();

			// Twelfth page of OST

			const twelfthOfOst = new manyHours();

			twelfthOfOst.manyHoursTitle();
			twelfthOfOst.numberHours().type('5');
			homePage.buttonClick();

			const guides = new expertGuides();
			guides.jetlag();
			guides.shiftWork();
			guides.parent();
			guides.none();
			homePage.buttonClick();

			const signUp = new flow1SignUp();

			signUp.signUpHeader();
			signUp.firstNameLabel();
			signUp.firstNameImput();
			signUp.lastNameLabel();
			signUp.lastNameImput();
			signUp.emailLabel();
			signUp.emailImput();
			signUp.passwordLabel();
			signUp.passwordImput();
			signUp.passwordHint();
			signUp.signUpCheckBox();
			signUp.privacy();
			signUp.terms();
			signUp.suitable();
			signUp.signUpGoogle();
			signUp.signUpFacebook();
			signUp.signUpButton();
			cy.wait(4000);
			const report = new flow1SleepReport();
			report.headerSleepReport();
			report.logOut();
			cy.wait(2000);
			report.reportButton();

			// LST page 1

			const lst1 = new flow1Lst1();
			lst1.firtLstHeader();
			lst1.overThePastMonth();
			lst1.discomfortLabel();
			lst1.discomfortAnswer();
			lst1.noiseLabel();
			lst1.noiseAnswer();
			lst1.uncomfortableBed();
			lst1.disruptedTemperature();
			lst1.uncomfortableBedLabel();
			lst1.disruptedLight();
			lst1.disruptedTemperatureLabel();
			lst1.disruptedLightLabel();
			homePage.buttonClick();

			// LST page 2

			const lst2 = new flow1Lst2();
			lst2.headerLst();
			lst2.headerLst1();
			lst2.getIntoBad();
			lst2.tryGoSleepLabel();
			lst2.tryGoSleep();
			lst2.fallAsleepLabel();
			lst2.duringNightWake();
			lst2.duringNightWakeLabel();
			lst2.awakeDuringNight();
			lst2.awakeDuringNightLabel();
			lst2.wakeLastTime();
			lst2.DuringNightLabel();
			lst2.intendedWakeUp();
			lst2.intendedWakeUpLabel();
			lst2.getOutBed();
			lst2.getOutBedLabel();
			lst2.qualitySleep();
			lst2.qualitySleepLabel();
			lst2.quality();
			homePage.buttonClick();

			// LST page 3

			const lst3 = new flow1Lst3();
			lst3.lst3header();
			lst3.lst3header1();
			lst3.abilityStayAwake();
			lst3.abilityStayAwakeAnswer();
			lst3.affectedRelationships();
			lst3.affectedRelationshipsAnswer();
			lst3.feelHelpless();
			lst3.feelHelplessAnswer();
			lst3.feelFrustrated();
			lst3.feelFrustratedAnswer();
			lst3.feelNegative();
			lst3.feelNegativeAnswer();
			lst3.feelAlone();
			lst3.feelAloneAnswer();
			lst3.feelWorried();
			lst3.feelWorriedAnswer();
			lst3.affectedBehaviour();
			lst3.affectedBehaviourAnswer();
			lst3.affectedPeople();
			lst3.affectedPeopleAnswer();
			homePage.buttonClick();

			// LST page 4

			const lst4 = new flow1Lst4();
			lst4.fourthlstHeader();
			lst4.fourthlstHeader1();
			lst4.comfortablePosition();
			lst4.comfortablePositionAnswer();
			lst4.properRoutine();
			lst4.properRoutineAnswer();
			lst4.relaxMyBody();
			lst4.relaxMyBodyAnswer();
			lst4.hardSleep();
			lst4.hardSleepAnswer();
			lst4.feelTired();
			lst4.feelTiredAnswer();
			lst4.sleepWell();
			lst4.sleepWellAnswer();
			homePage.buttonClick();

			// LST page 5

			const lst5 = new flow1Lst5();
			lst5.fiveLstHeader();
			lst5.fiveLstHeader1();
			lst5.happenedToday();
			lst5.happenedTodayAnswer();
			lst5.controlSleep();
			lst5.controlSleepAnswer();
			lst5.feelingCold();
			lst5.feelingColdAnswer();
			lst5.workedOut();
			lst5.workedOutAnswer();
			lst5.lyingAwake();
			lst5.lyingAwakeAnswer();
			lst5.hearOutside();
			lst5.hearOutsideAnswer();
			lst5.workWell();
			lst5.workWellAnswer();
			lst5.sleepTonight();
			lst5.sleepTonightAnswer();
			lst5.throughMind();
			lst5.throughMindAnswer();
			homePage.buttonClick();

			// LST page 6

			const lst6 = new flow1Lst6();
			lst6.sixheader();
			lst6.sixheader1();
			lst6.littleInterest();
			lst6.littleInterestAnsver();
			lst6.feelingDepressed();
			lst6.feelingDepressedAnswer();
			lst6.feelingAnxious();
			lst6.feelingAnxiousAnswer();
			lst6.controlWorrying();
			lst6.controlWorryingAnswer();
			lst6.sayHealth();
			lst6.sayHealthAnswer();
			lst6.howSatisfied();
			lst6.howSatisfiedAnswer();
			homePage.buttonClick();

			// LST page 7
			
			const lst7 = new flow1Lst7();
			lst7.sevenHeader();
			lst7.smokeTobacco();
			lst7.smokeTobaccoAnswer();
			lst7.drinkAlcohol();
			lst7.drinkAlcoholAnswer1();
			lst7.consumeCaffeine();
			lst7.consumeCaffeineAnswer1();
			lst7.regularlyExercise();
			lst7.regularlyExerciseAnswer1();
			lst7.sleepingPills();
			lst7.sleepingPillsAnswer1();
			lst7.nonPrescription();
			lst7.nonPrescriptionAnswer1();
			lst7.yourselfOverweight();
			lst7.yourselfOverweightAnswer1();
			lst7.currentlyPartner();
			lst7.currentlyPartnerAnswer1();
			lst7.disruptedPartner1();
			lst7.disruptedPartnerAnswer1();
			lst7.childrenLiveYou();
			lst7.childrenLiveYouAnswer1();
			lst7.disruptedChildren1();
			lst7.disruptedChildrenAnswer1();
			homePage.buttonClick();
		}
	});
});
