describe("Testing live game", () => {
  describe("app component", () => {
    it("login", () => {
      cy.visit("");
      cy.get("h1").contains("Memory Game - Flags of the World");
      cy.get("label").contains("Name");
      cy.get('input[type="name"]').type("Pope");
      cy.get("button").contains("Submit").click();
      cy.get("h2").contains("Can you rememeber where the flags are?");
      cy.get("h3").contains("Pope");
      cy.get("div").its("length").should("eq", 26);
    });
  });
});
