---
permalink: /poetry/
layout: default
title: uvacha
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

# hariom uvacha
##### Crossfeed from my Instagram Poetry Page.
##### The space where emotions transform into words and couplets flow
---

<script src='https://crossfeedinsta.herokuapp.com/token.js'></script>

<script src="instafeed.min.js"></script>

<div class="container">

  <div id="instafeed"></div>

  <script type="text/javascript">
    var feed = new Instafeed({
      accessToken: InstagramToken
    });
    feed.run();
  </script>
</div>
