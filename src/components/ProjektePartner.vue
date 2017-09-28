<template lang="html">
  <div>
    <h1>Projekte</h1>
    <div class="p_p columns">

      <div class="sheet column"
      v-for="projekt in projekte"
      :key="projekt.id">
      <img :src="projekt.img" alt="Projektbild">
      <h1 class="p_title">{{projekt.name}}</h1>
      </div>
    </div>

    <h1>Partner</h1>

    <div class="p_p columns">
      <div class="sheet column"
      v-for="part in partner"
      :key="part.id">
        <img  :src="part.img" alt="Partner Logo">
        <h1 class="p_title">{{part.name}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projekte_partner',
  data() {
    return {
      projekte: [
        {
          name: 'Treppe',
          img: 'https://unsplash.it/200?random',
        },
        {
          name: 'Holzhaus',
          img: 'https://unsplash.it/200?random',
        },
        {
          name: 'Gaube',
          img: 'https://unsplash.it/200?random',
        },
      ],
      partner: [
        {
          name: 'Partner 01',
          img: 'https://unsplash.it/240',
        },
        {
          name: 'Partner 02',
          img: 'https://unsplash.it/240',
        },
        {
          name: 'Partner 03',
          img: 'https://unsplash.it/240',
        },
        {
          name: 'Partner 04',
          img: 'https://unsplash.it/240',
        },
        {
          name: 'Partner 05',
          img: 'https://unsplash.it/240',
        },
        {
          name: 'Partner 06',
          img: 'https://unsplash.it/240',
        },
        {
          name: 'Partner 07',
          img: 'https://unsplash.it/240',
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
h1, h2 {
  font-weight: 700;
  margin-bottom: 1rem;
  display: table;
  padding-left: 1rem;
  padding-right: 1rem;
}

h1.p_title {
  margin-top: -.4rem;
  background-color: rgba(0, 0, 0, 0.89);
  color: white;
  text-align: center;
}

.p_p {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;

  flex-wrap: wrap;
  justify-content: space-around;

}

.sheet img{
  min-width: 150px;
}

</style>
