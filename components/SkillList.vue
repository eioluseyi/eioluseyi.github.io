<script setup lang="ts">
type Props = {
    itemList?: SkillItemType[];
    size?: 'icon' | 'small' | 'large';
};

withDefaults(defineProps<Props>(), {
    itemList: () => ['react', 'vue'],
    size: 'small'
});

</script>

<template>
    <div class="flex justify-center gap-4 max-w-[100%] overflow-auto" :class="{ '!gap-2': size === 'icon' }">
        <SkillItem v-for="itm in itemList" :item="itm" :size="size"
            :class="{ '[&:not(:last-of-type)]:pr-4 [&:not(:last-of-type)]:border-r [&:not(:last-of-type)]:border-current': size === 'small' }" />
    </div>
</template>