---
layout: post
title: Learning Clojure Programming Language
date:   2020-11-06
categories:
phrases: 'life gojek tech life@gojektech clojure functionalprogramming recursion'
type: BlogPosting, NewsArticle, Person, Organization, Hackathon, Brand, Atlas, Guide, Clojure, FunctionalProgramming
section: 'Life'
description: 'A step-by-step guide to learn coding in Clojure by doing'
---

*A step-by-step guide to learn coding in Clojure by doing*

After a well-received step-by-step tutorial for getting started with Clojure, here is the much-awaited part two that builds up right from where we left in part one. We continue to learn by doing and by diving into Clojure programming using the REPL. As promised in part one, loop-recur and first-class function support are also covered.

I believe this content helps folks understand some of the necessary and essential nuances while programming in Clojure programming language. 

### Leiningen's prowess

$ Lein new my_app
This simple command gets you going while starting the development of your app in Clojure programming language. It also helps maintain a sane and basic folder structure for your app. It is equivalent to `rails new` for all practical purposes. It gets you something like following in a folder called my_app in the working directory.

```
/Users/hariomgaur/my_app/
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
* filenames in snake case
* separate directories for `src` and `test`
* `project.clj` file.

That's a pretty good folder structure that Leiningen scaffolds for you. 
* The `resources` directory is for assets like config.edn etc.
* The `src` folder is where the Code goes.
* The `test` folder is where the tests go.
* The `project.clj` file is a particular configuration file with information like the version of `my_app` etc. It also specifies `my_app`'s dependencies and workflows related to `my_app`.
* `CHANGELOG.md` is a place to keep a comprehensive log of changes to `my_app`.
* `README.md`, as you might be aware, already is used to maintain a user-friendly guide to `my_app`.
* `LICENSE` contains licensing information.

### First test & the first piece of Code

```
(deftest string-equals-string-test
  (testing "That a string is equal to itself"
    (is (strequals? "string" "string"))))
```

Add this in `core_test.clj` and run `lein test`. 
```
Ran 2 tests containing 2 assertions.
1 failures, 0 errors.
Tests failed.
```
And it fails because it doesn't understand the function `strequals?`.
```
Caused by: java.lang.RuntimeException: Unable to resolve symbol: strequals? in this context
```

Leiningen reports both failures and errors on each test run. Failures are the number of test cases where computation's actual result didn't match the expected value, also known as assertion failures. In contrast, the errors are the number of cases where the process crashed because of an error thrown during execution. 

Let's add the following to the `core.clj` -

```
(defn strequals?
  "Checks whether two strings are equal"
  [string1 string2]
  true)
```

Rerun the tests, and you see that it passes now. 
Congratulations, you just wrote your first test and the first function to make it pass in Clojure programming language.

Loading and Running your Code in REPL
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
In the above example, we started the REPL by simply firing the `lein repl` command on the terminal. To run a function already declared in a namespace, we first require that namespace in the REPL using the `(require 'strung.core)` where `strung.core` is the namespace where the required function is defined. Then, we need to run `in-ns` to jump into the required namespace. And by only doing these steps, we can run any function defined in a given namespace.

You might have noticed that we have put a single quote in front of the namespace's name while calling `require` and `in-ns`. The `quote` or `'` is used to render an unevaluated form. While passing arguments to a function, if there need be that you don't want to evaluate the contents you are passing to the function call, you can use `'` to pass them as it is without being evaluated beforehand. 

### A little bit more about the deftest and testing

Clojure has an inbuilt `clojure.test` unit-testing framework. Unit testing is about testing the smallest part of your Code in isolation. The underlying idea is that all the small-small parts of your Code have to work and perform as per their specification for your app to work. Typically, this unit under test is a function. One can define a test using `deftest` and group multiple assertions together with `testing`. Assertions are the core of any testing framework. Clojure does this with an already defined `is` macro with which you can check any arbitrary expressions. Simple, isn't it? e.g.
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
One can create a function using (fn [] ..) as well. This returns a value that can be bind to a name and can be passed to another function, and can be returned from your funciton etc.

### Looping

Lets understand the looping in Clojure with an example,
```
user=> (def names ["deba" "shukla" "guru" "hari"])
user=> (loop [x names] 
  (when (pos? (count x))
    (println (str "CI employee - " (first x))) 
    (recur (rest x))))
friend of deba
friend of shukla
friend of guru
friend of hari
nil
user=>
```
You would have noticed by now that the `loop` form in Clojure is not similar to the `for` construct in many other programming languages. It is like the way it is there to do recursion based iterations rather than making changes with side-effects based looping. 

The `loop` in Clojure starts with initial binding values for the loop. In our example above, we are binding x with names. We had already defined names a line before, and here we tell the `loop` form to start looping with the initial value of x as defined by the names. Then there is the loop body. An interesting thing to note here is that it includes a `recur` form inside it. The `recur` form must have the same number of bindings as defined in the loop's starting. We then use the `when` conditional to see if the size of `x` is greater than 0 with `(pos? (count names))`. We print the first name in a formatted string `(str "friend of" (first names))` if the size is greater than 0 and ask to rerun the loop with the rest of the names `(rest names)`. The loop exits when the condition fails to match i.e., when all the names are taken out using the rest function, and the size of names drop to zero. 	

### Epilogue

I am a Product Engineer, leading the event-driven development framework team in Gojek. I have been writing Clojure for the past three years on and off at work. On a day to day basis, I work on improving the [Ziggurat framework](https://github.com/gojek/ziggurat) that we have built. At Gojek, more than 250 applications run in production that leverage the power of this framework to consume, process millions of events every minute to deliver business value. If you like what we do, don't forget to star the repo and leave your suggestions and feature requests in Github's issues section.

### References

- [Leiningen Getting Started](https://github.com/technomancy/leiningen/blob/stable/doc/TUTORIAL.md)
- [Clojure Functional Programming](https://clojure.org/about/functional_programming)
- [Clojure Testing Framework](https://clojuredocs.org/clojure.test)
- [Looping in Clojure](https://clojuredocs.org/clojure.core/loop)
