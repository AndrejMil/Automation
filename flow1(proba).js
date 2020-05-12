import HomePage from '../integration/pageObjects/homePage';
import improveYourSleep from '../integration/pageObjects/improveYourSleep';
import howLong from '../integration/pageObjects/howLong';
import stopsYou from '../integration/pageObjects/stopsYou';
import troubledInGeneral from '../integration/pageObjects/troubledInGeneral';

describe('Proba', () => {
	beforeEach(() => {
		cy.server();
		cy
			.route({
				method   : 'GET',
				url      :
					'https://onboarding.qa.sleepio.com/api/service_method_proxy/Flow/1/find_full_flow_with_id?slug=big-health&product_slug=sleepio',
				response : '{"status": 200, "result": {"organization_id"}}'
			})
			.as('findfullflowwithid');
	});

	it('Start the test', () => {
		// Get started page
		cy.get('@findfullflowwithid');
		const homePage = new HomePage();

		homePage.visitFirstPage();
		homePage.buttonClick().click();

		// First page of OST
		const firstofOst = new improveYourSleep();

		cy.screenshot();
		firstofOst.improveSleepTitle();
		firstofOst.sleepMoreEasily();
		firstofOst.withoutWakingUp();
		firstofOst.wakingTooEarly();
		firstofOst.wakeUpRefreshed();
		firstofOst.noneOfTheAbove();
		homePage.buttonClick().click();

		// Second page of OST

		const secondOfOst = new howLong();

		cy.screenshot();
		secondOfOst.howLongTitle();
		secondOfOst.weeks();
		secondOfOst.months();
		secondOfOst.years();
		secondOfOst.moreYears();
		secondOfOst.dontHaveProblem();
		homePage.buttonClick().click();

		// Third page of OST

		const thirdOfOst = new stopsYou();

		cy.screenshot();
		thirdOfOst.stopsYouTitle();
		thirdOfOst.worriesFuture();
		thirdOfOst.worriesNotSleeping();
		thirdOfOst.discomfort();
		thirdOfOst.noise();
		thirdOfOst.light();
		homePage.buttonClick().click();

		// Fourth page of OST

		const fourthdOfOst = new troubledInGeneral();

		cy.screenshot();
		fourthdOfOst.little();
		fourthdOfOst.somewhat();
		fourthdOfOst.much();
		fourthdOfOst.veryMuch();
		fourthdOfOst.notAtAll();
		homePage.buttonClick().click();
	});
});
