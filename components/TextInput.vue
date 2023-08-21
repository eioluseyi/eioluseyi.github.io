<script setup lang="ts">
type Props = {
    modelValue: string;
    longText?: boolean;
    label?: string;
    errorMessage?: string;
};

type Emits = {
    (evt: 'update:modelValue', val: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const inputElement = ref<HTMLInputElement | HTMLTextAreaElement>();

watchEffect(() => {
    if (props.errorMessage && inputElement.value) inputElement.value.focus();
});

watchEffect(() => {
    if (inputElement.value) inputElement.value.value = props.modelValue;
})
</script>

<template>
    <label
        class="relative overflow-hidden flex items-center bg-slate-500 bg-opacity-10 transition-all border border-transparent py-4 hover:border-[#0CA9FF] focus-within:border-[#0CA9FF] rounded-full px-8 h-14 [&>*:not(div)]:w-full [&>*:not(div)]:h-full [&>*]:outline-none [&>*]:resize-none [&>*]:bg-transparent [&>*]:text-slate-200 [&>*]:placeholder:text-slate-500"
        :class="{ 'h-28 !rounded-3xl': longText, '!border-red-600': errorMessage }">
        <textarea v-if="longText" ref="inputElement" :model-value="modelValue" :placeholder="label"
            @input="emit('update:modelValue', ($event?.target as HTMLInputElement)?.value)" />
        <input v-else ref="inputElement" :model-value="modelValue" :placeholder="label"
            @input="emit('update:modelValue', ($event?.target as HTMLInputElement)?.value)" />
        <div class="absolute bottom-px right-8 !text-red-600 text-xs">{{ errorMessage }}</div>
    </label>
</template>