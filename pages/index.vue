<script setup lang="ts">
useSeoMeta({
    title: 'Emmanuel Imolorhe | @eioluseyi'
})

const src = "https://res.cloudinary.com/dfe4nl5xi/image/upload/v1690682318/Prof-DP_a4qun6.jpg";
const name = "Emmanuel Imolorhe";
const jd = "Frontend Engineer";
const company = "Crescat AS";
const username = "eioluseyi";
const experience = "5+";
const dpSrc = "https://res.cloudinary.com/dfe4nl5xi/image/upload/v1690784856/eio-dp_wbozzr.jpg";
const description = "I am genuinely enthusiastic about crafting exceptional user experiences through user-friendly and captivating web applications.";
</script>

<template>
    <div class="flex flex-col items-center h-full">

        <div class="flex mt-20 items-center relative">
            <img class="inline-block object-cover w-48 aspect-square rounded-full" :src="src" alt="">
            <span class="absolute right-0 bottom-0 flex items-center group">
                <img class="w-10 box-content border-4 border-[#20232D] aspect-square inline-block rounded-full" :src="dpSrc"
                    alt="eio dp" />
            </span>
        </div>
        <div class="p-4 flex-1">
            <h5 class="text-2xl text-center font-light text-white">{{ name }}</h5>
            <h6 class="mb-16 text-xs text-center font-bold tracking-widest uppercase text-slate-500">
                <span>{{ jd }}, {{ company }}</span>
                <div class="mt-4">
                    <SkillList />
                </div>
            </h6>
            <p
                class="quote-box relative mb-3 bg-slate-500 rounded-lg bg-opacity-10 px-6 py-4 text-center font-normal text-slate-400">
                {{
                    description }}</p>
        </div>
        <div class="flex-1 flex items-center">
            <SocialMediaList />
        </div>
        <div class="w-full p-4">
            <LinkButton label="Motivation" href="/motivation" />
        </div>
    </div>
</template>

<style scoped>
.quote-box {

    &::before,
    &::after {
        position: absolute;
        content: "“";
        font-family: 'Times New Roman', Times, serif;
        font-size: 100px;
    }

    &::before {
        top: -50px;
        left: -20px;
    }

    &::after {
        rotate: 180deg;
        bottom: -50px;
        right: -20px;
    }
}
</style>