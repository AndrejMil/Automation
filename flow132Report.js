import homePageNew from '../integration/pageObjects/homePageNew';
import HomePage from '../integration/pageObjects/homePage';
import improveYourSleep from '../integration/pageObjects/improveYourSleep';
import howLong from '../integration/pageObjects/howLong';
import troubledInGeneralNew from '../integration/pageObjects/troubledInGeneralNew';
import manyNights from '../integration/pageObjects/manyNights';
import SignUp from '../integration/pageObjects/SignUp';
import flow1SleepReport from '../integration/pageObjects/flow1SleepReport';
import stillProblem from '../integration/pageObjects/stillProblem';
import reportText from '../integration/pageObjects/reportText';
import 'cypress-wait-until';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/platform_user_report/132#1/1'
];
var i = 0;
describe('Flow 132', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
	
		// Get started page
		for (; i < linkovi.length; i++) {
			const home = new HomePage();
			const homePage = new homePageNew();

			homePage.visitFirstPage(linkovi[i]);
		
			cy.get( '.sl-order-2 > .sl-button' ).click( { force: true } );
			
			const nights = new manyNights();
			nights.night0();
			//nights.night1();
			//nights.night2();
			//nights.night3();
			//nights.night4();
			//nights.night5();
			//nights.night6();
			//nights.night7();

			const still = new stillProblem();
			//still.yes();
			still.no();

			
			const troubled = new troubledInGeneralNew();
			//troubled.notAtAll();
			//troubled.little();
			troubled.somewhat();
			//troubled.much();
			//troubled.veryMuch();

			const improveSleep = new improveYourSleep();
			improveSleep.noneOfTheAboveFlow132();
			//improveSleep.sleepMoreEasily();
			//improveSleep.withoutWakingUp();
			//improveSleep.wakingTooEarly();
			//improveSleep.wakeUpRefreshed();

			const howLongProblem = new howLong();
			//howLongProblem.dontHaveProblem();
			//howLongProblem.weekOrLess();
			//howLongProblem.weeks();
			//howLongProblem.month();
			//howLongProblem.months();
			//howLongProblem.sevenMonths();
			//howLongProblem.years();
			//howLongProblem.fiveYears();
			//howLongProblem.sixYears();
			howLongProblem.moreYearsFlow132();

			cy.xpath( '/html/body/div[1]/div/div[3]/div/div/div[6]/button' ).click();
			const signUp = new SignUp();

			signUp.firstNameImput();
			signUp.lastNameImput();
			signUp.emailImputflow132()
			signUp.passwordInput();
			signUp.checkBoxes();

			signUp.signUpButton();
			cy.wait(10000);

			const report = new reportText();
			//report.reportTextI();
			report.reportTextII();
			
		}
	});
});
