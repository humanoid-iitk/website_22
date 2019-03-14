---
title: My Abilities
layout: blog
description: Want to know about some of my features? Let me tell you some of them.
image: assets/images/Abilities.jpg
nav-menu: true
---
<div id="main">
	<section id="two" class="spotlights">
		{% for row in site.data.abilities %}
			<section style='height: 100%; width: 100%; object-fit: cover;'>
				<iframe width="580" height="435" src="{{row.link}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-pictur pop upe" allowfullscreen></iframe>
				<div class="content">
					<div class="inner">
						<header class="major">
							<h3>{{row.title}}</h3>
						</header>
						<p>{{site.description}}</p>
					</div>
				</div>
			</section>
		{% endfor %}
	</section>
</div>
