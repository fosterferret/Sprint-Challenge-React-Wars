# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a JavaScript frontend library which was founded by a team at Facebook in response to the need to properly manage data and state at the user interface level. One of React's core philosphies is the idea that traditional DOM manipulation is expensive, so it tries to solve this problem by giving the developer what is known as a virtual DOM to render to instead of the actual DOM, and then it runs some calculations against the real DOM to see what changed specifically and does the minimum number of DOM operations needed to achieve the new state.

1. What does it mean to think in react?
Thinking in react essentially refers to the idea or philosophy of diving massive UI into tiny, reusable, maintainable pieces, so that there will always be a pattern of child components nested inside parent (container) components, and each child component in isolation can still communicate with other components if neccessary and form integral part of the app even on its own.

1. Describe state.
State is mutable data that represents the the current state of a component/element at any given moment, and is used so that a component can keep track of information in between any renders.

1. Describe props.
Props are parameters for components in React which carry data as objects down to child components. They are how components talk to each other.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that changes the state of something outside its scope which can then be observed when the operation is completed. This is achieved in React through the use of effect hooks which informs React that a component needs to do something after render. React will remember the function that was passed into useEffect and call it later after updating the DOM.