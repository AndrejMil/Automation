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
import flow76SignUp from '../integration/pageObjects/flow76SignUp';
import flow1SleepReport from '../integration/pageObjects/flow1SleepReport';
import flow1Lst2 from '../integration/pageObjects/flow1Lst-2';
import flow1Lst3 from '../integration/pageObjects/flow1Lst-3';
import flow1Lst4 from '../integration/pageObjects/flow1Lst-4';
import flow1Lst5 from '../integration/pageObjects/flow1Lst-5';
import flow1Lst6 from '../integration/pageObjects/flow1Lst-6';
import flow1Lst7 from '../integration/pageObjects/flow1Lst-7';
import stillProblem from '../integration/pageObjects/stillProblem';
import flow76Eligibility from '../integration/pageObjects/flow76Eligibility';
import perscription from '../integration/pageObjects/flow76prescription ';
import flow1Lst8 from '../integration/pageObjects/flow76Lst-8';
import flow1LogIn from '../integration/pageObjects/flow1LogIn';

var linkovi = [
	'https://onboarding.sleepio.com/sleepio/libertymutual/78#1/1'
];
var i = 0;
describe('Flow 78', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		Cypress.currentTest.retries(5);
		// Get started page
		for (; i < linkovi.length; i++) {
			const home = new HomePage();
			const homePage = new homePageNew();

			homePage.visitFirstPage(linkovi[i]);

			const logIn = new flow1LogIn();
			logIn.logIn();
			cy.get('.sl-order-2 > .sl-button').click({ force: true });

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			logIn.logIn();
			const fourthdOfOst = new troubledInGeneralNew();

			fourthdOfOst.little();
			fourthdOfOst.somewhat();
			fourthdOfOst.much();
			fourthdOfOst.veryMuch();
			fourthdOfOst.notAtAll();
			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			logIn.logIn();
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

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			logIn.logIn();
			const still = new stillProblem();
			still.stillProblemTitle();
			still.yes();
			still.no();
			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			logIn.logIn();
			const secondOfOst = new howLong();

			secondOfOst.howLongTitle();
			secondOfOst.dontHaveProblem();
			secondOfOst.weekOrLess();
			secondOfOst.weeks();
			secondOfOst.month();
			secondOfOst.months();
			secondOfOst.sevenMonths();
			secondOfOst.years();
			secondOfOst.fiveYears();
			secondOfOst.sixYears();
			secondOfOst.moreYears();
			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			logIn.logIn();
			const seventhOfOst = new howLikelyNew();

			seventhOfOst.howLikelyTitle();
			seventhOfOst.noChance();
			seventhOfOst.slightChance();
			seventhOfOst.moderatChance();
			seventhOfOst.highChance();
			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			logIn.logIn();
			const neki2 = new snoring();

			neki2.snoringTitle();
			neki2.no();
			neki2.yes();
			neki2.dontsnore();
			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			logIn.logIn();
			const neki = new breathing();

			neki.breathingTitle();
			neki.no();
			neki.yes();
			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			logIn.logIn();
			const firstofOst = new improveYourSleep();

			firstofOst.improveSleepTitle();
			firstofOst.sleepMoreEasily();
			firstofOst.withoutWakingUp();
			firstofOst.wakingTooEarly();
			firstofOst.wakeUpRefreshed();
			firstofOst.noneOfTheAbove();
			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			logIn.logIn();
			const guides = new expertGuides();
			guides.jetlag();
			guides.shiftWork();
			guides.parent();
			guides.pregnancy();
			guides.none();
			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			logIn.logIn();
			const eightOfOst = new gender();

			eightOfOst.genderTitle();
			eightOfOst.male().click();
			eightOfOst.female().click();
			eightOfOst.another().click();
			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			logIn.logIn();
			const ninthOfOst = new dob();

			ninthOfOst.dobTitle();
			ninthOfOst.monthJan();
			ninthOfOst.monthFeb();
			ninthOfOst.day1();
			ninthOfOst.day2();
			ninthOfOst.year1991();
			ninthOfOst.year1997();
			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			logIn.logIn();
			const signUp = new flow76SignUp();

			signUp.signUpHeader();
			signUp.firstNameLabel();
			signUp.firstNameImput();
			signUp.lastNameLabel();
			signUp.lastNameImput();
			signUp.emailLabel();
			signUp.emailImput();
			signUp.passwordLabel();
			signUp.passwordImput77();
			signUp.passwordHint();
			signUp.doctorLabel77();
			signUp.doctorLink77();
			signUp.privacyCheck77();
			signUp.doctorCheck77();
			signUp.privacy();
			signUp.terms();

			signUp.signUpButton();
			cy.wait(15000);

			const report = new flow1SleepReport();
			report.headerSleepReport();
			report.logOut();

			cy.wait(5000);

			cy.get('.dark-blue-bg > div > .sl-button').click({ force: true });

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
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

			cy.visit('https://onboarding.sleepio.com/sleepio/libertymutual/78#6/1');

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
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

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			const lst4 = new flow1Lst4();

			lst4.comfortablePositionNever();
			lst4.comfortablePositionRarely();
			lst4.comfortablePositionSometimes();
			lst4.comfortablePositionOften();
			lst4.comfortablePositionVeryOften();
			lst4.relaxMyBody();
			lst4.relaxMyBodyNever();
			lst4.relaxMyBodyRarely();
			lst4.relaxMyBodySometimes();
			lst4.relaxMyBodyOften();
			lst4.relaxMyBodyVeryOften();
			lst4.hardSleep();
			lst4.hardSleepNeverNew();
			lst4.hardSleepRarelyNew();
			lst4.hardSleepSometimesNew();
			lst4.hardSleepOftenNew();
			lst4.hardSleepVeryOftenNew();
			lst4.feelTired();
			lst4.feelTiredNeverNew();
			lst4.feelTiredRarelyNew();
			lst4.feelTiredSometimesNew();
			lst4.feelTiredOftenNew();
			lst4.feelTiredVeryOftenNew();
			lst4.worriesNever();
			lst4.worriesRarely();
			lst4.worriesSometimes();
			lst4.worriesOften();
			lst4.worriesVeryOften();
			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			const lst3 = new flow1Lst3();

			lst3.abilityStayAwake();
			lst3.abilityStayAwakeNot();
			lst3.abilityStayAwakeLitle();
			lst3.abilityStayAwakeSomewhat();
			lst3.abilityStayAwakeMuch();
			lst3.abilityStayAwakeVeryMuch();

			lst3.affectedRelationships();
			lst3.affectedRelationshipsNotNew();
			lst3.affectedRelationshipsLitleNew();
			lst3.affectedRelationshipsSomewhatNew();
			lst3.affectedRelationshipsMuchNew();
			lst3.affectedRelationshipsVeryMuchNew();

			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			const lst5 = new flow1Lst5();

			lst5.happenedTodayNew();
			lst5.happenedTodayAnsweNeverNew();
			lst5.happenedTodayAnsweSometimesNew();
			lst5.happenedTodayAnsweVeryOftenNew();

			lst5.controlSleepNew();
			lst5.controlSleepAnswerNeverNew();
			lst5.controlSleepAnswerSometimesNew();
			lst5.controlSleepAnswerVeryOftenNew();

			lst5.hearOutsideNew();
			lst5.hearOutsideNeverNew();
			lst5.hearOutsideSometimesNew();
			lst5.hearOutsideVeryOftenNew();

			lst5.future();
			lst5.futureNever();
			lst5.futureSometimes();
			lst5.futureVeryOften();

			lst5.lyingAwake();
			lst5.lyingAwakeNeverNew();
			lst5.lyingAwakeSometimesNew();
			lst5.lyingAwakeVeryOftenNew();

			lst5.sleepTonightNew();
			lst5.sleepTonightNeverNew();
			lst5.sleepTonightSometimesNew();
			lst5.sleepTonightVeryOftenNew();

			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			const lstpills = new perscription();

			lstpills.perscriptionTitle();
			lstpills.prescriptionPills();
			lstpills.prescriptionPillsNo();
			lstpills.prescriptionPillsTake();
			lstpills.prescriptionPillsMostNights();

			lstpills.nonPrescriptionPills();
			lstpills.nonPrescriptionPillsNo();
			lstpills.nonPrescriptionPillsTake();
			lstpills.nonPrescriptionPillsMostNights();

			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			const lst6 = new flow1Lst6();

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
			lst6.controlWorryingNotNew();
			lst6.controlWorryingSeveralNew();
			lst6.controlWorryingMoreNew();
			lst6.controlWorryingNearlyNew();

			lst6.unableToControl();
			lst6.unableToControlAnswers();

			lst6.yourHealthIs();
			lst6.yourHealthIsAnswers();

			lst6.overweight();
			lst6.overweightNo();
			lst6.overweightYes();

			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			const lst7 = new flow1Lst7();

			lst7.exercise();
			lst7.regularlyExerciseAnswers();

			lst7.nicotine();
			lst7.nicotineAnswers();

			lst7.drinkAlcoholNew();
			lst7.drinkAlcoholAnswers();

			lst7.disruptedChildren();
			lst7.disruptedChildrenAnswers();

			lst7.shiftWorker();
			lst7.shiftWorkerNo();
			lst7.shiftWorkerYes();

			lst7.employmentStatus();
			lst7.employmentStatusAnswers();

			lst7.affectProductivity();
			lst7.affectProductivityAnswers();

			lst7.hoursMissed();
			lst7.hoursMissedAnswer();

			lst7.disruptedPartner();
			lst7.disruptedPartnerAnswers();

			home.buttonClick();

			cy.wait(2000);
			cy.document().toMatchImageSnapshot();
			const lst8 = new flow1Lst8();

			lst8.communityUsername();
			lst8.IFUlinkNew();
			lst8.communityUsernameAnswer();

			home.buttonClick();
			cy.wait(3000);
		}
	});
});
