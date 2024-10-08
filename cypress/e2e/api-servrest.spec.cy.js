Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

import { faker } from '@faker-js/faker';
const data = require('../fixtures/massa-api.json')

describe("ServRest API Testing using Cypress API Plugin - ", () => {
  const randomName = faker.name.fullName();// Rowan Nikolausz
  const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

  it("GET All User", () => {
    cy.get_all_users().should((response) => {
      expect(response.status).equal(200);
      return response;
    });
  });

  it("GET User By Name", () => {
    cy.get_users_by_name('Fulano da Silva').should((response) => {
      expect(response.status).equal(200);
      return response;
    });
  });

  it("POST - Users with Fakerjs ", () => {
    cy.post_user_faker_js(randomName, randomEmail, 'teste', 'true').should((response) => {
      expect(response.status).equal(201);
      const userId = response.body._id
      expect(response.body.message).equal("Cadastro realizado com sucesso");
      expect(response.body).have.property('message', "Cadastro realizado com sucesso");
      return userId;
    });
  });

  it("POST - Users with Fixtures [0]", () => {
    cy.post_user(data.usuario1).should((response) => {
      expect(response.status).equal(201);
      const userId = response.body._id
      expect(response.body.message).equal("Cadastro realizado com sucesso");
      expect(response.body).have.property('message', "Cadastro realizado com sucesso");
      return userId;
    });
  });

  it("POST - Users with Fixtures [1]", () => {
    cy.post_user(data.usuario2).should((response) => {
      expect(response.status).equal(201);
      const userId = response.body._id
      expect(response.body.message).equal("Cadastro realizado com sucesso");
      expect(response.body).have.property('message', "Cadastro realizado com sucesso");
      return userId;
    });
  });


});