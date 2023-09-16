Feature: Automation Exercise Portal
@createAccount
Scenario Outline: Create a user with valid email ID

Given Launch the AutomationExerciseURL
When Click the signup button and enter <datapath> user details
Then enter the user details <datapath> for registration
Then verify the account is created as per <datapath>
Examples:
|datapath|
| features/testdata/userregistration.json|