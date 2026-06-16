Feature: Checkout

  As a customer
  I want to buy a product
  So that I can complete an order successfully

  @bdd @regression
  Scenario: Complete checkout with one product
    Given I am logged in as a standard user
    When I add the product "sauce-labs-backpack" to the cart
    And I proceed to checkout
    And I fill checkout information with first name "Lucinda", last name "Fonseca" and postal code "3060-000"
    And I complete the order
    Then I should see the checkout confirmation