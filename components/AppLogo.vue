<template>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--two"/>
    <div class="Triangle Triangle--one"/>
    <div class="Triangle Triangle--three"/>
    <div class="Triangle Triangle--four"/>
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 90px;
  width: 150px;
  
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 90px solid #41B883;
}

.Triangle--two {
  top: 10px;
  left: 5px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 45px solid transparent;
  border-right: 45px solid transparent;
  border-bottom: 80px solid #3B8070;
}

.Triangle--three {
  top: 25px;
  left: 14px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 36px solid transparent;
  border-right: 36px solid transparent;
  border-bottom: 64px solid #35495E;
}

.Triangle--four {
  top: 62px;
  left: 34px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 28px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 90px;
  }
}

@keyframes goright {
  100% {
    left: 28px;
  }
}
</style>

