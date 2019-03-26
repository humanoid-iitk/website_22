---
title: My Humble Sponsors
layout: blog
description: The people who kindled the Fire in Ice
image: assets/images/sponsors1.png
nav-menu: true
---
<div id="main">
	<section id="two" class="spotlights">
		{% for row in site.data.sponsors %}
			<section style='height: 100%; width: 100%;object-fit: cover;'>
				<a href="{{row.link}}" class="image">
					<img src="{{ site.baseurl }}/assets/images/{{row.image}}" alt="" data-position="center center" style='height: 100%; width: 100%; object-fit: cover'/>
				</a>
				<div class="content">
					<div class="inner">
						<header class="major">
							<h3>{{row.title}}</h3>
						</header>
						<p>{{row.description}}</p>
					</div>
				</div>
			</section>
		{% endfor %}
	</section>
</div>