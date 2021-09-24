<template>
  <section class="author-archive">
    <div class="container">
      <h1>All of my projects</h1>
      <input type="radio" id="All" name="categories" value="All" checked />
      <input type="radio" id="UX" name="categories" value="UX" />
      <input type="radio" id="Logo" name="categories" value="Logo" />
      <input type="radio" id="Web" name="categories" value="Web" />
      <input type="radio" id="WordPress" name="categories" value="WordPress" />
      <input type="radio" id="Graphic" name="categories" value="Graphic" />
      <input type="radio" id="Photo-Vid" name="categories" value="Photo-Vid" />

      <ol class="filters">
        <li>
          <label for="All">All</label>
        </li>
        <li>
          <label for="UX">UX & UI</label>
        </li>
        <li>
          <label for="Logo"> Logo design</label>
        </li>
        <li>
          <label for="Web">Web development</label>
        </li>
        <li>
          <label for="WordPress">WordPress</label>
        </li>
        <li>
          <label for="Graphic">Graphic design</label>
        </li>
        <li>
          <label for="Photo-Vid">Photography & Videography</label>
        </li>
      </ol>

      <ol class="posts">
        <li class="post" data-category="UX Web">
          <article>
            <figure>
              <a href="/my-projects/raahandel.html">
                <img src="@/assets/Råhandel-cover.png" alt="" />
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">UX</a>
                  </li>

                  <li>
                    <a href="">Web development</a>
                  </li>
                </ol>
                <h2 class="post-title">
                  <a href="/my-projects/raahandel.html">
                    Råhandel food marketplace
                  </a>
                </h2>
              </figcaption>
            </figure>
          </article>
        </li>
        <li class="post" data-category="WordPress Web Graphic">
          <article>
            <figure>
              <a href="/my-projects/YBRNT.html">
                <img src="@/assets/ybrnt-all-projects.png" alt="" />
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">Web development</a>
                  </li>
                  <li>
                    <a href="">WordPress</a>
                  </li>
                  <li>
                    <a href="">Graphic design</a>
                  </li>
                </ol>
                <h2 class="post-title">
                  <a href="#" target="_blank">YBRNT Wordpress webshop </a>
                </h2>
              </figcaption>
            </figure>
          </article>
        </li>
        <li class="post" data-category="UX Web">
          <article>
            <figure>
              <a href="#">
                <img src="@/assets/previewed.png" alt="" />
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">Web development</a>
                  </li>
                  <li>
                    <a href="">UX & UI</a>
                  </li>
                </ol>
                <h2 class="post-title">
                  <a href="#"> UNVOIT.IO </a>

                  <!-- Skrmoptagelse-2021-05-04-kl-2002.gif -->
                </h2>
              </figcaption>
            </figure>
          </article>
        </li>
        <li class="post" data-category="Logo">
          <article>
            <figure>
              <a href="/my-projects/bun.html">
                <img src="Bun-bun.png" alt="" />
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">Logo design</a>
                  </li>
                </ol>
                <h2 class="post-title">
                  <a href="/my-projects/bun.html">Bunny caffee: Logo </a>
                </h2>
              </figcaption>
            </figure>
          </article>
        </li>
        <li class="post" data-category="Logo">
          <article>
            <figure>
              <a href="/my-projects/xplr.html">
                <img src="XPLR-LOG.png" alt="" />
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">Logo design</a>
                  </li>
                </ol>
                <h2 class="post-title">
                  <a href="/my-projects/xplr.html">XPLORER: Logo </a>
                </h2>
              </figcaption>
            </figure>
          </article>
        </li>
        <li class="post" data-category="Photo-Vid">
          <article>
            <figure>
              <a href="/my-projects/you.html">
                <img
                  src="@/assets/Skærmbillede 2021-05-01 kl. 11.40.59.png"
                  alt=""
                />
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">Videography</a>
                  </li>
                </ol>
                <h2 class="post-title">
                  <a href="/my-projects/you.html">Nicoline: Video potrait</a>
                </h2>
              </figcaption>
            </figure>
          </article>
        </li>
        <li class="post" data-category="Photo-Vid Graphic Web">
          <article>
            <figure>
              <a href="intentionerne.html">
                <img src="varm-log.png" alt="" />
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">Videography </a>
                  </li>
                  <li>
                    <a href="">Graphic design </a>
                  </li>
                  <li>
                    <a href="">Web development </a>
                  </li>
                  <li>
                    <!-- <a href="">SoMe
                            </a> -->
                  </li>
                </ol>
                <h2 class="post-title">
                  <a href="intentionerne.html"
                    >Bernt & de bedste intentioner: Album cover, music video &
                    website
                  </a>
                </h2>
              </figcaption>
            </figure>
          </article>
        </li>
        <li class="post" data-category="Logo ">
          <article>
            <figure>
              <a href="/my-projects/pizza.html">
                <img src="Piz-log.png " alt="" />
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">Logo design</a>
                  </li>
                </ol>
                <h2 class="post-title">
                  <a href="/my-projects/pizza.html"
                    >Pizza Royale: Logo design
                  </a>
                </h2>
              </figcaption>
            </figure>
          </article>
        </li>
        <li class="post" data-category="Logo">
          <article>
            <figure>
              <a href="/my-projects/ab.html">
                <img src="Above-log.png" alt="" />
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">Logo design</a>
                  </li>
                </ol>
                <h2 class="post-title">
                  <a href="/my-projects/ab.html"
                    >Above Earth: Logo design and website
                  </a>
                </h2>
              </figcaption>
            </figure>
          </article>
        </li>
        <li class="post" data-category="Logo UX ">
          <article>
            <figure>
              <a href="/my-projects/shape.html">
                <img src="@/assets/Shape.png" alt="" />
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">UX</a>
                  </li>
                  <li>
                    <a href="">Logo design</a>
                  </li>
                </ol>
                <h2 class="post-title">
                  <a href="/my-projects/shape.html"
                    >Shape it up: Logo design & web design
                  </a>
                </h2>
              </figcaption>
            </figure>
          </article>
        </li>
        <li class="post" data-category="Graphic Logo Photo-Vid">
          <article>
            <figure>
              <a href="#">
                <img src="@/assets/coming-soon.png" alt="" />
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">Clothing design</a>
                  </li>
                  <li>
                    <a href="">Logo design</a>
                  </li>
                  <li>
                    <a href="">Graphic design</a>
                  </li>
                </ol>
                <h2 class="post-title">
                  <a href=""> Results coming soon </a>
                  <!-- Wolf Kanactus: Logo design, Graphic design & Clothing etc. -->
                </h2>
              </figcaption>
            </figure>
          </article>
        </li>
        <li class="post" data-category="Web WordPress">
          <article>
            <figure>
              <a href="">
                <img src="@/assets/coming-soon.png" alt="" />
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">Wordpress</a>
                  </li>
                  <li>
                    <a href="">Web development</a>
                  </li>
                </ol>
                <h2 class="post-title">
                  <a href="#">Coming soon </a>
                </h2>
              </figcaption>
            </figure>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>




