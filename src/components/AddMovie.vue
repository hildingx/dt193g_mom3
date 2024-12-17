<template>
    <form @submit.prevent="addMovie">
        <input v-model="newMovie.name" placeholder="Titel" required />
        <input v-model="newMovie.length" type="number" placeholder="Längd (min)" required />
        <textarea v-model="newMovie.description" placeholder="Beskrivning" required></textarea>
        <label>
            <input type="checkbox" v-model="newMovie.watched" /> Sett
        </label>
        <button type="submit">Lägg till film</button>
    </form>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                newMovie: {
                    name: "",
                    length: "",
                    description: "",
                    watched: false
                }
            }
        },
        emits: ["movieAdded"],
        methods: {
            async addMovie() {
                try {
                    await axios.post("https://moment-2-backend-ramverk-hildingx.onrender.com/movies", this.newMovie);
                    
                    this.newMovie = { name: "", length: "", description: "", watched: false };

                    this.$emit("movieAdded")
                } catch (error) {
                    console.error("Kunde inte lägga till film:", error.message);
                }
            }
        }
    }
</script>