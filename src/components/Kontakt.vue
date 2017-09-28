<template lang="html">
 <form action="" class="form">
   <div class="field">
     <label for="" class="label">Name *</label>
     <p class="control">
       <input type="text" class="input" required="true">
     </p>
   </div>
   <div class="field">
     <label for="" class="label">Email *</label>
     <p class="control">
       <input type="email" class="input" required="true" autocomplete="on" autosave>
     </p>
   </div>
   <div class="field">
     <label for="" class="label">Nachricht *</label>
     <p class="control">
       <textarea class="textarea" name="name" rows="8" cols="80" required="true"></textarea>
     </p>
   </div>
   <div class="field is-grouped">
     <p class="control">
       <button class="button is-primary">Email Senden</button>
     </p>
     <p class="control">
       <button class="button is-link">Abbrechen</button>
     </p>
   </div>
   <p>* diese Felder sind erforderlich</p>
   <div class="map">
     <img src="http://placehold.it/1024x300?text=Karte" alt="">
   </div>
 </form>
</template>

<script>

export default {
  name: 'kontakt',
  data() {
    return {

    };
  },
};
</script>

<style lang="css">
</style>
