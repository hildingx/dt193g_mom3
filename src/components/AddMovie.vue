<template>
    
    <form @submit.prevent="addMovie" class="needs-validation mx-auto" style="max-width: 500px;">
        <h2>Lägg till film</h2>
        <div class="mb-3">
            <label for="title" class="form-label">Titel</label>
            <input id="title" v-model="newMovie.name" type="text" class="form-control" placeholder="Ange titel" required />
        </div>
        <div class="mb-3">
            <label for="length" class="form-label">Längd</label>
            <input id="length" v-model="newMovie.length" type="number" class="form-control" placeholder="Ange längd i minuter" required />
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Beskrivning</label>
            <textarea id="description" v-model="newMovie.description" class="form-control" placeholder="Ange beskrivning" rows="3" required></textarea>
        </div>
        <div class="form-check mb-3">
            <input id="watched" type="checkbox" v-model="newMovie.watched" class="form-check-input" />
            <label for="watched" class="form-check-label">Sett</label>
        </div>
        
        <button type="submit" class="btn btn-primary">Lägg till film</button>
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

<style scoped>
    h2 {
        text-align: center;
    }
</style>