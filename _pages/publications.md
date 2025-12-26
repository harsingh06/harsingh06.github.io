---
layout: page
permalink: /publications/
title: Publications
description: publications by categories in reversed chronological order.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography -q @*[year] %}

</div>

---

<div class="publications">

<h4>Manuscripts in preprations </h4>

{% bibliography -q @unpublished %}

</div>
