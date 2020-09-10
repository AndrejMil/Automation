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
import workLocation from '../integration/pageObjects/workLocation';

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
	'https://onboarding.sleepio.com/sleepio/hubbell/76#1/1'
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
			cy.wait(5000);
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

			const seventhOfOst = new howLikelyNew();

			seventhOfOst.highChance();
			home.buttonClick();

			const neki2 = new snoring();

			neki2.snoringTitle();
			neki2.no();

			home.buttonClick();

			const neki = new breathing();

			neki.breathingTitle();

			neki.yes();
			home.buttonClick();

			const firstofOst = new improveYourSleep();

			firstofOst.noneOfTheAbove();
			home.buttonClick();

			const guides = new expertGuides();

			guides.none();
			home.buttonClick();

			const eightOfOst = new gender();

			eightOfOst.male().click();

			home.buttonClick();

			const ninthOfOst = new dob();

			ninthOfOst.monthJan();

			ninthOfOst.day1();

			ninthOfOst.year1991();

			home.buttonClick();

			const hubbellCustom = new workLocation();

			hubbellCustom.workLocationTitle();

			for (var p = 0; p < locations.length; p++) {
				hubbellCustom.checkinhEveryOption76(locations[p].country, locations[p].value);
			}
		}
	});
});
