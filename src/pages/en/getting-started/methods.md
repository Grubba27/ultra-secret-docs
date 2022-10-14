---
title: Methods
description: Introduction on Meteor Methods
layout: ../../../layouts/MainLayout.astro
---

## What are Methods?

Methods is the one of the ways that you can talk with your Meteor Backend. They are just RPC(Remote Procedure Call)
under the hood.
You can think of them like POST or GET requests to your server, but with many nice features optimized for building a
modern web
application.
The best way to show how it works and can be used is in this really simple example:

```js
// server.js
Meteor.methods({
  'hello'(name) {
    return `Hello ${ name }`
  }
});
---
// client.js

const greeting = Meteor.call('hello', 'Jon Doe'); // <- this is syncronous
console.log(greeting) //  `Hello Jon Doe`
```

## How to use them?

First lets understand how they work. Methods are just functions that you can call from the client.
They are defined on the server and can be called from the client.
They are defined on the server using the `Meteor.methods` function,
and they can be asyncronous as you can see for the two examples bellow.

_Using callAsync_

```js

// server.js
import { Meteor } from 'meteor/meteor';
import { Users } from './users.database.js';
import { Pets } from './pets.database.js';

Meteor.methods({
  async getUserData(name) {
    const user = await User.findOneAsync({ name });
    const userPets = await Pets.find({ owner: user._id }).fetchAsync();
    return { user, userPets };
  }
});

// client.js
const userData = await Meteor.callAsync('getUserData', 'Jon Doe');
```

_Using Callback_

```js


// server.js
import { Meteor } from 'meteor/meteor';
import { Users } from './users.database.js';
import { Pets } from './pets.database.js';

Meteor.methods({
  getUserData(name) {
    const user = User.findOne({ name });
    const userPets = Pets.find({ owner: user._id }).fetch();
    return { user, userPets };
  }
});

// client.js
Meteor.call('getUserData', 'Jon Doe', (err, userData) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(userData);
});

```

> As it was a recent adition to our source code,
> there are some limitations that we are working on to fix them. For now
> you read the limitations part bellow:

## The callAsync limitations

Never call a method before a previous one is finish. So, for example:

```js
// This is ok:

Meteor.call('removeByID', { id }, (error, result) => {
  // do something
});
Meteor.callAsync('removeByIDAsync', { id }).then(result => {
  // do something
});

// This is NOT ok:

Meteor.callAsync('removeByIDAsync', { id }).then(result => {
  // do something
});
Meteor.call('removeByID', { id }, (error, result) => {
  // do something
});

// instead, do it like this:

Meteor.callAsync('removeByIDAsync', { id }).then(result => {
  // do something
  Meteor.call('removeByID', { id }, (error, result) => {
    // do something
  });
});

// or this

await Meteor.callAsync('removeByIDAsync', { id });
Meteor.call('removeByID', { id }, (error, result) => {
  // do something
});

```

As `callAsync` returns a promise, it'll be solved in the future. So you need to wait until it finishes before calling
another method (async or not).

If you wish to understand why this limitation exist, you can
read [this comment](https://github.com/meteor/meteor/pull/12196#issue-1386273927) in the PR that created
the `callAsync`.

## Advanced usage

When you fell comfortable with the basics of Methods you can bring along some more advanced features.
That comes from the community. One that we recommend is [meteor-rpc](https://github.com/Grubba27/meteor-rpc) that
provides an End to End type-safe API for using Methods and subscriptions. One example of how to use it is:

```js

// tasks.mutations.js
import { createMethod } from 'grubba-rpc'
import { z } from "zod";

const DescriptionValidator = z.object({ description: z.string() });
export const insert = createMethod('task.insert', DescriptionValidator).expect(z.string());

// ---------

// tasks.methods.js
import { insert } from './tasks.mutations.ts'

insertTask = ({ description }) => {
  const taskId = TasksCollection.insert({
    description,
    userId: Meteor.userId(),
    createdAt: new Date(),
  });
  return taskId
};

insert.setResolver(insertTask);

// ---------


// client.js
import { insert } from './tasks.mutations.ts'

const taskId = await insert({ description: 'test' });

```

_Why use meteor-rpc?_

- It does schema validation on the server, so you can be sure that the data you are sending is correct.
- By using just one file for the mutations and another for the methods, you can easily see what is the input and
  output of each method.
- It provides a type-safe API for using methods and subscriptions.
- No more playing with strings to call methods, you can use the method name directly.

This is just a simple example of how you can use it. You can read more about it in
the [meteor-rpc](https://github.com/Grubba27/meteor-rpc) repo.

## Reference

For the full information about the methods, you can read the
[Meteor Methods](https://docs.meteor.com/api/methods.html) documentation.
There we have all the information regarding the methods API.
