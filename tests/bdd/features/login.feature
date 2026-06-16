Feature: Login

  As a registered user
  I want to log in to the application
  So that I can access the product catalogue

  @bdd @smoke
  Scenario: Successful login with valid credentials
    Given I am on the SauceDemo login page
    When I log in with username "standard_user" and password "secret_sauce"
    Then I should see the product catalogue

  @bdd @negative
  Scenario: Login fails with locked out user
    Given I am on the SauceDemo login page
    When I log in with username "locked_out_user" and password "secret_sauce"
    Then I should see the login error "Sorry, this user has been locked out"