---
layout: default
---
<div class="row g-5 mb-5">
  <div class="col-md-12">
    <div class="row">
      <h2 class="fw-bold col-md-12" >Hari Om Gaur</h2>
      <br>
      <script>
      var traits = ['technology leader',
      'problem solver',
      'clojure enthusiast', 'team player', 'product engineer'];

          textSequence(0);
          function textSequence(i) {

              if (traits.length > i) {
                  setTimeout(function() {
                      document.getElementById("sequence").innerHTML = traits[i];
                      textSequence(++i);
                  }, 1000); // 1 second (in milliseconds)

              } else if (traits.length == i) { // Loop
                  textSequence(0);
              }

          }
      </script>
      <p> A passionate <i id="sequence" class="col-md-12">product engineer</i></p>
      <br>
      <br>
    </div>
    <div class="row">
      <div class="col-md-4">
        <img src="{{ site.github.url }}/assets/img/m999.jpeg" alt="Home" width="100%">
        <br>
        <br>
        <img src="{{ site.github.url }}/assets/img/m9999.jpeg" alt="Home" width="100%">
      </div>
      <div class="col-md-4">
        <img src="{{ site.github.url }}/assets/img/m4.png" alt="Home" width="100%">
      </div>
      <div class="col-md-4">
        <img src="{{ site.github.url }}/assets/img/m7.jpeg" alt="Home" width="110%">
        <br>
        <br>
        <img src="{{ site.github.url }}/assets/img/m8.jpeg" alt="Home" width="110%">
      </div>
    </div>
  </div>
</div>

{% assign entries_layout = page.entries_layout | default: 'list' %}
<div class="entries-{{ entries_layout }}">
  {% for post in posts %}
    {% include archive-single.html type=entries_layout %}
  {% endfor %}
</div>
