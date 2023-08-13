<script setup lang="ts">
defineProps<{
    item: ExperienceType
}>();

const setFallback = (evt: Event) => {
    const elm = evt.target as HTMLImageElement;

    if (!elm) return;
    elm.src = '/favicon.ico';
}

</script>

<template>
    <div class="pb-10">
        <div class="flex items-center gap-2 text-xs text-slate-400">
            <img class="w-11 aspect-square rounded-full object-cover border-2 border-slate-300" :src="item.companyLogo"
                :alt="`${item.company} logo`" @error="setFallback" />
            <div>
                <div class="flex items-center gap-1 uppercase">
                    <span class="text-slate-200 font-bold">{{ item.company }}</span>
                    <span>•</span>
                    <span>{{ item.from }} - {{ item.to }}</span>
                </div>
                <div class="font-bold italic">{{ item.jobTitle }}</div>
            </div>
        </div>
        <div class="text-xs ml-[50px]">{{ item.description }}</div>
    </div>
</template>