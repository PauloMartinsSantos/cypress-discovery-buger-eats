
//PAGE OBJECT

class SignupPage{
    
    go(){
        cy.visit('/') // baseUrl foi definido no arquivo cypress.json  '/' executa o acesso a pagina

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas') //Check point para saber se foi direcionado para tela correta
    }

    fillForm(deliver){
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.datails)

        cy.get('input[name="address"]').should('have.value',deliver.address.street)
        cy.get('input[name="district"]').should('have.value',deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value',deliver.address.city_state)

        cy.contains('.delivery-method li',deliver.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalCodeShouldBe(expectedMessage){
        cy.get('.swal2-container div[class="swal2-html-container"]').should('have.text', expectedMessage)       
    }

    alertMessageShouldBe(expectMessage){
        //cy.get('.alert-error').should('have.text',expectMessage)
        cy.contains('.alert-error',expectMessage).should('be.visible')
    }
}

export default new SignupPage;