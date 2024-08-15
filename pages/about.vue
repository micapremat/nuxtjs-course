<template>
    <div>
        <h2>About</h2>
        <p> lalal</p>
        <div>{{ data }}</div>
    </div>
</template>
<script setup>
    const { data } = await useFetch('/api/currency/DKK')
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
h2 {
    margin-bottom: 20px;
    font-size: 36px;
    font-family: "Montserrat", sans-serif;
}
</style>