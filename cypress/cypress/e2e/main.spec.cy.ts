describe("template spec", () => {
  it("passes", () => {
    cy.visit("baseUrl");
    const button = cy.get('[data-cy="count"]');
    button.click();
    button.should("exist").should("contain", "1");

    const hello = cy.get('[data-cy="hello"]');
    hello.should("exist").contains("Hello World!");
  });
});
