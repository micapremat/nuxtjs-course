<template>
    <div>
        <h2>Products</h2>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product" />
            </div>
        </div>
        <p> lalal</p>
    </div>
</template>
<script setup>

    definePageMeta({
        layout: 'products'
    })

    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Nuxt course | products',
        meta: [
            { name: 'description', content: 'Nuxt 3 course - products'}
        ]
    })

</script>
<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
</style>