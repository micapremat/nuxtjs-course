<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-a" >
            <NuxtLink to="/products" class="font-bold">Products </NuxtLink>
        </nav>
    </header>
    <!--Output the page content-->
    <div class="container mx-auto p-4">
        <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home </NuxtLink>
                    <NuxtLink to="/about">About </NuxtLink>
                    <NuxtLink to="/products">Products </NuxtLink>
                </li>
            </ul>
    </footer>
</template>
<script setup>

</script>
<style scoped>
.router-link-exact-active {
    color: aqua;
}
</style>