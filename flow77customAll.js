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
import improvmentProgram from '../integration/pageObjects/improvmentProgram';
import bestReflects from '../integration/pageObjects/bestReflects';
import following from '../integration/pageObjects/following';
import countryLocated from '../integration/pageObjects/countryLocated';
import stateWork from '../integration/pageObjects/stateWork';
import workForComcast from '../integration/pageObjects/workForComcast';
import workForSalesforce from '../integration/pageObjects/workForSalesforce';
import nhsAccess from '../integration/pageObjects/nhsAccess';
import eyexecutive from '../integration/pageObjects/eyexecutive';
import eyUpn from '../integration/pageObjects/eyUpn';
import fujifilmId from '../integration/pageObjects/fujifilmId';
import bjcId from '../integration/pageObjects/bjcId';
import threeMId from '../integration/pageObjects/3mId';
import tmNumber from '../integration/pageObjects/tmNumber';
import nhsScotlandPostcode from '../integration/pageObjects/nhsScotlandPostcode';
import nhsSelectFunction from '../integration/pageObjects/nhsSelectFunction';

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

var salesforceStates = [
	{ state: "I don't work for Salesforce", value: 'notSalesforce' },
	{ state: 'Argentina', value: 'argentina' },
	{ state: 'Australia', value: 'australia' },
	{ state: 'Belgium', value: 'belgium' },
	{ state: 'Brazil', value: 'brazil' },
	{ state: 'Canada', value: 'canada' },
	{ state: 'Denmark', value: 'denmark' },
	{ state: 'Finland', value: 'finland' },
	{ state: 'France', value: 'france' },
	{ state: 'Germany', value: 'germany' },
	{ state: 'Hong Kong', value: 'hongKong' },
	{ state: 'India', value: 'india' },
	{ state: 'Ireland', value: 'ireland' },
	{ state: 'Israel', value: 'israel' },
	{ state: 'Italy', value: 'italy' },
	{ state: 'Japan', value: 'japan' },
	{ state: 'Korea', value: 'korea' },
	{ state: 'Mexico', value: 'mexico' },
	{ state: 'Morocco', value: 'morocco' },
	{ state: 'Norway', value: 'norway' },
	{ state: 'The Netherlands', value: 'theNetherlands' },
	{ state: 'New Zealand', value: 'newZealand' },
	{ state: 'Singapore', value: 'singapore' },
	{ state: 'Spain', value: 'spain' },
	{ state: 'Sweden', value: 'sweden' },
	{ state: 'Switzerland', value: 'switzerland' },
	{ state: 'United Kingdom', value: 'uk' },
	{ state: 'United States', value: 'unitedStates' }
];