<style scoped>
/* RESET RULES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
:root {
  --black: #000;
  --white: #fff;
  --green: #fa6a29;
}

* {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  margin: 50px 0;
  color: var(--black);
  font: 1rem/1.3 sans-serif;
}

.author-archive {
  padding: 1.5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  margin-top: 60px;
  text-align: center;
  margin-bottom: 2rem;
}

h1 a {
  transition: all 0.1s;
}

h1 a:hover {
  background: var(--green);
  color: var(--white);
}

input[type="radio"] {
  position: absolute;
  left: -9999px;
}

/* FILTERS
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.filters {
  text-align: center;
  margin-bottom: 2rem;
}

.filters * {
  display: inline-block;
}

.filters label {
  padding: 0.5rem 1rem;
  margin-bottom: 0.25rem;
  border-radius: 2rem;
  min-width: 50px;
  line-height: normal;
  cursor: pointer;
  transition: all 0.1s;
}

.filters label:hover {
  background: var(--green);
  color: var(--white);
}

/* FILTERED ELEMENTS (POSTS)
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.posts {
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
}

.posts .post {
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.posts .post-title {
  font-size: 1.3rem;
}

.posts .post-title:hover {
  text-decoration: underline;
}

.posts figcaption {
  padding: 1rem;
}

.posts .post-categories {
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
}

.posts .post-categories * {
  display: inline-block;
}

.posts .post-categories li {
  margin-bottom: 0.2rem;
}

.posts .post-categories a {
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  border: 1px solid;
  line-height: normal;
  transition: all 0.1s;
}

.posts .post-categories a:hover {
  background: var(--green);
  color: var(--white);
}

/* FILTERING RULES
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
[value="All"]:checked ~ .filters [for="All"],
[value="UX"]:checked ~ .filters [for="UX"],
[value="LOGO"]:checked ~ .filters [for="LOGO"],
[value="Web"]:checked ~ .filters [for="Web"],
[value="WordPress"]:checked ~ .filters [for="WordPress"],
[value="Graphic"]:checked ~ .filters [for="Graphic"],
[value="Photo-Vid"]:checked ~ .filters [for="Photo-Vid"] {
  background: var(--green);
  color: var(--white);
}

[value="All"]:checked ~ .posts [data-category] {
  display: block;
}

[value="UX"]:checked ~ .posts .post:not([data-category~="UX"]),
[value="Logo"]:checked ~ .posts .post:not([data-category~="Logo"]),
[value="Web"]:checked ~ .posts .post:not([data-category~="Web"]),
[value="WordPress"]:checked ~ .posts .post:not([data-category~="WordPress"]),
[value="Graphic"]:checked ~ .posts .post:not([data-category~="Graphic"]),
[value="Photo-Vid"]:checked ~ .posts .post:not([data-category~="Photo-Vid"]) {
  display: none;
}

/* FOOTER
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
footer {
  font-size: 1rem;
  padding: 0 1.5rem;
  text-align: right;
}

footer span {
  color: #e31b23;
}

/* this selecs and applies to every element before and after CSS pseudo elements */
#body-about-me *,
#body-about-me *::before,
#body-about-me *::after {
  box-sizing: border-box;
}

