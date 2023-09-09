describe("Homepage Spec", () => {
  before(() => {
    cy.visit("http://localhost:5173");
  });

  it("Navigates from homepage to client page", () => {
    cy.get("button").first().click();

    cy.get("h1").contains("Client Details");

    cy.get("h3").contains("Client History");

    cy.url().should("include", "/client");
  });
});
