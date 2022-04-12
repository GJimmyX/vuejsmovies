<template>
    <div class="col-12">
        <button><i>Tri par Titre</i></button>
        <button><i>Tri par Note</i></button>
        <button><i>Tri par Date de Sortie</i></button>
    </div>
</template>

<script>
    /* import axios from 'axios'; */

    export default {
        name: 'SortButtons',
        data() {
            return{
                titre: null,
                note: null,
                sortie: null,
            };
        },
    }
</script>

<style>

</style>