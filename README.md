[![Try up-default-to on RunKit](https://badge.runkitcdn.com/up-default-to.svg)](https://npm.runkit.com/up-default-to)

## up-default-to

```tsx
upDefaultTo(
    defaultValue: Any,
    property: Any | Function,
    optionalArguments: Any
): Any
```

Utility to determine the return value for a given property, in case property is `undefined`; if function specified as property, then returns the result of a function.

Similarly, double question mark (`??`) in JavaScript, also known as the nullish coalescing operator, or double pipe operator (`||`) as the logical OR operator, \
but this accepts function as a second argument, that is executed with or without `optionalArguments`.

Read it as optional value can be set to a value or a function that returns the value;

### Install

```npm
npm add up-default-to
```

```yarn
yarn add up-default-to
```

### Example

```js
var upDefaultTo = require('up-default-to').default;

var res = upDefaultTo(
    global.foo,
    (obj) => obj.name,
    { 'name': 'Steve' }
);

console.log({ res });
```

OR

```jsx
import upDefaultTo from 'up-default-to';

const bool = upDefaultTo(
    window.foo,
    false
); // returns false

const boolFn = upDefaultTo(
    window.foo,
    () => { return false; }
); // returns computation of a fn - false

const num = upDefaultTo(
    window.num,
    ({ a, b }) => { return a + b; },
    { a: 2, b: 3 }
); // returns 5

const str = upDefaultTo(
    window.foobar,
    "my favorite string"
);

const strFn = upDefaultTo(
    window.foobar,
    ({ firstName, lastName } ) => `${firstName} ${lastName}`,
    { firstName: "Steven", lastName: "King" }
)
```
