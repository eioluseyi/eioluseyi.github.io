<script setup lang="ts">
import { reactive } from "vue";

useSeoMeta({
  title: 'Emmanuel Imolorhe | @eioluseyi'
})

const mousePosition = reactive({ x: "50%", y: "50%" });

const setMousePosition = (evt: MouseEvent) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  if (width <= 600) return; // Don't work on mobile
  if (height <= 750) return; // Don't work on short devices

  mousePosition.x = `${evt.clientX}px`;
  mousePosition.y = `${evt.clientY}px`;
}
</script>

<template>
  <div class="main-wrapper" :style="`--mouse-x: ${mousePosition.x}; --mouse-y: ${mousePosition.y}`"
    @mousemove="setMousePosition">
    <div class="glow-bg before:animate-pulse grid place-items-center h-[100dvh]">
      <NuxtLayout>
        <NuxtPage :transition="{
          name: 'layout',
          mode: 'out-in'
        }" />
      </NuxtLayout>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulsing {
  50% {
    opacity: 0;
  }
}

.main-wrapper {
  background-color: #0f0f0f;
  cursor: none;
}

@media screen and (max-width: 600px) {

  .glow-bg::before,
  .glow-bg::after {
    display: none;
  }
}

@media screen and (max-height: 750px) {

  .glow-bg::before,
  .glow-bg::after {
    display: none;
  }
}

.glow-bg {
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    --glow-width: 200px;
    --glow-height: var(--glow-width);
    content: "";
    color: white;
    font-size: 300px;
    font-weight: 900;
    white-space: nowrap;
    position: absolute;
    /* opacity: 0.1; */

    /* animation: pulsing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; */

    filter: blur(50px);

    width: var(--glow-width);
    height: var(--glow-height);

    left: calc(var(--mouse-x, 50%) - calc(var(--glow-width) / 2));
    top: calc(var(--mouse-y, 50%) - calc(var(--glow-height) / 2));
    border-radius: 100%;

    background-color: #6D3474;

    animation-duration: 3s;
    z-index: -1;
  }

  &:has(.show-cursor:hover)::before {
    transition: filter 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out, left 0.3s ease-out, top 0.3s ease-out;
    filter: blur(100px);
    --glow-width: 400px;
    animation-duration: 5s;
  }

  &::after {
    position: absolute;
    content: "";
    inset: 0;
    background-repeat: repeat;
    z-index: -1;

    --s: 10px;
    /* control the size */
    --c1: #000;
    --c2: #ecbe1300;

    --c: #0000, var(--c1) .5deg 119.5deg, #0000 120deg;
    --g1: conic-gradient(from 60deg at 56.25% calc(425%/6), var(--c));
    --g2: conic-gradient(from 180deg at 43.75% calc(425%/6), var(--c));
    --g3: conic-gradient(from -60deg at 50% calc(175%/12), var(--c));
    background:
      var(--g1), var(--g1) var(--s) calc(1.73*var(--s)),
      var(--g2), var(--g2) var(--s) calc(1.73*var(--s)),
      var(--g3) var(--s) 0, var(--g3) 0 calc(1.73*var(--s)) var(--c2);
    background-size: calc(2*var(--s)) calc(3.46 * var(--s));
    /* background-size: 3%; */
  }
}
</style>
