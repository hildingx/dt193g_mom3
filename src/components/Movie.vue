<template>
    <tr>
        <td>{{ movie.name }}</td>
        <td>{{ movie.length }}</td>
        <td>{{ movie.description }}</td>
        <td>{{ movie.watched ? "Ja" : "Nej" }}</td>
        <td>
            <button @click="$emit('deleteMovie', movie._id)">Radera</button>
        </td>
    </tr>
</template>

<script>
    export default {
        props: {
            movie: Object
        },
        emits: ["deleteMovie"]
    };
</script>