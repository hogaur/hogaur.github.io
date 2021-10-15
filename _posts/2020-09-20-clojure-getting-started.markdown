---
layout: post
title:  Getting Started with Clojure
date:   2020-09-20
categories:
phrases: 'clojure getting started beginner guide'
section: 'Life'
description: 'The best Clojure Primer you will find on the internet today.'
---

This is a step-by-step tutorial to help you discover Clojure idioms in your terminal at the convenience of your fingertips. This blog post assumes that you have prior experience of writing code in a programming language. While that will help, if you don't have any previous coding experience, you should still follow most of the content with ease.

### The Clojure Programming Language

First things first, let's get some basic stuff setup. If you are on a Mac, you can do this by simply running the following command in your terminal.

 `brew install clojure/tools/clojure`

This will install the Clojure command line tools for you. After running this on your machine, you should be able to use `clj` to fire up the Clojure REPL in your machine.

```clojure
~ > clj
user=>
 ```
This step assumes that `java` command is available on the path. Clojure needs java. Wait, but why?

Clojure is an open-sourced, dynamic, general-purpose programming language. Rich Hickey created Clojure during his sabbatical while living on his retirement savings. He is considered BDFL (Benevolent dictator for life) for the Clojure community. Like Linus for linux, Matt for ruby etc.

It is fairly new as well.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Clojure is almost15 years younger than me. Oct 17, 2007 is my new friend&#39;s birthday.</p>&mdash; HariOm Gaur (@hogaur) <a href="https://twitter.com/hogaur/status/1302197478058463234?ref_src=twsrc%5Etfw">September 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


### But why do I need to install Java?

> Clojure is a hosted language, by choice.

Unlike many other programming languages, like most of them, e.g., Ruby, Python, Java, Golang, Clojure is a hosted language. That means you need a separate runtime to run your Clojure code as it doesn't provide one itself. To run Clojure programs, they are first compiled into Java bytecode and executed within a JVM. And JVM runs Clojure code just like it runs any Java bytecode for that matter.

At first, that might sound like a limitation, but it isn't really one if you look at it in another way. Clojure programs leverage many of the core features of JVM, like threading and garbage collection. JVM is a standard for enterprise application development. And having the ability to seamlessly run on top of it only boosts Clojure's powers.

Congratulations! You got the Clojure Programming Language successfully installed in your machine. And its dependencies are also set up using the magic wand of homebrew.

### Leiningen FTW

Next, you will need to install Leiningen.

> Leiningen is the build automation and dependency management tool for Clojure programming language.

We will use Leiningen to build and run our Clojure code, among other things. In many ways, Leiningen is like what is Gradle for java projects or Bundler for ruby projects. It helps you answer some of the most fundamental questions about your project, like what all dependencies my Clojure code will need for it to successfully build and run, And what will be the starting point of my Clojure code, i.e., when I run my Clojure code which function is going to be run first of them all.

Leiningen does its job by defining a configuration file called `project.clj.` This file is pretty much similar to what you would have seen already in other projects of familiar languages e.g., `build.gradle` for Java projects and `package.json` for javascript projects... This file encapsulates all the information that Lein needs to do its job for you. You guessed that right, nothing so special going on here.

Just simply run,

 `brew install leiningen`

And that should do the job for you. After Leiningen's successful installation, you see a pretty message being printed by homebrew on your screen. Look at what it says -

```shell
To play around with Clojure run `lein repl` or `lein help`.
```

That brings us to our next topic of interest.

### The powerful REPL

While I was learning ruby for the first time, I often wanted to run small snippets of my code on the go to understand what tutorials or books were asking me to do. I heavily used IRB for those purposes. Similarly, the python interpreter helped me learn python. I still use these tools on a day to day basis to try different things out, be it new idioms like reducing an array to a collection or just to check the return value of small functions. They often help with debugging as well.

The REPL is an abbreviation of "*Read, Eval, Print Loop"*. There, I said it. It does nothing but reads the code you give it to read, evaluates it, meaning, runs it for you, prints the results on your screen, and then just keeps doing this same damn thing repeatedly for your convenience. It is what `irb` is to the ruby development process, only much-much more powerful. So much so that it feels to be on steroids all the time.

