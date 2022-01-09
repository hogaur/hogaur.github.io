---
layout: default
---

<img class="featured-image main" src="{{ site.github.url }}/assets/images/hogaur.jpg" alt="Home" />
<img class="featured-image sub" src="{{ site.github.url }}/assets/images/maykashi.png" alt="Home" />

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
</style>

<hr>
<hr>

{%- if site.posts.size > 0 -%}
  <h2 class="post-list-heading">Posts</h2>
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

      <img class="featured-image" src="{{post.image}}" alt="Featured Image" />
      <i>{{post.description}}</i>
    </li>
    {%- endfor -%}
  </ul>
{%- endif -%}
