# Next.js 15 Strict Mode Hydration Mismatch

This repository demonstrates a common error encountered when upgrading to Next.js 15 and enabling strict mode: React hydration mismatches caused by functional components that don't explicitly return JSX or use JSX fragments.

## Bug Reproduction

The `bug.js` file contains a functional component that omits the necessary return statement.  When rendered on the server, this produces a different result than the client rendering, leading to a hydration mismatch error.

## Solution

The `bugSolution.js` file shows the corrected functional components with explicit return statements or JSX fragments. This resolves the hydration mismatch.

## How to Run

1. Clone this repository
2. Navigate to the repository in your terminal
3. Run `npm install`
4. Run `npm run dev`

Test the application by navigating to the index page. The `bug.js` example will show the error, while the `bugSolution.js` will work correctly.