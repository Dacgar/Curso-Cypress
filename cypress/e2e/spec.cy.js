import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'random05';
    const contraseña = 'random05'
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login(usuario,contraseña)
    cy.get('a#nameofuser').should('contain.text', usuario)
    cy.wait(5000)
  })
})