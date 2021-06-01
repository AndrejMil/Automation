import homePageNew from '../integration/pageObjects/homePageNew';
import HomePage from '../integration/pageObjects/homePage';
import improveYourSleep from '../integration/pageObjects/improveYourSleep';
import howLong from '../integration/pageObjects/howLong';
import stopsYou from '../integration/pageObjects/stopsYou';
import troubledInGeneralNew from '../integration/pageObjects/troubledInGeneralNew';
import manyNights from '../integration/pageObjects/manyNights';
import gender from '../integration/pageObjects/gender';
import howLikelyNew from '../integration/pageObjects/howLikelyNew';
import dob from '../integration/pageObjects/dob';
import breathing from '../integration/pageObjects/breathing ';
import snoring from '../integration/pageObjects/snoring';
import expertGuides from '../integration/pageObjects/expertGuides';
import stillProblem from '../integration/pageObjects/stillProblem';
import SignUp from '../integration/pageObjects/SignUp';
import livewellId from './pageObjects/livewellEID';
import bjcId from './pageObjects/bjcId';

var links = [
	'https://onboarding.qa.sleepio.com/sleepio/bjchealthcare',
	'https://onboarding.qa.sleepio.com/sleepio/bjc', 
	'https://onboarding.qa.sleepio.com/sleepio/livewell/77#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/abbott/77',
	'https://onboarding.qa.sleepio.com/sleepio/bh2020',
	'https://onboarding.qa.sleepio.com/sleepio/demo2020/77#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/baesystems'
];
var i = 0;
describe('flow 77 signup content2', () => {
	console.log(links[i]);
	it('Start the test', () => {
		
		for (; i < links.length; i++) {
			const home = new HomePage();
			const homePage = new homePageNew();
			homePage.visitFirstPage(links[i]);
			homePage.buttonNew();

			const troubledInGeneralNewQuestion = new troubledInGeneralNew();
			troubledInGeneralNewQuestion.notAtAll();
			home.buttonClick();

			const manyNightsQuestion = new manyNights();
			manyNightsQuestion.night5();
			home.buttonClick();

			const stillProblemQuestion = new stillProblem();
			stillProblemQuestion.no();
			home.buttonClick();
	
			const stopsYouQuestion = new stopsYou();
			stopsYouQuestion.worriesFuture();
			home.buttonClick();

			const howLongQuestion = new howLong();
			howLongQuestion.years();
			home.buttonClick();
		
			const howLikelyNewQuestion = new howLikelyNew();
			howLikelyNewQuestion.highChance();
			home.buttonClick();
	
			const snoringQuestion = new snoring();
			snoringQuestion.dontsnore();
			home.buttonClick();
			
			const breathingQuestion = new breathing();
			breathingQuestion.yes();
			home.buttonClick();

			const improveYourSleepQuestion = new improveYourSleep();
			improveYourSleepQuestion.noneOfTheAbove();
			home.buttonClick();
	
			const expertGuidesQuestion = new expertGuides();
			expertGuidesQuestion.none();
			home.buttonClick();

			const genderQuestion = new gender();
			genderQuestion.male();
			home.buttonClick();

			const dobQuestion = new dob();
			dobQuestion.monthJan();
			dobQuestion.day1();
			dobQuestion.year1991();
			home.buttonClick();

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/livewell/77#3/1') {
					const livewell = new livewellId();
					livewell.livewellTitle();
					livewell.livewellHelpText();
					livewell.livewellAnswer();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/bjc/77#3/1') {
					const bjc = new bjcId();
					bjc.bjcTitle();
					bjc.bjcIdHelpText();
					bjc.bjcIdAnswer();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/bjchealthcare/77#3/1') {
					const bjc = new bjcId();
					bjc.bjcTitle();
					bjc.bjcIdHelpText();
					bjc.bjcIdAnswer();
				}
			});

			const signUp = new SignUp();

			var passwordLabels = [
				'Choose a password*',
				'Password*'
			];

			var matching = 0;

			cy.get('[for="36133"]').then((num) => {
				var m = 0;
				for (; m < passwordLabels.length; m++) {
					if (passwordLabels[m] == num.text()) {
						matching += 1;
					}
				}

				expect(matching).to.equal(1);
				matching -= 1;
			});
			signUp.signUpHeader();
			signUp.firstNameLabel();
			signUp.firstNameImput();
			signUp.lastNameLabel();
			signUp.lastNameImput();
			signUp.emailLabel();
			signUp.emailImputflow77();
			signUp.passwordInput();
			signUp.passwordHint();
			signUp.checkBoxes();
			signUp.privacy();
			signUp.terms();
			signUp.doctorLabel();
			signUp.suitable();
			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
