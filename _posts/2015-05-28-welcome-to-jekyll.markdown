---
layout: post
title:  "Ruby Hashes"
date:   2015-05-28 19:11:11
categories:
---
 A hash is a dictionary like collection of unique keys and their values.
 Hashes also called Associative arrays, are similar to arrays in the way
 that arrays use integers as their keys (array indexes). A hash allows
 you to use any objects as keys.

 Declaring a blank hash is as simple as writing -
 <code>
 hash_map={}
 </code>
 A Hash can also be created using the method Hash#new-
 <code>
 hash_map=Hash.new
 </code>
 A hash key-value pair can have any object as its key. e.g. price and
 volume below, use objects of class String and Symbol respectively and
 both are valid hashes-
 <code>
 price = {"pepsi"=>10, "cola"=>10, "amul"=>20}
 volume = {:pepsi=>330, :cola=>330, :amul=>200}
 </code>
 In fact, a hash can have different object types as its keys. e.g.
 a_hash below is a valid hash too-
 <code>
 a_hash = {:a_symbol => "symbol it is", "a_string" => "string it is"}
 </code>
 In case you want to access a key that has not been added to a hash, a
 <em>default value</em> is returned. If default is not set, <em>nil</em>
 is returned. You can set the default value by passing it as an argument
 to <em>new</em> or calling the <em>Hash#default</em> method - 
 <code>price = Hash.new(0)
 price.default = 0</code>
 Fetching values from a Hash and modifying it- you can fetch values from
 a Hash by putting the key name in square bracket after the Hash name.
 And just in case you want to modify them, writing the new value in
 front of the above is enough.
 <code>price[:pepsi] #=>fetches value corresponding to key :pepsi i.e.
 10
 price[:pepsi] = 20 #=> assigns the value 20 to the key :pepsi</code>
 If you want to list down all the keys in a Hash, 
 <em>price.keys</em> will get you an array of all the keys in hash
 price.

 <strong>Hash#each, map, inject</strong>
 You can iterate over a Hash using Hash#each method. It is similar to
 Array#each method but passes two values to the block parameters, the
 key and the value of each element.
 <code>price.each do |key, value|
 puts "Price of #{key} is #{value}"
 end
 </code>
 Hash#map iterates over a Hash and returns an array with result of
 running block for each element of Hash.
 <code>price = {"pepsi" => 10, "cola" => 10, "amul" => 20}
 price.map {|key, value| [key.to_sym , value.to_s ] } #=> [[:pepsi,
 "10"], [:cola, "10"], [:amul, "20"]]</code>
  
{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
