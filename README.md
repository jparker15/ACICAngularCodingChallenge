Hello! Thank you for your interest in applying for a job at Atlantic Casualty Insurance Company!

Inside this directory you'll find a small angular application. It's a simplified version of actual functionality in our main customer portal.

As a demonstration of your skillset and knowledge we'd like you to follow the specifications below to complete a small set of changes to this application.

- In order to keep things organized, please branch off of the 'master' branch and name your branch {FirstInitialLastNameFavorite#}.
  For example if your name
  is David Thomas and your favorite number is 4 then your branch should be 'dthomas4'.

- Once your changes are complete please commit and push your changes
  back to origin. In order to ensure a prompt review of your completed code, please also reply to the email requesting that you complete this challenge
  indicating that you have finished it.

# Specifications:

### Comments from business unit:

"Recently I was updating the types of business one our agents was allowed to quote when I realized that I didn't know how often each type of insurance coverage was quoted.

Identify which types of insurance were most popular and which ones were not being quoted often when updating an agents authority.

Could we get something added to the screen?"

## Comments from technical specifications team:

"The UX team has reviewed the functionality request and believes it would be most useful for users if
their requested data appeared on all screens, directly below the existing tabs "Search" and "View All Lines Of Business".

The existing quote data
is available in "in-memory-data.service.ts", but will need to be summed and displayed for it to be useful.

Knowing the two most popular lines of
business all the time would be best. In addition, displaying how many quotes a given line of business has on the details page would be useful for
the user."

# Insurance Definitions:

Agent - A person or business who sells insurance to an insured, on behalf of a carrier. They are similar to a "retail store" in the insurance transaction.

Coverage - A specific type of protection an insurance policy provides. For example, if someone had "Building" coverage on their commercial property policy
they would be protected in the event that a fire broke out in their covered building. Coverage and line of business are sometimes used interchangeably.

Insurance Carrier - A business that underwrites the risks and pays out claims for an insurance policy. They are the manufacturer in the insurance transaction.

Insured - Person or business buying insurance coverage. They are the customer in the insurance transaction.

Line of Business - This is a collection of related insurance coverages, that represent the specific needs of an insured. For example, the line of business
"Commercial Property" includes coverages such as "Building", "Business Income", and "Signs".
