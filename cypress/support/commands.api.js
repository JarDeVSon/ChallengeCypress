// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('get_all_users', () => {
    cy.api({
        method: 'GET',
        url: 'https://serverest.dev/' + 'usuarios',
        failOnStatusCode: false,
        // form: {
        //   key3: 'value3',
        //   key4: 'value4'
        // },
        // qs: {
        //   param1: 'value1',
        //   param2: 'value2'
        // },
        // auth: {
        //   username: 'username',
        //   password: 'password'
        // },
        // responseType: 'json', // 'json', 'text', 'blob', 'arraybuffer'
        // timeout: 10000, // em milissegundos
        // proxy: {
        //   url: 'http://seu.proxy.com:porta',
        //   auth: {
        //     username: 'usuário',
        //     password: 'senha'
        //   }
        // }
        headers: {
            "Content-Type": "application/json",
        },
    })
});
Cypress.Commands.add('get_users_by_name', (name) => {
    cy.api({
        method: 'GET',
        url: 'https://serverest.dev/',
        failOnStatusCode: false,
        // form: {
        //   key3: 'value3',
        //   key4: 'value4'
        // },
        // qs: {
        //   param1: 'value1',
        //   param2: 'value2'
        // },
        // auth: {
        //   username: 'username',
        //   password: 'password'
        // },
        // responseType: 'json', // 'json', 'text', 'blob', 'arraybuffer'
        // timeout: 10000, // em milissegundos
        // proxy: {
        //   url: 'http://seu.proxy.com:porta',
        //   auth: {
        //     username: 'usuário',
        //     password: 'senha'
        //   }
        // }
        headers: {
            "Content-Type": "application/json",
        },
        qs: name,
    })
});
Cypress.Commands.add('post_user', (body) => {
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/' + 'usuarios',
        failOnStatusCode: false,
        // form: {
        //   key3: 'value3',
        //   key4: 'value4'
        // },
        // qs: {
        //   param1: 'value1',
        //   param2: 'value2'
        // },
        // auth: {
        //   username: 'username',
        //   password: 'password'
        // },
        // responseType: 'json', // 'json', 'text', 'blob', 'arraybuffer'
        // timeout: 10000, // em milissegundos
        // proxy: {
        //   url: 'http://seu.proxy.com:porta',
        //   auth: {
        //     username: 'usuário',
        //     password: 'senha'
        //   }
        // }
        headers: {
            "Content-Type": "application/json",
        },
        body: body,

    })
});
Cypress.Commands.add('post_user_faker_js', (nome, email, password, administrador) => {
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/' + 'usuarios',
        failOnStatusCode: false,
        // form: {
        //   key3: 'value3',
        //   key4: 'value4'
        // },
        // qs: {
        //   param1: 'value1',
        //   param2: 'value2'
        // },
        // auth: {
        //   username: 'username',
        //   password: 'password'
        // },
        // responseType: 'json', // 'json', 'text', 'blob', 'arraybuffer'
        // timeout: 10000, // em milissegundos
        // proxy: {
        //   url: 'http://seu.proxy.com:porta',
        //   auth: {
        //     username: 'usuário',
        //     password: 'senha'
        //   }
        // }
        headers: {
            "Content-Type": "application/json",
        },
        body: {
            "nome": nome,
            "email": email,
            "password": password,
            "administrador": administrador
        },

    })
});