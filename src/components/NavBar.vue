
<template>
  <header class="header">
    <a href="#" class="logo">Lucas Jolibois</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"
      ><span class="navicon"></span
    ></label>
    <ul class="menu">
      <li><a href="#work">Our Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#careers">Careers</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </header>
</template>
<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

.header {
  background: rgb(255, 255, 255);
  box-shadow: 5px 5px 24px rgba(0, 0, 0, 0.7);

  position: fixed;
  width: 100%;
  z-index: 999;
}
.header ul {
  list-style: none;
  overflow: hidden;
  background: transparent;
}
header li a {
  display: block;
  text-decoration: none;
  padding: 1rem;
  border-right: 1px solid black;
}

.header li a:hover {
  background-color: transparent;
  color: #d7793e;
  font-size: 1.1rem;
  transition: 0.5s;
}

.header .logo {
  text-decoration: none;
  display: block;
  float: left;
  font-size: 2rem;
  padding: 10px 20px;
}

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon::before,
.header .menu-icon .navicon::after {
  background: #333;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}
.header .menu-icon .navicon::before {
  top: 5px;
}

.header .menu-icon .navicon::after {
  top: -5px;
}

.header .menu-btn {
  display: none;
}
.header .menu-btn:checked ~ .menu {
  max-height: 100%;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon::before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon::after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
</style>



<!--<template>
  <div class="container">
    <nav class="nam-nav">
      <input type="checkbox" id="nav" class="hidden" />
      <label for="nav" class="nav-btn">
        <i></i>
        <i></i>
        <i></i>
      </label>
      <div class="logo">
        <a href="#">BRAND</a>
      </div>
      <div class="nav-wrapper">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Prices</a></li>
          <li><a href="#">Purchase</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

nav {
  padding: 8px;
}

.logo {
  float: left;
  padding: 8px;
  margin-left: 16px;
  margin-top: 8px;
  font-family: Verdana;
}

.logo a {
  color: rgb(255, 1, 1);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0px;
  text-decoration: none;
}

nav ul {
  float: right;
  position: fixed;
}

nav ul li {
  display: inline-block;
  float: left;
}

nav ul li:not(:first-child) {
  margin-left: 48px;
}

nav ul li:last-child {
  margin-right: 24px;
}

nav ul li a {
  display: inline-block;
  outline: none;
  color: rgb(255, 0, 0);
  text-transformation: none;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 1.2px;
  font-weight: 600;
}

@media screen and (max-width: 864px) {
  .logo {
    padding: 0;
  }
  .nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #fff;
    opacity: 0;
    transition: all 0.2s ease;
  }
  .nav-wrapper ul {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
  .nav-wrapper ul li {
    display: block;
    float: none;
    width: 100%;
    text-align: right;
    margin-bottom: 10px;
  }
  .nav-wrapper ul li:nth-child(1) a {
    transition-delay: 0.2s;
  }
  .nav-wrapper ul li:nth-child(2) a {
    transition-delay: 0.3s;
  }
  .nav-wrapper ul li:nth-child(3) a {
    transition-delay: 0.4s;
  }
  .nav-wrapper ul li:nth-child(4) a {
    transition-delay: 0.5s;
  }

  .nav-wrapper ul li:not(:first-child) {
    margin-left: 0;
  }
  .nav-wrapper ul li a {
    padding: 10px 24px;
    opacity: 0;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.2px;
    transform: translateX(-20px);
    transition: all 0.2s ease;
  }
  .nav-btn {
    position: fixed;
    right: 10px;
    top: 10px;
    display: block;
    width: 48px;
    height: 48px;
    cursor: pointer;
    z-index: 9999;
    border-radius: 50%;
  }
  .nav-btn i {
    display: block;
    width: 20px;
    height: 2px;
    background: #000;
    border-radius: 2px;
    margin-left: 14px;
  }
  .nav-btn i:nth-child(1) {
    margin-top: 16px;
  }
  .nav-btn i:nth-child(2) {
    opacity: 1;
    margin-top: 4px;
  }
  .nav-btn i:nth-child(3) {
    margin-top: 4px;
  }
}

#nav:checked + .nav-btn {
  transform: rotate(45deg);
}

#nav:checked + .nav-btn i {
  background: #000;
  transition: transform 0.2s ease;
}

#nav:checked + .nav-btn i:nth-child(1) {
  transform: translateY(6px) rotate(180deg);
}

#nav:checked + .nav-btn i:nth-child(2) {
  opacity: 0;
}

#nav:checked + .nav-btn i:nth-child(3) {
  transform: translateY(-6px) rotate(90deg);
}

#nav:checked ~ .nav-wrapper {
  z-index: 9990;
  opacity: 1;
}

#nav:checked ~ .nav-wrapper ul li a {
  opacity: 1;
  transform: translateX(0);
}

.hidden {
  display: none;
}
</style>

-->