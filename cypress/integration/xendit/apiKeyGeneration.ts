
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('QA Assignment', () => {


  it('API key generation',()=>{

    // here baseUrl = https://dashboard.xendit.co/login ==> which is configured in 'cypress.json' file

    //visit xendit dashboard
    cy.visit(Cypress.config().baseUrl)

    // 1.login using credentials
    cy.get('.mb-16 > .input-text-content > input').type('yaseenflies@gmail.com');
    cy.get(':nth-child(2) > .input-text-content > input').type('nurul100');
    cy.get('.d-flex > .btn').click({force:true})

    cy.wait(10000)

    //click on settings
    cy.get('#lhs-settings > :nth-child(1) > .d-flex > .color-white-inactive-sidebar').click({force:true});
    cy.wait(4000)

    //click on API keys
    cy.get('[href="/settings/developers#api-keys"] > .color-primary').click({force:true})

    //click on Generate Key
    cy.get('.mb-5 > .empty-dev-table > .btn').click({force:true})

    // input keyname
    cy.get('.text-left > .input-text > .input-text-content > input').type('yaseens key')

    // click 'READ' in Money-in Products
    cy.get(':nth-child(3) > .justify-content-between > .d-flex > .button-selector-middle').click({force:true});

    // click 'READ' in Money-out Products
    cy.get(':nth-child(4) > .justify-content-between > .d-flex > .button-selector-middle').click({force:true});

   // click 'READ' in xenplatform
    cy.get(':nth-child(5) > .justify-content-between > .d-flex > .button-selector-middle').click({force:true})


    //click generate key button
    cy.get('.modal-footer > .btn-primary').click({force:true})


    // enter the password to authenticate the change
    cy.get('.mt-3 > .input-text > .input-text-content > input').type('nurul100')

    // press confirm button
    cy.get('.password-modal-footer > .btn-primary').click({force:true})


    // SUCCESS Message verification
    cy.get('h3').should('have.text','Success!')

  })

  
})