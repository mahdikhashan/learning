// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
  })
})

describe('Validate Menu', () => {
  it('Check Menu exists', () => {
    cy.visit('/')
    cy.get('#nav').contains('About')
    cy.get('#nav').contains('Home')
  })
})

describe('Check if board scord exists', () => {
  it('Check if exists', () => {
    cy.visit('/')
    cy.get('#board-score').contains('Whose Turn:')
  })
})