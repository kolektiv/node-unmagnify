# Overview

This is a very simple Node.js client for Unmagnify. At the moment it supports updating your sequences, but not creating new sequences, etc. (feel free to fork and add! :)

## Installation

```js
npm install unmagnify
```

## Usage

Create a client, with configuration:

```js
var unmagnify = require('unmagnify');

var client = unmagnify.create({
  token: '<your token here>'
});

client
  .registerSequence('users', '<sequence id>')
  .registerSequence('sales', '<sequence id>');
```
and then update your plots using their registered names:

```js
client.plot('users', 280675, [callback]);
```

(callback is an optional function which taking an err argument, which will be called when the plot has completed)

Enjoy!

