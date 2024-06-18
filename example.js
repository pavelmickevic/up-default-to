var upDefaultTo = require('up-default-to').default;

var res = upDefaultTo(
    global.foo,
    (obj) => obj.name,
    { 'name': 'Steve' }
);

console.log({ res });
