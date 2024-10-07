Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

const devices = ["desktop", "ipad-mini", "iphone-6"];

devices.forEach((viewport) => {
  describe(`[ Frontend ServRest ] - ${viewport}`, () => {

    beforeEach(() => {
      // callback function to execute before each test
      if (viewport != "desktop") {
        cy.viewport(viewport);
        cy.log(viewport);
      }
    });
    // afterEach(() => {
    //callback function to execute after each test
    //   cy.injectAxe();
    //   cy.checkA11y();
    // })

    it("Login with successfully", () => {
      cy.fixture("massa-valida").then((data) => {
        cy.log(data.email);
        cy.log(data.password);
        cy.login_success(data.email, data.password);
        cy.contains('h1','Serverest Store').should('be.visible');
      });
    });
    
    it("Login with invalid email", () => {
      cy.fixture("massa-email-invalida").then((data) => {
        cy.log(data.email);
        cy.log(data.password);
        cy.login_error(data.email, data.password);
        cy.contains('span','Email e/ou senha inválidos').should('be.visible');
      });
    });
    it("Login with invalid password", () => {
      cy.fixture("massa-password-invalida").then((data) => {
        cy.log(data.email);
        cy.log(data.password);
        cy.login_error(data.email, data.password);
        cy.contains('span','Email e/ou senha inválidos').should('be.visible');
      });
    });
    
  })



})
