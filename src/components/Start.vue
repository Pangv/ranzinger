<template>
  <div id="start">
    <div>
      <h2>Stefan Döbbel</h2>
      <img src="http://placehold.it/220x260" alt="">
    </div>
    <div>
      <h2>Ihr Projekt</h2>
      <img src="http://placehold.it/220x260" alt="">
    </div>
    <div>
      <h2>Meine Leidenschaft</h2>
      <img src="http://placehold.it/220x260" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'start',
  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
#start {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;

}

h2 {
  margin-bottom: .5rem;

}

</style>
