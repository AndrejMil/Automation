import homePageDaylight from '../integration/pageObjects/homePageDaylight';
import daylightIntro from '../integration/pageObjects/daylightIntro';
import daylightFeelings from '../integration/pageObjects/daylightFeelings';
import daylightSlider from '../integration/pageObjects/daylightSlider';
import daylightGif1 from '../integration/pageObjects/daylightGif1';
import daylightGif2 from '../integration/pageObjects/daylightGif2';
import daylightGif3 from '../integration/pageObjects/daylightGif3';
import daylightGif4 from '../integration/pageObjects/daylightGif4';
import daylightGif5 from '../integration/pageObjects/daylightGif5';
import daylightAnswers from '../integration/pageObjects/daylightAnswers';
import howOftenTitle from './pageObjects/howOftenDaylight'
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

var links = [
	'https://onboarding.qa.trydaylight.com/daylight/holidayaccess2020'
];
var i = 0;
describe('Flow 100', () => {
	console.log(links[i]);
	it('Start the test', () => {
		// Get started page
		for (; i < links.length; i++) {
			const homeDaylight = new homePageDaylight();
			homeDaylight.visitFirstPage(links[i]);
			homeDaylight.started();
			homeDaylight.picture();

			const daylightIntroPage = new daylightIntro();
			daylightIntroPage.introText();
			daylightIntroPage.daylightButton();

			const daylightFeelingsPage = new daylightFeelings();
			daylightFeelingsPage.feelingsText();
			daylightFeelingsPage.exhausted();
			daylightFeelingsPage.worried();
			daylightFeelingsPage.sad();
			daylightFeelingsPage.nervous();
			daylightFeelingsPage.angry();
			daylightFeelingsPage.distracted();
			daylightFeelingsPage.fedUp();
			daylightFeelingsPage.restless();
			daylightFeelingsPage.afraid();
			daylightFeelingsPage.tense();
			daylightFeelingsPage.anxious();
			daylightFeelingsPage.irritated();
			daylightFeelingsPage.onEdge();
			daylightFeelingsPage.stressed();
			daylightFeelingsPage.helpless();
			daylightFeelingsPage.lonely();
			daylightFeelingsPage.wornOut();
			daylightFeelingsPage.notSure();
			daylightIntroPage.daylightButton();

			const daylightSliderPage = new daylightSlider();
			daylightSliderPage.sliderText();
			daylightIntroPage.daylightButton();

			const gif1 = new daylightGif1();
			gif1.gif1Text();
			daylightIntroPage.daylightButton();

			const gif2 = new daylightGif2();
			gif2.gif2Text();
			daylightIntroPage.daylightButton();

			const gif3 = new daylightGif3();
			gif3.gif3Text();
			daylightIntroPage.daylightButton();

			const gif4 = new daylightGif4();
			gif4.gif4Text();
			daylightIntroPage.daylightButton();

			const gif5 = new daylightGif5();
			gif5.identifyButton();

			const answersForDaylight = new daylightAnswers();
			const howOftenQuestionTitle = new howOftenTitle();
			howOftenQuestionTitle.howOftenTitle();
			answersForDaylight.almostAlways();
			answersForDaylight.mostOf();
			answersForDaylight.aboutHalf();
			answersForDaylight.sometimes();
			answersForDaylight.sometimes();
			answersForDaylight.almostNever();
			daylightIntroPage.daylightButton();

			const decisionsQuestionTitle = new decisions();
		
			decisionsQuestionTitle.decisionsTitle();
			answersForDaylight.almostAlways();
			answersForDaylight.mostOf();
			answersForDaylight.aboutHalf();
			answersForDaylight.sometimes();
			answersForDaylight.sometimes();
			answersForDaylight.almostNever();
			daylightIntroPage.daylightButton();

			const emotionsQuestionTitle = new emotions();
			
			emotionsQuestionTitle.emotionsTitle();
			answersForDaylight.almostAlways();
			answersForDaylight.mostOf();
			answersForDaylight.aboutHalf();
			answersForDaylight.sometimes();
			answersForDaylight.sometimes();
			answersForDaylight.almostNever();
			daylightIntroPage.daylightButton();

			const conclusionsQuestionsTitle = new conclusions();
			conclusionsQuestionsTitle.decisionsTitle();
			answersForDaylight.almostAlways();
			answersForDaylight.mostOf();
			answersForDaylight.aboutHalf();
			answersForDaylight.sometimes();
			answersForDaylight.sometimes();
			answersForDaylight.almostNever();
			daylightIntroPage.daylightButton();

			const thoughtQuestionTitle = new thought();
			thoughtQuestionTitle.thoughtTitle();
			answersForDaylight.almostAlways();
			answersForDaylight.mostOf();
			answersForDaylight.aboutHalf();
			answersForDaylight.sometimes();
			answersForDaylight.sometimes();
			answersForDaylight.almostNever();
			daylightIntroPage.daylightButton();

			const obstaclesQuestionTitle = new obstacles();
			obstaclesQuestionTitle.obstaclesTitle();
			answersForDaylight.almostAlways();
			answersForDaylight.mostOf();
			answersForDaylight.aboutHalf();
			answersForDaylight.sometimes();
			answersForDaylight.sometimes();
			answersForDaylight.almostNever();
			daylightIntroPage.daylightButton();

			const challengesQuestionTitle = new challenges();
			challengesQuestionTitle.challengesTitle();
			answersForDaylight.almostAlways();
			answersForDaylight.mostOf();
			answersForDaylight.aboutHalf();
			answersForDaylight.sometimes();
			answersForDaylight.sometimes();
			answersForDaylight.almostNever();
			daylightIntroPage.daylightButton();

			const feelingsQuestionTitle = new feelingsDaylight();
			feelingsQuestionTitle.feelingsTitle();
			answersForDaylight.almostAlways();
			answersForDaylight.mostOf();
			answersForDaylight.aboutHalf();
			answersForDaylight.sometimes();
			answersForDaylight.sometimes();
			answersForDaylight.almostNever();
			daylightIntroPage.daylightButton();

			const results = new yourResults();
			results.yourResultsText();
			daylightIntroPage.daylightButton();

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
