import homePageNew from '../pageObjects/homePageNew';
import HomePage from '../pageObjects/homePage';
import improveYourSleep from '../pageObjects/improveYourSleep';
import howLong from '../pageObjects/howLong';
import troubledInGeneralNew from '../pageObjects/troubledInGeneralNew';
import stopsYou from '../pageObjects/stopsYou';
import manyNights from '../pageObjects/manyNights'; 
import gender from '../pageObjects/gender';
import howLikelyNew from '../pageObjects/howLikelyNew';
import dob from '../pageObjects/dob';
import breathing from '../pageObjects/breathing ';
import snoring from '../pageObjects/snoring';
import expertGuides from '../pageObjects/expertGuides';
import SignUp from '../pageObjects/SignUp';
import flow1SleepReport from '../pageObjects/flow1SleepReport';
import flow1Lst2 from '../pageObjects/flow1Lst-2'; 
import flow1Lst3 from '../pageObjects/flow1Lst-3';
import flow1Lst4 from '../pageObjects/flow1Lst-4';
import flow1Lst5 from '../pageObjects/flow1Lst-5'; 
import flow1Lst6 from '../pageObjects/flow1Lst-6';
import flow1Lst7 from '../pageObjects/flow1Lst-7';
import stillProblem from '../pageObjects/stillProblem'; 
import perscription from '../pageObjects/flow76prescription ';
import flow1Lst8 from '../pageObjects/flow76Lst-8';
import following from '../pageObjects/following';
import countryLocated from '../pageObjects/countryLocated';
import stateWork from '../pageObjects/stateWork';
import googleEID from '../pageObjects/googleEID';
import flow76Eligibility from '../pageObjects/flow76Eligibility';
import googleCompanyInsurance from '../pageObjects/googleCompanyInsurance';


