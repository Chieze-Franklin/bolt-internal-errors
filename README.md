# bolt-internal-errors

Internal Bolt module used to get the appropriate error messages.

## Installation

```sh
$ npm install bolt-internal-errors
```

## Use

```js
var errors  = require('bolt-internal-errors')
var error_code = '212';

var error_message = errors[error_code];
```

### Note

This is an internal module and should not be used in 3rd party apps.