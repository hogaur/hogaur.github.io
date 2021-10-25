---
layout: default
---

<img src="{{ site.github.url }}/assets/img/home.jpg" alt="Home" />

<script>
  var traits = ['problem solver', 'team player', 'product engineer'];
  textSequence(0);
  function textSequence(i) {
    if (traits.length > i) {
      setTimeout(function() {
        document.getElementById("sequence").innerHTML = traits[i];
        textSequence(++i);
      }, 2000);
    } else if (traits.length == i) {
       textSequence(0);
    }
 }
</script>

<p> A passionate <i id="sequence">product engineer</i></p>
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
      <i>{{post.description}}</i>
    </li>
    {%- endfor -%}
  </ul>
{%- endif -%}
