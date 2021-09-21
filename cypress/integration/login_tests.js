import TestHelper from '../../src/components/TestHelpers/TestHelpers';
const sizes = [[1024, 768]];
//const sizes = [[1024, 768], 'iphone-6', 'ipad-2'];
const random = Math.floor(Math.random() * 10);
const user = 'login.test.' + random + '@jesuscollective.com'; //George
//const user = "courseuser3@jesuscollective.com"
//const user = "test1@jesuscollective.com" //Lucas
//const user = "test2@jesuscollective.com" //Mateus
//const user = "test3@jesuscollective.com" //Igor
const fileName = 'test.jpeg';
const submitNewUserScreen = () => {
  cy.get('input[placeholder="Email Address"]').type(user);
  cy.get('input[placeholder="Create Password"]').type('TestTest#1');
  cy.get('input[placeholder="Confirm Password"]').type('TestTest#1');
  cy.get('input[placeholder="Phone number"]').type('1234567890');
  cy.get('input[placeholder="First Name"]').type('Test');
  cy.get('input[placeholder="Last Name"]').type('User 1');
  cy.contains('Continue').click({ force: true });
};

describe('Create User', () => {
  sizes.forEach((size) => {
    it('Size - ' + size, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit('https://localhost:3006/give2').then(() => {
        TestHelper.DeleteUser(user, 'TestTest#1');
      });
      cy.contains('Login to manage your giving').click();
      cy.contains('Sign In').click();
      cy.contains('Email cannot be empty')
        .get('input[placeholder="Email"]')
        .type(user);
      cy.contains('Sign In').click();
      cy.contains('Password cannot be empty')
        .get('input[placeholder="Password"]')
        .type('TestTest#1');
      cy.contains('Sign In').click();
      cy.contains('User does not exist');
      cy.contains('Create an Account').click();

      submitNewUserScreen();

      cy.get('input[placeholder="One-time security code"]', { timeout: 30000 })
        .get('[data-testId="myConfirmSignup-back"]')
        .click();

      cy.get('input[placeholder="Email"]').type(user);
      cy.get('input[placeholder="Password"]').type('TestTest#1');
      cy.contains('Sign In').click();

      // completeBillingScreen('');
      //completeProfileScreen(true);
      cy.contains('Edit', { timeout: 30000 }).click();
      cy.get('input[data-TestId="FirstName"]', { timeout: 30000 }).type(
        'UserA'
      );
      cy.get('input[data-TestId="LastName"]').type('UserA');
      cy.get('input[data-TestId="Email"]').type('a@a.com');
      cy.get('input[data-TestId="Mobile"]').type('123-456-7899');
      cy.get('input[data-TestId="Address"]').type('123 Sesame St.');
      cy.get('input[data-TestId="City"]').type('Toronto');
      cy.get('[data-TestId="Country"]').select('Canada');
      cy.get('[data-TestId="Province"]').select('Ontario');
      cy.get('input[data-TestId="PostalCode"]').type('M4W2Z7');

      cy.contains('Update').click();

      cy.contains('Give').click();
      cy.contains('Recurring').click();
      cy.get('[data-TestId="Frequency"]').select('Every week');
      cy.get('[data-TestId="StartDate"]').type('2021-10-10');
      cy.get('[data-TestId="Amount"]').type('100');
      cy.get('[data-TestId="FundType"]').select('General fund');
      cy.get('input[data-TestId="NameOnCard"]').type('Dave Chicken');
      cy.getWithinIframe(0, '[name="cardnumber"]').type('4242424242424242');
      cy.getWithinIframe(1, '[name="exp-date"]').type('424');
      cy.getWithinIframe(2, '[name="cvc"]').type('242');

      cy.contains('Give once').click();
      cy.get('[data-TestId="Amount"]').type('100');
      cy.get('[data-TestId="FundType"]').select('General fund');
      cy.get('input[data-TestId="NameOnCard"]').type('Dave Chicken');
      cy.getWithinIframe(0, '[name="cardnumber"]').type('4242424242424242');
      cy.getWithinIframe(1, '[name="exp-date"]').type('424');
      cy.getWithinIframe(2, '[name="cvc"]').type('242');

      cy.contains('Add new credit card').click();
      cy.contains('Give Now').click();

      cy.contains('Transactions').click();
      cy.contains('Payment Methods').click();
      cy.contains('Profile').click();
      cy.contains('Home').click();
      cy.contains('Give Now').click();
      cy.contains('Home').click();
      cy.contains('Add recurring gift').click();
      cy.contains('Home').click();
      cy.contains('Manage my recurring giving').click();
      cy.contains('Home').click();
      cy.contains('Logout').click();
    });
  });
});
