<template>
    <h2>Filmlista</h2>
    <p>
        En undersida som konsumerar din externa webbtjänst och skriver ut på lämpligt sätt. 
        Förslagsvis till en tabell. Här ska det också gå att radera data och finnas formulär för att lägga till data.
    </p>

    <h2>Filmer</h2>
    <MovieList />
</template>

<script>
    import MovieList from "@/components/MovieList.vue";

    export default {
        components: {
            MovieList,
        }
    }
</script>