<template>
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
            <tr v-for="movie in movies" :key="movie._id">
                <td>{{ movie.name }}</td>
                <td>{{ movie.length }}</td>
                <td>{{ movie.description }}</td>
                <td>{{ movie.watched ? "Ja" : "Nej" }}</td>
                <td>
                    <button>Radera</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import axios from "axios";

    export default {
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
            async fetchMovies() {
                try {
                const response = await axios.get("https://moment-2-backend-ramverk-hildingx.onrender.com/movies");
                this.movies = response.data;
                } catch (error) {
                console.error("Kunde inte hämta filmer:", error.message);
                }
            }
        },
        mounted() {
            this.fetchMovies();
        }
    }
</script>