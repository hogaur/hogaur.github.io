---
layout: post
title: Learning Clojure
date:   2020-11-06
categories:
phrases: 'life gojek tech life@gojektech clojure functionalprogramming recursion'
type: BlogPosting, NewsArticle, Person, Organization, Hackathon, Brand, Atlas, Guide, Clojure, FunctionalProgramming
section: 'Life'
description: 'getting started with application development in Clojure Programming Language.'
image: ../assets/images/structure.jpg
---

In the previous blog, we learned the fundamentals of Clojure programming language. We also got used to the interactive Clojure development using the REPL and performed some basic operations in the REPL. In this blog, we will continue to learn by doing. Because, says Yoda -

<div style="text-align:center">
<img src="yoda-clojure.jpeg" />
</div>
<br>

We will learn how to create a basic Clojure application, and also how to load and execute code written in static source files into the REPL. As promised in part one, loop-recur and first-class function support are also covered in this blog. If you are new to Clojure programming language, I highly recommend for you to go through [Getting Started With Clojure](https://hariomgaur.in/2020/09/20/clojure-getting-started.html) first.

 > After a well-received step-by-step tutorial for getting started with Clojure, here is the much-awaited part two that builds up right from where we left in part one.  I hope this content helps folks understand some of the necessary and essential nuances while programming in Clojure programming language.

### A Brand New App

```
$ lein new strung
```
This simple command gets you going while starting the development of your app in Clojure programming language. It also helps maintain a sane and basic folder structure for your app. It is equivalent to `rails new` for all practical purposes. It gets you something like following in a folder called `strung` in the working directory.

```
/Users/hariomgaur/strung/
▾ doc/
    intro.md
▾ resources/
▾ src/app/
    core.clj
▾ test/app/
    core_test.clj
  CHANGELOG.md
  LICENSE
  project.clj
  README.md
```

Few things to note -
* Filenames in Clojure projects are in snake case like `ruby` :D
* There are separate directories for `src` and `test` unlike `golang`
* A very special `project.clj` file.

That's a pretty good folder structure that Leiningen scaffolds for you. Let's understand what are different parts of a typical Clojure app first.
* The `resources` directory is for assets like `config.edn` etc.
* The `src` folder is where the Code goes.
* The `test` folder is where the tests go.
* The `project.clj` file is a particular configuration file with information like the version of our app `strung` etc. It also specifies `strung`'s dependencies and workflows related to `strung`.
* `CHANGELOG.md` is a place to keep a comprehensive log of changes to `strung` as suggested in [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) site.
* `README.md`, as you must already be aware, is used to maintain a user-friendly guide to the app `strung`.
* `LICENSE` contains licensing information.

### Testing the Waters

Let's add the following piece of code in `core_test.clj` and run `lein test`.

```
(deftest string-equals-string-test
  (testing "That a string is equal to itself"
    (is (strequals? "string" "string"))))
```

We see a pretty neat output explaining the results of our test run. What
does it say?
```
Ran 2 tests containing 2 assertions.
1 failures, 0 errors.
Tests failed.
```

In this case, the test fails because the code doesn't understand the function `strequals?` yet. See if you figured that out from the following error message -

```
Caused by: java.lang.RuntimeException: Unable to resolve
symbol: strequals? in this context
```

Leiningen reports both `failures` and `errors` on each test run. Failures are the number of test cases where computation's actual result didn't match the expected value, also known as assertion failures. In contrast, the errors are the number of cases where the process crashed because of an error thrown during execution.

Now, Let's add the following to the `core.clj` file -

```
(defn strequals?
  "Checks whether two strings are equal"
  [string1 string2]
  true)
```

Rerun the tests, and you see that it passes now. Voila!

Congratulations, you just wrote your first test and the first function to make it pass in Clojure programming language.

### Loading and Executing Code in the REPL

```
$ lein repl
user=>(require 'strung.core)
nil
user=>(in-ns 'strung.core)
nil
strung.core=>(strequals?)
ArityException Wrong number of args (0) passed to: core/strequals?  clojure.lang.AFn.throwArity (AFn.java:429)
strung.core=> (strequals? "abv" "abv")
true
strung.core=>
```
In the above example, we started the REPL by simply firing the `lein repl` command on the terminal. To run a function already declared in a namespace, we first need to require that namespace in the REPL using the `(require 'strung.core)` where `strung.core` is the namespace where the required function is defined. Then, we need to run `in-ns` to jump into the required namespace. And by just doing these two steps, we can run any function defined in a given namespace.

> You might have noticed that we have put a single quote in front of the namespace's name while calling `require` and `in-ns`. The `quote` or `'` is used to render an unevaluated form. While passing arguments to a function, if there need be that you don't want to evaluate the contents you are passing to the function call, you can use `'` to pass them as it is without being evaluated beforehand. 

### Defining & Grouping Tests in Clojure

Clojure has an inbuilt `clojure.test` unit-testing framework. Unit testing is about testing the smallest part of your Code in isolation. The underlying idea is that all the small-small parts of your Code have to work and perform as per their specification for whole of your app to work in entirety.

Typically, the unit under test is a function. One can define a test using `deftest` in Clojure and group multiple assertions together with `testing`. Assertions are the core of any testing framework. Clojure provides assertions with an already defined `is` macro with which you can check any arbitrary expressions. Simple, isn't it? e.g.

```
user=> (require '[clojure.test :refer :all])
user=> (is (= 5 (+ 2 2)))

FAIL in () (NO_SOURCE_FILE:1)
expected: (= 5 (+ 2 2))
  actual: (not (= 5 4))
false
user=> (is (= 4 (+ 2 2)))
true
user=>
```

### Functions functions everywhere
You can define a function in Clojure by merely calling `defn`.
```
user=> (defn my-func []
(println "You rock, dear lil punk"))
#'user/my-func
user=> (my-func)
You rock, dear lil punk
nil
user=>
```
You can specify the arguments that you want to call the function within the square brackets after the function name, and they will be available for your use in the function body. e.g.
```
user=> (defn my-func [name]
(println (str "You rock, " name ". You lil punk!")))
#'user/my-func
user=> (my-func "hogaur")
You rock, hogaur. You lil punk!
nil
user=>
```
One can create a function using `(fn [] ..)` as well. This returns a value that can be bound to a name and can be passed to another function, and can be returned from your funciton etc.

### Looping in Clojure

Let's understand the looping in Clojure with an example,
```
user=> (def names ["deba" "shukla" "guru" "hari"])
user=> (loop [x names] 
  (when (pos? (count x))
    (println (str "friend of - " (first x))) 
    (recur (rest x))))
friend of deba
friend of shukla
friend of guru
friend of hari
nil
user=>
```
You would have noticed by now that the `loop` form in Clojure is not similar to the `for` construct in many other programming languages. It is like the way it is there to do recursion based iterations rather than making changes with side-effects based looping. 

The `loop` in Clojure starts with initial binding values for the loop. In our example above, we are binding x with names. We had already defined names a line before, and here we tell the `loop` form to start looping with the initial value of x as defined by the names. Then there is the loop body.

An interesting thing to note here is that it includes a `recur` form inside it. The `recur` form must have the same number of bindings as defined in the loop's starting. We then use the `when` conditional to see if the size of `x` is greater than 0 with `(pos? (count names))`.

We print the first name in a formatted string `(str "friend of" (first names))` if the size is greater than 0 and ask to rerun the loop with the rest of the names `(rest names)`. The loop exits when the condition fails to match i.e., when all the names are taken out using the rest function, and the size of names drop to zero. 	

### Epilogue

<div style="text-align:center"><img src="clojure-gloves-on.jpeg" /></div>
<br>

That's it for today folks. Hope the content in this post helped you get
your hands dirty with some Clojure programming. I certainly have got my
Clojure gloves on, have you?

I am a Product Engineer, leading the event-driven development framework team in Gojek. I have been writing Clojure for the past three years on and off at work.

On a day to day basis, I work on improving the [Ziggurat framework](https://github.com/gojek/ziggurat) that we have built at Gojek. More than 250 applications run in production that leverage the power of this framework to consume, process millions of events every minute to deliver business value. If you like what we do, don't forget to star the repo and leave your suggestions and feature requests in Github's issues section.

### References

- [Getting Started With Clojure](https://hariomgaur.in/2020/09/20/clojure-getting-started.html)
- [Leiningen Getting Started](https://github.com/technomancy/leiningen/blob/stable/doc/TUTORIAL.md)
- [Clojure Functional Programming](https://clojure.org/about/functional_programming)
- [Clojure Testing Framework](https://clojuredocs.org/clojure.test)
- [Looping in Clojure](https://clojuredocs.org/clojure.core/loop)
