describe('Edit a transport plan is already ok', () => {
	beforeEach(() => {
		cy.server();
		cy
			.route({
				method   : 'POST',
				url      : 'https://onboarding.qa.sleepio.com/api/service_method_proxy/RecordingAPI/2/post_events',
				response : '{"status": 200, "result": {}}'
			})
			.as('filterTransportPlan');
	});
	it('Start the test', () => {
		//waited then i access the first page and the stub xhr start to work
		Cypress.on('window:before:load', (win) => {
			win.fetch = null;
		});
		cy.visit('https://onboarding.qa.sleepio.com/sleepio/big-health#1/1');
		cy.wait(5000);
		cy.wait('@filterTransportPlan', { timeout: 15000 });
	});
});
