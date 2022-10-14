---
title: Introduction
description: Meteor introduction
layout: ../../../layouts/MainLayout.astro
---

## What is MeteorJS?

MeteorJS is a fullstack JavaScript framework for developing cross-platform web apps using a unique codebase, it has been
used in production grade apps for the last 10 years.

It is a complete platform with a set of tools and libraries that allow you to build apps faster and with less code.
MeteorJS is known for apps that can have real-time capabilities and are easy to build, easy to maintain, and easy to
scale.

A few examples apps made with MeteorJS are RocketChat, CodeSignal, WeKan, Favro, MeteorCloud and many more, you can
check a bigger list [here](https://www.meteor.com/developers/showcase).

## Key Features:

- Isomorphic code and full integration with the JavaScript/TypeScript ecosystem.
- Built-in authentication system.
- Easy fullstack development with [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) and DDP
- MongoDB configured out of the box
- UI Agnostic (you can use React, Vue, Svelte, Blaze, etc...)
- Without configuration real-time capabilities
- Fast development with hot code push
- Easy to scale & deploy with Meteor Galaxy using meteor CLI
- Optimistic UI out-of-the-box.

## Design Goals

- Extraordinary productivity and Developer experience.
- Performance and Scalability.
- Isomorphic code.

## How MeteorJS is different from other frameworks?

First of all, MeteorJS is opinionated on how you should run your server. As for the frontend, you can use any framework
you want.
As default, we use MongoDB, but you can fairly easy integrate with any Database that you want.

What MeteorJS brings to the table as a server side javascript framework is how it handles the client-server
communication.
There is nothing better than showing images:

Traditional apps:
![Traditional Apps.](/introduction-imgs/traditional_apps.png)

Is just a client made with any JavaScript framework communicating with a server using REST API recivieng requests and
giving responses back. It is a very common way to build apps, but it has some problems:

- You need to write a lot of code to handle the requests and responses.
- You need to write a lot of code to handle the authentication.
- You need to write a lot of code to handle the data validation.
- Your server may want to send data to the client.

In MeteorJS apps:

![MeteorJS Apps.](/introduction-imgs/meteor_apps.png)

You can see that the client is communicating with the server using DDP (Distributed Data Protocol), it is a protocol
that MeteorJS uses to communicate with the server. It uses WebSockets to communicate under the hood. It is a
bidirectional protocol, so the server can send data to the client without the client asking for it.

Also, because we are in one big JavaScript codebase, we can use the same code to run on the server and on the client:
for
example, we can use the same code to validate data on the server and on the client.

### RPCs

MeteorJS can use RPCs (Remote Procedure Calls) to communicate with the server. It is a way to call a function on the
server
from the client. It is a very common way to communicate with the server, but MeteorJS has some nice features that make
it really simple to use RPCs.

On the docs you can see them being referred as Meteor Methods.

### Publications

MeteorJS can use Publications to communicate with the server. It is a way to send data from the server to the client.
The idiomatic way of doing this is by calling your mongo collection and using the `.find()` method. MeteorJS has some
nice features that make it really simple to use Publications.

On the docs you can see them being referred as Meteor
Publications.

You can think of them like having a Subscription to a collection on the client. whenever the data changes on the server
it will be updated on the client.

## About the guide

This guide is a work in progress, it is being written by the community, and it is open to contributions. 
Also, there is the API docs that you can check [here](https://docs.meteor.com/) if you want to have the full description about the API. 
