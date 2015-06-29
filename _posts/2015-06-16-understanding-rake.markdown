---
layout: post
title:  "Understanding Rake Tasks"
date:   2015-06-16
categories:
---
<body>
<p>
In your RAILS project working directory, when you type <em>rake routes</em> it
lists all the routes you made in your application. This <em>rake routes</em> is a 'rake' <em>task</em> which is specified to list all routes in an application. Also there is a task <em>rake db:migrate</em> that runs your migrations. There are many tasks available to you, and they all can be listed using <em>rake -T</em>. But you are not restricted to the tasks listed in <em>rake -T</em> only. You can write your own custom rake tasks also. They will do mundane as well as hefty tasks you will ask them to do for you. But then, how to?
</p>
<p>
Rake is ruby make. It replaces Unix make and use Rakefile and .rake
files to build up a list of tasks. If you are following the lib-spec folder
structure we talked about in my last blog, you can simply add a Rakefile
in your project folder and there you can add your custom rake tasks. If you are
working with RAILS, your tasks are stored in /lib/tasks folder.
</p>
<p>
You can simply write, in your Rakefile
{% highlight ruby%}
task :sing do
  puts "Sa Re Ga Ma Pa..."
end
{% endhighlight %}
</p>
<p>
Or you can generate a Rake task by typing
{% highlight ruby%}
$ rails g task my_namespace my_task1 my_task2
$ create lib/tasks/my_namespace.rake
{% endhighlight %}
</p>
<p>
For a sample Rakefile with a simple rake task is visit this <a href="https://github.com/hogaur/Line">repo</a>
</p>
{% highlight ruby %}
{% endhighlight  %}
</body>
