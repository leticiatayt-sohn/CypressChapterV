const Elements = require('./elements').Elements

const articleName = 'Artigo de testes' + new Date().getTime()

class Articles {

    acessarOFormulario() {
        cy.get(Elements.linkNovoArtigo).click()
    }

    preencherFormulario() {

    cy.get(Elements.inputTitle).type(articleName)
    cy.get(Elements.inputDescription).type('Descrição dos artigos de Testes')
    cy.get(Elements.inputBody).type('Corpo do texto do artigo que está sendo criado')
    cy.get(Elements.inputTags).type('cypress')
    }

    submeterFormulario() {
        cy.contains('button', 'Publish Article').click()
    }

    verificarSeOArtigoFoiCriado() {
        cy.get('h1').should('have.text', articleName)
    }
}

export default new Articles()