[hogaur](hariomgaur.in)
---

This project serves the purpose of my digital home.

This is my new jekyll based personal blog. I have picked up a theme from
internet.

Settings
---

* jekyll - 4.0.0
* Theme - [minima](https://github.com/jekyll/minima)
* Other settings - `_config.yml`

Unused Settings
---

* Section and descriptions in posts are not being used. They were part
  of the imported blogs.
Dev Setup
---

* Install gem dependencies - `bundle install`
* Start local server at 4000 port - `jekyll serve`
* Restart the local server after changing setting in `_config.yml`

Issues
---

[] ERROR '/favicon.ico' not found.
Happens when I hit localhost:4000 after starting the dev server in my
local. Doesn't happen when I reload the page, restart the server or open
the blog in incognito window.

[] Rbenv warnings Gem::Specification#rubyforge_project= is deprecated.

References
---

* Basic Jekyll usage documentation at [jekyllrb.com](https://jekyllrb.com/)
* To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
* If you need help with YAML syntax, here are some quick references for you: https://learn-the-web.algonquindesign.ca/topics/markdown-yaml-cheat-sheet/#yaml
https://learnxinyminutes.com/docs/yaml/

Improvements
---

* On save, text should be wrapped.
* Capitalization in phrase-titles needs to be taken care of. Two word or
  three word titles can have capitalization.

