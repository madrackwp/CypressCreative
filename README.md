# Cypress UPD Documentation

## Tests for UPD covered:

1. Ensuring that all endpoints are working when the webpage loads (`check-backend.js`)
2. Testing of the main page. Ensuring that all elements are present and ensuring that all fields work as intended (`check-elms-frontpage.js`)
3. Ensuring that the autocomplete function is working as intended on the input (`check-autocomplete.js`)
4. Testing the pdt page. Ensuring that all fields and inputs are working and the data field at the bottom of the page has the same reflected data (`check-elms-pdtpage.js`)
5. The last test done so far ensures that we can navigate from the front page to the pdt page (`navigation.js`)

### Test 1:

- Checking of backend is done by sending a http requests to all end points
- Then we create an assertion that there should be a response code of 200 to ensure that the endpoints are all working correctly

### Test 2:

- Checking the frontpage contains all the elements is simply just looking for the static elements that have the correct texts (`cy.contains()`)
- We also check if the input field is working correctly by typing (`cy.type()`) in it and running an assertion on it to ensure the text matches whatever we typed in it
- We also check the autocorrect field is working. Typing a query that yields not result should not show the autocomplete field. We do this by creating an assertion that the height of the autocomplete DOM element is 0 (`.invoke('outerHeight').should('eq',0)`)

### Test 3:

- To check if the autocomplete is working correctly, we first have to make sure we managed to get all the data from the endpoints and we should look for the 200 response code
- After that, we try typing different queries into the input field: "katana", "Pebble" and "hello world"
- The first 2 should yield results while the 3rd should not
- Once again we check this by observing if the autocomplete box has a height or not

### Test 4:

- Checking whether or not the fields in the pdt page is working requires us to get the input field and fill them in. We then create an assertion to check if the field contains what we typed in.
- There are some fields that are not enabled until previous ones are filed up
- The "Countries", "Languages", "Product Name" and "Support Name" field should be disabled. We can ensure this by getting the dom element and use the `.should('be.disabled')` assertion
- After filling up the other fields, we can then check again if these field are enabled
- After all the fields are filed, we then check the data field at the bottom to ensure all the previous entries are reflected using another `.contains()` assertion

### Test 5:

- To check if we can navigate between the 2 pages, we first query something and click on the first option in the autocomplete.
- We can check if we successfully navigated to the second page by checking if the URL is correct
- This is done with an assertion on the URL: `cy.url().should("eq", "<link>")`

### To run tests locally:

- Ensure that the backend and frontend for UPD is up and running first
- Also ensure that the ports for front and backend are `3000` and `3308` as tests written are supposed to listen to those ports

---

## Tests done for Blog Site:

### Test 1: Homepage test

- This test aims to check if the home page of the blog is operational.
- The tests checks looks for the h1 element and the blog body
- At the same time, the test will iterate all `blog-item` classes to check if a date, image, title, tag and short description is there
- An error will be thrown if any of these elements are missing

### Test 2: Navigation test

- This tests aims to check if the user selects the blog post from the main screen, will the user be navigated to the appropriate blog post
- This is done by checking if the h3 in the `blog-item` matches the main heading in the blog post (h1)
- This test is repeated to see if clicking on the image will also bring the user to the correct post

### Test 3: Tags filtering test

- This tests aims to see if the filtering of blog tags works.
- This works by keeping track of the selected tag and checking if the subsequent filtered posts have the same tag

### Test 4: Mobile tablet view test

- This tests aims to check the responsiveness of the webpage
- This tests makes use of the `cypress-plugin-snapshots` plugin
- Inside the test file, snapshots of the desired DOM element is taken with the command `cy.toMatchImageSnapshot()`
- This snapshot is then compared to the benchmark snapshot taken previously
- The test will fail if there is a mismatch in the images
- If the new snapshot is correct, it will have to be over-ridden in the cypress GUI instead
- Take note that this test takes an image of the first blogpost entry on the main page, whenever there are new blog posts added, it may generate an error as the snapshots will no longer be the same
- All snapshots are saved under `cypress\integration\blog_site_tests\__image_snapshots__`

---

## What is CypressIO?

- Cypress is a end to end testing framework for web applications
- Promotes Test Driven Development (TDD) instead of the more frequently used Behavior Driven Development (BDD)
- [Read up more here](https://docs.cypress.io/guides/overview/why-cypress)

## How to Use:

### Writing a test

- All test files are written as `spec.js` files (There are other file extensions that can be used)
- All test files should be written in the integration folder
- Folders can be used

### Structure of a test:

1. Arrange -> Set up the environment where the user will start out
2. Act -> Simulate how the user will interact with the page
3. Assert -> Check if conditions are met in order to pass or fail

Refer to the `sample_spec.js` file in the integration directory as an example

---

## Running Tests:

### Using GUI:

- type `$npm run cypress:open` in the console
- It is an intuitive GUI that shows the integration directory
- You can simply run test by opening the spec files you need
- To ensure this works, you have to ensure that the script is defined in the `package.json` file: `"cypress:open" : "cypress open"`

### Using CLI:

- To run all test in the integration directory: `$npm run cy:run -- --spec "cypress/integration/*"`
- We can also specify which spec file to run specifically using: `$npm run cy:run -- --spec "cypress/integration/sample_spec.js/"`
- Once again, ensure `"cy:run": "cypress run"` is defined the `package.json` under scripts

### Videos and Screenshots:

- Screenshots, by default, will be taken whenever there is a fail in a test
- The screenshot will be saved under the screenshot folder in the cypress directory
- To disable this, go to `cypress.json` and ensure that `screenShotOnRunFailure` is set to `false`
- Take note that screenshots are not taken automatically during tests done in the GUI (cypress open). However, screenshots can be taken if `cy.screenshot()` command is used in your `spec.js` file
- Screenshots of previous tests are automatically wiped unless `trashAssetsBeforeRuns` is set to `false` in the `cypress.json` file

Videos:

- Videos of your test will be recorded and saved to the video directory by default
- Like screenshots, videos are only taken using the CLI(cypress run) and not the GUI(cypress open)
- This feature can be turned off by making sure `video` is set to `false` in the `cypress.json` file
- Screenshots of previous tests are automatically wiped unless `trashAssetsBeforeRuns` is set to `false` in the `cypress.json` file
- Changing of video encoding can be done in the cypress.json file
- Upload of video can be done for specs that failed setting `videoUploadOnPasses` to `false` in `cypress.json`

---

## Integration with Git:

Cypress does support integration with Git

- https://docs.cypress.io/guides/dashboard/introduction#Integrate-with-GitHub

Cypress also supports CI with Jenkins

- https://docs.cypress.io/guides/continuous-integration/ci-provider-examples#Jenkins

## External references:

cypress-plugin-snapshots -> https://www.npmjs.com/package/cypress-plugin-snapshots
