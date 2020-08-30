import homePageDaylight from '../integration/pageObjects/homePageDaylight';
import daylightIntro from '../integration/pageObjects/daylightIntro';
import IAPT from '../integration/pageObjects/IAPT';
import nhsScotland from '../integration/pageObjects/nhsScotland';
import daylightFeelings from '../integration/pageObjects/daylightFeelings';
import daylightSlider from '../integration/pageObjects/daylightSlider';
import daylightGif1 from '../integration/pageObjects/daylightGif1';
import daylightGif2 from '../integration/pageObjects/daylightGif2';
import daylightGif3 from '../integration/pageObjects/daylightGif3';
import daylightGif4 from '../integration/pageObjects/daylightGif4';
import daylightGif5 from '../integration/pageObjects/daylightGif5';
import howOften from '../integration/pageObjects/howOften';
import daylightSignUp from '../integration/pageObjects/daylightSignUp';
import careaccesspostcode from '../integration/pageObjects/care-accessPostCode';
import tmNumber from '../integration/pageObjects/tmNumber';
import nhsScotlandPostcode from '../integration/pageObjects/nhsScotlandPostcode';
import carbonAccessCode from '../integration/pageObjects/carbonAccessCode';
import nhsFunction from '../integration/pageObjects/nhsFunction';
import thehartfordEID from '../integration/pageObjects/thehartfordEID';
import homeDepotDaylightEID from '../integration/pageObjects/homeDepotDaylightEID';

