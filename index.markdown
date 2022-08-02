---
layout: default
description: "This website is dedicated to my journey, learnings, and
experiences about software engineering, life, and music. It focuses on
tools, and technologies as much as it does on my life and insights."
---

<style type="text/css" media="screen">
.featured-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.main {
  height: 400px;
}
.sub {
  height: 220px;
}
.crazy {
  object-fit: none;
}
</style>

<img class="featured-image crazy" src="{{ site.github.url }}/assets/images/maykashi.png" alt="Home" />

# Posts
##### Sharing my experiences, learnings; starting a conversation.
##### for my love of discussing ideas :heartpulse:

<hr>

{%- if site.posts.size > 0 -%}
  <br>
  <ul class="post-list">
    {%- for post in site.posts -%}
    <li>
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      <span class="post-meta">{{ post.date | date: date_format }}</span>

      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>

      <i>{{post.description}}</i>

      <br>
    </li>
    {%- endfor -%}
  </ul>
{%- endif -%}
