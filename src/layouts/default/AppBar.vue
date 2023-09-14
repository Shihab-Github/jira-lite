<template>
  <v-app-bar>
    <v-btn icon @click="">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title>Welcome, User</v-toolbar-title>
    <v-spacer></v-spacer>
    
    <v-text-field placeholder="Search Tasks" prepend-inner-icon="mdi-magnify" variant="underlined"></v-text-field>
    <v-btn icon @click="">
      <v-icon>mdi-filter-check</v-icon>
    </v-btn>
    <v-btn icon @click="">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
//
</script>
