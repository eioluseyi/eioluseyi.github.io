<script setup lang="ts">
import EXPERIENCE_LIST from "~/content/EXPERIENCE_LIST.json";

const experienceList = ref<ExperienceType[]>(EXPERIENCE_LIST);

const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1kUwsopSq8H-0GTas0KTUt5jcN8obUOyM/view?usp=share_link';
    link.download = 'Imolorhe_Emmanuel_Resume.pdf';
    link.target = '_blank';
    link.click();
    link.remove();
}
</script>

<template>
    <div class="flex flex-col text-slate-500">
        <LayoutPageTitle>Experience</LayoutPageTitle>
        <div class="min-[600px]:text-sm max-[600px]:text-xs text-slate-400 my-5">
            Frontend Engineer with 5+ years of experience in building visually captivating and
            <span class="whitespace-nowrap">high-quality</span> web experiences.<span
                class="max-[400px]:hidden "><br />Proven
                ability to work independently and as part of a team, meeting deadlines under
                pressure.</span>
        </div>
        <LayoutContentWrapper class="">
            <div class="py-">
                <ExperienceItem v-for="(itm, idx) in experienceList" :item="itm" />
            </div>
        </LayoutContentWrapper>
        <div class="w-full py-4">
            <SecondaryButton class="w-full bottom-full mb-2" @click="downloadResume">
                <i class="gg-software-download mr-2" /> Resume
            </SecondaryButton>
            <LinkButton label="Projects" href="/projects" />
        </div>
    </div>
</template>