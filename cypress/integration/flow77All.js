import homePageNew from '../pageObjects/homePageNew';
import HomePage from '../pageObjects/homePage';
import improveYourSleep from '../pageObjects/improveYourSleep';
import howLong from '../pageObjects/howLong';
import troubledInGeneralNew from '../pageObjects/troubledInGeneralNew';
import stopsYou from '../pageObjects/stopsYou';
import manyNights from '../pageObjects/manyNights'; 
import gender from '../pageObjects/gender';
import howLikelyNew from '../pageObjects/howLikelyNew';
import dob from '../pageObjects/dob';
import breathing from '../pageObjects/breathing ';
import snoring from '../pageObjects/snoring';
import expertGuides from '../pageObjects/expertGuides';
import SignUp from '../pageObjects/SignUp';
import flow1SleepReport from '../pageObjects/flow1SleepReport';
import flow1Lst2 from '../pageObjects/flow1Lst-2'; 
import flow1Lst3 from '../pageObjects/flow1Lst-3';
import flow1Lst4 from '../pageObjects/flow1Lst-4';
import flow1Lst5 from '../pageObjects/flow1Lst-5';
import flow1Lst6 from '../pageObjects/flow1Lst-6';
import flow1Lst7 from '../pageObjects/flow1Lst-7';
import stillProblem from '../pageObjects/stillProblem';
import perscription from '../pageObjects/flow76prescription ';
import flow1Lst8 from '../pageObjects/flow76Lst-8';

