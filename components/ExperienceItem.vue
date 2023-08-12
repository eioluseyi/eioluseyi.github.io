<script setup lang="ts">
defineProps<{
    item: {
        from: string;
        to: string;
        company: string;
        jobTitle: string;
        companyLogo?: string;
        projectImage?: string;
        location?: string;
        jobType?: string;
        description?: string;
        isSelected?: boolean;
    }
}>();

</script>

<template>
    <div class="pb-10">
        <div v-if="item.isSelected" class="flex items-center gap-2 text-xs text-slate-400">
            <img class="w-11 aspect-square rounded-full object-cover border-2 border-slate-300" :src="item.companyLogo"
                :alt="`${item.company} logo`" />
            <div>
                <div class="flex items-center gap-1 uppercase">
                    <span class="text-slate-200 font-bold">{{ item.company }}</span>
                    <span>•</span>
                    <span>{{ item.from }} - {{ item.to }}</span>
                </div>
                <div class="font-bold italic">{{ item.jobTitle }}</div>
            </div>
        </div>
        <div v-else
            class="relative flex items-center gap-1 edge-dots text-slate-400 border-slate-400 border-l [&:not(:last-child)]:pb-10">
            <div class="text-xs bg-slate-400 text-slate-700 -ml-2 mr-1 pl-3 pr-3 rounded-l rounded-r-xl">
                <span>{{ item.from }}</span><span v-show="0"> - <span>{{ item.to }}</span></span>
            </div>
            <div class="text-xs text-slate-200 uppercase font-bold">{{ item.company }}</div>
            <span v-show="1">•</span>
            <div class="text-xs italic">{{ item.jobTitle }}</div>
        </div>
        <div class="text-xs ml-[50px]">{{ item.description }}</div>
    </div>
</template>

<style scoped>
.edge-dots {
    &:first-child::before {
        content: "";
        position: absolute;
        top: 0;
        left: -5px;
        width: 9px;
        aspect-ratio: 1;
        background-color: currentColor;
        border-radius: 100%;
    }

    &:last-child::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: -5px;
        width: 9px;
        aspect-ratio: 1;
        background-color: currentColor;
        border-radius: 100%;
    }
}
</style>