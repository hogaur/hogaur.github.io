---
layout: post
title: Lein & Clojure
date:   2021-04-04
categories:
phrases: 'life gojek tech life@gojektech learnings'
type: BlogPosting, NewsArticle, Person, Organization, Hackathon, Brand, Atlas, Guide, Failures, Learnings
section: 'Life'
description: 'Dependency management for Clojure Applications'
image: ../assets/images/unsplash-cover-default.jpg
---

<div style="text-align:left"><img src="blocks.gif" /></div>
<br>

In this blog, I want to put across my unbiased opinion about two unique tools from the world of Clojure programming.
The tools I am talking about are `leiningen` and relatively new `clojure` dev tools.

Please note that I am not talking about Clojure, the language. I am talking about clojure, as in the developer tools.

Clojure is a fantastic functional programming language. In the previous two blog posts, we talked about [the Clojure programming language basics](http://hariomgaur.in/2020/09/20/clojure-getting-started.html) and [how to get started with app development in the Clojure programming language](http://hariomgaur.in/2020/11/06/learning-clojure.html). Thank you, folks, for receiving both the previous blog posts very well.

This blog post will cover an essential topic for application development in any programming language - dependency management. And some examples covering the same for Clojure.

### Dependency management

What comes to your mind when you hear this phrase, Dependency
Management?

Here is what comes to my mind. I am writing code. As a developer, I want to use code written by others.

While one can write everything themselves, it is much better to re-use others' work rather than reinventing the wheel again and again.

Bundler, leiningen, Gradle are some tools that do dependency management for developers.

Developers are often considered mere plumbers at times. For what they do, they just put pieces together and make them work. That doesn't mean that they don't create value or push something out that is important. When put together, these tools and systems serve critical business functions. Running these systems is not less than art either.

So, developers want to work on business logic. They often want to get started with the help of what others have done already before them. They do this by including the code written by others into theirs.

> [Everyone wants to stand on the shoulders of the giants.](https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants)

### But how do it know?

<div style="text-align:left"><img src="waitforit.gif" /></div>
<br>

Clojure libraries are distributed as jars. JAR files are Java Archive
files. They can contain many files and folders. You can think of them as
zip files. These can also have special attributes that are useful for
distribution of java programs. Developers publish their programs
as JARs to various central repositories like maven, clojars, etc.

To use code written by others, one needs to download these
files and efficiently use them. That precisely, my friend, is
the job of a dependency management tool.

#### Examples

Lein deps and `deps.edn` are two main tools out there for Clojurists. Both of them help you define the dependencies. Let's see how.

#### Using lein deps

Create a new file called `project.clj` in your project directory. If you
use Leiningen to create a new project, it makes this file for your
automatically.

The file created after running `lein new app
my-awesome-project` looks like this -

```
(defproject my-awesome-project "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]]
  :main ^:skip-aot my-awesome-project.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
```

Apart from telling the details about the project like its name,
description, which namespace to use as main when executing the application, etc, it helps us define dependencies in a declarative way.

In the vector following the `:dependencies` key, one can define as many
libraries, with their respective versions (recommended) one by one.
One can't help but notice that Clojure itself is just defined as a
dependency here. It helps one run as many different versions of Clojure
applications on their system. Also, upgrading or downgrading the language
is merely about changing the version defined in the `project.clj` file.

If we want to add other dependencies, we can add them next to the
Clojure dependency in the
same vector. Say, we wanted to use [Ziggurat](github.com/gojek/ziggurat) in our next project to
process kafka streams in production reliably, we can do that
by just adding this to the `:dependencies` vector -

`
[tech.gojek/ziggurat "3.11.0"]
`

The resulting vector will look like -
```
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [tech.gojek/ziggurat "3.11.0"]]
```

#### Using deps.edn

Create a new file called `deps.edn` in your project directory.

edn is a format for serializing data. In this particular case, we will use this file to declare dependencies for our application.

Adding dependencies using this file is as simple as following -

```
{:deps
 {tech.gojek/ziggurat {:mvn/version "3.11.0"}}}
```

And the next time one runs clj, this dependency is downloaded and made
available.

Because the value mapping to `:deps` keyword is just another map, we can
continue to add dependencies as key value pairs to it to include them in
our project like this -

```
{:deps
  {tech.gojek/ziggurat {:mvn/version "3.11.0"}
   clojure.java-time/clojure.java-time {:mvn/version "0.3.2"}}}
```

#### Using a local dependency

While working on extracting libraries or developing them, one often wants
to use dependencies from their local machine before publishing them to
central repositories like clojars.

To achieve this with Lein, one first needs to install the latest version
of the dependency locally by running `lein install`.

Post this, one just needs to use the new version in their project.clj
and it works.

However, clj provides a much more declarative way to achieve this.

To include a local dependency, one can define a local coordinate in the
`deps.edn` file and give the path to the root of the dependency under
development like this -

```
{:deps
 {my-lib/my-lib {:local/root "../my-lib"}}}
```

### Running the REPL

Every clojure developer must make it a habit to work with the REPL.

Both of these tools, internally run java command to run the REPL as demonstrated below -

```
(base) ➜  ~ lein repl
OpenJDK 64-Bit Server VM warning: Options -Xverify:none and -noverify were deprecated in JDK 13 and will likely be removed in a future release.
nREPL server started on port 52967 on host 127.0.0.1 - nrepl://127.0.0.1:52967
REPL-y 0.4.4, nREPL 0.7.0
Clojure 1.10.1
OpenJDK 64-Bit Server VM 15.0.1+9
    Docs: (doc function-name-here)
          (find-doc "part-of-name-here")
  Source: (source function-name-here)
 Javadoc: (javadoc java-object-or-class-here)
    Exit: Control+D or (exit) or (quit)
 Results: Stored in vars *1, *2, *3, an exception in *e

 ```

results into

```
/usr/bin/java -Dfile.encoding=UTF-8 -Dmaven.wagon.http.ssl.easy=false -Dmaven.wagon.rto=10000
-Xbootclasspath/a:/usr/local/Cellar/leiningen/2.9.4/libexec/leiningen-2.9.4-standalone.jar
-Xverify:none -XX:+TieredCompilation -XX:TieredStopAtLevel=1 -Dleiningen.input-checksum=
-Dleiningen.original.pwd=/Users/hariomgaur -Dleiningen.script=/usr/local/bin/lein
-classpath :/usr/local/Cellar/leiningen/2.9.4/libexec/leiningen-2.9.4-standalone.jar
clojure.main -m leiningen.core.main repl
```

While,
 ```
(base) ➜  ~ clj
Clojure 1.10.2
user=>
user=>
 ```

results into

```
/usr/bin/java -Dclojure.basis=/Users/hariomgaur/.clojure/.cpcache/3003624145.basis
-classpath src:/Users/hariomgaur/.m2/repository/org/clojure/clojure/1.10.2/clojure-1.10.2.jar:
/Users/hariomgaur/.m2/repository/org/clojure/core.specs.alpha/0.2.56/core.specs.alpha-0.2.56.jar:
/Users/hariomgaur/.m2/repository/org/clojure/spec.alpha/0.2.194/spec.alpha-0.2.194.jar clojure.main
```

While both Clojure and lein can fire the REPL, there are some
differences as captured in the following table -


 Leiningen      | Clojure |
:-------------| :-----|
starts two REPls, one to run the code and one for its own | only one REPL is started |
supports working with artifacts only published as jar | simplifies to work with libraries under active development |
Loads dependencies using project.clj file | loads dependencies deps.edn file |
plugin management and user profile management supported | other clojure libraries can be used with alias command  |
significant startup time | only faster |
provides lein uberjar step to build one jar file for the entire project | one can use uberdeps with alias to achieve the same |
prints jdk related warnings on startup | you're on your own |
provides directions to use | plain vanila REPL |
has been defacto tool for clojure development | new default that is rapidly gaining traction |
provides code scaffolding capabilities with lein new app | one can use clj-new with alias to achieve the same|

Lein is not just a REPL runner. May once it was. The same is true for clojure, though.

As a wise woman once said,
> Humble beginnings pave the path for grand successes.

### Epilogue

As a parting thought, would I recommend you to switch to using clj from lein?
Not necessarily.

If you are using lein already in a project and have done significant build automation around it, you can keep running it.

For learning and development purposes, clojure is perfect as well.
So, if you are using a new project, using clj and deps.edn is a great way to get started with it.

That's it for today folks. Hope the content in this post helped you get
better understanding of dependency management for Clojure projects.

I am a Product Engineer, leading the event-driven development framework team in Gojek. I have been writing Clojure for the past three years on and off at work.

On a day to day basis, I work on improving the [Ziggurat framework](https://github.com/gojek/ziggurat) that we have built at Gojek. More than 250 applications run in production that leverage the power of this framework to consume, process millions of events every minute to deliver business value. If you like what we do, don't forget to star the repo and leave your suggestions and feature requests in Github's issues section.

Thank you for making it so far. I want to thank you, each one of you.
Thanks all for the review and comments. Cheers.

<div style="text-align:left"><img src="gracias.gif" /></div>
<br>
