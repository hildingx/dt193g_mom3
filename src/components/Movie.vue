<template>
    <tr>
        <td>{{ movie.name }}</td>
        <td class="text-nowrap">{{ movie.length }} min</td>
        <td>{{ movie.description }}</td>
        <td>{{ movie.watched ? "Ja" : "Nej" }}</td>
        <td>
            <!-- Btn för att radera, emitar ett event för att ta bort film -->
            <button @click="$emit('deleteMovie', movie._id)" class="btn"><i class="bi bi-trash"></i></button>
        </td>
    </tr>
</template>

<script>
    export default {
        // Tar emot en film som prop från föräldrakomponent
        props: {
            movie: Object
        },
        // Deklarerar att komponenten emitar deleteMovie-event (egentligen inte nödvändig?)
        emits: ["deleteMovie"]
    };
</script>