describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Sadece Firstname boş bırak,kontrol et", function () {
    cy.get("[data-cy=input-lastname]").type("bayrak");
    cy.get("[data-cy=input-name]").type("sevval");
    cy.get("[data-cy=input-name]").clear();
    cy.get("[data-cy=email-input]").type("svvlerdenk@gmail.com");
    cy.get("[data-cy=input-pass]").type("password");
    cy.get("[data-cy=input-terms]").check();
    cy.get("[data-cy=input-submit]").click({ force: true });
  });
});

it("Sadece email boş bırak,kontrol et", function () {
  cy.get("[data-cy=input-lastname]").type("bayrak");
  cy.get("[data-cy=input-name]").type("sevval");
  cy.get("[data-cy=email-input]").type("svvlerdenk@gmail.com");
  cy.get("[data-cy=email-input]").clear();
  cy.get("[data-cy=input-pass]").type("password");
  cy.get("[data-cy=input-terms]").check();
  cy.get("[data-cy=input-submit]").click({ force: true });
});
it("Sadece lastname boş bırak,kontrol et", function () {
  cy.get("[data-cy=input-lastname]").type("bayrak");
  cy.get("[data-cy=input-name]").type("sevval");
  cy.get("[data-cy=email-input]").type("svvlerdenk@gmail.com");
  cy.get("[data-cy=input-lastname]").clear();
  cy.get("[data-cy=input-pass]").type("password");
  cy.get("[data-cy=input-terms]").check();
  cy.get("[data-cy=input-submit]").click({ force: true });

  it("Sadece password boş bırak,kontrol et", function () {
    cy.get("[data-cy=input-lastname]").type("bayrak");
    cy.get("[data-cy=input-name]").type("sevval");
    cy.get("[data-cy=email-input]").type("svvlerdenk@gmail.com");
    cy.get("[data-cy=input-pass]").clear();
    cy.get("[data-cy=input-pass]").type("password");
    cy.get("[data-cy=input-terms]").check();
    cy.get("[data-cy=input-submit]").click({ force: true });
  });

  it("Sadece gönder butonuna tıklama,kontrol et", function () {
    cy.get("[data-cy=input-lastname]").type("bayrak");
    cy.get("[data-cy=input-name]").type("sevval");
    cy.get("[data-cy=email-input]").type("svvlerdenk@gmail.com");
    cy.get("[data-cy=input-pass]").clear();
    cy.get("[data-cy=input-pass]").type("password");
    cy.get("[data-cy=input-terms]").check();
    cy.get("[data-cy=input-submit]").click();
  });
});
