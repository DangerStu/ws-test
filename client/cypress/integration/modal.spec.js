context("Test the Modal", () => {
	beforeEach(() => {
		cy.visit("http://localhost:8080");
	});

	it("no modal to start", () => {
		// no modal to start
		cy.get("#modal-details").should("not.exist");
	});

	it("open first modal", () => {
		// no modal to start
		cy.get("#modal-details").should("not.exist");

		// click on the first hero image
		cy.get(".hero-wrapper > img")
			.first()
			.click();

		// modal should be there
		cy.get("#modal-details");
	});

	it("the name should be 'Plush Arm Sofa' ", () => {
		// no modal to start
		cy.get("#modal-details").should("not.exist");

		// click on the first hero image
		cy.get(".hero-wrapper > img")
			.first()
			.click();

		// modal should be there
		cy.get("#modal-details");

		// modal should have "Plush Arm Sofa"
		cy.get("#modal-details").contains("Plush Arm Sofa");
	});

	it("can close the modal", () => {
		// no modal to start
		cy.get("#modal-details").should("not.exist");

		// click on the first hero image
		cy.get(".hero-wrapper > img")
			.first()
			.click();

		// modal should be there
		cy.get("#modal-details");

		// modal should have "Plush Arm Sofa"
		cy.get("#modal-details")
			.find("button")
			.click();

		// no modal
		cy.get("#modal-details").should("not.exist");
	});
});
