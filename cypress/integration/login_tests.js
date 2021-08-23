import TestHelper from '../../src/components/TestHelpers/TestHelpers';
const sizes = [[1024, 768], 'iphone-6', 'ipad-2'];
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

const completeBillingScreen = (coupon) => {
  cy.contains('One Story Curriculum', { timeout: 30000 });
  cy.contains('Total:', { timeout: 30000 });
  cy.get('input[data-testId="billing-coupon"]').clear();
  if (coupon != '') cy.get('input[data-testId="billing-coupon"]').type(coupon);
  cy.get('input[data-testId="billing-line1"]').type('123 Sesame Street', {
    force: true,
  });
  cy.get('input[data-testId="billing-city"]').type('Toronto', { force: true });
  cy.get('input[data-testId="billing-state"]').type('Ontario', { force: true });
  cy.get('input[data-testId="billing-postalcode"]').type('M4W2Z7', {
    force: true,
  });
  cy.get('input[data-testId="billing-country"]').type('Canada', {
    force: true,
  });
  cy.get('[data-testId="billing-accept-eula"]').click();

  cy.getWithinIframe(0, '[name="cardnumber"]').type('4242424242424242');
  cy.getWithinIframe(1, '[name="exp-date"]').type('424');
  cy.getWithinIframe(2, '[name="cvc"]').type('242');
  cy.get('[data-testId="billing-processPayment-button-true"]', {
    timeout: 30000,
  }).click();
  cy.contains('Processing Payment');
  cy.get('[data-testId="billing-continueToProfile-button-true"]', {
    timeout: 30000,
  }).click();
};
const completeOrgScreen = () => {
  cy.get('[data-testId="org-aboutMeShort"]', { timeout: 30000 }).type(
    'Test ORG'
  );
  cy.get('[data-testId="org-Address"]').type('123 Sesame St.');
  cy.get('[data-testId="org-City"]').type('Toronto');
  cy.get('[data-testId="org-Province"]').type('Ontario');
  cy.get('[data-testId="org-PostalCode"]').type('M4W 2Z7');
  cy.get('[data-testId="org-Country"]').type('Canada');
  cy.fixture(fileName).then((fileContent) => {
    cy.get('[data-testid="org-image"]').attachFile({
      fileContent,
      fileName: fileName,
      mimeType: 'image/jpeg',
    });
  });
  //  cy.get('[data-testId="org-Email"]').type("test@jesuscollective.com")
  //  cy.get('[data-testId="org-Phone"]').type("555-555-5555")
  cy.get('[data-testId="org-aboutMeLong"]').type('Test ORG 123');
  cy.get('[data-testId="org-orgName"]').type('Space Products Inc.');

  cy.get('input[placeholder="Search Places ..."]').type('Toronto');
  cy.get('[data-testId="profile-location-0"]').click();
  cy.get('[data-testId="org-typeOfOrg"]').select('Church', { force: true });
  cy.get('[data-testId="org-numEmployees"]').select('1-25', { force: true });
  cy.get('[data-testId="org-aveSunday"]').select('1-50', { force: true });
  cy.get('[data-testId="org-numVolunteers"]').select('1-25', { force: true });

  cy.get('[data-testId="org-denomination"]').type('Moon');
  //cy.get('[data-testId="org-pplServed"]').type("1000")
  cy.get('[data-testId="org-orgDescription"]').type('About the org...');

  cy.get('[data-testId="org-save-true"]').click();
};
const completeProfileScreen = (hasOrgFields) => {
  cy.get('[data-testId="profile-aboutMeShort"]', { timeout: 30000 })
    .type('I test', { force: true })
    .get('[data-testId="profile-aboutMeLong"]')
    .type('I test a lot', { force: true });

  cy.get('input[placeholder="Search Places ..."]').type('Toronto');
  cy.get('[data-testId="profile-location-0"]').click();

  cy.get('[data-testId="profile-interest-picker"]').select('Equipping');
  cy.get('[data-testId="profile-interest-button-true"]').click();

  cy.fixture(fileName).then((fileContent) => {
    cy.get('[data-testid="profile-image"]').attachFile({
      fileContent,
      fileName: fileName,
      mimeType: 'image/jpeg',
    });
  });
  cy.get('[data-testId="profile-currentRole"]')
    .type('Tester', { force: true })
    .get('[data-testId="profile-currentScope"]')
    .type('Testing', { force: true })
    .get('[data-testId="profile-personality"]')
    .type('Detailed', { force: true });
  if (hasOrgFields)
    cy.get('[data-testId="profile-orgName"]')
      .type('TMH', { force: true })
      .get('[data-testId="profile-orgType"]')
      .select('Church', { force: true })
      .get('[data-testId="profile-orgSize"]')
      .select('1-25', { force: true })
      .get('[data-testId="profile-orgDescription"]')
      .type('We make things', { force: true });

  cy.get('[data-testId="profile-save-true"]').click('topLeft', { force: true });
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
      cy.contains('Edit').click();

      cy.contains('Give').click();
      cy.contains('Recurring').click();
      cy.contains('Give once').click();
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
