<template>
    <tr>
        <td>{{ movie.name }}</td>
        <td class="text-nowrap">{{ movie.length }} min</td>
        <td>{{ movie.description }}</td>
        <td>{{ movie.watched ? "Ja" : "Nej" }}</td>
        <td>
            <button @click="$emit('deleteMovie', movie._id)" class="btn"><i class="bi bi-trash"></i></button>
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