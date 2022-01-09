---
permalink: /posts/
layout: default
title: posts
---

<div class="home">

<style type="text/css" media="screen">
.featured-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>

  {%- if site.posts.size > 0 -%}
    <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2>
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

        <a class="post-link" href="{{ post.url | relative_url }}">
          <img class="featured-image" src="{{post.image}}" alt="Featured Image" />
        </a>

        <br>

        <i>{{post.description}}</i>
      </li>
      {%- endfor -%}
    </ul>
  {%- endif -%}

</div>
