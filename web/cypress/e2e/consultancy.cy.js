describe('Formulário de Consultoria - Tipo Individual', () => {
    it('Solicitar Consultoria Individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários','Consultoria')

        cy.get('#name').type('Adrielle Abreu') 
        cy.get('#email').type('papito@webdojo.com')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('11 90000-0000')
            .should('have.value', '(11) 90000-0000')
        
        ////label[text()="Tipo de Consultoria"]/..//select 
        // (Lembrete: Cypress não suporta XPath nativamente)

        // Caso você não tenha o ID
        cy.contains('label','Tipo de Consultoria')
        .parent() 
        .find('select')
        .select('Individual')

        // Mas caso tenha, pode utilizar esse comando mais direto
        // cy.get('#tipo-consultoria').select('inCompany')

        // //span[text()="Pessoa Física"]/..//input  
        // é importante você saber a como montar um Xpath pra caso você tenha projeto em Selenium

        cy.contains('label','Pessoa Física')
        .find('input[type="radio"]')
        .check()
        

         cy.contains('label','Pessoa Jurídica')
        .find('input[type="radio"]')
        .should('not.be.checked')

    })
})


