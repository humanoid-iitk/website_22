---
title: Meet My Creators
layout: blog 
description: Forsighted minds drivng the future!
image: assets/images/blog.jpeg
nav-menu: true
---
<h2 class="button special big fit">Team President</h2>
<div class="row" style="padding-left:750px">
        {% for slot in site.data.team %}
        {% if slot.type=="0" %}
        <div class="col-md-4">
            <div class="boxes">
                <img src="assets/images/{{slot.image}}" alt="">
                {}
                <h2 class="title">{{slot.description}}<br>{{slot.room_no}}<br>{{slot.hall}}<br>{{slot.phone_no}}<br>{{slot.emailid}}</h2>
                <ul class="icon">
                    <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
            <a class="button special fit">{{slot.name}}</a>
        </div>
        {% endif %}
       {% endfor %}
</div>
<hr>
<h2 class="button special big fit">Team Heads</h2>

<div class="container">
    <div class="row" style="padding:50px;">
        {% for slot in site.data.team %}
        {% if slot.type=="1" %}
        <div class="col-md-4">
            <div class="boxes">
                <img src="assets/images/{{slot.image}}" alt="">
                {}
                <h2 class="title">{{slot.description}}<br>{{slot.room_no}}<br>{{slot.hall}}<br>{{slot.phone_no}}<br>{{slot.emailid}}</h2>
                <ul class="icon">
                    <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
            <a class="button special fit">{{slot.name}}</a>
        </div>
        {% endif %}
       {% endfor %}
   </div>
</div>
<hr>
<h2 class="button special big fit">Team Members</h2>
<div class="container">
    <div class="row" style="padding:50px;">
        {% for slot in site.data.team %}
        {% if slot.type=="2" %}
        <div class="col-md-4">
            <div class="boxes">
                <img src="assets/images/{{slot.image}}" alt="">
                {}
                <h2 class="title">{{slot.description}}<br>{{slot.room_no}}<br>{{slot.hall}}<br>{{slot.phone_no}}<br>{{slot.emailid}}</h2>
                <ul class="icon">
                    <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
            <a class="button special fit">{{slot.name}}</a>
        </div>
        {% endif %}
       {% endfor %}
   </div>
</div>
<hr>