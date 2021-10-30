/// <reference types="cypress" />

describe('Cadastro', () => {
    it('Cadastro com sucesso', () => {
        
        //mapeamento de rota
        cy.intercept({
         //   hostname: https://api.realworld.io
         //   path: /api/users
         //   POST

         method: 'POST',
         path: '/api/users'

        }, 
        {
            statusCode: 200,
            fixture: 'cadastroComSucesso'
        }
        ).as('postUsers')
        
        cy.visit('register')
        cy.get('[placeholder=Username]').type('ChapterV')
        cy.get('[placeholder=Email]').type('ChapterV@gmail.com')
        cy.get('[placeholder=Password]').type('123456')

        cy.get('button.btn-primary').click()
    
        cy.contains('No articles are here... yet.').should('be.visible')
    });

       it('Cadastro com usuário já existente', () => {
        cy.intercept({
         method: 'POST',
         path: '/api/users'

        }, 
        {
            statusCode: 422,
            fixture: 'cadastroUsuarioExistente'
        }
        ).as('postUsers')

        cy.visit('register')
        cy.get('[placeholder=Username]').type('ChapterV')
        cy.get('[placeholder=Email]').type('ChapterV@gmail.com')
        cy.get('[placeholder=Password]').type('123456')

        cy.get('button.btn-primary').click()
    
        cy.contains('username has already been taken').should('be.visible')
    });

    it('Cadastro com email já existente', () => {
        cy.intercept({
         method: 'POST',
         path: '/api/users'

        }, 
        {
            statusCode: 422,
            fixture: 'cadastroEmailExistente'
        }
        ).as('postUsers')

        cy.visit('register')
        cy.get('[placeholder=Username]').type('ChapterV')
        cy.get('[placeholder=Email]').type('ChapterV@gmail.com')
        cy.get('[placeholder=Password]').type('123456')

        cy.get('button.btn-primary').click()
    
        cy.contains('email has already been taken').should('be.visible')
    });
})