<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <!-- Logotyp -->
                <RouterLink class="navbar-brand" to="/">
                <img :src="logo" alt="Logotyp" height="40" />
                </RouterLink>

                <!-- Hamburgermeny -->
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navigationslänkar -->
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                <RouterLink class="nav-link" to="/">Hem</RouterLink>
                </li>
                <li class="nav-item">
                <RouterLink class="nav-link" to="/movies">Filmer</RouterLink>
                </li>
                <li class="nav-item">
                <RouterLink class="nav-link" to="/about">Om</RouterLink>
                </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    import { RouterLink } from 'vue-router';
    import logo from "@/assets/movielib_logo.png";
    export default {
        components: {
            RouterLink
        },
        data() {
            return {
                logo,
            };
        },
    }
</script>