<template>
  <v-app-bar>
    <v-btn icon @click="">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title>Welcome, User</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn size="small" @click="toggleDialog" class="mr-1" prepend-icon="mdi-plus" variant="tonal">
      Create Task
    </v-btn>
    <v-menu location="bottom" transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </template>

      <v-sheet class="pa-3" width="290">
        <v-text-field label="Keyword" placeholder="Search tasks by title, description, label..." variant="solo-filled" density="compact"></v-text-field>
        <div class="text-body-2 mb-2">Search tasks by date range </div>
        <VueDatePicker v-model="date" dark inline range auto-apply style="width: 100%;" />
        <div class="d-flex flex-row-reverse mt-3">
          <v-btn size="small" color="info" @click="filterByDateRange">Search</v-btn>
          <v-btn size="small" variant="text" @click="clearDates">Clear</v-btn>
        </div>
      </v-sheet>
    </v-menu>
    <v-menu location="bottom" transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="item in UserMenu" :key="item.id">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <Dialog :open="showEditDialog" :showFooter="false" title="Create Task" :toggleDialog="toggleDialog">
    <CreateTask :toggle="toggleDialog" />
  </Dialog>
</template>

<script setup>
import Dialog from '@/components/Dialog'
import { UserMenu } from '../../data'
import useDialog from '@/composables/useDialog';
import CreateTask from '@/components/CreateTask'
import useFilter from '@/composables/useFilter';

const { showEditDialog, toggleDialog } = useDialog()
const { date, clearDates, filterByDateRange } = useFilter()

console.log('date: ', date)

</script>