The REPL is a vital tool while you get started with coding in Clojure. It lets you experiment with your code, tinker with new ideas, and also allows you to *interact with a running program in real-time*. Imagine, you faced a bug while integration testing your backend service in a staging environment, you can just connect to the REPL server, add print statements, try some tweaks here and there and find that point where the code misbehaved pretty much very quickly. Thus, making debuggability super easy and fun.

The REPL provides a rapid feedback cycle for the functioning of your code. Unlike many other languages, it allows you to experiment with the code that you wrote in your IDE in a separate process on the runtime itself. I feel that is something that comes very handy to both newbies and experts alike.

Without waiting any further, let's fire it away.

```shell
~ > lein repl                                                                                                                                                            17:45:44
nREPL server started on port 62031 on host 127.0.0.1 - nrepl://127.0.0.1:62031
REPL-y 0.3.7, nREPL 0.2.12
Clojure 1.8.0
Java HotSpot(TM) 64-Bit Server VM 1.8.0_121-b13
    Docs: (doc function-name-here)
          (find-doc "part-of-name-here")
  Source: (source function-name-here)
 Javadoc: (javadoc java-object-or-class-here)
    Exit: Control+D or (exit) or (quit)
 Results: Stored in vars *1, *2, *3, an exception in *e
user=>
```

Look at the output, and let's observe how friendly it is.

It helps you with a few basic things you can do while you are in a REPL.

Like you can find documentation of a function by simply running `(doc function-name-here)`. And you can check the original source code of a procedure by simply writing `(source function-name-here)`. Feeling the friendliness and the power already?

> Clojure is impressively consistent, expressive & beautiful.

Although it might just be for the Brave and True, this programming language, when seen with the lens of rainbow parenthesis, looks and feels just like pure logic. Because Clojure is a dynamic language, you don't see any types coming in your way while reading what operations are being done on what data. You only read and write what you intend to do with what you have.

Let's try one of those help texts out and see what we get. Enter the REPL, and try running

```clojure
user=> (doc foobar)
nil
user=>
```

You can try this example with anything that is a valid symbol in Clojure instead of foobar. Symbols in Clojure can consist of letters, numbers, or punctuations. Symbols are selfless. They are only used to represent something else, like functions or values. In this example, doc expects a function-name as an argument, and on not finding any such function referred with the symbol named foobar, returns nothing.

Go ahead; try a few other symbols out as well. See if you can guess a function that would pre-exist in the Clojure library. Maybe there is one you could use to print values and stuff.

```clojure
user=> (doc print)
-------------------------
clojure.core/print
([& more])
 Prints the object(s) to the output stream that is the current value
 of *out*.  print and println produce output for human consumption.
nil
user=>
```
You guessed it right, this works. But why's there `nil` printed at the end? Did you wonder about that as well? Trying for another valid function name, it still gets printed, how come?

```clojure
user=> (doc println)
-------------------------
clojure.core/println
([& more])
 Same as print followed by (newline)
nil
user=>
```

`nil` is one of the three special symbols that are read as different data types in themselves, along with `true` and `false.` As you might have guessed already, nil is to represent null value (or void or no value) and true/false represent boolean values.

Strange, there is something weird going on here, it seems. To understand this behavior, let's go back to the full form of REPL itself i.e., *Read, Eval, Print, Loop*. Let's check the documentation for the `doc` as well.

```clojure
user=> (doc doc)
-------------------------
clojure.repl/doc
([name])
Macro
 Prints documentation for a var or special form given its name
nil
user=>
```

A reasonable explanation for this behavior goes like this - doc is macro that accepts one argument: the name of a var or a function (or a special form, whatever that is) and prints its documentation on the screen. Combined with REPL's behavior of evaluating and printing the result on the screen after reading the user's input and looping to give back the prompt, this means that REPL executed the doc macro (E part in REPL), which then printed the documentation, then printed the result of the evaluation (the P part in REPL) on the screen for the user as well. The `nil` that we see on the screen is actually the return value of the expression that we ran in the first place.

>  Everything is a form in Clojure.

Like in Ruby, everything is an object; in Clojure, every valid piece of code is a form. All the Clojure forms basically look the same from outside because they are wrapped in a pair of parentheses. So if you want to write any Clojure code, you must start to habituate looking at brackets everywhere. All Clojure code has this one thing in common; it is encapsulated in a pair of opening and closing brackets. So all logic looks the same!

All the expressions we tried in the REPL until now, including the one with the foobar, are Clojure forms. So let's write the form that shall say Hello to the world for us -

