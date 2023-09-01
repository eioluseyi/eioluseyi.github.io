<script setup lang="ts">
const fullName = ref("");
const email = ref("");
const message = ref("");
const errors = ref<{ fullName?: string; email?: string; message?: string; }>({});
const isValidated = ref(false);
const showErrorMessage = ref(false);
const isLoading = ref(false);
const showSent = ref(false);

const resetForm = () => {
    fullName.value = "";
    email.value = "";
    message.value = "";
    showErrorMessage.value = false;
}

const postSubmission = async () => {
    const url = `https://formspree.io/f/mjvqwgld`;
    const form_data = new FormData();

    form_data.append("fullName", fullName.value);
    form_data.append("email", email.value);
    form_data.append("message", message.value);

    isLoading.value = true;

    try {
        await $fetch(url, { method: "POST", body: form_data });
    } catch { return; } finally {
        isLoading.value = false;

        // handle everything in finally, since formspree api has a weird behaviour
        showSent.value = true;
        setTimeout(() => showSent.value = false, 2000);
        setTimeout(resetForm, 500);
    }

}

const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (isValidated.value) return postSubmission(); // Submit form
    return showErrorMessage.value = true; // Show error messages;
}

watchEffect(() => {
    errors.value = {};
    const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!fullName.value) errors.value.fullName = "You can use a nickname 😎";
    if (!email.value.match(validRegex)) errors.value.email = "We need a valid one 🌚";
    if (!email.value) errors.value.email = "Your email is needed 🙃";
    if (!message.value) errors.value.message = "Say something to me.. 👀";

    const allErrorValues = Object.values(errors.value);
    isValidated.value = allErrorValues.length === 0;
});
</script>

<template>
    <div class="relative text-slate-500 flex flex-col">
        <div class="flex-1 flex flex-col transition-all duration-300 ease-out" :class="{ 'opacity-0': showSent }">
            <LayoutPageTitle>Reach Out</LayoutPageTitle>
            <div class="text-sm pt-6 pb-5">
                <b class="text-slate-300">Shoot me a DM!</b><br />
                Feel free to drop me a line using the form or any of my socials.
            </div>
            <LayoutContentWrapper>
                <form class="grid gap-4" @submit="handleSubmit">
                    <TextInput v-model="fullName" label="Full name"
                        :error-message="showErrorMessage ? errors.fullName : ''" />
                    <TextInput v-model="email" label="Email" :error-message="showErrorMessage ? errors.email : ''" />
                    <TextInput v-model="message" label="Message" :error-message="showErrorMessage ? errors.message : ''"
                        long-text />
                    <PrimayButton class="!text-base !text-white" :label="isLoading ? 'Sending' : 'Send'" type="submit"
                        :is-loading="isLoading" />
                </form>
                <div class="pt-6 flex justify-center [&>*]:scale-150">
                    <SocialMediaList no-git />
                </div>
            </LayoutContentWrapper>
        </div>
        <div class="absolute inset-0 grid place-items-center opacity-0 pointer-events-none transition-all duration-300 ease-out"
            :class="{ 'opacity-100 pointer-events-auto': showSent }">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-32 fill-slate-200" viewBox="0 0 512 512">
                    <path
                        d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                </svg>
                <LayoutPageTitle>Sent!</LayoutPageTitle>
            </div>
        </div>
    </div>
</template>