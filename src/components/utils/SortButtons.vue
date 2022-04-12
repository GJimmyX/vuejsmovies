<template>
  <div class="col-12">
    <button @click="tri_titre"><i>Tri par Titre</i></button>
    <button @click="tri_note"><i>Tri par Note</i></button>
    <button @click="tri_sortie"><i>Tri par Date de Sortie</i></button>
  </div>
</template>

<script>
export default {
  name: "SortButtons",
  props: ["movies"],
  data() {
    return {
      titre: false,
      note: false,
      sortie: false,
      sortedmovies: null,
    };
  },
  methods: {
    tri_titre() {
      this.sortedmovies = this.movies;
      if (this.titre) this.sortedmovies.reverse();
      else {
        this.sortedmovies.sort((a, b) => {
          if (a.title > b.title) return 1;
          else if (a.title < b.title) return -1;
          else return 0;
        });
        this.titre = true;
      }
      this.$emit("sort-movies", this.sortedmovies);
    },
    tri_note() {
      this.sortedmovies = this.movies;
      if (this.note) this.sortedmovies.reverse();
      else {
        this.sortedmovies.sort((a, b) => {
          if (a.vote_average > b.vote_average) return 1;
          else if (a.vote_average < b.vote_average) return -1;
          else return 0;
        });
        this.note = true;
      }
      this.$emit("sort-movies", this.sortedmovies);
    },
    tri_sortie() {
      this.sortedmovies = this.movies;
      if (this.sortie) this.sortedmovies.reverse();
      else {
        this.sortedmovies.sort((a, b) => {
          if (a.release_date > b.release_date) return 1;
          else if (a.release_date < b.release_date) return -1;
          else return 0;
        });
        this.sortie = true;
      }
      this.$emit("sort-movies", this.sortedmovies);
    },
  },
};
</script>

<style>
.col-12 button {
  margin: 0 1%;
  background-color: #343A41;
  color: #ABB1B8;
  border: 2px solid #343A41;
}
</style>