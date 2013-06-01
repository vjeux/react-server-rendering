# React server rendering demo

## THIS IS NOT OFFICIALLY SUPPORTED.

We aren't prepared to support this in any way other than casually. But React
does have a test case to ensure that the core works outside of the browser
and we're committed to keeping it working. So if you want to build better
server rendering bindings for React on top of this, be my guest!

## Warning!

We've tried to do a pretty good job of keeping React modules with minimal
internal state, but if you were to roll this out in production you would
need to make sure that you clear your module cache between requests,
otherwise you could have a privacy bug where info leaks between requests
because some state may be lingering inside of your modules.
[contextify](https://github.com/brianmcd/contextify) may be good for this.

## What is this?

This is a demo of running React on the server to generate the HTML and send
it down. JavaScript only attaches the event listeners and leaves the markup
intact.

We don't use any sort of fake DOM (jsdom, phantom etc) -- we've just designed
React from the ground up to not depend on the browser. So it's fast and
memory efficient.

## Why do I want this?

Googlebot, and initial page load times, and overall flexibility in how you
can build your app.

## How to use:

First:

`npm install`

To render on the command line:

`make commandline`

And to run the demo server:

`make serve`

Go to [http://localhost:3000/client-rendered](http://localhost:3000/client-rendered) to see plain old client rendered.
Then go to [http://localhost:3000/server-rendered](http://localhost:3000/server-rendered) to see it server rendered.

Try turning off JS and revisiting those URLs.

Also you can try running multiple tabs to see the live updating in the demo.

## Why can't I see the comments with JavaScript disabled?

Because we're fetching them via AJAX. You could just as easily preload your comments
by designing a fetching API that works on the client and the server, and set up the
initial state of your component on the server such that the commments are there
on initial load. But I wanted to take an unmodified example that was not designed
for server rendering and add server rendering to it.
