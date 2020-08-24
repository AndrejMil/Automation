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
import stillProblem from '../integration/pageObjects/stillProblem';
import nhspostcode from '../integration/pageObjects/NHSpostcode';
import roleCategory from '../integration/pageObjects/roleCategory';
import roleBand from '../integration/pageObjects/roleBand';
import careerLevel from './pageObjects/careerLevel';
import DTE from './pageObjects/DTE';
import flow1SignUp from './pageObjects/flow1SignUp';
import homeDepotEID from './pageObjects/homeDepotEID';
import careaccesspostcode from './pageObjects/care-accessPostCode';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/nhsstaff/',
	'https://onboarding.qa.sleepio.com/sleepio/nhs-staff',
	'https://onboarding.qa.sleepio.com/sleepio/homedepot/77',
	'https://onboarding.qa.sleepio.com/sleepio/frontlineaccess/77#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/carbon/77',
	'https://onboarding.qa.sleepio.com/sleepio/accenture',
	'https://onboarding.qa.sleepio.com/sleepio/michaelkors',
	'https://onboarding.qa.sleepio.com/sleepio/caprisleep/77#1/1',
	'https://onboarding.qa.sleepio.com/sleepio/capri',
	'https://onboarding.qa.sleepio.com/sleepio/care-access'
];
var i = 0;
describe('Proba', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		// Get started page
		for (; i < linkovi.length; i++) {
			const home = new HomePage();
			const homePage = new homePageNew();

			homePage.visitFirstPage(linkovi[i]);

			cy.wait(3000);
			homePage.buttonNew();

			const fourthdOfOst = new troubledInGeneralNew();

			fourthdOfOst.notAtAll();
			home.buttonClick();

			const fiveOfOst = new manyNights();

			fiveOfOst.night7();
			home.buttonClick();

			const still = new stillProblem();

			still.no();
			home.buttonClick();

			const secondOfOst = new howLong();

			secondOfOst.dontHaveProblem();
			home.buttonClick();

			const neki5 = new howLikelyNew();
			neki5.highChance();
			home.buttonClick();

			const neki3 = new snoring();
			neki3.dontsnore();
			home.buttonClick();

			const neki4 = new breathing();
			neki4.yes();
			home.buttonClick();

			const neki6 = new improveYourSleep();

			neki6.noneOfTheAbove();
			home.buttonClick();

			const neki7 = new expertGuides();
			neki7.none();
			home.buttonClick();

			const neki0 = new gender();
			neki0.male().click();
			home.buttonClick();

			const neki9 = new dob();
			neki9.monthJan();
			neki9.day1();
			neki9.year1991();
			home.buttonClick();

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/capri/1#2/15') {
					const area = new areaOfBusiness();
					area.areaOfBusinessTitle();
					area.retail();
					area.development();
					area.corporate();
					area.distribution();
					area.other();
					home.buttonClick();

					const benefits = new benefitsPlans();
					benefits.benefitsPlansTitle();
					benefits.cignaEnh();
					benefits.cignaCore();
					benefits.cignaMedical();
					benefits.no();
					benefits.other();
					home.buttonClick();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/caprisleep/77#1/1') {
					const area = new areaOfBusiness();
					area.areaOfBusinessTitle();
					area.retail();
					area.development();
					area.corporate();
					area.distribution();
					area.other();
					home.buttonClick();

					const benefits = new benefitsPlans();
					benefits.benefitsPlansTitle();
					benefits.cignaEnh();
					benefits.cignaCore();
					benefits.cignaMedical();
					benefits.no();
					benefits.other();
					home.buttonClick();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/accenture/1#2/15') {
					const career = new careerLevel();

					career.careerTitle();
					career.leadership();
					career.levels5();
					career.levels8();
					career.levels11();
					career.dontwork();
					home.buttonClick();

					const dte = new DTE();
					dte.DTETitle();
					dte.acg();
					dte.copFunctions();
					dte.aceOperations();
					dte.aceTehnology();
					dte.aceStrategy();
					dte.aceDigital();
					dte.finService();
					dte.products();
					dte.resource();
					dte.heaktPublicSer();
					dte.communMedi();
					dte.iDont();
					home.buttonClick();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/homedepot/77#3/1') {
					const homeSignUp = new homeDepotEID();
					homeSignUp.homeDepotEIDTitle();
					homeSignUp.homeDepotEIDAnswer();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/care-access/77#2/12') {
					const social = new careaccesspostcode();
					social.careaccessTitle();
					social.careaccessAnswer();
					home.buttonClick();
				}

				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/nhs-staff/77#2/12') {
					const nhsPCNew = new nhspostcode();
					nhsPCNew.nhspostcodeTitle();
					nhsPCNew.nhspostcodeAnswer();
					home.buttonClick();

					const roleNew = new roleCategory();
					roleNew.roleTitle();
					roleNew.clinical();
					roleNew.nonClinical();
					home.buttonClick();

					const bandNew = new roleBand();
					bandNew.roleBandTitle();
					bandNew.band2();
					bandNew.band3();
					bandNew.band4();
					bandNew.band5();
					bandNew.band6();
					bandNew.band7();
					bandNew.band8a();
					bandNew.band8b();
					bandNew.band8c();
					bandNew.band8d();
					bandNew.band9();
					bandNew.vsm();
					bandNew.contracted();
					home.buttonClick();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/nhsstaff/77#2/12') {
					const nhsPCNew = new nhspostcode();
					nhsPCNew.nhspostcodeTitle();
					nhsPCNew.nhspostcodeAnswer();
					home.buttonClick();

					const roleNew = new roleCategory();
					roleNew.roleTitle();
					roleNew.clinical();
					roleNew.nonClinical();
					home.buttonClick();

					const bandNew = new roleBand();
					bandNew.roleBandTitle();
					bandNew.band2();
					bandNew.band3();
					bandNew.band4();
					bandNew.band5();
					bandNew.band6();
					bandNew.band7();
					bandNew.band8a();
					bandNew.band8b();
					bandNew.band8c();
					bandNew.band8d();
					bandNew.band9();
					bandNew.vsm();
					bandNew.contracted();
					home.buttonClick();
				}
			});

			const signUp = new flow1SignUp();

			var passwordLabels = [
				'Choose a password*',
				'Password*'
			];

			var matching = 0;

			cy.get('[for="23610"]').then((num) => {
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
			signUp.emailImput();
			signUp.passwordImput();
			signUp.passwordHint();
			signUp.privacy();
			signUp.terms();
			signUp.doctorLabel();
			signUp.doctorLabel();
			signUp.doctorLink();
			cy.reload();
			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