var linkovi = [
	'https://onboarding.qa.sleepio.com/sleepio/eyexecutive',
	'https://onboarding.qa.sleepio.com/sleepio/google',
	'https://onboarding.qa.sleepio.com/sleepio/comcast',
	'https://onboarding.qa.sleepio.com/sleepio/salesforce',
	'https://onboarding.qa.sleepio.com/sleepio/nhs-staff',
	'https://onboarding.qa.sleepio.com/sleepio/healthandcare-scot'
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
			cy.get('.sl-order-2 > .sl-button').click({ force: true });

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

			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/google/77#2/5') {
					const improvment = new improvmentProgram();

					improvment.improvmentProgramTitle();
					improvment.notReady();
					improvment.undecided();
					improvment.ready();
					home.buttonClick();

					const reflects = new bestReflects();
					reflects.bestReflectsTitle();
					reflects.noPoint();
					reflects.thinking();
					reflects.readyToWork();

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

					const follow = new following();

					follow.followingTitle();
					follow.googler();
					follow.alphabet();
					follow.googleAlphabet();
					home.buttonClick();

					const country = new countryLocated();

					country.countryLocatedTitle();
					country.unitedStates();
					country.unitedKingdom();
					country.italy();

					for (var p = 0; p < countryes.length; p++) {
						country.checkinhEveryOption(countryes[p].country, countryes[p].value);
					}

					home.buttonClick();

					const stateGoogle = new stateWork();

					stateGoogle.stateWorkTitle();

					for (var p = 0; p < states.length; p++) {
						stateGoogle.checkinhEveryOptionGoogle(states[p].state, states[p].value);
					}

					home.buttonClick();
				}
			});

			cy.url().then((urlString) => {
				if (urlString != 'https://onboarding.qa.sleepio.com/sleepio/google/77#3/1') {
					const neki5 = new howLikelyNew();

					neki5.howLikelyTitle();
					neki5.noChance();
					neki5.highChance();
					home.buttonClick();

					const neki3 = new snoring();

					neki3.snoringTitle();
					neki3.yes();
					neki3.dontsnore();
					home.buttonClick();

					const neki4 = new breathing();

					neki4.breathingTitle();
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

					neki9.dobTitle();
					neki9.monthJan();
					neki9.monthFeb();
					neki9.day1();
					neki9.day2();
					neki9.year1991();
					neki9.year1997();
					home.buttonClick();
				}
			});
			cy.url().then((urlString) => {
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/comcast/77#2/12') {
					const workComcast = new workForComcast();
					workComcast.workForComcastTitle();
					workComcast.usa();
					workComcast.uk();
					workComcast.dontWorkComcast();
				}

				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/salesforce/77#2/12') {
					const workSalesforce = new workForSalesforce();
					workSalesforce.workForSalesforceTitle();

					for (var p = 0; p < salesforceStates.length; p++) {
						workSalesforce.checkinhEveryOptionSalesForce(
							salesforceStates[p].state,
							salesforceStates[p].value
						);
					}
				}

				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/nhs-staff/77#2/12') {
					const nhs = new nhsAccess();
					nhs.nhsAccessTitle();
					nhs.nhsAccessAnswer();
				}

				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/eyexecutive/77#3/1') {
					const eyeExecut = new eyexecutive();
					eyeExecut.eyexecutiveTitle();
					eyeExecut.eyexecutiveHeltText();
					eyeExecut.eyexecutiveAnswer({ force: true });

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/ey/77#3/1');

					const ey = new eyUpn();
					ey.eyUpnTitle();
					ey.eyUpnHelpText();
					ey.eyUpnAnswer();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/fujifilm/77#3/1');

					const fujifilm = new fujifilmId();
					fujifilm.fujifilmIdTitle();
					fujifilm.fujifilmIdHelpText();
					fujifilm.fujifilmIdAnswer();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/bjc/77#3/1');

					const bjc = new bjcId();
					bjc.bjcTitle();
					bjc.bjcIdHelpText();
					bjc.bjcIdAnswer();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/3m/77#3/1');
					const threeM = new threeMId();
					threeM.threeMTitle();
					threeM.threeMHelpText();
					threeM.threeMAnswer();

					cy.visit('https://onboarding.qa.sleepio.com/sleepio/target/77#3/1');

					const tmNum = new tmNumber();
					tmNum.tmNumberTitle();
					tmNum.tmNumberHelpText();
					tmNum.tmNumberAnswer();
				}
				if (urlString == 'https://onboarding.qa.sleepio.com/sleepio/healthandcare-scot/77#2/12') {
					const nhsScotPostcode = new nhsScotlandPostcode();
					nhsScotPostcode.nhsScotPostcodeTitle();
					nhsScotPostcode.nhsScotPostcodeAnswer();
					home.buttonClick();

					const nhsFunction = new nhsSelectFunction();
					nhsFunction.nhsSelectFunctionTitle();
					nhsFunction.nhs();
					nhsFunction.socialCare();
					nhsFunction.thirdsector();
					nhsFunction.publicSector();
					nhsFunction.other();
				}
			});

			cy.clearCookies();
			cy.clearLocalStorage();
		}
	});
});
