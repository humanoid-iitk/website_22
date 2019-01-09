---
title: Blog
layout: blog
description: 'Lets see whats my creaters have to say?'
image: assets/images/blog.jpeg
nav-menu: true
---

<div id="main">
	<section id="two" class="spotlights">
		{% for post in site.posts %}
		{% if post.title != 404 %}
			<section>
				{% if post.image %}
				<a href="{{ site.baseurl }}{{ post.url }}" class="image">
					<img src="{{ site.baseurl }}/{{ post.image }}" alt="" data-position="center center" style='height: 100%; width: 100%; object-fit: cover'/>
				</a>
				{% endif %}
				<div class="content">
					<div class="inner">
						<header class="major">
							<h3>{{ post.title }}</h3>
						</header>
						<!-- {% if post.date %}<p>{{ post.date }}</p>{% endif %} -->
						<p>{{ post.excerpt }}</p>
						<ul class="actions">
							<li><a href="{{ site.baseurl }}{{ post.url }}" class="button">Read More </a></li>
						</ul>
					</div>
				</div>
			</section>
		{% endif %}
		{% endfor %}
	</section>
</div>
