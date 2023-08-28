/// <reference types="cypress" />


describe("Oysho Tests", () => {
  beforeEach(() => {
    cy.visit('https://www.oysho.com', {
      headers: {
        "Accept-Encoding" : "gzip, deflate"
      }
    });
  })
    it("Visitar la página y verificar el título", () => {
      cy.wait(1500)
      cy.title().should('include', 'OYSHO')
    });
  
    it("Verificar que la navegación funcione correctamente", () => {
      cy.get('[data-testid="categories-menu-button"] > [data-testid="icon"]').click()
      cy.wait(2500)
      cy.get('#onetrust-accept-btn-handler').click()

      cy.get('[data-categoryid="1010062530"]').click()
      cy.url().should('include', '/novedades-c1010062530')
    })

    it("Iniciar sesion", () => {
      cy.get('[data-testid="user-button"]').click()
      cy.url().should('include', '/logon')
      cy.wait(2500)
      cy.get('#onetrust-accept-btn-handler').click()

      cy.get('.login__form > [data-testid="input-email"] > [data-testid="input-style"]').click().type('miguelcastilloolivares@gmail.com') // Ejemplo de E-mail
      cy.get('[data-testid="input-password"]').click().type('Password123')  // Ejemplo de Password
      cy.get('[data-testid="login-button"]').click()
    })

  })