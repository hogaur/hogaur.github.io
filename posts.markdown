---
permalink: /posts.html
layout: default
---

<h3 class="fw-bold col-md-12" >Posts</h3>
<br>

<ul class="">
  {% assign postsInYear = site.posts | where_exp: "item", "item.hidden != true" | group_by_exp: 'post', 'post.date | date: "%Y"' %}
  {% for year in postsInYear %}
    <li>
      <a href="#{{ year.name }}">
        {{ year.name }} <span class="taxonomy__count"> - {{ year.items | size }}</span>
      </a>
    </li>
  {% endfor %}
</ul>
<br>
{% assign entries_layout = page.entries_layout | default: 'list' %}
{% assign postsByYear = site.posts | where_exp: "item", "item.hidden != true" | group_by_exp: 'post', 'post.date | date: "%Y"' %}
{% for year in postsByYear %}
  <section id="{{ year.name }}" class="taxonomy__section">
    <h3 class="archive__subtitle" style="text-align:center">{{ year.name }}</h3>
    <div class="entries-{{ entries_layout }}">
      {% for post in year.items %}
        <span>{{ post.date | date: "%B %-d, %Y" }}</span>
        <h4><a href="{{ site.github.url }}{{ post.url }}">{{ post.title }}</a></h4>
        <p>{{post.description}}</p>
        <br>
      {% endfor %}
    </div>
    <a href="/posts" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>
  </section>
{% endfor %}
