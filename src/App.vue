<template>
  <v-app style="background:rgb(242, 242, 237);color: black;">

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
.rl{
  text-decoration: none;
  color:#001e36 !important;
  font-size: 18px !important;
  font-weight: 200 !important;
  margin-left: 10px !important;
  margin-bottom: 5px;
}
</style>