
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('QA Assignment', () => {


  it('API key permission - Write',()=>{

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

    //click on devlopers API keys
    cy.get('[href="/settings/developers#api-keys"] > .color-primary').click({force:true})

    // click on pen-edit icon
    cy.get('[src="/images/icons/icon_edit_grey.svg"]').click({force:true})

    // change permission to write

      // click 'WRITE' in Money-in Products
      cy.get(':nth-child(3) > .justify-content-between > .d-flex > .button-selector-right').click({force:true});

      // click 'WRITE' in Money-out Products
      cy.get(':nth-child(4) > .justify-content-between > .d-flex > .button-selector-right').click({force:true});
  
     // click 'WRITE' in xenplatform
     cy.get(':nth-child(5) > .justify-content-between > .d-flex > .button-selector-right').click({force:true})

     // Apply changes
     cy.get('.modal-footer > .btn-primary').click({force:true})

     // auth pass
     cy.get('.mt-3 > .input-text > .input-text-content > input').type('nurul100')

     // confirm
     cy.get('.password-modal-footer > .btn-primary').click({force:true})

    
 
  })

  
})