let links = [
	'https://onboarding.qa.sleepio.com/sleepio/bh2020/77#1/1'
];
let organisationId = '2';
var i = 0;
describe('Flow 77', () => {
	console.log(links[i]);
	it('Start the test', () => {
	
		for (; i < links.length; i++) {
			const home = new HomePage();
			const homePage = new homePageNew();
			homePage.visitFirstPage(links[i]);
			cy.get('.sl-order-2 > .sl-button').click({ force: true });

			//organization_id
			cy.window().its('organization_id').should('equal', '2')
			
			//flow progres
			cy.window().its( 'localStorage.sl-flow-progress' ).should( 'equal', '{\"flowId\":77,\"currentStep\":1,\"currentPage\":0}' )
			
			//sl-answers
			cy.window().its( 'localStorage.sl-answers' ).should( 'equal', '{\"0\":{\"0\":[]},\"1\":{\"0\":[]}}' )

			const troubledInGeneralNewQuestion = new troubledInGeneralNew();
			troubledInGeneralNewQuestion.troubledGeneralTitle();
			troubledInGeneralNewQuestion.little();
			troubledInGeneralNewQuestion.somewhat();
			troubledInGeneralNewQuestion.much();
			troubledInGeneralNewQuestion.veryMuch();
			troubledInGeneralNewQuestion.notAtAll();
			home.buttonClick();

			cy.window().its( 'localStorage.sl-flow-progress' ).should( 'equal', '{\"flowId\":77,\"currentStep\":1,\"currentPage\":1}' )
			cy.window().its( 'localStorage.sl-answers' ).should( 'equal', `{"0":{"0":[]},"1":{"0":[{"question_id":199,"semantic_id":"troubled_in_general","is_core_question":false,"product_id":1,"values":{"id":"0","score":"0","text":"Not at all"},"saved":false}]}}` )
			const manyNightsQuestion = new manyNights();
			manyNightsQuestion.manyNightsTitle();
			manyNightsQuestion.night0();
			manyNightsQuestion.night1();
			manyNightsQuestion.night2();
			manyNightsQuestion.night3();
			manyNightsQuestion.night4();
			manyNightsQuestion.night5();
			manyNightsQuestion.night6();
			manyNightsQuestion.night7();
			home.buttonClick();

			cy.window().its( 'localStorage.sl-flow-progress' ).should( 'equal', '{\"flowId\":77,\"currentStep\":1,\"currentPage\":2}' )
			cy.window().its( 'localStorage.sl-answers' ).should( 'equal', `{"0":{"0":[]},"1":{"0":[{"question_id":199,"semantic_id":"troubled_in_general","is_core_question":false,"product_id":1,"values":{"id":"0","score":"0","text":"Not at all"},"saved":false}],"1":[{"question_id":5,"semantic_id":"problem_nights","is_core_question":true,"product_id":1,"values":{"id":"7","score":"4","text":"7 nights"},"saved":false}]}}` )
			const stillProblemQuestion = new stillProblem();
			stillProblemQuestion.stillProblemTitle();
			stillProblemQuestion.yes();
			stillProblemQuestion.no();
			home.buttonClick();

			cy.window().its('localStorage.sl-flow-progress').should('equal', '{\"flowId\":77,\"currentStep\":1,\"currentPage\":3}')
			const stopsYouQuestion = new stopsYou();
			stopsYouQuestion.stopsYouTitle();
			stopsYouQuestion.worriesFuture();
			stopsYouQuestion.worriesNotSleeping();
			stopsYouQuestion.discomfort();
			stopsYouQuestion.noise();
			stopsYouQuestion.light();
			home.buttonClick();

			cy.window().its('localStorage.sl-flow-progress').should('equal', '{\"flowId\":77,\"currentStep\":1,\"currentPage\":4}')
			const howLongQuestion = new howLong();
			howLongQuestion.howLongTitle();
			howLongQuestion.weeks();
			howLongQuestion.months();
			howLongQuestion.years();
			howLongQuestion.moreYears();
			howLongQuestion.weekOrLess();
			howLongQuestion.month();
			howLongQuestion.sevenMonths();
			howLongQuestion.fiveYears();
			howLongQuestion.sixYears();
			home.buttonClick();

			cy.window().its('localStorage.sl-flow-progress').should('equal', '{\"flowId\":77,\"currentStep\":1,\"currentPage\":5}')
			const howLikelyNewQuestion = new howLikelyNew();
			howLikelyNewQuestion.howLikelyTitle();
			howLikelyNewQuestion.noChance();
			howLikelyNewQuestion.slightChance();
			howLikelyNewQuestion.moderatChance();
			howLikelyNewQuestion.highChance();
			home.buttonClick();
		
			cy.window().its('localStorage.sl-flow-progress').should('equal', '{\"flowId\":77,\"currentStep\":1,\"currentPage\":6}')
			const snoringQuestion = new snoring();
			snoringQuestion.snoringTitle();
			snoringQuestion.no();
			snoringQuestion.yes();
			snoringQuestion.dontsnore();
			home.buttonClick();
			
			cy.window().its('localStorage.sl-flow-progress').should('equal', '{\"flowId\":77,\"currentStep\":1,\"currentPage\":7}')
			const breathingQuestion = new breathing();
			breathingQuestion.breathingTitle();
			breathingQuestion.no();
			breathingQuestion.yes();
			home.buttonClick();
		
			cy.window().its('localStorage.sl-flow-progress').should('equal', '{\"flowId\":77,\"currentStep\":1,\"currentPage\":8}')
			const improveYourSleepQuestion = new improveYourSleep();
			improveYourSleepQuestion.improveSleepTitle();
			improveYourSleepQuestion.sleepMoreEasily();
			improveYourSleepQuestion.withoutWakingUp();
			improveYourSleepQuestion.wakingTooEarly();
			improveYourSleepQuestion.wakeUpRefreshed();
			improveYourSleepQuestion.noneOfTheAbove();
			home.buttonClick();

			cy.window().its('localStorage.sl-flow-progress').should('equal', '{\"flowId\":77,\"currentStep\":1,\"currentPage\":9}')
			const expertGuidesQuestion = new expertGuides();
			expertGuidesQuestion.jetlag();
			expertGuidesQuestion.shiftWork();
			expertGuidesQuestion.parent();
			expertGuidesQuestion.none();
			expertGuidesQuestion.pregnancy();
			home.buttonClick();

			cy.window().its('localStorage.sl-flow-progress').should('equal', '{\"flowId\":77,\"currentStep\":1,\"currentPage\":10}')
			const genderQuestion = new gender();
			genderQuestion.genderTitle();
			genderQuestion.male()
			genderQuestion.female()
			genderQuestion.another()
			home.buttonClick(); 

			cy.window().its('localStorage.sl-flow-progress').should('equal', '{\"flowId\":77,\"currentStep\":1,\"currentPage\":11}')
			const dobQuestion = new dob();
			dobQuestion.dobTitle();
			dobQuestion.monthJan();
			dobQuestion.monthFeb();
			dobQuestion.day1();
			dobQuestion.day2();
			dobQuestion.year1991();
			dobQuestion.year1997();
			dobQuestion.postAnswer();
			dobQuestion.privacy();
			home.buttonClick();

			cy.window().its('localStorage.sl-flow-progress').should('equal', '{"flowId":77,"currentStep":2,"currentPage":0}')
			const signUp = new SignUp();
			signUp.signUpHeader();
			signUp.firstNameLabel();
			signUp.firstNameImput();
			signUp.lastNameLabel();
			signUp.lastNameImput();
			signUp.emailLabel();
			signUp.emailInput()
			signUp.passwordLabel();
			signUp.passwordInput();
			signUp.passwordHint();
			signUp.doctorLabel();
			signUp.suitable();
			signUp.checkBoxes();
			signUp.privacy();
			signUp.terms();
			signUp.signUpButton();
			cy.wait(7000);

			cy.window().its('localStorage.sl-flow-progress').should('equal', '{"flowId":77,"currentStep":3,"currentPage":0}')
			const report = new flow1SleepReport();
			cy.wait(3000);
			report.headerSleepReport();
			report.logOut();

			cy.get('.dark-blue-bg > div > .sl-button').click({ force: true });

			cy.window().its('localStorage.sl-flow-progress').should('equal', '{"flowId":77,"currentStep":4,"currentPage":0}')
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
			
			cy.window().its('localStorage.sl-flow-progress').should('equal', '{"flowId":77,"currentStep":5,"currentPage":0}')
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

			cy.window().its('localStorage.sl-flow-progress').should('equal', '{"flowId":77,"currentStep":6,"currentPage":0}')
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

			cy.window().its('localStorage.sl-flow-progress').should('equal', '{"flowId":77,"currentStep":7,"currentPage":0}')
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
			
			cy.window().its('localStorage.sl-flow-progress').should('equal', '{"flowId":77,"currentStep":8,"currentPage":0}')
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

			cy.window().its('localStorage.sl-flow-progress').should('equal', '{"flowId":77,"currentStep":9,"currentPage":0}')
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
			lst6.areYouPregnantTitle();
			lst6.areYouPregnantYes();
			lst6.areYouPregnantNo();
			lst6.diagnosedTitle()
			lst6.diagnosedYes();
			lst6.diagnosedNo();
			home.buttonClick();
		
			cy.window().its('localStorage.sl-flow-progress').should('equal', '{"flowId":77,"currentStep":10,"currentPage":0}')
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
			lst7.highRiskTitle()
			lst7.highRiskYes();
			lst7.highRisktNo();
			lst7.employmentStatus();
			lst7.employmentStatusAnswers();
			lst7.affectProductivity();
			lst7.affectProductivityAnswers();
			lst7.hoursMissed();
			lst7.hoursMissedAnswer();
			lst7.disruptedPartner();
			lst7.disruptedPartnerAnswers();
			home.buttonClick();
			
			cy.window().its('localStorage.sl-flow-progress').should('equal', '{"flowId":77,"currentStep":11,"currentPage":0}')
			const lst8 = new flow1Lst8();
			lst8.communityUsername();
			lst8.communityUsernameAnswer();
			home.buttonClick();
		}
	});
});
