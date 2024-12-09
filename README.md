# Asynchronous Update in React's useState Hook

This example demonstrates a common misconception about React's `useState` hook: updates are not synchronous.  The `console.log` inside the `handleClick` function shows the count *before* it's updated. This can lead to unexpected behavior if you rely on the updated value immediately after calling `setCount`.

## Bug
The `bug.js` file contains a component that increments a counter.  The `console.log` statement inside the `handleClick` function displays the count before the update is reflected.

## Solution
The `bugSolution.js` file demonstrates how to access the updated state value using functional updates or by leveraging effects which will ensure that you are working with the updated value.