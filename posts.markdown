---
permalink: /posts/
layout: default
title: posts
description: "Home for my experiences and insights from my career as a
software engineer starting from 2015. Lets learn from each other's
mistakes and build together a culture of mutual guidance."
---

<img class="featured-image crazy" src="{{ site.github.url }}/assets/images/maykashi.png" alt="Home" />

<style type="text/css" media="screen">
.featured-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.crazy {
  object-fit: none;
}
</style>

# Posts
##### Share your insights, feedback; and start a conversation.
##### for my love of discussing ideas :heartpulse:
---
<div class="home">


  {%- if site.posts.size > 0 -%}
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
