<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weigh-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="header-icon q-pa-md lt-md"
            name="fas fa-dove"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" :width="283" bordered>
      <q-icon class="q-pa-md" name="fas fa-dove" size="lg" color="primary" />

      <q-list>
        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon color="primary" name="home" />
          </q-item-section>
          <q-item-section class="text-h7 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item to="/about" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon color="primary" name="help" />
          </q-item-section>
          <q-item-section class="text-h7 text-weight-bold"
            >About</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input
        class="q-ma-md"
        color="teal"
        outlined
        rounded
        dense
        label="Search Zwitter"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-list separator padding>
        <q-item>
          <q-item-section>
            <q-item-label overline class="text-grey"
              >Entertainment</q-item-label
            >
            <q-item-label class="text-weight-bold"
              >Something interesting happended recently</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline class="text-grey"
              >Entertainment</q-item-label
            >
            <q-item-label class="text-weight-bold"
              >Something interesting happended recently</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline class="text-grey"
              >Entertainment</q-item-label
            >
            <q-item-label class="text-weight-bold"
              >Something interesting happended recently</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline class="text-grey"
              >Entertainment</q-item-label
            >
            <q-item-label class="text-weight-bold"
              >Something interesting happended recently</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      right: false
    };
  }
};
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
