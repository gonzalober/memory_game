describe("Testing start a new game", () => {
  describe("landing page", () => {
    it("login", () => {
      cy.visit("");
      cy.get("h1").contains("Memory Game - Flags of the World");
      cy.get("label").contains("Name");
      cy.get('input[type="name"]').type("Pope");
      cy.get("button").contains("PLAY!!!").click();
    });
  });
});
