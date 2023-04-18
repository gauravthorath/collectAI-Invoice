# collectAI Invoice DnD Challenge

## The task

### Description

The task is to build an invoice displaying app based on the look and feel which has been provided in this project. It includes the following topics to address:

1. Convert the static skeleton into a well structured react component tree. You are free to adjust the existing html and CSS structures to your individual needs.
2. Expose the provided `invoice.json` via API.
3. Load and initialize the app with the provided invoice data from the API.
4. Dynamically compute the sum and VAT of the line items.
5. Provide a UI extension which allows editing a line item _description_ and it's _price_.
6. Extend the App with a file based drop zone to load and display any `invoice.json` file dragged into the browser by users.

### Expectation

We expect you to write code you would consider production-ready. This means your code should be simple, robust and follow good practices. If you decided for certain design decisions, please document them and explain why you have chosen them. Last but not least, please provide your solution in version control (git, bitbucket, etc.) and share the repository with us.

## Completion Time

Within a maximum of 7 Days.

## Task Details :

1. I have allowed user to edit the values for description and price in line form. This edited values are kept in state variables for the demo puppose. It can be improved easily by applying CSS to edit text boxes and buttons.
2. To do string formatting(description shortenning), Vat percentage fetching, and currecy localizing I had created utilility file which can behelpful in maintaining in future.
3. created separte components for InvoiceHeader, LineItemTable, LineItemRow, InvoiceFooter and JsonDropZone
4. OnDrop/select Json file, we can make more improvemnts buy showing some message or currently loaded file name etc.
5. Test cases can be written for the overall feature but its not included in the feature
6. Usually I prefer logical commits but for this assignement I couldnot so you will see only one commit message.
7. Styled components, MUI etc could be used but to keep it simple for assessment not used it and managed layout using flexbox.
