<template>
    <HomeFeatured></HomeFeatured>
    <AboutMe></AboutMe>
</template>
<script>
import HomeFeatured from './HomeFeatured.vue';
import AboutMe from './AboutMe.vue';
export default {
    components: {
        HomeFeatured,
        AboutMe
    }
}
</script>
<style>
.bg-gradient-primary-to-secondary {
    background: #1e30f3;
    background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
}

.text-gradient {
    background: -webkit-linear-gradient(315deg, #1e30f3 0%, #e21e80 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>