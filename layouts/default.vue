<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">Home </NuxtLink>
            <ul class="flex">
                <li>
                    <NuxtLink to="/" class="mx-2">Home </NuxtLink>
                    <NuxtLink to="/about" class="mx-2">About </NuxtLink>
                    <NuxtLink to="/products" class="btn">Products </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>
<script setup>

</script>
<style scoped>
.router-link-exact-active {
    color: #d54321;
}
</style>