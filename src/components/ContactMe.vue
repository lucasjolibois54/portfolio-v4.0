<template>
  <div class="width-hero">
    <div class="center bbc-w text-padding">
      <h2 class="h2-padding">Let’s talk!</h2>
      <p>
        Contact me down bellow if you have any business propositions or if you
        need an intern at the beginning of 2022.
      </p>
      <button id="pad-btn" class="btn-grad">Contact me</button>
    </div>
  </div>
</template>

<style scoped>
.width-hero {
  max-width: 1400px;
  margin: 0 auto !important;
  float: none !important;
}

.center {
  text-align: center;
}

.bbc-w {
  background-color: white;
}

.text-padding {
  padding-right: 30%;
  padding-left: 30%;
}

.h2-padding {
  padding-top: 150px;
}

h2 {
  font-size: 50px;
}

p {
  font-size: 20px;
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  border: none;
  cursor: pointer;
}
.btn-grad {
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1),
    0px 5px 20px 0px rgba(0, 0, 0, 0.1);
  display: block;
  text-decoration: none;
  display: inline-block;
  padding: 0.7375em 0.99em;
  border-radius: 2em;
  font-size: 14px;
  margin: 0.5em 0;
  padding-bottom: 0.7375em;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1),
    0px 1px 20px 0px rgba(0, 0, 0, 0.1);
}

.btn-grad:hover {
  background-position: right center; /* changes the direction of the grad on button */
  color: #fff;
  text-decoration: none;
  box-shadow: 0px 0px #888888;
}

#pad-btn {
  margin-bottom: 200px;
}

@media only screen and (max-width: 650px) and (min-width: 10px) {
  p {
    font-size: 18px;
  }
  .text-padding {
    padding-right: 10%;
    padding-left: 10%;
  }
  #pad-btn {
    margin-bottom: 100px;
  }
  .h2-padding {
    padding-top: 100px;
  }
}
</style>