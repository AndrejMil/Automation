describe('Capture browser network traffic', function() {
	context('Login functionality', () => {
		it('Dscro should be able to login', () => {
			cy.visit('https://onboarding.sleepio.com/sleepio/big-health#1/1');
			cy
				.request(
					'https://onboarding.qa.sleepio.com/api/service_method_proxy/Flow/1/find_full_flow_with_id?slug=big-health&product_slug=sleepio'
				)
				.then((response) => {
					expect(response.status).to.eq(200);
					expect(response).to.have.property('headers');
					expect(response).to.have.property('status');
					const a = cy.get(response.status);
				});
		});
	});
});