#body-about-me li {
  border: none;
}

/*CSS FOR THE BODY*/
#body-about-me {
  background-color: #252525;
  color: #272727;
  font-family: Helvetica, sans-serif;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.1px;
  line-height: 1.5;
  padding: 1rem;
}

#section-a-projects2 {
  background-color: #fff;
}

/*the cards themselves*/
.my-projects-cards-title-section2 {
  max-width: 1300px; /*the largest width the cards can have*/
  margin: 0 auto; /*the auto will help center it*/
}

/* the title above the cards*/
.my-projects-cards-title-section2 h1 {
  margin-top: 2em;
  text-align: center;
  font-size: 1.2rem;
  font-weight: lighter;
  letter-spacing: 0.1rem;
  text-align: center;
  overflow: hidden;
  padding: 1rem;
  color: #252525;
}

.my-projects-cards-title-section2 img {
  display: block; /*displays it (if it had said none it wouldnt have been visible*/
  border: none;
  width: 100%; /*width of the picture*/
  height: 20rem; /*the height of the picture*/
  object-fit: cover; /*does so the it fits the cove of the box. this does so that the height or width won't get weirdly affected*/
}

.cards2 {
  display: flex; /*flexes the cards so that they are in collumns*/
  flex-wrap: wrap; /*wraps it up in a way they puts it in rows*/
  text-decoration: none; /*removes text decorations*/
  list-style: none; /*removes list style*/
  margin: 0; /*does so it doesnt gets pushed*/
  padding: 0; /*does about the same thing*/
}

.cards_item2 {
  display: flex; /*flexes the cards so that they are in collumns*/
  padding: 0rem; /*pushes everthing with 1 rem*/
}

#nicoline-youtube {
  width: 100%;
  height: auto;
}

@media (min-width: 640px) {
  .cards_item2 {
    width: 50%; /*changes the width to 50%*/
  }
}

@media (min-width: 896px) {
  .cards_item2 {
    width: 33.33%; /*changes the width to 33,33% when the screensize is min 896px in width*/
  }
}

.card_content2 {
  /*card/ box with text*/
  padding: 1rem;
  background: #fff;
}

.card_title2 {
  /*title of all the cards/ boxes*/
  color: #252535;
  font-size: 1rem;
  font-weight: 600;
  margin: 0px;
  letter-spacing: 0.1rem;
}

.card_text2 {
  /* the text of the cards*/
  color: #252525;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}

.card2 {
  background-color: #fff; /*changes color of background of card but is underneath*/
  border-radius: 0; /*changes the border radius to 0 so that it won't get round*/

  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* MQ
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
@media screen and (max-width: 900px) {
  .posts {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 650px) {
  html {
    font-size: 14px;
  }

  .posts {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>