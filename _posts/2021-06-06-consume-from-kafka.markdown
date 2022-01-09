---
layout: post
title: Apache Kafka & Ziggurat
date:   2021-06-06
categories:
phrases: 'life gojek tech life@gojektech learnings'
type: BlogPosting, NewsArticle, Person, Organization, Hackathon, Brand, Atlas, Guide, Failures, Learnings
section: 'Life'
description: 'an easy and reliable way to consume messages from Apache Kafka.'
image: ../assets/images/unsplash-cover.jpg
---

<iframe src='https://gfycat.com/ifr/DearThirstyBoutu' frameborder='0' scrolling='no' allowfullscreen width='720' height='412'></iframe><p> <a href="https://gfycat.com/dearthirstyboutu">via Gfycat</a></p>

Kafka is an open-source tool that has rapidly gaining industry traction. A lot of Fortune 500 companies use Kafka. It enables event
sourcing. It allows applications to work on their business logic without worrying about their dependencies.

This blog post will go through a brief intro of event sourcing and Kafka. Then we will see how one can consume messages
from Kafka using Ziggurat. [Ziggurat](https://github.com/gojek/ziggurat) is an open-source event streaming
application framework. We, at Gojek, widely use Ziggurat to build applications on top of Kafka. Varying from applications in the transport, logistics, and food domain, many of our systems internally communicate to each other with the help of sending events via Kafka and consuming them using Ziggurat-based applications.

We wrote Ziggurat in Clojure. Clojure is a functional programming language. It has got an elegant style. And you can find a getting started with Clojure blog [here](http://hariomgaur.in/2020/09/20/clojure-getting-started.html). It is okay if you are
new to Clojure as the language. The idea is to get familiarity
with basic concepts of event sourcing and to be able to apply our
learnings. In simple words, you don't need to be a
Clojure champ to read and understand this blog. If you know programming in general, that would be good.

### What is event sourcing

Event sourcing is a way to design systems. As Martin Fowler explains
it,

> The core idea of [event sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) is that whenever we make a change to the state of a system, we record that state change as an event.

During my second year at Gojek, I once asked my mentor and friend
Shobhit while playing a game of Table Tennis - What is event sourcing?

At this point, a lot of people in the company were talking
about it. We were introducing Kafka to the system. And it was changing how we designed systems then. And I knew both these terms, Event Sourcing and
Kafka had some relevance
together.

So in that conversation over the game of TT, Shobhit explained
it to me and asked me to read more about it. He said I should understand
this concept and ask further questions. He mentioned that the idea is not new and it is going to stay.

### A brief history of systems at Gojek

Gojek backend system, to begin with, was just a Java monolith. When it
started crumbling under load, we began extracting services out of
this monolith. Soon, we had a plethora of services. More services
than we could count and could manage.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Stan Marsh. Every person working in GO-JEK (even if you&#39;re NOT a part of the tech team) knows about Stan Marsh. <br><br>For many, he&#39;s South Park&#39;s fictional character. For us, the legacy backend codebase on which <a href="https://twitter.com/gojektech?ref_src=twsrc%5Etfw">@gojektech</a> was built. <a href="https://twitter.com/MehakKahlon?ref_src=twsrc%5Etfw">@MehakKahlon</a> reminisces<a href="https://t.co/C3XspYbGpA">https://t.co/C3XspYbGpA</a></p>&mdash; Gojek Tech (@gojektech) <a href="https://twitter.com/gojektech/status/991622109188116480?ref_src=twsrc%5Etfw">May 2, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It was then when we started
seeing a lot of coupling between systems. To make change in one place
of the system was becoming hard without changing others. And when one
part of the system failed, it took the whole system with it because of
cascading failures.

We introduced Kafka to scale Gojek systems as we multiplied in both numbers of users and API calls every week. And every
week, we would see an outage of a kind. And to solve the problems
mentioned above. You can read more about how Kafka solved these technical issues at Gojek in Shobhit's [blog](http://sinisterlight.com/post/kafka-solved-culture-problem/).
It helped us solve organizational issues and culture problems as well.


### An Intro to Kafka

Kafka is a system that provides append-only logs.
Applications can write data to Kafka at scale. Kafka also ensures clients
can consume that data at a large scale in batches or a continuous
stream of data.

Kafka runs on its own infrastructure. You can think of it like a message broker, but it isn't exactly one. It can retain messages
for a configurable duration of time. And it also provides
capabilities to read and process older data in a stream.

An organization can use Kafka to decouple systems. It enables event sourcing.

Kafka runs as a cluster of brokers. Although one can run Kafka as a
standalone broker as well; it is the clustered mode that makes Kafka
highly available and scalable for production use cases.

Kafka brokers store Kafka Topics. Kafka topics are the append-only
stream of data. Topics store data internally using partitions. Kafka provides various guarantees about message delivery. You can read more about them in this official documentation about delivery semantics.

Kafka Producers are applications that write data to Kafka. These
applications live outside of Kafka itself. Similarly, there exist Kafka Consumers. Consumers read data from Kafka. To read more about Kafka,
its ecosystem, and different components, you can jump to Kafka's official
getting started [guide](https://kafka.apache.org/quickstart).

### Enter Ziggurat

<div style="text-align:left"><img src="logo-ziggurat.png" /></div>

[Source](https://github.com/gojek/ziggurat)

There are various ways to write to Kafka and read data from Kafka. The
simplest being the Kafka console producer and consumer. This utility
ships with Kafka itself, and with this utility, you can exchange data with
Kafka from the command line itself.

Also, there are client libraries in various programming languages that
one can use to interact with Kafka.

We at Gojek tech have written Ziggurat to simplify event streaming on
top of Kafka for our developers. While Ziggurat uses the standard Java
open-source library to produce and consume data from Kafka, it provides
an abstraction on top of it. Ziggurat makes interacting with Kafka as
easy as writing a function. Along with it, it also includes
reliability features like error handling, retrying on failure, etc.


### Create an application using Ziggurat

First, let's go through a couple of steps I follow to create a new
application in the Clojure world.

Create the project directory, `mkdir conszig`

Create the `deps.edn` file in your project directory
```
{:deps
 {tech.gojek/ziggurat {:mvn/version "3.13.0"}}
}
```

Create the source and test directories
```
mkdir -p {src/conszig,test/conszig}
```

Create core files
```
touch src/conszig/core.clj test/conszig/core_test.clj
```

Create `config.edn` file in the source directory with following
configurations
```
{:ziggurat {:app-name "conszig"
            :env      "development"
            :stream-router {:default {:application-id "my-consumer"
                                      :bootstrap-servers "localhost:9092"
                                      :origin-topic "test-topic-qa"
                                      :changelog-topic-replication-factor 1}}
            :nrepl-server {:port 7011}
            :http-server  {:port 8010}}}
```

Let's take a look at these configs. `app-name` is the application name. Ziggurat uses the application name to publish metrics. The metrics can be beneficial while monitoring your application in production. Ziggurat standardizes the basic set of metrics that you will need. We will talk about them in a different post. `env` denotes the environment you are running your applicaiton in. It can be either "dev", "staging", or "production" depending on your software development pipeline and can vary.

Ziggurat runs a network REPL server and an HTTP server for management APIs using `nrepl-server` and `http-server` configurations. We will talk about the management APIs in the following post.

Ziggurat uses `stream-router` configuration to define the events it wants to consume from Kafka. You can visualize a stream router similar to how you would understand an HTTP router. Stream routes are analogous to HTTP routes in the sense that instead of an API call, Ziggurat routes messages from a Kafka stream to a handler function. Ziggurat supports reading data from multiple streams. Since each stream can route messages to a different handler function, the concept of stream routes acts as a significant abstraction in the framework. `default` is the name you want to use to refer to a stream of events. Think of it as an endpoint or a resource as you would use in a REST application. 

Ziggurat uses Kafka streams to get messages from a particular topic or a set of topics. One could process events in batches as well. I will cover that in another post. Ziggurat uses `application-id` to set the name of the consumer group for your Kafka streams application. It needs the `bootstrap-servers` to discover the Kafka brokers and the `origin-topic` configuration to know which topic you want to use to read events from Kafka. 

Kafka streams use changelog internally to achieve fault tolerance. The `changelog-topic-replication-factor` is an internal configuration. Ziggurat uses it to set how many brokers we want the changelog topic to replicate on the Kafka cluster. In my example, I am using a single Kafka broker as the bootstrap server. Thus, I need to set this to 1 as the default setting of 3 in Ziggurat needs a Kafka cluster of at least three brokers for high availability. 

Along with the config file, let's create a logging configuration file
`log4j2.xml` in the source directory as well -

```
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="ERROR" name="conszig-config" shutdownHook="disable">
    <Properties>
        <Property name="PATTERN">
            [%-5level] %d [%t] %c:%M: %m%n
        </Property>
    </Properties>
    <Appenders>
        <Console name="STDOUT" target="SYSTEM_OUT">
            <PatternLayout pattern="${PATTERN}"/>
        </Console>
    </Appenders>
    <Loggers>
        <Root level="info">
            <AppenderRef ref="STDOUT"/>
        </Root>
        <Logger name="conszig" level="debug" additivity="false">
            <AppenderRef ref="STDOUT"/>
        </Logger>
    </Loggers>
</Configuration>

```

Having understood the configurations, now it is time for us to jump into the code.

Add the following code to the `core.clj` file
```
(ns conszig.core
  (:require [ziggurat.init :as ziggurat]
            [ziggurat.middleware.default :as middleware]
            [mount.core :as mount]))

(defn main-fn
  [message]
  (println message)
  :success)

(defn deserialize
  [serialized-message]
  (String. serialized-message))

(defn wrap-middleware-fn
    [mapper-fn stream-id]
    (fn [message]
      (let [deserialised-message (deserialize message)]
      (mapper-fn deserialised-message))))

(def handler-fn
  (-> main-fn
      (wrap-middleware-fn :default)))

(defn -main []
  (ziggurat/main {:start-fn #()
                  :stop-fn #()
                  :stream-routes {:default {:handler-fn handler-fn}}}))
```

Ziggurat starts by invoking `ziggurat/main` function. It accepts the stream routes you want to process using Ziggurat. Stream routes are where you define how you want to handle incoming streams of events. It is a map of stream identifiers and their `handler-fn` with the handler function being passed along in the map. 

Ziggurat gives you the capability to define how you want to deserialize events received from Kafka. You can define your deserialization logic as I am doing in `wrap-middleware-fn`. Here, it is only creating String from a byte array, but it can do anything programmatically possible. This mechanism provides tremendous independence for using serialization mechanisms of your choice like JSON, Protobuf, etc. Ziggurat also provides a default `protobuf` serializer. 

Now, let's consume some events from Kafka.

Run the consumer using

```
clj -m conszig.core
```

Start a console producer to send messages to Kafka

```
kafka-console-producer --bootstrap-server localhost:9092 --topic test-topic
```

Now, you can send messages to Kafka using the command line and see the consumer process them one by one. We are just printing the incoming event post serialization in our example code, so you should see the original message on your screen. You can choose to persist this message or use it to make a request to an upstream service or produce it back to Kafka post-transformation, practically anything as you see fit.

This example consumer demonstrates the basics of Kafka consumption using Ziggurat. There is so much more to Ziggurat and event processing that I will cover in the following post. Until then, be safe and relish each moment as it comes. Aren't we all just event processors with our own perceived autonomy in this strange world? :wink:

<div style="text-align:left"><img src="rock-parrot.gif" /></div>
<br>

Thank you so much for reading :heart_eyes_cat:

Check out the Ziggurat project on its official website,
[ziggurat.dev](http://ziggurat.dev) :metal:
