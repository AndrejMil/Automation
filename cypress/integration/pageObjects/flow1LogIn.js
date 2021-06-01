class flow1LogIn {
	logIn() {
		cy.get('.sl-header__login').click().then(() => {
			cy.get('.sl-login--field-label').should('contain', 'Email address').then(() => {
				cy.xpath('/html/body/div[1]/div/header/div/div/div[1]/div/div/form/div[1]/input').type('E').then(() => {
					cy.get('.sl-login--field-label').should('contain', 'Password').then(() => {
						cy
							.xpath('/html/body/div[1]/div/header/div/div/div[1]/div/div/form/div[2]/input')
							.type('P')
							.then(() => {
								cy
									.xpath('/html/body/div[1]/div/header/div/div/div[1]/div/div/form/a')
									.contains('Forgotten your password?')
									.should('have.attr', 'href', '/sleepio/forgot-password')
									.then(() => {
										cy
											.xpath('/html/body/div[1]/div/header/div/div/div[1]/div/div/div/a[1]')
											.contains('with Google')
											.then(() => {
												cy
													.xpath(
														'/html/body/div[1]/div/header/div/div/div[1]/div/div/div/a[2]'
													)
													.contains('with Facebook')
													.then(() => {
														cy
															.xpath(
																'/html/body/div[1]/div/header/div/div/div[1]/div/div/div/a[3]'
															)
															.contains('with Virgin Pulse')
															.then(() => {
																cy.get('.sl-header__login').click();
															});
													});
											});
									});
							});
					});
				});
			});
		});
	}
}

export default flow1LogIn;
