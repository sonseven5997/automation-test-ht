const { faker } = require("@faker-js/faker");

const company = faker.company.companyName();
describe("login", () => {
  beforeEach(() => {
    cy.visit("https://app-happytime-staging.rework.vn");

    //login
    cy.get("#phone").type("0947981324");
    cy.get("#password").type("123123");
    cy.get("button[type=submit]").click();

    //create workspace
    cy.get("#root > section > main > div > div.px-24 > button > span").click({
      timeout: 1000,
    });
    cy.get("#name").type(company);
    cy.get("button[type=submit]").click();

    //to workspace
    cy.contains(company).click();
  });

  it("create shift", () => {});
});
