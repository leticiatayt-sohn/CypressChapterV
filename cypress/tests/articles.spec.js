/// <reference types="cypress" />

import Articles from '../support/Pages/articles';

describe('Articles', () => {
     
    //hooks = trechos que devem ser executados antes
    //de cada teste
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    });

    it('Cadastro do novo artigo com sucesso', () => {
       
        //fluxo de login
       //criação do artigo
       Articles.acessarOFormulario()

       Articles.preencherFormulario()

       Articles.submeterFormulario()

       Articles.verificarSeOArtigoFoiCriado()

    });
    
});