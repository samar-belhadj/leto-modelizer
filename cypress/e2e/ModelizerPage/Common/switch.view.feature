Feature: Test modelizer page: switch view (text/model)

  Background:
    Given I clear cache
    And   I set viewport size to '1536' px for width and '960' px for height
    And   I visit the '/'

    When I click on '[data-cy="create-project-button"]'
    And  I set on '[data-cy="create-project-form"] [data-cy="name-input"]' text 'projectName'
    And  I click on '[data-cy="create-project-form"] [data-cy="submit-button"]'
    Then I expect current url is 'projectName/models'

    # Model creation
    When I click on '[data-cy="create-model-button"]'
    Then I expect '[data-cy="create-model-form"] [data-cy="plugin-select"]' is 'terrator-plugin'

    When I set on '[data-cy="create-model-form"] [data-cy="name-input"]' text 'modelName'
    And  I click on '[data-cy="create-model-form"] [data-cy="submit-button"]'

  Scenario: Default modelizer page mode should be 'draw'
    Then I expect current url is 'projectName/modelizer/draw\?path=terrator-plugin/modelName'

  Scenario: Modelizer 'draw' page should load the correct content
    Then I expect '[data-cy="navigation-bar"] [data-cy="modelizer-switch-button"] [aria-pressed="true"] [class="block"]' is 'Draw'
    And  I expect '[data-cy="modelizer-draw-view"] [data-cy="draw-container"]' exists

  Scenario: Modelizer 'text' page should load the correct content
    When I click on '[data-cy="navigation-bar"] [data-cy="modelizer-switch-button"] [aria-pressed="false"]'
    Then I expect '[data-cy="navigation-bar"] [data-cy="modelizer-switch-button"] [aria-pressed="true"] [class="block"]' is 'Text'
    And  I expect '[data-cy="modelizer-text-view"]' exists
    And  I expect '[data-cy="file-explorer"]' exists
    And  I expect '[data-cy="file-tabs"]' exists

  Scenario: Clicking on switch should change page content
    When I click on '[data-cy="navigation-bar"] [data-cy="modelizer-switch-button"] [aria-pressed="false"]'
    Then I expect '[data-cy="navigation-bar"] [data-cy="modelizer-switch-button"] [aria-pressed="true"] [class="block"]' is 'Text'
    And  I expect '[data-cy="modelizer-text-view"]' exists
    And  I expect '[data-cy="file-explorer"]' exists
    And  I expect '[data-cy="file-tabs"]' exists
    And  I expect current url is '/projectName/modelizer/text'

    When I click on '[data-cy="navigation-bar"] [data-cy="modelizer-switch-button"] [aria-pressed="false"]'
    And  I expect '[data-cy="modelizer-draw-view"] [data-cy="draw-container"]' exists
    And  I expect current url is '/projectName/model'
