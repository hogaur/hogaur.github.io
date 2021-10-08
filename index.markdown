---
layout: default
---


<h2 class="fw-bold col-md-12" >Hari Om Gaur</h2>

<script>
  var traits = ['technology leader', 'problem solver', 'clojure enthusiast', 'team player', 'product engineer'];
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

<p> A passionate <i id="sequence" class="col-md-12">product engineer</i></p>
<br>
<img src="{{ site.github.url }}/assets/img/home.jpg" alt="Home" height="1%"/>
