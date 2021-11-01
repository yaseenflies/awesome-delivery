
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('QA Assignment', () => {



function apiReq(){
    cy.request({
        method: "POST",
        url: 'https://api.xendit.co/callback_virtual_accounts',
        form: true,
        body: {
            'external_id':'demo_14754597758172',
            'bank_code':'BNI',
            'name':'Rika Sutanto'  
        },
        headers: {
         'Authorization':'Basic eG5kX2RldmVsb3BtZW50X29XTktJc3pLdDNwemdTVXRTUThBYm1nNWVkeXVYQ3Y0N29YN280Y1NuTVNZSms1OUdDQUZEOXI5VGgwRjZHODo='
        }

      }).then((response) => {
        expect(response.status).to.eq(200)
      })

    }

    
  
  
    it('API test',()=>{

        apiReq()

          })
    
  })