---
title: Methods
description: Introduction on Meteor Methods
layout: ../../../layouts/MainLayout.astro
---

## What are Methods?

Methods is the one of the ways that you can talk with your Meteor Backend. They are just RPC(Remote Procedure Call) under the hood.
You can think of them like POST requests to your server, but with many nice features optimized for building a modern web application.
The best way to show how it works and can be used is in this really simple example:

```js
// server.js
Meteor.methods({
  'hello'(name) {
    return `Hello ${name}`
  }
});
---
// client.js
const greeting = Meteor.call('hello', 'Jon Doe');
console.log(greeting) //  `Hello Jon Doe`
```