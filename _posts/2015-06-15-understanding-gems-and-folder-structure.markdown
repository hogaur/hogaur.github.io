---
layout: post
title:  "Gems and folder structure for Ruby Projects"
date:   2015-06-15
categories:
section: 'Code'
description: 'Some ice-breaking with ruby project structure'
---
<body>
<p>
Everything is an object in ruby and thus visualising everything as an
object and modeling your problem based on the principles of Object
Oriented Programming (OOP) becomes very important. During my second week at
<a href="http://www.codeignition.co">Codeignition</a>, we started with a very simple problem and then extended it
everyday to understand some OOP principles such as inheritance,
namespacing and method overriding. Thanks to our mentor, <a href="http://www.sinisterlight.com">Shobhit Srivastava</a>, some software
engineering skills always step in to show us the beauty of this world in
bright sunlight and this time they were-<br>
- Test Driven Development, lovingly known as TDD,<br>
- Don't Repeat Yourself, the DRY principle and <br> 
- Pair programming.</p>

<p>
The basic problem given to us was- <br>
<em>Problem</em> - Coordinates of two points are given, return length of line segment formed by the points.
</p>

<p>
Simple! Isn't it? Solution to above problem will be a Line class which have attributes start_point and
end_point and a method length which gives distance between these two points. We can implement above class either based on the assumption that coordinates of these two points are given to us in the form of two arrays, i.e. [x1,y1],[x2,y2] or that we are given coordinates as x1,y1,x2,y2.</p>
<p>
Now, one could argue that Points are separate identities themselves and
the method Line#length does nothing but returns distance between two
instances of Point class. So our solution can be refactored to add Point
class with attributes x_coordinate, y_coordinate and a class method
distance_between point1, point2.
</p>
<p>
<h4>Writing Ruby code- The conventions!</h4>
One can make any number of classes in a single ruby file, write logic in
this file and get it executed. But such code is hard to understand and tough to debug. 
Thus, we have conventions. When everybody follows some conventions, all our folder
structures are alike, which in turn makes collaborated works easy.
</p>
<p>
An easy to maintain, clear folder structure for Ruby projects is-<br>
|_lib/<br>
|_spec/<br>
|_Gemfile<br>
|_Gemfile.lock<br>
|_Rakefile
</p>
<p>
All our classes and modules that means functionality goes in lib folder.
That means if we want to make a class named Line for our given problem,
it goes in Line.rb file in lib folder. Class names in ruby are
conventionally written in CamelCase while method names are written in
snake_case. Conventionally one file has one class. So lib folder will
contain two files Line.rb and Point.rb as per the solution discussed above.
</p>
Now, while working on any project in any programming language, we should
always follow Test Driven Developement(TDD) approach. When our projects
grow bigger, our code base increases, the specs we had written for each
small unit of our code are our only friends in debugging. If you are new
to TDD and don't see any benefit for why you should follow TDD, visit my
friend Debashish's <a href="http://wallydrag.github.io/test%20driven%20development/tdd/2015/05/26/ruby/">blog</a> here.
<br>
So all our specs go in spec folder. We write one spec file for each ruby
class file as classname_spec.rb in spec folder.
<br><br>
<em>Gems</em><br>
There are many libraries available for testing in ruby. One of the ones
that has gained popularity and use is RSpec. To use RSpec, we write a
Gemfile for our project. Gemfile is the place where we write all our
dependencies for the project. A sample Gemfile, one for our current
project will be -
{% highlight ruby %}
source "https://rubygems.org"
gem 'rspec'
{% endhighlight  %}
When we write 
{% highlight ruby %}
bundle install
{% endhighlight %}
Bundler looks up to the source "http://rubygems.org" for the gems we declared. We can
mention multiple sources and bundler will look up in those sources in
order. Bundler installs specified versions of gems if mentioned and
latest stable realeases of gems if versions are not specified.
</p>
<br>
<p>
After running <em>bundle install</em>, a <em>Gemfile.lock</em> file is
created in current directory. This file is the place where Bundler
records the exact versions of gems that were installed. In this way, it
is ensured that when we install the dependencies on some other machine
for the same project, bundler will look into Gemfile.lock file for the
versions of gems to be installed rather than installing latest stable
releases of all the gems.
</p>
<p>
This way gemfile and bundler manage our dependencies. And folder
structure keeps our code clean and more readable. We will look into rake
tasks and an extended exercise on Object Oriented Design based on our
problem in next blog. Till then, 
<em>Carpe Diem!</em>
</p>
</body>
