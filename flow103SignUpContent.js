import homePageDaylight from '../integration/pageObjects/homePageDaylight';
import daylightIntro from '../integration/pageObjects/daylightIntro';
import daylightFeelings from '../integration/pageObjects/daylightFeelings';
import daylightSlider from '../integration/pageObjects/daylightSlider';
import daylightGif1 from '../integration/pageObjects/daylightGif1';
import daylightGif2 from '../integration/pageObjects/daylightGif2';
import daylightGif3 from '../integration/pageObjects/daylightGif3';
import daylightGif4 from '../integration/pageObjects/daylightGif4';
import daylightGif5 from '../integration/pageObjects/daylightGif5';
import howOften from '../integration/pageObjects/howOften';
import daylightSignUp from '../integration/pageObjects/daylightSignUp';

var linkovi = [
	'https://onboarding.trydaylight.com/daylight/minuteclinic/103#1/1'
];
var i = 0;
describe('Flow 100', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		Cypress.currentTest.retries(5);
		// Get started page
		for (; i < linkovi.length; i++) {
			cy.wait(3000);
			const homeDaylight = new homePageDaylight();

			homeDaylight.visitFirstPage(linkovi[i]);

			homeDaylight.started();
			homeDaylight.picture();

			const intro = new daylightIntro();

			intro.introText();
			intro.daylightButton();

			const feelings = new daylightFeelings();
			feelings.feelingsText();
			feelings.angry();
			intro.daylightButton();

			const slider = new daylightSlider();
			slider.sliderText();
			intro.daylightButton();

			const gif1 = new daylightGif1();

			gif1.gif1Text();
			intro.daylightButton();

			const gif2 = new daylightGif2();

			gif2.gif2Text();
			intro.daylightButton();

			const gif3 = new daylightGif3();

			gif3.gif3Text();
			intro.daylightButton();

			const gif4 = new daylightGif4();

			gif4.gif4Text();
			intro.daylightButton();

			const gif5 = new daylightGif5();

			gif5.identifyButton();

			const question1 = new howOften();
			question1.almostNever();
			intro.daylightButton();

			question1.almostNever();
			intro.daylightButton();

			question1.almostNever();
			intro.daylightButton();

			question1.almostNever();
			intro.daylightButton();

			question1.almostNever();
			intro.daylightButton();

			question1.almostNever();
			intro.daylightButton();

			question1.almostNever();
			intro.daylightButton();

			question1.almostNever();
			intro.daylightButton();

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.trydaylight.com/daylight/minuteclinic/103#2/9') {
					cy.visit('https://onboarding.trydaylight.com/daylight/minuteclinic/103#3/1');

					const signUp = new daylightSignUp();
					signUp.firstName();
					signUp.firstNameLabel();
					signUp.lastName();
					signUp.lastNameLabel();
					signUp.email();
					signUp.emailLabel();
					signUp.password();
					signUp.passwordLabelII();
					signUp.passwordText();
					signUp.privacy();
					signUp.privacyCheckBox();
					signUp.doctorCheckBox();
					signUp.terms();
					signUp.suitable();

					cy.visit('https://onboarding.trydaylight.com/daylight/cvs/103#3/1');
					signUp.firstName();
					signUp.firstNameLabel();
					signUp.lastName();
					signUp.lastNameLabel();
					signUp.email();
					signUp.emailLabel();
					signUp.password();
					signUp.passwordLabelII();
					signUp.passwordText();
					signUp.privacy();
					signUp.privacyCheckBox();
					signUp.doctorCheckBox();
					signUp.terms();
					signUp.suitable();
				}
			});
		}
	});
});