var linkovi = [
	'https://onboarding.qa.trydaylight.com/daylight/hmb/100',
	'https://onboarding.qa.trydaylight.com/daylight/access/100',
	'https://onboarding.qa.trydaylight.com/daylight/care-access',
	'https://onboarding.qa.trydaylight.com/daylight/healthandcare-scot/100'
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

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/hmb/100#1/3') {
					const nhsScot = new nhsScotland();
					nhsScot.nhsScotlandTitle();
					nhsScot.nhsScotlandAnswer();
					intro.daylightButton();

					const iapt = new IAPT();
					iapt.iaptText();
					iapt.iaptAnswer();
					intro.daylightButton();
				}
			});

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/healthandcare-scot/100#1/3') {
					const healthScot = new nhsScotlandPostcode();
					healthScot.nhsScotPostcodeTitle();
					healthScot.nhsScotPostcodeAnswer();
					intro.daylightButton();

					const nhsfunction = new nhsFunction();
					nhsfunction.nhsFunctionTitle();
					nhsfunction.nhsSocial();
					nhsfunction.thirdSector();
					nhsfunction.otherPublic();
					nhsfunction.other();
					intro.daylightButton();
				}
			});

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/care-access/100#1/3') {
					const careAccess = new careaccesspostcode();
					careAccess.careaccessTitle();
					careAccess.careaccessAnswer();
					intro.daylightButton();
				}
			});

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
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/access/100#2/9') {
					cy.visit('https://onboarding.qa.trydaylight.com/daylight/access/100#3/1');

					const signUp = new daylightSignUp();
					signUp.firstName();
					signUp.firstNameLabel();
					signUp.lastName();
					signUp.lastNameLabel();
					signUp.email();
					signUp.emailLabel();
					signUp.password();
					signUp.passwordLabel();
					signUp.passwordText();
					signUp.privacy();
					signUp.privacyCheckBox();
					signUp.doctorCheckBox();
					signUp.terms();
					signUp.suitable();

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/capriday/100#3/1');
					signUp.firstName();
					signUp.firstNameLabel();
					signUp.lastName();
					signUp.lastNameLabel();
					signUp.email();
					signUp.emailLabel();
					signUp.password();
					signUp.passwordLabel();
					signUp.passwordText();
					signUp.privacy();
					signUp.privacyCheckBox();
					signUp.doctorCheckBox();
					signUp.terms();
					signUp.suitable();

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/target/100#3/1');

					const tm = new tmNumber();
					tm.tmNumberTitle();
					tm.tmNumberHelpText();
					tm.tmNumberAnswer();
					signUp.firstName();
					signUp.firstNameLabel();
					signUp.lastName();
					signUp.lastNameLabel();
					signUp.email();
					signUp.emailLabel();
					signUp.password();
					signUp.passwordLabel();
					signUp.passwordText();
					signUp.privacy();
					signUp.privacyCheckBox();
					signUp.doctorCheckBox();
					signUp.terms();
					signUp.suitable();

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/carbon/100#3/1');
					const carbon = new carbonAccessCode();
					carbon.carbonACodeTitle();
					carbon.carbonAccessCodeAnswer();
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

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/frontlineaccess/100#3/1');
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

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/thehartford/100#3/1');
					const hartfordEID = new thehartfordEID();
					hartfordEID.thehartfordTitle();
					hartfordEID.thehartfordAnswer();
					signUp.firstName();
					signUp.firstNameLabel();
					signUp.lastName();
					signUp.lastNameLabel();
					signUp.email();
					signUp.emailLabel();
					signUp.password();
					signUp.passwordLabel();
					signUp.passwordText();
					signUp.privacy();
					signUp.privacyCheckBox();
					signUp.doctorCheckBox();
					signUp.terms();
					signUp.suitable();

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/homedepot/100#3/1');
					const homeDepotEID = new homeDepotDaylightEID();
					homeDepotEID.homeDepotDaylightEIDTitle();
					homeDepotEID.homeDepotDaylightEIDHelpText();
					homeDepotEID.homeDepotDaylightEIDAnswer();
					signUp.firstName();
					signUp.firstNameLabel();
					signUp.lastName();
					signUp.lastNameLabel();
					signUp.email();
					signUp.emailLabel();
					signUp.password();
					signUp.passwordLabel();
					signUp.passwordText();
					signUp.privacy();
					signUp.privacyCheckBox();
					signUp.doctorCheckBox();
					signUp.terms();
					signUp.suitable();

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/demo2020/100#3/1');
					signUp.firstName();
					signUp.firstNameLabel();
					signUp.lastName();
					signUp.lastNameLabel();
					signUp.email();
					signUp.emailLabel();
					signUp.password();
					signUp.passwordLabel();
					signUp.passwordText();
					signUp.privacy();
					signUp.privacyCheckBox();
					signUp.doctorCheckBox();
					signUp.terms();
					signUp.suitable();

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/demo/100#3/1');
					signUp.firstName();
					signUp.firstNameLabel();
					signUp.lastName();
					signUp.lastNameLabel();
					signUp.email();
					signUp.emailLabel();
					signUp.password();
					signUp.passwordLabel();
					signUp.passwordText();
					signUp.privacy();
					signUp.privacyCheckBox();
					signUp.doctorCheckBox();
					signUp.terms();
					signUp.suitable();
				}
			});

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/hmb/100#2/9') {
					cy.visit('https://onboarding.qa.trydaylight.com/daylight/hmb/100#3/1');
				}
			});

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/healthandcare-scot/100#2/9') {
					cy.visit('https://onboarding.qa.trydaylight.com/daylight/healthandcare-scot/100#3/1');
				}
			});

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/care-access/100#2/9') {
					cy.visit('https://onboarding.qa.trydaylight.com/daylight/care-access/100#3/1');
				}
			});

			const signUp = new daylightSignUp();
			signUp.firstName();
			signUp.firstNameLabel();
			signUp.lastName();
			signUp.lastNameLabel();
			signUp.email();
			signUp.emailLabel();
			signUp.password();
			signUp.passwordLabel();
			signUp.passwordText();
			signUp.privacy();
			signUp.privacyCheckBox();
			signUp.doctorCheckBox();
			signUp.terms();
			signUp.suitable();
			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
