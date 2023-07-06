<template>
    <div id="app" class="container">
        <main class="flex-shrink-0">
            <my-header></my-header>
            <router-view></router-view>
            <my-footer></my-footer>
        </main>
    </div>
</template>
<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    components: {
        'myHeader': Header,
        'myFooter': Footer
    }
}
</script>