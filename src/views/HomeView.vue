<script>
    import banner from "@/assets/banner.jpg";
    export default {
        data() {
            return {
                banner,
            };
        }
    };
</script>

<template>
    <div class="banner-container mb-4">
        <img :src="banner" class="img-fluid" alt="Banner" />
    </div>
    <section class="container mx-auto py-4" style="max-width: 900px;">
        <h2>Startsida</h2>
        <p>Mitt påtvingade fritidsintresse är att leka med mina barn. I annat fall är jag förtjust i film och filmhistoria. Sen gillar jag <i>givetvis</i> att koda.</p>
    </section>
</template>

<style scoped>
    .banner-container {
        height: 300px;
        overflow: hidden;
    }

    .banner-container img {
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
    }
</style>
