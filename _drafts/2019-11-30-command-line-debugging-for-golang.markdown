---
layout: post
title:  "puts debugging in golang"
date:   2016-05-16
categories: 'golang', 'debugging', 'iterm', 'command-line', 'code'
section: 'Code'
description: 'Debugging golang code bases made easy with dlv'
---

I have been a ruby/ruby on rails developer most of my career.

I use 'pry' extenstively while working in ruby.
Addicted to throwing pry in whenever a tests fail.
Have a snippet so that hitting tab after writing pry becomes require
'pry'; binding.pry

This post is inspired by TendorLove's post puts programming in ruby.
I read this post almost two years ago and it changed the way I used to
debug.

So when I started collaborating with another team in Gojek and the
codebase was in golang, I was struggling in debugging runtime.

Welcome dlv in life.

Simple Steps

1. go get delve
2. cd golang code base
3. dlv debug
4. break main.main
5. continue
6. next, next, next
7. print anything
8. help
9. exit


Once function returns someone dlv becomes unresponsive. Fails with this
error - 


Understand how to put a break point in a runner that is being run in
development environment on my local.

