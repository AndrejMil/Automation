import homePageNew from '../integration/pageObjects/homePageNew';
import HomePage from '../integration/pageObjects/homePage';
import improveYourSleep from '../integration/pageObjects/improveYourSleep';
import howLong from '../integration/pageObjects/howLong';
import stopsYou from '../integration/pageObjects/stopsYou';
import troubledInGeneralNew from '../integration/pageObjects/troubledInGeneralNew';
import importantThings from '../integration/pageObjects/importantThings';
import manyNights from '../integration/pageObjects/manyNights';
import gender from '../integration/pageObjects/gender';
import employment from '../integration/pageObjects/employment';
import manyHours from '../integration/pageObjects/howManyHours';
import howLikelyNew from '../integration/pageObjects/howLikelyNew';
import poorSleep from '../integration/pageObjects/poorSleep';
import dob from '../integration/pageObjects/dob';
import breathing from '../integration/pageObjects/breathing ';
import snoring from '../integration/pageObjects/snoring';
import expertGuides from '../integration/pageObjects/expertGuides';
import flow76SignUp from '../integration/pageObjects/flow76SignUp';
import flow1SleepReport from '../integration/pageObjects/flow1SleepReport';
import flow1Lst1 from '../integration/pageObjects/flow1Lst-1';
import flow1Lst2 from '../integration/pageObjects/flow1Lst-2';
import flow1Lst3 from '../integration/pageObjects/flow1Lst-3';
import flow1Lst4 from '../integration/pageObjects/flow1Lst-4';
import flow1Lst5 from '../integration/pageObjects/flow1Lst-5';
import flow1Lst6 from '../integration/pageObjects/flow1Lst-6';
import flow1Lst7 from '../integration/pageObjects/flow1Lst-7';
import stillProblem from '../integration/pageObjects/stillProblem';
import sleepioExperts from '../integration/pageObjects/sleepioExperts';
import flow76Eligibility from '../integration/pageObjects/flow76Eligibility';
import perscription from '../integration/pageObjects/flow76prescription ';
import flow1Lst8 from '../integration/pageObjects/flow76Lst-8';
import workLocation from '../integration/pageObjects/workLocation';

import { url } from 'inspector';

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/hubbell/76#1/1'
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
			hubbellCustom.dontWork();
			hubbellCustom.ABChance();
			hubbellCustom.aclara();
			hubbellCustom.aclaraSGS();
			hubbellCustom.acmeElectric();
			hubbellCustom.anderson();
			hubbellCustom.beacon();
			hubbellCustom.burndy();
			hubbellCustom.burndyLittleton();
			hubbellCustom.burndyManchester();
			hubbellCustom.cmc();
		}
	});
});
