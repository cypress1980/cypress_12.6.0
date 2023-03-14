describe('Mobile Responsiveness Testing', () => {
  it('Loads the login page in iphone-6', () => {
   cy.viewport('iphone-6') // set viewport to iPhone 6 size
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    cy.get('#input-email').should('be.visible') // check that email input is still visible
    cy.get('#input-password').should('be.visible') // check that password input is still visible
    cy.get('input[type="submit"]').should('be.visible') // check that login button is still visible
    cy.get('label[for="input-email"]').should('have.text', 'E-Mail Address') // check that label for email input is visible and has correct text
    cy.get('label[for="input-password"]').should('have.text', 'Password') // check that label for password input is visible and has correct text
  })
})