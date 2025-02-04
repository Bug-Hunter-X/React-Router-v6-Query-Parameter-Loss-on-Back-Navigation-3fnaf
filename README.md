# React Router v6 Query Parameter Loss on Back Navigation

This repository demonstrates a bug in React Router v6 where query parameters are lost when navigating away from a page and then back using the browser's back button.  The issue occurs specifically when using the new `useRoutes` API.  A workaround and a more conventional solution are provided.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start`
4. Navigate to `/page1?param=value`.
5. Navigate to `/page2`.
6. Use the browser's back button to return to `/page1`.  The query parameter `param=value` will be missing.

## Workaround and Solution

The bug.js file shows the problem. The bugSolution.js file demonstrates two solutions: one using a custom hook to manage the query parameters, and another solution that uses a more conventional `useLocation` and `useSearchParams` hook.  This second method is recommended for its clarity and maintainability.

## Note

This is a simplified example.  The issue may manifest differently in more complex applications.