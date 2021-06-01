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
import decisions from '../integration/pageObjects/decisions';
import emotions from '../integration/pageObjects/emotions';
import conclusions from '../integration/pageObjects/conclusions';
import thought from '../integration/pageObjects/thoughtDaylight';
import obstacles from '../integration/pageObjects/obstacles';
import challenges from '../integration/pageObjects/challenges';
import feelingsDaylight from '../integration/pageObjects/feelingsDaylight';
import yourResults from '../integration/pageObjects/yourResults';
import daylightVideo from '../integration/pageObjects/daylightVideo';
import daylightSignUp from '../integration/pageObjects/daylightSignUp';
import downloadDaylight from '../integration/pageObjects/downloadDaylight';

import { url } from 'inspector';

var linkovi = [
	'https://onboarding.qa.trydaylight.com/daylight/holidayaccess2020'
];
var i = 0;
describe('Flow 100', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
		// Get started page
		for (; i < linkovi.length; i++) {
			const homeDaylight = new homePageDaylight();

			homeDaylight.visitFirstPage(linkovi[i]);
			
			homeDaylight.started();
			homeDaylight.picture();

			const intro = new daylightIntro();

			
			intro.introText();
			intro.daylightButton();

			const feelings = new daylightFeelings();

			
			feelings.feelingsText();
			feelings.exhausted();
			feelings.worried();
			feelings.sad();
			feelings.nervous();
			feelings.angry();
			feelings.distracted();
			feelings.fedUp();
			feelings.restless();
			feelings.afraid();
			feelings.tense();
			feelings.anxious();
			feelings.irritated();
			feelings.onEdge();
			feelings.stressed();
			feelings.helpless();
			feelings.lonely();
			feelings.wornOut();
			feelings.notSure();

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
			
			question1.howOftenTitle();
			question1.almostAlways();
			question1.mostOf();
			question1.aboutHalf();
			question1.sometimes();
			question1.sometimes();
			question1.almostNever();
			intro.daylightButton();

			const question2 = new decisions();
		
			question2.decisionsTitle();
			question1.almostAlways();
			question1.mostOf();
			question1.aboutHalf();
			question1.sometimes();
			question1.sometimes();
			question1.almostNever();
			intro.daylightButton();

			const question3 = new emotions();
			
			question3.emotionsTitle();
			question1.almostAlways();
			question1.mostOf();
			question1.aboutHalf();
			question1.sometimes();
			question1.sometimes();
			question1.almostNever();
			intro.daylightButton();

			const question4 = new conclusions();
		
			question4.decisionsTitle();
			question1.almostAlways();
			question1.mostOf();
			question1.aboutHalf();
			question1.sometimes();
			question1.sometimes();
			question1.almostNever();
			intro.daylightButton();

			const question5 = new thought();
			
			question5.thoughtTitle();
			question1.almostAlways();
			question1.mostOf();
			question1.aboutHalf();
			question1.sometimes();
			question1.sometimes();
			question1.almostNever();
			intro.daylightButton();

			const question6 = new obstacles();
		
			question6.obstaclesTitle();
			question1.almostAlways();
			question1.mostOf();
			question1.aboutHalf();
			question1.sometimes();
			question1.sometimes();
			question1.almostNever();
			intro.daylightButton();

			const question7 = new challenges();
			
			question7.challengesTitle();
			question1.almostAlways();
			question1.mostOf();
			question1.aboutHalf();
			question1.sometimes();
			question1.sometimes();
			question1.almostNever();
			intro.daylightButton();

			const question8 = new feelingsDaylight();
			
			question8.feelingsTitle();
			question1.almostAlways();
			question1.mostOf();
			question1.aboutHalf();
			question1.sometimes();
			question1.sometimes();
			question1.almostNever();
			intro.daylightButton();

			const results = new yourResults();
		
			results.yourResultsText();
			intro.daylightButton();

			const video = new daylightVideo();
			
			video.daylightVideoText();
			video.daylightVideoButton();

			const signUp = new daylightSignUp();
		
			signUp.firstName();
			signUp.lastName();
			signUp.email();
			signUp.password();
			signUp.passwordText();
			signUp.privacy();
			signUp.privacyCheckBox();
			signUp.doctorCheckBox();
			signUp.terms();
			signUp.suitable();
			signUp.signUpButton();
			
			const download = new downloadDaylight();
		
		
			download.downloadText();
			download.downloadLink()
			
		}
	});
});
