---
layout: post
title: This site in now on https
date:   2021-08-24
categories:
phrases: 'life gojek tech life@gojektech learnings'
type: BlogPosting, NewsArticle, Person, Organization, Hackathon, Brand, Atlas, Guide, Failures, Learnings
section: 'Life'
description: 'Not having your site on HTTPS'
image: ../assets/images/structure.jpg
---

#### A low hanging Fruit

> Solutions Are Easy, Problems Are Hard

### A tool to check
Go check your website for a lock button.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7q-qOOeGSdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[A green padlock icon](https://youtu.be/7q-qOOeGSdI)

[Google's guide to Check if a site's connection is secure](https://support.google.com/chrome/answer/95617?hl=en)

### Ways to do
- Self manage

[DIY kubernetes certificate management using openssl](https://kubernetes.io/docs/tasks/administer-cluster/certificates/#openssl)

- Github pages

Provides you out of the box https support for repo-name.github.io.

- Managed Services

Your domain provider's paid ssl management.

## And gotchas

Learn from my mistake, and do it in simple steps.

You need to renew cert on expiry, thus managed is much better.

Using a custom domain, but https not enabled,

<br>

<div style="text-align:center"><img src="disablement.png" /></div>

<br>

- Remove your custom domain
- Enable https after 30s of wait
- Add custom domain again

<br>

<div style="text-align:center"><img src="secure-now.png" /></div>

<br>

### Thank you

For calling it out. Lets build a culture of mutual guidance.

<br>

<div style="text-align:center"><img src="thanks.png" /></div>

<br>
