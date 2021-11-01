
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('QA Assignment', () => {


    it('Login back to dashboard and & validate the response',()=>{

        cy.visit(Cypress.config().baseUrl)

        // login using credentials
        cy.get('.mb-16 > .input-text-content > input').type('yaseenflies@gmail.com');
        cy.get(':nth-child(2) > .input-text-content > input').type('nurul100');
        cy.get('.d-flex > .btn').click({force:true})

        cy.wait(10000)

        // select callbacks
        cy.get('#lhs-callbacks > :nth-child(1) > .d-flex > .color-white-inactive-sidebar').click({force:true});

        // status is completed
         cy.get('table[class=table] > tbody > tr:nth-child(1) > td:nth-child(2)').contains('Completed').should('be.visible')
         cy.log ('status is - Completed')

         //product type is FVA created
         cy.get('table[class=table] > tbody > tr:nth-child(1) > td:nth-child(5)').contains('FVA created').should('be.visible')
         cy.log ('product type is - FVA created')


        })
  
    
  })