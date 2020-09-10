import homePageDaylight from '../integration/pageObjects/homePageDaylight';
import daylightIntro from '../integration/pageObjects/daylightIntro';
import nhspostcode from '../integration/pageObjects/NHSpostcode';
import roleCategory from '../integration/pageObjects/roleCategory';
import roleBand from '../integration/pageObjects/roleBand';
import IAPT from '../integration/pageObjects/IAPT';
import nhsScotland from '../integration/pageObjects/nhsScotland';
import nhsFunction from '../integration/pageObjects/nhsFunction';

var linkovi = [
	'https://onboarding.trydaylight.com/daylight/nhs-staff/100#1/1',
	'https://onboarding.trydaylight.com/daylight/hmb/100#1/3',
	'https://onboarding.trydaylight.com/daylight/healthandcare-scot/100#1/1'
];
var i = 0;
describe('Flow 100', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		Cypress.currentTest.retries(5);
		// Get started page
		for (; i < linkovi.length; i++) {
			const homeDaylight = new homePageDaylight();

			homeDaylight.visitFirstPage(linkovi[i]);

			homeDaylight.started();
			homeDaylight.picture();

			const intro = new daylightIntro();

			intro.introText();
			intro.daylightButton();

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.trydaylight.com/daylight/nhs-staff/100#1/3') {
					const nhspostc = new nhspostcode();
					nhspostc.nhspostcodeTitleII();
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

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.trydaylight.com/daylight/hmb/100#1/3') {
					const nhspostc = new nhspostcode();
					nhspostc.nhspostcodeTitleII();
					nhspostc.nhspostcodeAnswer();
					intro.daylightButton();

					const iapt = new IAPT();
					iapt.iaptText();
					iapt.iaptAnswer();
					intro.daylightButton();
				}

				cy.clearCookies();
				cy.clearLocalStorage();
			});

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.trydaylight.com/daylight/healthandcare-scot/100#1/3') {
					const nhsScot = new nhsScotland();
					nhsScot.nhsScotlandTitle();
					nhsScot.nhsScotlandAnswer();
					intro.daylightButton();

					const nhsFunc = new nhsFunction();
					nhsFunc.nhsFunctionTitle();
					nhsFunc.nhsSocial();
					nhsFunc.thirdSector();
					nhsFunc.otherPublic();
					nhsFunc.other();
				}

				cy.clearCookies();
				cy.clearLocalStorage();
			});
		}
	});
});
