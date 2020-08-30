import homePageDaylight from '../integration/pageObjects/homePageDaylight';
import daylightIntro from '../integration/pageObjects/daylightIntro';
import nhspostcode from '../integration/pageObjects/NHSpostcode';
import roleCategory from '../integration/pageObjects/roleCategory';
import roleBand from '../integration/pageObjects/roleBand';
import daylightBmcId from '../integration/pageObjects/daylightBMC';
import daylightFeelings from '../integration/pageObjects/daylightFeelings';
import daylightSlider from '../integration/pageObjects/daylightSlider';
import daylightGif1 from '../integration/pageObjects/daylightGif1';
import daylightGif2 from '../integration/pageObjects/daylightGif2';
import daylightGif3 from '../integration/pageObjects/daylightGif3';
import daylightGif4 from '../integration/pageObjects/daylightGif4';
import daylightGif5 from '../integration/pageObjects/daylightGif5';
import howOften from '../integration/pageObjects/howOften';
import daylightSignUp from '../integration/pageObjects/daylightSignUp';
import thehartfordEID from '../integration/pageObjects/thehartfordEID';
import TMEID from '../integration/pageObjects/daylightTMEID';

var linkovi = [
	'https://onboarding.qa.trydaylight.com/daylight/test_the_bh_qwerty',
	'https://onboarding.qa.trydaylight.com/daylight/nhs-staff',
	'https://onboarding.qa.trydaylight.com/daylight/bmc/100#1/1',
	'https://onboarding.qa.trydaylight.com/daylight/TheHartford',
	'https://onboarding.qa.trydaylight.com/daylight/Target'
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
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/nhs-staff/100#1/3') {
					const nhspostc = new nhspostcode();
					nhspostc.nhspostcodeTitle();
					nhspostc.nhspostcodeAnswer();
					intro.daylightButton();

					const role = new roleCategory();

					role.roleTitle();
					role.clinical();
					role.nonClinical();
					intro.daylightButton();

					const band = new roleBand();

					band.roleBandTitle();
					band.band2();
					band.band3();
					band.band4();
					band.band5();
					band.band6();
					band.band7();
					band.band8a();
					band.band8b();
					band.band8c();
					band.band8d();
					band.band9();
					band.vsm();
					band.contracted();
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
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/test_the_bh_qwerty/100#2/9') {
					cy.visit('https://onboarding.qa.trydaylight.com/daylight/test_the_bh_qwerty/100#3/1');

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

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/bmcday/');
					cy.wait(3000);

					const daylightBmc = new daylightBmcId();
					daylightBmc.bmcTitle();
					daylightBmc.bmcIdAnswer();

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

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/daylight4test');
					cy.wait(3000);

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

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/bigfriends');
					cy.wait(3000);

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

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/harvardpilgrimaccess');
					cy.wait(3000);

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

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/hubbellaccess');
					cy.wait(3000);

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

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/queens/100');
					cy.wait(7000);
					signUp.firstName();
					signUp.firstNameLabel();
					signUp.lastName();
					signUp.lastNameLabel();
					signUp.email();
					signUp.emailLabelQueens();
					signUp.password();
					signUp.passwordLabelII();
					signUp.passwordText();
					signUp.privacy();
					signUp.privacyCheckBox();
					signUp.doctorCheckBox();
					signUp.terms();
					signUp.suitable();

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/hubbellaccess');
					cy.wait(3000);

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
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/bmc/100#2/9') {
					cy.visit('https://onboarding.qa.trydaylight.com/daylight/bmc/100#3/1');

					const daylightBmc = new daylightBmcId();
					daylightBmc.bmcTitle();
					daylightBmc.bmcIdAnswer();

					cy.visit('https://onboarding.qa.trydaylight.com/daylight/bmc2019/100#3/1');
					daylightBmc.bmcTitle();
					daylightBmc.bmcIdAnswer();
				}
			});
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/thehartford/100#2/9') {
					cy.visit('https://onboarding.qa.trydaylight.com/daylight/thehartford/100#3/1');

					const daylighthartfordEID = new thehartfordEID();
					daylighthartfordEID.thehartfordTitle();
					daylighthartfordEID.thehartfordAnswer();
				}
			});
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/nhs-staff/100#2/9') {
					cy.visit('https://onboarding.qa.trydaylight.com/daylight/nhs-staff/100#3/1');
				}
			});
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.trydaylight.com/daylight/target/100#2/9') {
					cy.visit('https://onboarding.qa.trydaylight.com/daylight/target/100#3/1');

					const daylightTMEID = new TMEID();
					daylightTMEID.TMEIDTitle();
					daylightTMEID.TMEIDhelpText();
					daylightTMEID.TMEIDAnswer();
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