```clojure
user=> (println "Hello World!")
Hello World!
nil
user=>
```

That's it! You did it! You ran the most basic form of them all. And now you know how to say Hello in one more language. Heartiest Congratulations to you.

### The Life, the Universe, and Everything

We just saw that to print stuff in Clojure, you simply say (print "Hello world"), which does the job. 

Let's say we wanted to join two strings and print the result; we can do that by simply writing this.

```clojure
user=> (str "Hello World" " & beyond")
"Hello World & beyond"
user=>
```

Here `str` is a function provided by the core library being used to join the two string literals that are simply being passed to it.

```clojure
user=> (doc str)
-------------------------
clojure.core/str
([] [x] [x & ys])
 With no args, returns the empty string. With one arg x, returns
 x.toString().  (str nil) returns the empty string. With more than
 one arg, returns the concatenation of the str values of the args.
nil
user=>
```

Let's get a little more interactive and explore how we can use values returned by previous evaluations in the REPL.

```clojure
user=> (str "Hello World")
"Hello World"
user=>
user=> (str "Hariom says " *1)
"Hariom says Hello World"
user=>
user=> (str " And the world responds to " *2)
" And the world responds to Hello World"
user=>
user=> (str *2 *1)
"Hariom says Hello World And the world responds to Hello World"
user=>
```

Don't worry! *Clojure doesn't have pointers*. And you will just understand what is happening in a little while.

While working with an interactive environment, I often find the need to access the results of the expression I evaluated last. In ruby, I execute `my_obj=_` using IRB's `_`operator, and the last returned object is set to the variable `my_obj`. In Clojure, I can achieve the same by using the special symbols `*1`, `*2`, `*3`. They remember the results of evaluating the last three expressions or forms. With this knowledge, when you look at the example above, it should make sense to you.

Similarly, let's look at another basic Clojure construct that will help us in our day to day programming.

To make conditional executions, you have got the standard `if` construct that can be used in the following manner -

```clojure
user=> (if "god"
 #_=> (println "pray!")
 #_=> (println "preach!"))
pray!
nil
user=>
```

At a glance, you can see that the whole thing starting with `(if` and ending with `))` is a Clojure form. The structure of the `if` form itself is comprised of at most three forms- first a conditional form, second a then form, and a third and optional else form. If the condition evaluates to true, the then form is executed; otherwise, the else form. All Clojure forms return values. The result of either `then` or `else` form is returned when an `if` form is evaluated. And when there is no else form, `nil` is returned. There is no explicit return keyword in Clojure.

### Epilogue

While I have tried to cover most of the basic concepts, there are a lot of things that you will still might need to read and understand before writing meaningful Clojure code yourself. Please check out the reference section for the links to the official sites of few of the awesome Clojure resources.

I have intentionally left out a lot of concepts to keep it simple and silly. Ideas like `loop-recur` and Clojure's first class function support are among those that I plan to dedicate a few of my posts to shortly.

I have been writing Clojure code for almost the last three years on and off. And have been working with the team that has written the framework to write event-driven applications at scale, called [Ziggurat](http://github.com/gojek/ziggurat). At Gojek, more than 250 applications run in production that leverage Clojure's and this framework's power to consume and process millions of events every minute to deliver business value.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">At Gojek, we have written a framework to write event-driven services at scale in Clojure. Please check it out, try it, raise issues, and shower some love.<a href="https://t.co/GtF2rGVmTG">https://t.co/GtF2rGVmTG</a></p>&mdash; HariOm Gaur (@hogaur) <a href="https://twitter.com/hogaur/status/1302201916512858112?ref_src=twsrc%5Etfw">September 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

To conclude, here's a wish from the author of the language himself.

> I hope you find Clojure's combination of facilities elegant, powerful, practical and fun to use.
>
> ~ Rich Hickey
> author of Clojure and CTO Cognitect
>
> from [clojure.org](http://www.clojure.org)

### References

- [Notes on the History of Clojure Paper](https://twitter.com/hogaur/status/1302181289479430146)
- [A History of Clojure: A paper by Rich Hickey himself](https://t.co/UIPDWeE6HA?amp=1)
- [Brave Clojure Getting Started](https://www.braveclojure.com/getting-started/)
- [Clojure Org's Syntax Guide](https://clojure.org/guides/learn/syntax)
- [Leiningen Getting Started](https://github.com/technomancy/leiningen/blob/stable/doc/TUTORIAL.md)
