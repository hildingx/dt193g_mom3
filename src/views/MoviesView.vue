<template>
    <!-- Sektion för att lägga till ny film -->
    <section class="container mx-auto my-5">
        <!-- AddMovie-komponent för att hantera formulär, lägga till film och validering av input -->
        <AddMovie @movieAdded="getMovies()" />
    </section>
    
    <!-- Sektion för att visa filmer i tabell -->
    <section class="container mx-auto my-5" style="max-width: 900px;">
        <h2>Filmlista</h2>
        <!-- Laddningsindikator  -->
        <div v-if="isLoading" class="text-center my-4">
            <p>Laddar filmer...</p>
        </div>
        <!-- Filmtabell -->
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
                    <!-- Movie-komponent för att iterera varje film -->
                    <Movie v-for="movie in movies" :movie="movie" :key="movie._id" @deleteMovie="deleteMovie" />
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    // Import av komponenter och axios för API
    import axios from "axios";
    import AddMovie from "@/components/AddMovie.vue";
    import Movie from "@/components/Movie.vue";

    export default {
        components: {
            AddMovie, // Komponent för att lägga till film
            Movie // Komponent för att visa varje film i tabell
        },
        data() {
            return {
                movies: [], // Array för att lagra filmer
                isLoading: false, // Laddningsindikator
            }
        },
        methods: {
            // Hämta alla filmer från API
            async getMovies() {
                this.isLoading = true; // Starta laddningsindikator
                try {
                    const response = await axios.get("https://moment-2-backend-ramverk-hildingx.onrender.com/movies");
                    this.movies = response.data; // Spara filmer i movies-arrayen
                } catch (error) {
                    console.error("Kunde inte hämta filmer:", error.message);
                } finally {
                    this.isLoading = false; // Stoppa laddningsindikator
                }
            },
            // Ta bort film 
            async deleteMovie(movieId) {
                if (!confirm("Är du säker på att du vill ta bort filmen?")) {
                    return;
                }
                try {
                    await axios.delete(`https://moment-2-backend-ramverk-hildingx.onrender.com/movies/${movieId}`);
                } catch (error) {
                    console.error("Kunde inte ta bort film:", error.message);
                    alert("Det gick inte att ta bort filmen. Försök igen senare.");
                }
                this.getMovies(); // Ladda filmlistan på nytt
            }
        },
        // Ladda filmlistan initialt
        mounted() {
            this.getMovies();
        }
    }
</script>

<style scoped>

</style>