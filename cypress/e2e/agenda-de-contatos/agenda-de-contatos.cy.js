/// <reference types="cypress" />

describe('Testes da agenda de contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app')
  })

  it('Deve adicionar um contato', () => {
    cy.get('input[type="text"]').type('Manoel Barros')
    cy.get('input[type="email"]').type('manoel@hotmail.com.com')
    cy.get('input[type="tel"]').type('12345678')

    cy.get('.adicionar').click()
  })

  it('Deve editar um contato', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').clear().type('Jose')
    cy.get('[type="email"]').clear().type('jose@gmail.com')
    cy.get('[type="tel"]').clear().type('12345678')

    cy.get('.alterar').click()
  })

  it('Deve remover um contato', () => {
    cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
  })

})