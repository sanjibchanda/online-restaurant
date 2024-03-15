# Questions

1. what is CDN
2. what is crossorigin
3. what is React
4. what is JSX
5. what is NPM
   => npm is everything but its does not stand for node package manager
6. what is bundler
   => webpack, parcel, vite (bundler name)

7. there are 2 type of dependencies:
   => normal dependency - it is required for in a production phase
   => dev dependency - it is required for in a development phase

8. dependencies: ~ major updated / ^ minor update on dependencies

9. browserslist:
   => https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

10. what is JSX
    => jsx is html/xlm like syntax

11. JSX transpile before it reaches the JS -> PARCEL -> Babel(transpile jsx to JS)

12. what is Babel
    => Babel is a Javascript Compiler
    https://babeljs.io/

13. react to web ReactElement compile process:
    React.createElement => ReactElement -js Object => HTMLElement(render)
    JSX => React.createElement => ReactElement -js Object => HTMLElement(render)

14. React Components:
    class base components - old
    functional components - new

15. what is component composition
    => composing a component one another

16. what is props

17. what is HOOKS
    => normal JS utility Functions

18. what is UseState()
    =>

19. what is Dom and virtual Dom

20. React algorithm
    => React use reconciliation algorithm (React Fiber) -> React16
    ref: https://github.com/acdlite/react-fiber-architecture

21. What is reconciliation?
22. What is a fiber?
23. what is useEffect()
    => useEffect is a function will take two arguments.

    1. arrow function (callback function)
    2. dependency array []

24. what is CORS policy
25. what is instance in react?
26. Optional Chaining?
27. fetch post call?

---

# important Note:

1. config driven UI ? (use by Swiggy api)

2. react itself says that dont use in MAP function 'index' use as a key.
   =>We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.
   ref: https://legacy.reactjs.org/docs/lists-and-keys.html

3. two type of approach to load webpage:

   1. load -> API -> render
   2. load -> render -> API -> render (react)

4. 2 types of Routing in web apps:
   - client side Routing
   - server side Routing

---

# issus solved:

1. Error: Expected content key de1e4a02ec63c4eb to exist:
   => remove '.parcel-cache' folder from your project
   https://stackoverflow.com/questions/77166144/error-expected-content-key-de1e4a02ec63c4eb-to-exist-getting-this-error-in-reac

---

# Extensions:

1. json viewer for chrome browser
2. cors chrome extension

# Reference:

1. https://www.mockaroo.com/ - for demo API's
2. https://jsonplaceholder/
3. https://fakestoreapi.com/docs
