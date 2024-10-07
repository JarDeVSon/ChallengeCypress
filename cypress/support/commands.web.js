
import registration from '../selectors/login.sel.cy.js'

Cypress.Commands.add('login_success', (email, password) => { 
    cy.visit('https://front.serverest.dev/login');
    cy.get(registration.fields.inputEmail).type(email,{force: true});
    cy.get(registration.fields.inputPassword).type(password,{force: true});
    cy.get(registration.buttons.btnEntrar).click({force: true});
 })

 Cypress.Commands.add('login_error', (email, password) => { 
    cy.visit('https://front.serverest.dev/login');
    cy.get(registration.fields.inputEmail).type(email,{force: true});
    cy.get(registration.fields.inputPassword).type(password,{force: true});
    cy.get(registration.buttons.btnEntrar).click({force: true});
 })
