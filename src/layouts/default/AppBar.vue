<template>
  <v-app-bar>
    <v-btn icon @click="">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title>Welcome, User</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="">
      <v-icon>mdi-filter</v-icon>
    </v-btn>
    <!-- <v-btn icon @click="">
      <v-icon>mdi-account</v-icon>
    </v-btn> -->
    <v-menu location="bottom" transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn icon
          v-bind="props"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="item in UserMenu"
          :key="item.id"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { UserMenu } from '../../data'
</script>
