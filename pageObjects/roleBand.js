class roleBand {
	roleBandTitle() {
		return cy.get('.sl-page-title').should('contain', 'Select your role band');
	}

	band2() {
		return cy.get('[id="options-id-0"]').click({ force: true });
	}

	band3() {
		return cy.get('[id="options-id-1"]').click({ force: true });
	}
	band4() {
		return cy.get('[id="options-id-2"]').click({ force: true });
	}
	band5() {
		return cy.get('[id="options-id-3"]').click({ force: true });
	}
	band6() {
		return cy.get('[id="options-id-4"]').click({ force: true });
	}
	band7() {
		return cy.get('[id="options-id-5"]').click({ force: true });
	}
	band8a() {
		return cy.get('[id="options-id-6"]').click({ force: true });
	}
	band8b() {
		return cy.get('[id="options-id-7"]').click({ force: true });
	}
	band8c() {
		return cy.get('[id="options-id-8"]').click({ force: true });
	}
	band8d() {
		return cy.get('[id="options-id-9"]').click({ force: true });
	}
	band9() {
		return cy.get('[id="options-id-10"]').click({ force: true });
	}
	vsm() {
		return cy.get('[id="options-id-11"]').click({ force: true });
	}
	contracted() {
		return cy.get('[id="options-id-12"]').click({ force: true });
	}
}

export default roleBand;
