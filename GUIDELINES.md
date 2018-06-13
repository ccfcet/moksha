# Guidelines
The following is a set of guidelines for contributing to Moksha, which is hosted in the ccfcet Organization on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.
## Coding
### Naming Things
- Boolean variables, or functions that return a boolean value, should start with “is,” “has” “should.”

```javascript
// Dirty
const done = current >= goal;

// Clean
const isComplete = current >= goal;
```

- Functions should be named for what they do, not how they do it. In other words, don’t expose details of the implementation in the name. 

```javascript
// Dirty
const loadConfigFromServer = () => {
  ...
};

// Clean
const loadConfig = () => {
  ...
};
```
### Some of the best practises you can follow
- Use small functions, each with a single responsibility. This is called the single responsibility principle. Ensure that each function does one job and does it well. This could mean breaking up complex components into many smaller ones. This also will lead to better testability.

PS: These guidelines were inspired by [this](https://americanexpress.io/clean-code-dirty-code/) article on American Express Technology.