<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Todolist
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
        v-for="nav in essentialLinks"
        :key="nav.title"
        :to="nav.link"
        :icon="nav.icon"
        :title="nav.title" />
      </q-tabs>   
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-grey-3"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
const linksData = [
  {
    title: 'Todo',
    icon: 'list',
    link: "/"
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: "/settings"
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    }
  }
}
</script>

<style lang="scss" scoped>
 @media screen and (min-width: 768px) {
   .q-footer {
     display: none;
   }
 }

.q-drawer{
  .q-router-link--exact-active {
    background-color: rgba(255, 255, 255, .2) !important;
  }
 }
</style>