var countryes = [
	{ country: 'United Kingdom', value: 'GB' },
	{ country: 'United States', value: 'US' },
	{ country: 'Afghanistan', value: 'AF' },
	{ country: 'Åland Islands', value: 'AX' },
	{ country: 'Albania', value: 'AL' },
	{ country: 'Algeria', value: 'DZ' },
	{ country: 'American Samoa', value: 'AS' },
	{ country: 'Andorra', value: 'AD' },
	{ country: 'Angola', value: 'AO' },
	{ country: 'Antigua and Barbuda', value: 'AG' },
	{ country: 'Argentina', value: 'AR' },
	{ country: 'Armenia', value: 'AM' },
	{ country: 'Aruba', value: 'AW' },
	{ country: 'Australia', value: 'AU' },
	{ country: 'Austria', value: 'AT' },
	{ country: 'Azerbaijan', value: 'AZ' },
	{ country: 'Bahamas', value: 'BS' },
	{ country: 'Bahrain', value: 'BH' },
	{ country: 'Bangladesh', value: 'BD' },
	{ country: 'Barbados', value: 'BB' },
	{ country: 'Belarus', value: 'BY' },
	{ country: 'Belgium', value: 'BE' },
	{ country: 'Belize', value: 'BZ' },
	{ country: 'Benin', value: 'BJ' },
	{ country: 'Bermuda', value: 'BM' },
	{ country: 'Bhutan', value: 'BT' },
	{ country: 'Bolivia, Plurinational State of', value: 'BO' },
	{ country: 'Bonaire, Sint Eustatius and Saba', value: 'BQ' },
	{ country: 'Bosnia and Herzegovina', value: 'BA' },
	{ country: 'Botswana', value: 'BW' },
	{ country: 'Brazil', value: 'BR' },
	{ country: 'British Indian Ocean Territory', value: 'IO' },
	{ country: 'Brunei Darussalam', value: 'BN' },
	{ country: 'Bulgaria', value: 'BG' },
	{ country: 'Burkina Faso', value: 'BF' },
	{ country: 'Burundi', value: 'BI' },
	{ country: 'Cambodia', value: 'KH' },
	{ country: 'Cameroon', value: 'CM' },
	{ country: 'Canada', value: 'CA' },
	{ country: 'Cape Verde', value: 'CV' },
	{ country: 'Cayman Islands', value: 'KY' },
	{ country: 'Central African Republic', value: 'CF' },
	{ country: 'Chad', value: 'TD' },
	{ country: 'Chile', value: 'CL' },
	{ country: 'China', value: 'CN' },
	{ country: 'Christmas Island', value: 'CX' },
	{ country: 'Cocos (Keeling) Islands', value: 'CC' },
	{ country: 'Colombia', value: 'CO' },
	{ country: 'Comoros', value: 'KM' },
	{ country: 'Congo', value: 'CG' },
	{ country: 'Congo, The Democratic Republic of The', value: 'CD' },
	{ country: 'Cook Islands', value: 'CK' },
	{ country: 'Costa Rica', value: 'CR' },
	{ country: "Côte D'ivoire", value: 'CI' },
	{ country: 'Croatia', value: 'HR' },
	{ country: 'Cuba', value: 'CU' },
	{ country: 'Curaçao', value: 'CW' },
	{ country: 'Cyprus', value: 'CY' },
	{ country: 'Czech Republic', value: 'CZ' },
	{ country: 'Denmark', value: 'DK' },
	{ country: 'Djibouti', value: 'DJ' },
	{ country: 'Dominica', value: 'DM' },
	{ country: 'Dominican Republic', value: 'DO' },
	{ country: 'Ecuador', value: 'EC' },
	{ country: 'Egypt', value: 'EG' },
	{ country: 'El Salvador', value: 'SV' },
	{ country: 'Equatorial Guinea', value: 'GQ' },
	{ country: 'Eritrea', value: 'ER' },
	{ country: 'Estonia', value: 'EE' },
	{ country: 'Ethiopia', value: 'ET' },
	{ country: 'Falkland Islands (Malvinas)', value: 'FK' },
	{ country: 'Faroe Islands', value: 'FO' },
	{ country: 'Fiji', value: 'FJ' },
	{ country: 'Finland', value: 'FI' },
	{ country: 'France', value: 'FR' },
	{ country: 'French Guiana', value: 'GF' },
	{ country: 'French Polynesia', value: 'PF' },
	{ country: 'French Southern Territories', value: 'TF' },
	{ country: 'Gabon', value: 'GA' },
	{ country: 'Gambia', value: 'GM' },
	{ country: 'Georgia', value: 'GE' },
	{ country: 'Germany', value: 'DE' },
	{ country: 'Ghana', value: 'GH' },
	{ country: 'Gibraltar', value: 'GI' },
	{ country: 'Greece', value: 'GR' },
	{ country: 'Greenland', value: 'GL' },
	{ country: 'Grenada', value: 'GD' },
	{ country: 'Guadeloupe', value: 'GP' },
	{ country: 'Guam', value: 'GU' },
	{ country: 'Guatemala', value: 'GT' },
	{ country: 'Guernsey', value: 'GG' },
	{ country: 'Guinea', value: 'GN' },
	{ country: 'Guinea-bissau', value: 'GW' },
	{ country: 'Guyana', value: 'GY' },
	{ country: 'Haiti', value: 'HT' },
	{ country: 'Heard Island and Mcdonald Islands', value: 'HM' },
	{ country: 'Holy See (Vatican City State)', value: 'VA' },
	{ country: 'Honduras', value: 'HN' },
	{ country: 'Hong Kong', value: 'HK' },
	{ country: 'Hungary', value: 'HU' },
	{ country: 'Iceland', value: 'IS' },
	{ country: 'India', value: 'IN' },
	{ country: 'Indonesia', value: 'ID' },
	{ country: 'Iran, Islamic Republic of', value: 'IR' },
	{ country: 'Iraq', value: 'IQ' },
	{ country: 'Ireland', value: 'IE' },
	{ country: 'Isle of Man', value: 'IM' },
	{ country: 'Israel', value: 'IL' },
	{ country: 'Italy', value: 'IT' },
	{ country: 'Jamaica', value: 'JM' },
	{ country: 'Japan', value: 'JP' },
	{ country: 'Jersey', value: 'JE' },
	{ country: 'Jordan', value: 'JO' },
	{ country: 'Kazakhstan', value: 'KZ' },
	{ country: 'Kenya', value: 'KE' },
	{ country: 'Kiribati', value: 'KI' },
	{ country: "Korea, Democratic People's Republic of", value: 'KP' },
	{ country: 'Korea, Republic of', value: 'KR' },
	{ country: 'Kuwait', value: 'KW' },
	{ country: 'Kyrgyzstan', value: 'KG' },
	{ country: "Lao People's Democratic Republic", value: 'LA' },
	{ country: 'Latvia', value: 'LV' },
	{ country: 'Lebanon', value: 'LB' },
	{ country: 'Lesotho', value: 'LS' },
	{ country: 'Liberia', value: 'LR' },
	{ country: 'Libya', value: 'LY' },
	{ country: 'Liechtenstein', value: 'LI' },
	{ country: 'Lithuania', value: 'LT' },
	{ country: 'Luxembourg', value: 'LU' },
	{ country: 'Macao', value: 'MO' },
	{ country: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
	{ country: 'Madagascar', value: 'MG' },
	{ country: 'Malawi', value: 'MW' },
	{ country: 'Malaysia', value: 'MY' },
	{ country: 'Maldives', value: 'MV' },
	{ country: 'Mali', value: 'ML' },
	{ country: 'Malta', value: 'MT' },
	{ country: 'Marshall Islands', value: 'MH' },
	{ country: 'Martinique', value: 'MQ' },
	{ country: 'Mauritania', value: 'MR' },
	{ country: 'Mauritius', value: 'MU' },
	{ country: 'Mayotte', value: 'YT' },
	{ country: 'Mexico', value: 'MX' },
	{ country: 'Micronesia, Federated States of', value: 'FM' },
	{ country: 'Moldova, Republic of', value: 'MD' },
	{ country: 'Monaco', value: 'MC' },
	{ country: 'Mongolia', value: 'MN' },
	{ country: 'Montenegro', value: 'ME' },
	{ country: 'Montserrat', value: 'MS' },
	{ country: 'Morocco', value: 'MA' },
	{ country: 'Mozambique', value: 'MZ' },
	{ country: 'Myanmar', value: 'MM' },
	{ country: 'Namibia', value: 'NA' },
	{ country: 'Nauru', value: 'NR' },
	{ country: 'Nepal', value: 'NP' },
	{ country: 'Netherlands', value: 'NL' },
	{ country: 'New Caledonia', value: 'NC' },
	{ country: 'New Zealand', value: 'NZ' },
	{ country: 'Nicaragua', value: 'NI' },
	{ country: 'Niger', value: 'NE' },
	{ country: 'Nigeria', value: 'NG' },
	{ country: 'Niue', value: 'NU' },
	{ country: 'Norfolk Island', value: 'NF' },
	{ country: 'Northern Mariana Islands', value: 'MP' },
	{ country: 'Norway', value: 'NO' },
	{ country: 'Oman', value: 'OM' },
	{ country: 'Pakistan', value: 'PK' },
	{ country: 'Palau', value: 'PW' },
	{ country: 'Palestine, State of', value: 'PS' },
	{ country: 'Panama', value: 'PA' },
	{ country: 'Papua New Guinea', value: 'PG' },
	{ country: 'Paraguay', value: 'PY' },
	{ country: 'Peru', value: 'PE' },
	{ country: 'Philippines', value: 'PH' },
	{ country: 'Pitcairn', value: 'PN' },
	{ country: 'Poland', value: 'PL' },
	{ country: 'Portugal', value: 'PT' },
	{ country: 'Puerto Rico', value: 'PR' },
	{ country: 'Qatar', value: 'QA' },
	{ country: 'Réunion', value: 'RE' },
	{ country: 'Romania', value: 'RO' },
	{ country: 'Russian Federation', value: 'RU' },
	{ country: 'Rwanda', value: 'RW' },
	{ country: 'Saint Barthélemy', value: 'BL' },
	{ country: 'Saint Helena, Ascension and Tristan da Cunha', value: 'SH' },
	{ country: 'Saint Kitts and Nevis', value: 'KN' },
	{ country: 'Saint Lucia', value: 'LC' },
	{ country: 'Saint Martin (French part)', value: 'MF' },
	{ country: 'Saint Pierre and Miquelon', value: 'PM' },
	{ country: 'Saint Vincent and The Grenadines', value: 'VC' },
	{ country: 'Samoa', value: 'WS' },
	{ country: 'San Marino', value: 'SM' },
	{ country: 'Sao Tome and Principe', value: 'ST' },
	{ country: 'Saudi Arabia', value: 'SA' },
	{ country: 'Senegal', value: 'SN' },
	{ country: 'Serbia', value: 'RS' },
	{ country: 'Seychelles', value: 'SC' },
	{ country: 'Sierra Leone', value: 'SL' },
	{ country: 'Singapore', value: 'SG' },
	{ country: 'Sint Maarten (Dutch part)', value: 'SX' },
	{ country: 'Slovakia', value: 'SK' },
	{ country: 'Slovenia', value: 'SI' },
	{ country: 'Solomon Islands', value: 'SB' },
	{ country: 'Somalia', value: 'SO' },
	{ country: 'South Africa', value: 'ZA' },
	{ country: 'South Georgia and The South Sandwich Islands', value: 'GS' },
	{ country: 'South Sudan', value: 'SS' },
	{ country: 'Spain', value: 'ES' },
	{ country: 'Sri Lanka', value: 'LK' },
	{ country: 'Sudan', value: 'SD' },
	{ country: 'Suriname', value: 'SR' },
	{ country: 'Svalbard and Jan Mayen', value: 'SJ' },
	{ country: 'Swaziland', value: 'SZ' },
	{ country: 'Sweden', value: 'SE' },
	{ country: 'Switzerland', value: 'CH' },
	{ country: 'Syrian Arab Republic', value: 'SY' },
	{ country: 'Taiwan', value: 'TW' },
	{ country: 'Tajikistan', value: 'TJ' },
	{ country: 'Tanzania, United Republic of', value: 'TZ' },
	{ country: 'Thailand', value: 'TH' },
	{ country: 'Timor-leste', value: 'TL' },
	{ country: 'Togo', value: 'TG' },
	{ country: 'Tokelau', value: 'TK' },
	{ country: 'Tonga', value: 'TO' },
	{ country: 'Trinidad and Tobago', value: 'TT' },
	{ country: 'Tunisia', value: 'TN' },
	{ country: 'Turkey', value: 'TR' },
	{ country: 'Turkmenistan', value: 'TM' },
	{ country: 'Turks and Caicos Islands', value: 'TC' },
	{ country: 'Tuvalu', value: 'TV' },
	{ country: 'Uganda', value: 'UG' },
	{ country: 'Ukraine', value: 'UA' },
	{ country: 'United Arab Emirates', value: 'AE' },
	{ country: 'United States Minor Outlying Islands', value: 'UM' },
	{ country: 'Uruguay', value: 'UY' },
	{ country: 'Uzbekistan', value: 'UZ' },
	{ country: 'Vanuatu', value: 'VU' },
	{ country: 'Venezuela, Bolivarian Republic of', value: 'VE' },
	{ country: 'Viet Nam', value: 'VN' },
	{ country: 'Virgin Islands, British', value: 'VG' },
	{ country: 'Virgin Islands, U.S.', value: 'VI' },
	{ country: 'Wallis and Futuna', value: 'WF' },
	{ country: 'Western Sahara', value: 'EH' },
	{ country: 'Yemen', value: 'YE' },
	{ country: 'Zambia', value: 'ZM' },
	{ country: 'Zimbabwe', value: 'ZW' }
];

var states = [
	{ state: 'Alabama', value: 'Alabama' },
	{ state: 'Alaska', value: 'Alaska' },
	{ state: 'Arizona', value: 'Arizona' },
	{ state: 'Arkansas', value: 'Arkansas' },
	{ state: 'California', value: 'California' },
	{ state: 'Colorado', value: 'Colorado' },
	{ state: 'Connecticut', value: 'Connecticut' },
	{ state: 'Delaware', value: 'Delaware' },
	{ state: 'Florida', value: 'Florida' },
	{ state: 'Georgia', value: 'Georgia' },
	{ state: 'Hawaii', value: 'Hawaii' },
	{ state: 'Idaho', value: 'Idaho' },
	{ state: 'Illinois', value: 'Illinois' },
	{ state: 'Indiana', value: 'Indiana' },
	{ state: 'Iowa', value: 'Iowa' },
	{ state: 'Kansas', value: 'Kansas' },
	{ state: 'Kentucky', value: 'Kentucky' },
	{ state: 'Louisiana', value: 'Louisiana' },
	{ state: 'Maine', value: 'Maine' },
	{ state: 'Maryland', value: 'Maryland' },
	{ state: 'Massachusetts', value: 'Massachusetts' },
	{ state: 'Michigan', value: 'Michigan' },
	{ state: 'Minnesota', value: 'Minnesota' },
	{ state: 'Mississippi', value: 'Mississippi' },
	{ state: 'Missouri', value: 'Missouri' },
	{ state: 'Montana', value: 'Montana' },
	{ state: 'Nebraska', value: 'Nebraska' },
	{ state: 'Nevada', value: 'Nevada' },
	{ state: 'New Hampshire', value: 'NewHampshire' },
	{ state: 'New Jersey', value: 'NewJersey' },
	{ state: 'New Mexico', value: 'NewMexico' },
	{ state: 'New York', value: 'NewYork' },
	{ state: 'North Carolina', value: 'NorthCarolina' },
	{ state: 'North Dakota', value: 'NorthDakota' },
	{ state: 'Ohio', value: 'Ohio' },
	{ state: 'Oklahoma', value: 'Oklahoma' },
	{ state: 'Oregon', value: 'Oregon' },
	{ state: 'Pennsylvania', value: 'Pennsylvania' },
	{ state: 'Rhode Island', value: 'RhodeIsland' },
	{ state: 'South Carolina', value: 'SouthCarolina' },
	{ state: 'South Dakota', value: 'SouthDakota' },
	{ state: 'Tennessee', value: 'Tennessee' },
	{ state: 'Texas', value: 'Texas' },
	{ state: 'Utah', value: 'Utah' },
	{ state: 'Vermont', value: 'Vermont' },
	{ state: 'Virginia', value: 'Virginia' },
	{ state: 'Washington', value: 'Washington' },
	{ state: 'West Virginia', value: 'WestVirginia' },
	{ state: 'Wisconsin', value: 'Wisconsin' },
	{ state: 'Wyoming', value: 'Wyoming' },
	{ state: 'District of Columbia', value: 'DistrictOfColumbia' },
	{ state: 'American Samoa', value: 'AmericanSamoa' },
	{ state: 'Guam', value: 'Guam' },
	{ state: 'Northern Mariana Islands', value: 'NorthernMarianaIslands' },
	{ state: 'Puerto Rico', value: 'PuertoRico' },
	{ state: 'United States Minor Outlying Islands', value: 'UnitedStatesMinorOutlyingIslands' },
	{ state: 'Virgin Islands', value: 'VirginIslands' }
];

var linkovi = [
	'https://onboarding.qa.sleepio.com/google'
];
var i = 0;
describe('Flow 113', () => {
	console.log(linkovi[i]);
	it('Start the test', () => {
	
		for (; i < linkovi.length; i++) {
			const home = new HomePage();
			const homePage = new homePageNew();
			homePage.visitFirstPage(linkovi[i]);
			cy.get('.sl-order-2 > .sl-button').click({ force: true });

			//organization_id
			cy.window().its('organization_id').should('equal', '64')
			
			const troubledInGeneralNewQuestion = new troubledInGeneralNew();
			troubledInGeneralNewQuestion.troubledGeneralTitle();
			troubledInGeneralNewQuestion.little();
			troubledInGeneralNewQuestion.somewhat();
			troubledInGeneralNewQuestion.much();
			troubledInGeneralNewQuestion.veryMuch();
			troubledInGeneralNewQuestion.notAtAll();
			home.buttonClick();

		
			const manyNightsQuestion = new manyNights();
			manyNightsQuestion.manyNightsTitle();
			manyNightsQuestion.night0();
			manyNightsQuestion.night1();
			manyNightsQuestion.night2();
			manyNightsQuestion.night3();
			manyNightsQuestion.night4();
			manyNightsQuestion.night5();
			manyNightsQuestion.night6();
			manyNightsQuestion.night7();
			home.buttonClick();

		
			const stillProblemQuestion = new stillProblem();
			stillProblemQuestion.stillProblemTitle();
			stillProblemQuestion.yes();
			stillProblemQuestion.no();
			home.buttonClick();

			const stopsYouQuestion = new stopsYou();
			stopsYouQuestion.stopsYouTitle();
			stopsYouQuestion.worriesFuture();
			stopsYouQuestion.worriesNotSleeping();
			stopsYouQuestion.discomfort();
			stopsYouQuestion.noise();
			stopsYouQuestion.light();
			home.buttonClick();

			const howLongQuestion = new howLong();
			howLongQuestion.howLongTitle();
			howLongQuestion.weeks();
			howLongQuestion.months();
			howLongQuestion.years();
			howLongQuestion.moreYears();
			howLongQuestion.weekOrLess();
			howLongQuestion.month();
			howLongQuestion.sevenMonths();
			howLongQuestion.fiveYears();
			howLongQuestion.sixYears();
			home.buttonClick();

		
			const howLikelyNewQuestion = new howLikelyNew();
			howLikelyNewQuestion.howLikelyTitle();
			howLikelyNewQuestion.noChance();
			howLikelyNewQuestion.slightChance();
			howLikelyNewQuestion.moderatChance();
			howLikelyNewQuestion.highChance();
			home.buttonClick();
		
			const snoringQuestion = new snoring();
			snoringQuestion.snoringTitle();
			snoringQuestion.no();
			snoringQuestion.yes();
			snoringQuestion.dontsnore();
			home.buttonClick();
			
			const breathingQuestion = new breathing();
			breathingQuestion.breathingTitle();
			breathingQuestion.no();
			breathingQuestion.yes();
			home.buttonClick();
		
			const improveYourSleepQuestion = new improveYourSleep();
			improveYourSleepQuestion.improveSleepTitle();
			improveYourSleepQuestion.sleepMoreEasily();
			improveYourSleepQuestion.withoutWakingUp();
			improveYourSleepQuestion.wakingTooEarly();
			improveYourSleepQuestion.wakeUpRefreshed();
			improveYourSleepQuestion.noneOfTheAbove();
			home.buttonClick();

		
			const expertGuidesQuestion = new expertGuides();
			expertGuidesQuestion.jetlag();
			expertGuidesQuestion.shiftWork();
			expertGuidesQuestion.parent();
			expertGuidesQuestion.none();
			expertGuidesQuestion.pregnancy();
			home.buttonClick();

			
			const genderQuestion = new gender();
			genderQuestion.genderTitle();
			genderQuestion.male()
			genderQuestion.female()
			genderQuestion.another()
			home.buttonClick(); 

		
			const dobQuestion = new dob();
			dobQuestion.dobTitle();
			dobQuestion.monthJan();
			dobQuestion.monthFeb();
			dobQuestion.day1();
			dobQuestion.day2();
			dobQuestion.year1991();
			dobQuestion.year1997();
			dobQuestion.postAnswer();
			dobQuestion.privacy();
            home.buttonClick();
            
            const followingQuestion = new following();
            followingQuestion.followingTitle();
            followingQuestion.googler();
            followingQuestion.alphabet();
            followingQuestion.googleAlphabet();
            home.buttonClick();

            const countryLocatedQuestion = new countryLocated();
            countryLocatedQuestion.countryLocatedTitle();
            countryLocatedQuestion.unitedStates();
            countryLocatedQuestion.unitedKingdom();
            countryLocatedQuestion.italy();

            for (var p = 0; p < countryes.length; p++) {
                countryLocatedQuestion.checkinhEveryOption(countryes[p].country, countryes[p].value);
            }
            home.buttonClick();
            const stateGoogle = new stateWork();
            stateGoogle.stateWorkTitle();
            for (var p = 0; p < states.length; p++) {
                stateGoogle.checkinhEveryOptionGoogle(states[p].state, states[p].value);
			}
			home.buttonClick();

			const googlEid = new googleEID();
			googlEid.googleEIDTitle();
			googlEid.googleEIDPostQuestion();
			googlEid.googleEIDAnswer();
			home.buttonClick();
			//is_covered_by_company_insurance googleCompanyInsurance
			const googleInsurance = new googleCompanyInsurance;
			googleInsurance.googleCompanyInsuranceTitle();
			googleInsurance.googleCompanyInsuranceYes();
			googleInsurance.googleCompanyInsuranceNo();
			home.buttonClick();
			
			const signUp = new SignUp();

			signUp.signUpHeader();
			signUp.firstNameLabel();
			signUp.firstNameImput();
			signUp.lastNameLabel();
			signUp.lastNameImput();
			signUp.emailLabel();
			signUp.emailInput()
			signUp.passwordLabel();
			signUp.passwordInput();
			signUp.passwordHint();
			signUp.doctorLabel();
			signUp.suitable();
			signUp.checkBoxes();
			signUp.privacy();
			signUp.terms();

			signUp.signUpButton();
			cy.wait(7000);

			const report = new flow1SleepReport();
			cy.wait(3000);
			report.headerSleepReport();
			report.logOut();

			cy.get( '.dark-blue-bg > div > .sl-button' ).click( { force: true } );
			
			const eligibility = new flow76Eligibility();
			cy.wait(3000);
			eligibility.coverage();
			eligibility.firstNameLabel();
			eligibility.firstName();
			cy.visit('https://onboarding.qa.sleepio.com/sleepio/google/113#6/1');

			const lst2 = new flow1Lst2();
			lst2.tryGoSleepNew();
			lst2.getIntoBadNew();
			lst2.tryGoSleepLabel();
			lst2.fallAsleepLabel();
			lst2.duringNightWakeNew();
			lst2.duringNightWakeLabel();
			lst2.awakeDuringNightNew();
			lst2.awakeDuringNightLabel();
			lst2.wakeLastTimeNew();
			lst2.DuringNightLabel();
			lst2.intendedWakeUpNew();
			lst2.intendedWakeUpLabel();
			lst2.getOutBedNew();
			lst2.getOutBedLabel();
			lst2.qualitySleepNew();
			lst2.qualitySleepLabel();
			lst2.qualityNew();
			home.buttonClick();
			
			const lst4 = new flow1Lst4();
			lst4.comfortablePositionNever();
			lst4.comfortablePositionRarely();
			lst4.comfortablePositionSometimes();
			lst4.comfortablePositionOften();
			lst4.comfortablePositionVeryOften();
			lst4.relaxMyBody();
			lst4.relaxMyBodyNever();
			lst4.relaxMyBodyRarely();
			lst4.relaxMyBodySometimes();
			lst4.relaxMyBodyOften();
			lst4.relaxMyBodyVeryOften();
			lst4.hardSleep();
			lst4.hardSleepNeverNew();
			lst4.hardSleepRarelyNew();
			lst4.hardSleepSometimesNew();
			lst4.hardSleepOftenNew();
			lst4.hardSleepVeryOftenNew();
			lst4.feelTired();
			lst4.feelTiredNeverNew();
			lst4.feelTiredRarelyNew();
			lst4.feelTiredSometimesNew();
			lst4.feelTiredOftenNew();
			lst4.feelTiredVeryOftenNew();
			lst4.worriesNever();
			lst4.worriesRarely();
			lst4.worriesSometimes();
			lst4.worriesOften();
			lst4.worriesVeryOften();
			home.buttonClick();

			const lst3 = new flow1Lst3();
			lst3.abilityStayAwake();
			lst3.abilityStayAwakeNot();
			lst3.abilityStayAwakeLitle();
			lst3.abilityStayAwakeSomewhat();
			lst3.abilityStayAwakeMuch();
			lst3.abilityStayAwakeVeryMuch();
			lst3.affectedRelationships();
			lst3.affectedRelationshipsNotNew();
			lst3.affectedRelationshipsLitleNew();
			lst3.affectedRelationshipsSomewhatNew();
			lst3.affectedRelationshipsMuchNew();
			lst3.affectedRelationshipsVeryMuchNew();
			home.buttonClick();

			const lst5 = new flow1Lst5();
			lst5.happenedTodayNew();
			lst5.happenedTodayAnsweNeverNew();
			lst5.happenedTodayAnsweSometimesNew();
			lst5.happenedTodayAnsweVeryOftenNew();
			lst5.controlSleepNew();
			lst5.controlSleepAnswerNeverNew();
			lst5.controlSleepAnswerSometimesNew();
			lst5.controlSleepAnswerVeryOftenNew();
			lst5.hearOutsideNew();
			lst5.hearOutsideNeverNew();
			lst5.hearOutsideSometimesNew();
			lst5.hearOutsideVeryOftenNew();
			lst5.future();
			lst5.futureNever();
			lst5.futureSometimes();
			lst5.futureVeryOften();
			lst5.lyingAwake();
			lst5.lyingAwakeNeverNew();
			lst5.lyingAwakeSometimesNew();
			lst5.lyingAwakeVeryOftenNew();
			lst5.sleepTonightNew();
			lst5.sleepTonightNeverNew();
			lst5.sleepTonightSometimesNew();
			lst5.sleepTonightVeryOftenNew();
			home.buttonClick();
			
			const lstpills = new perscription();
			lstpills.perscriptionTitle();
			lstpills.prescriptionPills();
			lstpills.prescriptionPillsNo();
			lstpills.prescriptionPillsTake();
			lstpills.prescriptionPillsMostNights();
			lstpills.nonPrescriptionPills();
			lstpills.nonPrescriptionPillsNo();
			lstpills.nonPrescriptionPillsTake();
			lstpills.nonPrescriptionPillsMostNights();
			home.buttonClick();

			const lst6 = new flow1Lst6();
			lst6.littleInterest();
			lst6.littleInterestNot();
			lst6.littleInterestSeveral();
			lst6.littleInterestMore();
			lst6.littleInterestNearly();
			lst6.feelingDepressed();
			lst6.feelingDepressedNot();
			lst6.feelingDepressedSeveral();
			lst6.feelingDepressedMore();
			lst6.feelingDepressedNearly();
			lst6.feelingAnxious();
			lst6.feelingAnxiousNot();
			lst6.feelingAnxiousSeveral();
			lst6.feelingAnxiousMore();
			lst6.feelingAnxiousNearly();
			lst6.controlWorrying();
			lst6.controlWorryingNotNew();
			lst6.controlWorryingSeveralNew();
			lst6.controlWorryingMoreNew();
			lst6.controlWorryingNearlyNew();
			lst6.unableToControl();
			lst6.unableToControlAnswers();
			lst6.yourHealthIs();
			lst6.yourHealthIsAnswers();
			lst6.overweight();
			lst6.overweightNo();
			lst6.overweightYes();
			lst6.areYouPregnantTitle();
			lst6.areYouPregnantYes();
			lst6.areYouPregnantNo();
			lst6.diagnosedTitle()
			lst6.diagnosedYes();
			lst6.diagnosedNo();
			home.buttonClick();
		
			const lst7 = new flow1Lst7();
			lst7.exercise();
			lst7.regularlyExerciseAnswers();
			lst7.nicotine();
			lst7.nicotineAnswers();
			lst7.drinkAlcoholNew();
			lst7.drinkAlcoholAnswers();
			lst7.disruptedChildren();
			lst7.disruptedChildrenAnswers();
			lst7.shiftWorker();
			lst7.shiftWorkerNo();
			lst7.shiftWorkerYes();
			lst7.highRiskTitle()
			lst7.highRiskYes();
			lst7.highRisktNo();
			lst7.employmentStatus();
			lst7.employmentStatusAnswers();
			lst7.affectProductivity();
			lst7.affectProductivityAnswers();
			lst7.hoursMissed();
			lst7.hoursMissedAnswer();
			lst7.disruptedPartner();
			lst7.disruptedPartnerAnswers();
			home.buttonClick();
			
			const lst8 = new flow1Lst8();
			lst8.communityUsername();
			lst8.communityUsernameAnswer();
			home.buttonClick();
		}
	});
});
