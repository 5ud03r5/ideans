<template>
    <div class="flex flex-col my-10 lg:ml-72 max-lg:ml-16">
        <div class="flex flex-col justify-center mb-5 ">
            <p class="lg:text-[40px] max-lg:text-[30px] max-sm:text-[25px] font-bold text-center mb-5">Find developers</p>
            <input
                class="bg-gray-100 shadow-md py-1 mx-auto px-2 md:w-[400px] outline outline-1 outline-gray-200 transition-all rounded-lg focus:outline-none "
                placeholder="Search..." />
        </div>
        <div class="flex flex-wrap justify-center">
            <DeveloperItem v-for="profile in profiles" :key="profile.id" :profile="profile" />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'app',
    middleware: 'auth'
})

const { data: profiles } = await useLazyAsyncData('profiles', async () => await $fetch('/api/profiles'))

</script>