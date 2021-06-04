// <reference types="Cypress" />

// describe("test login page", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:8080/login");
//   });
//   it("should fill login form and redirect to homepage", () => {
//     // Fill the username
//     cy.get('[data-cy="email"]')
//       .type("mohamed@instabug.com")
//       .should("have.value", "mohamed@instabug.com");

//     // Fill the password
//     cy.get('[data-cy="password"]')
//       .type("A12345678")
//       .should("have.value", "A12345678");

//     // Locate and submit the form
//     cy.get("#submit_btn").click();

//     // Verify the app redirected you to the homepage
//     cy.location("pathname", { timeout: 10000 }).should("eq", "/welcome");
//   });
// });
