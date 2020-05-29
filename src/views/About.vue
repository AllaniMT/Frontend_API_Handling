<template>
    <div class="about">
        <h1>{{ pageName }}</h1>
        <p v-fontSize="65">{{ pageDescription }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            pageName: "About us",
            pageDescription: "This is About Us Page"
        };
    },
    name: "about"
};
</script>
