# Intro 7 years of "theming"

* the principels we are building on
all the bla bla start from nothing

* Bartik vs. Stark

#dreammarkup
its not only the end markup  - its about how the twig files are working as well

-------------

## 1. setup settings.php
make debug work
settings.php
line 305:
'
$settings['twig_debug'] = TRUE;

## 2. themename.info.yaml
--
## remove css
overwrite css
add css

print css (unless you do it as a print media query)

Define regions:

[ ]whats settings do in info.yaml


config:
.breakpoints
.settings

what can we set in settings & whats pretty cool


Page.html.twig

3. define regions in the page.html.twig

page.regionnanme

its a pain in the ass to get the {{ dump( page ) }}


we wanna remove all the hardcoded variables like {{ breadcrumbs }} {{ main_menu }} {{ secondary_menu }}
logo site slogan



region.twig

region … lets just kill it we write the shit in page.twig instead

HTML.HTML.TWIG

Fix title tag
file: html.html.twig
change <header>pagetitle - sitename - site slogan </header >
issues:<pre>{{ dump (head_title_array) }}</pre>
Don't give the site slogan on all pages - so how do i grap it ?
how do i find whats  available in the html.html.twig


Have fun with the css in the <body>

<body class="{{ attribues.class}}" {{ attributes }}>
is it correct that  {{ attributes then prints out whats missing }}

{{ dump() }} breaks the page - runs outta memory :(


[ ]How do we strip out stuff of header ?.

[ ]add new icons n stuff to header ? - how to do that in a twig file

change template for html.twig
html--front.html.twig


Note: we should make html.html.twig & page.html.twig into 1 page.


Block.twig
they need some help cause of crappy tags n shit - do a new theme hook suggestion
how do i remove shit from the attributes fx id

{{ attributes }} prints out whatever is lost
lets remove the ID cause we grownups

remove css classes
<hr>
<section class="{{ attributes.class |replace( {'block-': nada, 'block': nada, 'system': nada }) }} {{ attributes.id}} " role="{{ attributes.role}}">

{{ attributes.class |replace( {'block-': ' ', 'block': 'oldblock', 'system': 'nada' }) }}
add in ID's as a class  ?

Demo: move data around without preprocess bs

* menu needs nav tags cause this is
* label element should be called for title or somethinf

create new template: block--system-menu-block.



css architecture https://drupal.org/node/1982256



node:


User profile:
just wanna print out the user image
looking at   {{content.user_picture}} turns out to be a giant pita.
{{ dump(content.user_picture) }} drops a ton of shit

Fields needs a twig file to be overwritten


kill off the vars with content all over

field.html.twig

field:
[ ]split template up to something thats way easier to read
[ ]how to hide attributes.class {% hide(attributes.class) %} dosnt work
[ ] shows the use of cycle
VariableDescriptionloop.indexThe current iteration of the loop. (1 indexed)loop.index0The current iteration of the loop. (0 indexed)loop.revindexThe number of iterations from the end of the loop (1 indexed) loop.revindex0The number of iterations from the end of the loop (0 indexed)loop.firstTrue if first iterationloop.lastTrue if last iterationloop.lengthThe number of items in the sequenceloop.parentThe parent context
use a count
  {% for delta, item in items %}
      {% if loop.length > 1 %} {# no wrappers if theres only 1 item#}
        <div class="field-items"{{ content_attributes }}>
          <div class="field-item {{ cycle(["even", "odd"], delta) }}"{{ item_attributes[delta] }}>
      {% endif %}

      <pre>{{ dump(item) }}</pre>

      {% if loop.length > 1 %}
          </div>
        </div>
      {% endif %}
  {% endfor %}



Username WTF where do that shit come from ??
[ ]where is user-picture.html.twig ?

      submitted by {{ name }} at
      <time datetime="{{ node.createdtime|date("Y-m-d H:i") }}"> {{ node.createdtime|date("d M Y") }} </time>

theme_username is still a thing ?

comment_count dosnt work
{{ node.sticky }} crashed

fields is called in as {{ content.field_NAME }}


inline templating
https://drupal.org/node/2047263

cleanup tags

<section class="tags">
  {# split the tags  #}
  {% for delta, item in items %}

  <span class="{{ cycle(["even", "odd"], delta) }} count-{{ loop.index }}">
    {% if loop.first %}

      {{ loop.length }} tags:   {{ item }},

    {% elseif loop.index == 2 %}
      TWO: {{ item }},

    {% elseif loop.last %}
      last:{{ item }}

    {% else %}
      {{ item }} ,

    {% endif %}

  </span>
  {% endfor %}

</section>




Make a slideshow in a hurry



Fix {{ content.links }}



Views

views-fields things
views-view-fields.html.twig
pager  & mini-pager


/Tracker
tables




[ ]Menu - how to cleanup that fucker ?

tag with javascript to remove the .js- prefix & use data- instead

get D8 git
git clone --branch 8.x http://git.drupal.org/project/drupal.git
(https://drupal.org/project/drupal/git-instructions)
TODO:https://groups.drupal.org/node/278968

jen's overview https://drupal.org/node/2008464

css coding: https://drupal.org/node/1886770

guiding principles https://drupal.org/node/2008464#principles

Dreammarkup
https://drupal.org/node/1980004
