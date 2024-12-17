<template>
    <h2>Filmlista</h2>
    <p>
        En undersida som konsumerar din externa webbtjänst och skriver ut på lämpligt sätt. 
        Förslagsvis till en tabell. Här ska det också gå att radera data och finnas formulär för att lägga till data.
    </p>

    <h2>Filmer</h2>
    <AddMovie @movieAdded="getMovies()" />
    <table class="table">
        <thead>
            <tr>
                <th>Titel</th>
                <th>Längd</th>
                <th>Beskrivning</th>
                <th>Sett</th>
                <th>Åtgärder</th>
            </tr>
        </thead>
        <tbody>
            <Movie v-for="movie in movies" :movie="movie" :key="movie._id" @deleteMovie="deleteMovie" />
        </tbody>
    </table>
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
                movies: [],
                newMovie: {
                    name: "",
                    length: "",
                    description: "",
                    watched: false
                }
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