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
import flow1Lst8 from '../integration/pageObjects/flow1Lst-8';

import { url } from 'inspector';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/big-health'
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
			secondOfOst.weekOrLess();
			secondOfOst.month();
			secondOfOst.sevenMonths();
			secondOfOst.fiveYears();
			secondOfOst.sixYears();
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

			fourthdOfOst.troubledGeneralTitle();
			fourthdOfOst.little();
			fourthdOfOst.somewhat();
			fourthdOfOst.much();
			fourthdOfOst.veryMuch();
			fourthdOfOst.notAtAll();

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
			ninthOfOst.postAnswer();
			ninthOfOst.privacy();
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
			eleventhOfOst.sleep60();
			eleventhOfOst.sleep50();
			eleventhOfOst.sleep40();
			eleventhOfOst.sleep30();
			eleventhOfOst.sleep20();
			eleventhOfOst.sleep10();
			eleventhOfOst.sleep0();
			homePage.buttonClick();

			const twelfthOfOst = new manyHours();

			twelfthOfOst.manyHoursTitle();
			twelfthOfOst.numberHours().type('5');
			homePage.buttonClick();

			const guides = new expertGuides();
			guides.jetlag();
			guides.shiftWork();
			guides.parent();
			guides.none();
			guides.pregnancy();
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

			const lst1 = new flow1Lst1();
			lst1.firtLstHeader();
			lst1.overThePastMonth();
			lst1.discomfortLabel();
			lst1.discomfortNever();
			lst1.discomfortRarely();
			lst1.discomfortSometimes();
			lst1.discomfortOften();
			lst1.discomfortVeryOften();
			lst1.noiseLabel();
			lst1.noiseNever();
			lst1.noiseRarely();
			lst1.noiseSometimes();
			lst1.noiseOften();
			lst1.noiseVeryOften();
			lst1.uncomfortableBedNever();
			lst1.uncomfortableBedRarely();
			lst1.uncomfortableBedSometimes();
			lst1.uncomfortableBedOften();
			lst1.uncomfortableBedVeryOften();
			lst1.disruptedTemperatureLabel();
			lst1.disruptedTemperatureNever();
			lst1.disruptedTemperatureRarely();
			lst1.disruptedTemperatureSometimes();
			lst1.disruptedTemperatureOften();
			lst1.disruptedTemperatureVeryOften();
			lst1.uncomfortableBedLabel();
			lst1.disruptedLightLabel();
			lst1.disruptedLightNever();
			lst1.disruptedLightRarely();
			lst1.disruptedLightSometimes();
			lst1.disruptedLightOften();
			lst1.disruptedLightVeryOften();
			homePage.buttonClick();

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

			const lst3 = new flow1Lst3();
			lst3.lst3header();
			lst3.lst3header1();
			lst3.abilityStayAwake();
			lst3.abilityStayAwakeNot();
			lst3.abilityStayAwakeLitle();
			lst3.abilityStayAwakeSomewhat();
			lst3.abilityStayAwakeMuch();
			lst3.abilityStayAwakeVeryMuch();
			lst3.affectedRelationships();
			lst3.affectedRelationshipsNot();
			lst3.affectedRelationshipsLitle();
			lst3.affectedRelationshipsSomewhat();
			lst3.affectedRelationshipsMuch();
			lst3.affectedRelationshipsVeryMuch();
			lst3.feelHelpless();
			lst3.feelHelplessNot();
			lst3.feelHelplessLitle();
			lst3.feelHelplessSomewhat();
			lst3.feelHelplessMuch();
			lst3.feelHelplessVeryMuch();
			lst3.feelFrustrated();
			lst3.feelFrustratedNot();
			lst3.feelFrustratedLittle();
			lst3.feelFrustratedSomewhat();
			lst3.feelFrustratedMuch();
			lst3.feelFrustratedVeryMuch();
			lst3.feelNegative();
			lst3.feelNegativeNot();
			lst3.feelNegativeLittle();
			lst3.feelNegativeSomewhat();
			lst3.feelNegativeMuch();
			lst3.feelNegativeVeryMuch();
			lst3.feelAlone();
			lst3.feelAloneNot();
			lst3.feelAloneLittle();
			lst3.feelAloneSomewhat();
			lst3.feelAloneMuch();
			lst3.feelAloneVeryMuch();
			lst3.feelWorried();
			lst3.feelWorriedNot();
			lst3.feelWorriedLittle();
			lst3.feelWorriedSomewhat();
			lst3.feelWorriedMuch();
			lst3.feelWorriedVeryMuch();
			lst3.affectedBehaviour();
			lst3.affectedBehaviourNot();
			lst3.affectedBehaviourLittle();
			lst3.affectedBehaviourSomewhat();
			lst3.affectedBehaviourMuch();
			lst3.affectedBehaviourVeryMuch();
			lst3.affectedPeople();
			lst3.affectedPeopleNot();
			lst3.affectedPeopleLittle();
			lst3.affectedPeopleSomewhat();
			lst3.affectedPeopleMuch();
			lst3.affectedPeopleVeryMuch();
			homePage.buttonClick();

			const lst4 = new flow1Lst4();
			lst4.fourthlstHeader();
			lst4.fourthlstHeader1();
			lst4.comfortablePosition();

			lst4.comfortablePositionNever();
			lst4.comfortablePositionRarely();
			lst4.comfortablePositionSometimes();
			lst4.comfortablePositionOften();
			lst4.comfortablePositionVeryOften();
			lst4.properRoutine();
			lst4.properRoutineNever();
			lst4.properRoutineRarely();
			lst4.properRoutineSometimes();
			lst4.properRoutineOften();
			lst4.properRoutineVeryOften();
			lst4.relaxMyBody();
			lst4.relaxMyBodyNever();
			lst4.relaxMyBodyRarely();
			lst4.relaxMyBodySometimes();
			lst4.relaxMyBodyOften();
			lst4.relaxMyBodyVeryOften();
			lst4.hardSleep();
			lst4.hardSleepNever();
			lst4.hardSleepRarely();
			lst4.hardSleepSometimes();
			lst4.hardSleepOften();
			lst4.hardSleepVeryOften();
			lst4.feelTired();
			lst4.feelTiredNever();
			lst4.feelTiredRarely();
			lst4.feelTiredSometimes();
			lst4.feelTiredOften();
			lst4.feelTiredVeryOften();
			lst4.sleepWell();
			lst4.sleepWellNever();
			lst4.sleepWellRarely();
			lst4.sleepWellSometimes();
			lst4.sleepWellOften();
			lst4.sleepWellVeryOften();
			homePage.buttonClick();

			const lst5 = new flow1Lst5();
			lst5.fiveLstHeader();
			lst5.fiveLstHeader1();
			lst5.happenedToday();
			lst5.happenedTodayNever();
			lst5.happenedTodayRarely();
			lst5.happenedTodaySometimes();
			lst5.happenedTodayOften();
			lst5.happenedTodayVeryOften();
			lst5.controlSleep();
			lst5.controlSleepNever();
			lst5.controlSleepRarely();
			lst5.controlSleepSometimes();
			lst5.controlSleepOften();
			lst5.controlSleepVeryOften();
			lst5.feelingCold();
			lst5.feelingColdNever();
			lst5.feelingColdRarely();
			lst5.feelingColdSometimes();
			lst5.feelingColdOften();
			lst5.feelingColdVeryOften();
			lst5.workedOut();
			lst5.workedOutNever();
			lst5.workedOutRarely();
			lst5.workedOutSometimes();
			lst5.workedOutOften();
			lst5.workedOutVeryOften();
			lst5.lyingAwake();
			lst5.lyingAwakeNever();
			lst5.lyingAwakeRarely();
			lst5.lyingAwakeSometimes();
			lst5.lyingAwakeOften();
			lst5.lyingAwakeVeryOften();
			lst5.hearOutside();
			lst5.hearOutsideNever();
			lst5.hearOutsideRarely();
			lst5.hearOutsideSometimes();
			lst5.hearOutsideOften();
			lst5.hearOutsideVeryOften();
			lst5.workWell();
			lst5.workWellNever();
			lst5.workWellRarely();
			lst5.workWellSometimes();
			lst5.workWellOften();
			lst5.workWellVeryOften();
			lst5.sleepTonight();
			lst5.sleepTonightNever();
			lst5.sleepTonightRarely();
			lst5.sleepTonightSometimes();
			lst5.sleepTonightOften();
			lst5.sleepTonightVeryOften();
			lst5.throughMind();
			lst5.throughMindNever();
			lst5.throughMindRarely();
			lst5.throughMindSometimes();
			lst5.throughMindOften();
			lst5.throughMindVeryOften();

			homePage.buttonClick();

			const lst6 = new flow1Lst6();
			lst6.sixheader();
			lst6.sixheader1();
			lst6.littleInterest();
			lst6.littleInterestNot();
			lst6.littleInterestSeveral();
			lst6.littleInterestMore();
			lst6.littleInterestNearly();
			lst6.feelingDepressed();
			lst6.feelingDepressedNot();
			lst6.feelingDepressedSeveral();
			lst6.feelingDepressedMore();
			lst6.feelingDepressedNearly();
			lst6.feelingAnxious();
			lst6.feelingAnxiousNot();
			lst6.feelingAnxiousSeveral();
			lst6.feelingAnxiousMore();
			lst6.feelingAnxiousNearly();
			lst6.controlWorrying();
			lst6.controlWorryingNot();
			lst6.controlWorryingSeveral();
			lst6.controlWorryingMore();
			lst6.controlWorryingNearly();
			lst6.sayHealth();
			lst6.sayHealthPoor();
			lst6.sayHealthAverage();
			lst6.sayHealthGood();
			lst6.sayHealthVeryGood();
			lst6.sayHealthExcellent();

			lst6.howSatisfied();
			lst6.howSatisfiedAnswer();
			homePage.buttonClick();

			const lst7 = new flow1Lst7();
			lst7.sevenHeader();
			lst7.smokeTobacco();
			lst7.smokeTobaccoNever();
			lst7.smokeTobaccoRarely();
			lst7.smokeTobacco10();
			lst7.smokeTobacco20();
			lst7.smokeTobacco21();
			lst7.drinkAlcohol();
			lst7.drinkAlcoholNever();
			lst7.drinkAlcoholLess();
			lst7.drinkAlcoholOnce();
			lst7.drinkAlcohol2();
			lst7.drinkAlcohol4();
			lst7.consumeCaffeine();
			lst7.consumeCaffeineNever();
			lst7.consumeCaffeineLess();
			lst7.consumeCaffeineOnce();
			lst7.consumeCaffeine2();
			lst7.consumeCaffeine4();
			lst7.regularlyExercise();
			lst7.regularlyExerciseNever();
			lst7.regularlyExerciseLess();
			lst7.regularlyExercisOnce();
			lst7.regularlyExercis2();
			lst7.regularlyExercis4();
			lst7.sleepingPills();
			lst7.sleepingPillsAnswer1();
			lst7.nonPrescription();
			lst7.nonPrescriptionAnswer1();
			lst7.yourselfOverweight();
			lst7.yourselfOverweightNo();
			lst7.yourselfOverweightYes();
			lst7.currentlyPartner();
			lst7.currentlyPartnerNo();
			lst7.currentlyPartnerYes();
			lst7.disruptedPartner1();
			lst7.disruptedPartnerNever();
			lst7.disruptedPartnerRarely();
			lst7.disruptedPartnerSometimes();
			lst7.disruptedPartnerOften();
			lst7.disruptedPartnerVeryOften();
			lst7.childrenLiveYou();
			lst7.childrenLiveYouNo();
			lst7.childrenLiveYouYes();
			lst7.disruptedChildren1();
			lst7.disruptedChildrenNever();
			lst7.disruptedChildrenRarely();
			lst7.disruptedChildrenSometimes();
			lst7.disruptedChildrenOften();
			lst7.disruptedChildrenVeryOften();
			homePage.buttonClick();

			const lst8 = new flow1Lst8();
			lst8.aboutYou();
			lst8.shiftWorker();
			lst8.shiftWorkerAnswer();
			lst8.communityUsername();
			lst8.communityUsernameAnswer();
			homePage.buttonClick();
		}
	});
});
