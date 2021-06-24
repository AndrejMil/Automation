import homePageNew from '../pageObjects/homePageNew';
import HomePage from '../pageObjects/homePage';
import improveYourSleep from '../pageObjects/improveYourSleep';
import howLong from '../pageObjects/howLong';
import troubledInGeneralNew from '../pageObjects/troubledInGeneralNew';
import manyNights from '../pageObjects/manyNights';
import gender from '../pageObjects/gender';
import stopsYou from '../pageObjects/stopsYou';
import howLikelyNew from '../pageObjects/howLikelyNew';
import dob from '../pageObjects/dob';
import breathing from '../pageObjects/breathing ';
import snoring from '../pageObjects/snoring';
import expertGuides from '../pageObjects/expertGuides';
import stillProblem from '../pageObjects/stillProblem';
import workLocation from '../pageObjects/workLocation';

var locations = [
	{ country: "I don't work for Hubbell", value: '0' },
	{ country: 'AB Chance', value: '1' },
	{ country: 'Aclara', value: '2' },
	{ country: 'Aclara - SGS Installers', value: '3' },
	{ country: 'Acme Electric', value: '4' },
	{ country: 'Anderson (Connectors)', value: '5' },
	{ country: 'Beacon', value: '6' },
	{ country: 'Burndy - Lincoln', value: '7' },
	{ country: 'Burndy - Littleton', value: '8' },
	{ country: 'Burndy - Manchester', value: '9' },
	{ country: 'CMC - OH', value: '10' },
	{ country: 'CMC - AL', value: '11' },
	{ country: 'Continental Industries', value: '12' },
	{ country: 'Corporate', value: '13' },
	{ country: 'EC&M (ICD)', value: '14' },
	{ country: 'EMC', value: '15' },
	{ country: 'Gai-Tronics', value: '16' },
	{ country: 'Gleason Reel', value: '17' },
	{ country: 'Hawke', value: '18' },
	{ country: 'Hipotronics', value: '19' },
	{ country: 'HLI Distribution', value: '20' },
	{ country: 'HLI Lighting', value: '21' },
	{ country: 'HPS - Meramec', value: '22' },
	{ country: 'Hubbell Control Solutions', value: '23' },
	{ country: 'Hubbell Distribution', value: '24' },
	{ country: 'Hubbell ICD', value: '25' },
	{ country: 'Hubbell Lenoir City', value: '26' },
	{ country: 'Hubbell Power Systems', value: '27' },
	{ country: 'Hubbell Premise Wiring', value: '28' },
	{ country: 'Hubbell Wiring - Shelton', value: '29' },
	{ country: 'HUBS', value: '30' },
	{ country: 'iDevices', value: '31' },
	{ country: 'Killark Electric', value: '32' },
	{ country: 'Kim Lighting', value: '33' },
	{ country: 'Litecontrol', value: '34' },
	{ country: 'Lyall WI', value: '35' },
	{ country: 'Lyall CA', value: '36' },
	{ country: 'Ohio Brass Aiken', value: '37' },
	{ country: 'Ohio Brass Wadsworth', value: '38' },
	{ country: 'PCore', value: '39' },
	{ country: 'Pencell [Hubbell Lenior City]', value: '40' },
	{ country: 'Powerohm', value: '41' },
	{ country: 'Prescolite', value: '42' },
	{ country: 'Progress Lighting', value: '43' },
	{ country: 'RACO', value: '44' },
	{ country: 'Reuel, Inc.', value: '45' },
	{ country: 'RFL', value: '46' },
	{ country: 'Security Lighting', value: '47' },
	{ country: 'Trinetics', value: '48' },
	{ country: 'USCO (Switching)', value: '49' },
	{ country: 'Wiegmann', value: '50' }
];

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/hubbell/76#1/1'
];
var i = 0;
describe('flow76 custom', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		// Get started page
		for (; i < linkovi.length; i++) {
			const home = new HomePage();
			const homePage = new homePageNew();
			homePage.visitFirstPage(linkovi[i]);
			homePage.buttonNew();

			const troubledInGeneralNewQuestion = new troubledInGeneralNew();
			troubledInGeneralNewQuestion.notAtAll();
			home.buttonClick();
		
			const manyNightsQuestion = new manyNights();
			manyNightsQuestion.night7();
			home.buttonClick();

			const stillProblemQuestion = new stillProblem();
			stillProblemQuestion.no();
			home.buttonClick();

			const stopsYouQuestion = new stopsYou();
			stopsYouQuestion.light();
			home.buttonClick();


			const howLongQuestion = new howLong();
			howLongQuestion.sixYears();
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
			genderQuestion.another()
			home.buttonClick();

		
			const dobQuestion = new dob();
			dobQuestion.monthJan();
			dobQuestion.day1();
			dobQuestion.year1991();
			home.buttonClick();

			const workLocationQuestion = new workLocation();

			workLocationQuestion.workLocationTitle();

			for (var p = 0; p < locations.length; p++) {
				workLocationQuestion.checkinhEveryOption76(locations[p].country, locations[p].value);
			}
		}
	});
});
