<template>
    <!-- 
    Formulär för att lägga till ny film.
    Hindra sidladdning vid submit och kör validateForm-metod.
    -->
    <form @submit.prevent="validateForm" class="mx-auto" style="max-width: 500px;">
        <h2>Lägg till film</h2>

        <!-- Title input med validering -->
        <div class="mb-3">
            <label for="title" class="form-label">Titel</label>
            <!-- 
            v-model -> Två-vägsbindning mellan input-fält och newMovie.name. 
            :class -> Lägg till bootstrap-klass 'is-invalid' om valideringsfel finns 
            -->
            <input id="title" v-model="newMovie.name" type="text" class="form-control" :class="{'is-invalid': errors.name}" placeholder="Ange titel" />
            <!-- Felmeddelande vid felaktig input -->
            <div class="invalid-feedback" v-if="errors.name">
                {{ errors.name }}
            </div>
        </div>

        <!-- Filmlängd input med validering -->
        <div class="mb-3">
            <label for="length" class="form-label">Längd (min)</label>
            <input id="length" v-model="newMovie.length" type="number" class="form-control" :class="{'is-invalid': errors.length}" placeholder="Ange längd i minuter"  />
            <div class="invalid-feedback" v-if="errors.length">
                {{ errors.length }}
            </div>
        </div>

        <!-- Beskrivning input med validering -->
        <div class="mb-3">
            <label for="description" class="form-label">Beskrivning</label>
            <textarea id="description" v-model="newMovie.description" class="form-control" :class="{'is-invalid': errors.description}" placeholder="Ange beskrivning" rows="3" ></textarea>
            <div class="invalid-feedback" v-if="errors.description">
                {{ errors.description }}
            </div>
        </div>

        <!-- Checkbox för att markera om film är sedd -->
        <div class="form-check mb-3">
            <input id="watched" type="checkbox" v-model="newMovie.watched" class="form-check-input" />
            <label for="watched" class="form-check-label">Sett</label>
        </div>

        <div class="alert alert-dark">
            <strong>Förhandsvisning av titel:</strong> {{ newMovie.name }}<br>
            <strong>Förhandsvisning av längd:</strong> {{ newMovie.length }}<br>
            <strong>Förhandsvisning av beskrivning:</strong> {{ newMovie.description }}<br>
            <strong>Förhandsvisning av sett:</strong> {{ newMovie.watched ? "Ja" : "Nej" }}
        </div>
        
        <button type="submit" class="btn btn-dark">Lägg till film</button>
    </form>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                // Objekt för att hålla filmens data
                newMovie: {
                    name: "",
                    length: "",
                    description: "",
                    watched: false
                },
                // Objekt för att lagra valideringsfel
                errors: {}
            }
        },
        emits: ["movieAdded"],
        methods: {
            // Metod för att validera formuläret innan anrop
            validateForm() {
                this.errors = {}; // Rensa tidigare fel

                // Validera titel
                if (!this.newMovie.name.trim()) {
                    this.errors.name = "Titel är obligatoriskt.";
                }

                // Validera längd
                if (!this.newMovie.length || this.newMovie.length <= 0) {
                    this.errors.length = "Ange längd på filmen.";
                }

                // Validera beskrivning
                if (!this.newMovie.description.trim()) {
                    this.errors.description = "Beskrivning är obligatoriskt.";
                }

                // Om inga fel, lägg till film
                if (Object.keys(this.errors).length === 0) {
                    this.addMovie();
                }
            },
            // Lägg till film till API
            async addMovie() {
                try {
                    // Post-anrop med film-objekt (Axios står för json-konvertering)
                    await axios.post("https://moment-2-backend-ramverk-hildingx.onrender.com/movies", this.newMovie);
                    
                    this.newMovie = { name: "", length: "", description: "", watched: false }; // Rensa formulär

                    this.$emit("movieAdded") // Skicka event till föräldrakomponent
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