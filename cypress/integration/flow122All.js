import homePageNew from '../integration/pageObjects/homePageNew';
import HomePage from '../integration/pageObjects/homePage';
import improveYourSleep from '../integration/pageObjects/improveYourSleep';
import howLong from '../integration/pageObjects/howLong';
import troubledInGeneralNew from '../integration/pageObjects/troubledInGeneralNew';
import stopsYou from '../integration/pageObjects/stopsYou';
import manyNights from '../integration/pageObjects/manyNights'; 
import gender from '../integration/pageObjects/gender';
import howLikelyNew from '../integration/pageObjects/howLikelyNew';
import dob from '../integration/pageObjects/dob';
import breathing from '../integration/pageObjects/breathing ';
import snoring from '../integration/pageObjects/snoring';
import expertGuides from '../integration/pageObjects/expertGuides';
import SignUp from '../integration/pageObjects/SignUp';
import flow1SleepReport from '../integration/pageObjects/flow1SleepReport';
import flow1Lst2 from '../integration/pageObjects/flow1Lst-2'; 
import flow1Lst3 from '../integration/pageObjects/flow1Lst-3';
import flow1Lst4 from '../integration/pageObjects/flow1Lst-4';
import flow1Lst5 from '../integration/pageObjects/flow1Lst-5';
import flow1Lst6 from '../integration/pageObjects/flow1Lst-6';
import flow1Lst7 from '../integration/pageObjects/flow1Lst-7';
import stillProblem from '../integration/pageObjects/stillProblem';
import perscription from '../integration/pageObjects/flow76prescription ';
import flow1Lst8 from '../integration/pageObjects/flow76Lst-8';

var links = [
	'https://onboarding.qa.sleepio.com/sleepio/platgen-test'
];
var i = 0;
describe('Flow 122', () => {
	console.log(links[i]);
	it('Start the test', () => {
	
		for (; i < links.length; i++) {
			const home = new HomePage();
			const homePage = new homePageNew();
			homePage.visitFirstPage(links[i]);
			cy.get('.sl-order-2 > .sl-button').click({ force: true });

			
			const troubledInGeneralNewQuestion = new troubledInGeneralNew();
			troubledInGeneralNewQuestion.troubledGeneralTitle();
			troubledInGeneralNewQuestion.little();
			troubledInGeneralNewQuestion.somewhat();
			troubledInGeneralNewQuestion.much();
			troubledInGeneralNewQuestion.veryMuch();
			troubledInGeneralNewQuestion.notAtAll();
			home.buttonClick();

		
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

		
			const stillProblemQuestion = new stillProblem();
			stillProblemQuestion.stillProblemTitle();
			stillProblemQuestion.yes();
			stillProblemQuestion.no();
			home.buttonClick();

			const stopsYouQuestion = new stopsYou();
			stopsYouQuestion.stopsYouTitle();
			stopsYouQuestion.worriesFuture();
			stopsYouQuestion.worriesNotSleeping();
			stopsYouQuestion.discomfort();
			stopsYouQuestion.noise();
			stopsYouQuestion.light();
			home.buttonClick();

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

		
			const howLikelyNewQuestion = new howLikelyNew();
			howLikelyNewQuestion.howLikelyTitle();
			howLikelyNewQuestion.noChance();
			howLikelyNewQuestion.slightChance();
			howLikelyNewQuestion.moderatChance();
			howLikelyNewQuestion.highChance();
			home.buttonClick();
		
			const snoringQuestion = new snoring();
			snoringQuestion.snoringTitle();
			snoringQuestion.no();
			snoringQuestion.yes();
			snoringQuestion.dontsnore();
			home.buttonClick();
			
			const breathingQuestion = new breathing();
			breathingQuestion.breathingTitle();
			breathingQuestion.no();
			breathingQuestion.yes();
			home.buttonClick();
		
			const improveYourSleepQuestion = new improveYourSleep();
			improveYourSleepQuestion.improveSleepTitle();
			improveYourSleepQuestion.sleepMoreEasily();
			improveYourSleepQuestion.withoutWakingUp();
			improveYourSleepQuestion.wakingTooEarly();
			improveYourSleepQuestion.wakeUpRefreshed();
			improveYourSleepQuestion.noneOfTheAbove();
			home.buttonClick();

		
			const expertGuidesQuestion = new expertGuides();
			expertGuidesQuestion.jetlag();
			expertGuidesQuestion.shiftWork();
			expertGuidesQuestion.parent();
			expertGuidesQuestion.none();
			expertGuidesQuestion.pregnancy();
			home.buttonClick();

			
			const genderQuestion = new gender();
			genderQuestion.genderTitle();
			genderQuestion.male()
			genderQuestion.female()
			genderQuestion.another()
			home.buttonClick(); 

		
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

			
			const signUp = new SignUp();

			signUp.signUpHeader();
			signUp.firstNameLabel();
			signUp.firstNameImput();
			signUp.lastNameLabel();
			signUp.lastNameImput();
			signUp.emailLabel();
			signUp.emailImputflow122()
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

			const report = new flow1SleepReport();
			cy.wait(3000);
			report.headerSleepReport();
			report.logOut();

			cy.get('.dark-blue-bg > div > .sl-button').click({ force: true });

			const lst2 = new flow1Lst2();
			lst2.tryGoSleepNew();
			lst2.getIntoBadNew();
	
		}
	});
});
