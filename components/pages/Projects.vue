<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import PROJECTS_LIST from "~/content/PROJECTS_LIST.json";
// https://api.github.com/search/repositories?q=+user:eioluseyi+topic:website-project

</script>

<template>
    <div class="text-slate-500 flex flex-col">
        <LayoutPageTitle>Projects</LayoutPageTitle>
        <div class="flex-1">
            <Carousel wrap-around pauseAutoplayOnHover>
                <Slide v-for="(slide, idx) in PROJECTS_LIST" :key="`slide_${idx}`">
                    <ProjectItem :item="slide" />
                </Slide>

                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
        </div>
        <div class="w-full py-4">
            <LinkButton label="Reach out" href="/reach-out" />
        </div>
    </div>
</template>

<style scope>
.carousel {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.carousel__viewport {
    flex: 1;
}

.carousel__track,
.carousel__slide {
    height: 100%;
}

.carousel__prev,
.carousel__next {
    --vc-nav-color: currentColor;
    position: relative;
    display: inline-block;
    margin: 0;
    transform: none;

    & svg {
        width: auto;
        height: auto;
        scale: 0.7;
    }
}

.carousel__pagination-button::after {
    border-radius: 100%;
    aspect-ratio: 1;
    height: auto;
    transition: all 0.3s ease-out;
}

.carousel__pagination-button:hover::after {
    box-shadow: #0CA9FF 0px 0px 5px;
}

.carousel__pagination-button--active::after {
    background-color: #0289FF !important;
    box-shadow: #0CA9FF 0px 0px 5px;
}
</style>