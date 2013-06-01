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
otherwise you could have a privacy bug where info leaks between requests.
[contextify](https://github.com/brianmcd/contextify) may be good for this.

## How to use:

First:

`npm install`

To render on the command line:

`make commandline`

And to run the demo server:

`make server`

Go to [http://localhost:3000/client-rendered](http://localhost:3000/client-rendered) to see plain old client rendered.
Then go to [http://localhost:3000/server-rendered](http://localhost:3000/server-rendered) to see it server rendered.

Try turning off JS and revisiting those URLs.

Also you can try running multiple tabs to see the live updating in the demo.
