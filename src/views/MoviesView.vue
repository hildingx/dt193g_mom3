<template>
    <section class="container mx-auto my-5">
        <AddMovie @movieAdded="getMovies()" />
    </section>
    
    <section class="container mx-auto my-5" style="max-width: 900px;">
        <h2>Filmlista</h2>
        <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered align-middle">
                <thead class="table-light">
                    <tr>
                        <th scope="col">Titel</th>
                        <th scope="col">Längd</th>
                        <th scope="col">Beskrivning</th>
                        <th scope="col">Sett</th>
                        <th scope="col" class="text-nowrap">Ta bort</th>
                    </tr>
                </thead>
                <tbody>
                    <Movie v-for="movie in movies" :movie="movie" :key="movie._id" @deleteMovie="deleteMovie" />
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    import axios from "axios";
    import AddMovie from "@/components/AddMovie.vue";
    import Movie from "@/components/Movie.vue";

    export default {
        components: {
            AddMovie,
            Movie
        },
        data() {
            return {
                movies: []
            }
        },
        methods: {
            async getMovies() {
                try {
                const response = await axios.get("https://moment-2-backend-ramverk-hildingx.onrender.com/movies");
                this.movies = response.data;
                } catch (error) {
                console.error("Kunde inte hämta filmer:", error.message);
                }
            },
            async deleteMovie(movieId) {
                if (!confirm("Är du säker på att du vill ta bort filmen?")) {
                    return;
                }
                try {
                    await axios.delete(`https://moment-2-backend-ramverk-hildingx.onrender.com/movies/${movieId}`);
                } catch (error) {
                    console.error("Kunde inte ta bort film:", error.message);
                }
                this.getMovies();
            }
        },
        mounted() {
            this.getMovies();
        }
    }
</script>

<style scoped>

</style>