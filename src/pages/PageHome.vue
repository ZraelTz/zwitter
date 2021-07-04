<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            bottom-slots
            class="new-zweet"
            v-model="textContent"
            placeholder="What's happening?"
            counter
            maxlength="280"
            :dense="dense"
            autogrow
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink q-mb-lg">
          <q-btn
            @click="addNewZweet"
            :disable="!textContent"
            color="primary"
            label="Zweet"
            rounded
            unelevated
            no-caps
          />
        </div>
      </div>
      <q-separator size="10px" color="grey-2" />
      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item class="zweet q-py-md" v-for="zweet in zweets" :key="zweet.id">
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>
                  Zrael Walker
                </strong>
                <span class="text-grey-7"
                  >@zrael_walker
                  <br class="lt-md" />
                  &bull; {{ zweet.date | relativeDate }}
                </span>
              </q-item-label>
              <q-item-label class="zweet-content text-body1">
                {{ zweet.content }}
              </q-item-label>

              <div class="zweet-icons row justify-between q-mt-sm">
                <q-btn
                  color="grey"
                  icon="far fa-comment"
                  size="sm"
                  flat
                  round
                />

                <q-btn
                  color="grey"
                  icon="fas fa-retweet"
                  size="sm"
                  flat
                  round
                />

                <q-btn
                  @click="toggleLiked(zweet)"
                  :color="zweet.liked ? 'blue' : 'grey'"
                  :icon="zweet.liked ? 'fas fa-heart' : 'far fa-heart'"
                  size="sm"
                  flat
                  round
                />

                <q-btn
                  @click="deleteZweet(zweet)"
                  color="grey"
                  icon="fas fa-trash"
                  size="sm"
                  flat
                  round
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { formatDistance } from "date-fns";
import db from "src/boot/firebase";

export default {
  name: "PageHome",
  data() {
    return {
      textContent: "",
      zweets: [
        // {
        //   id: "ID1",
        //   content:
        //     "Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit and some.",
        //   date: 1620646826987,
        //   liked: false
        // },
        // {
        //   id: "ID2",
        //   content:
        //     "Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit and more.",
        //   date: 1620646826986,
        //   liked: true
        // }
      ]
    };
  },

  methods: {
    addNewZweet() {
      let newZweet = {
        content: this.textContent,
        date: Date.now(),
        liked: false
      };

      db.collection("zweets")
        .add(newZweet)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });

      this.textContent = "";
    },

    deleteZweet(zweet) {
      db.collection("zweets")
        .doc(zweet.id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch(error => {
          console.error("Error removing document: ", error);
        });
    },

    toggleLiked(zweet) {
      return db
        .collection("zweets")
        .doc(zweet.id)
        .update({
          liked: !zweet.liked
        })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch(error => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  },

  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    }
  },

  mounted() {
    db.collection("zweets").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let zweetData = change.doc.data();
        zweetData.id = change.doc.id;
        if (change.type === "added") {
          console.log("New zweet: ", zweetData);
          this.zweets.unshift(zweetData);
        }
        if (change.type === "modified") {
          console.log("Modified zweet: ", zweetData);
          let index = this.zweets.findIndex(zweet => zweet.id === zweetData.id);
          Object.assign(this.zweets[index], zweetData);
        }
        if (change.type === "removed") {
          console.log("Removed zweet: ", zweetData);
          let index = this.zweets.findIndex(zweet => zweet.id === zweetData.id);
          this.zweets.splice(index, 1);
        }
      });
    });
  }
};
</script>

<style lang="sass">
.new-zweet
  textarea
    font-size: 19px
    line-height: 2.0 im !important

.zweet-content
  white-space: pre-line

.zweet:not(:first-child)

  border-top: 1px solid rgba(0, 0, 0, 0.12)

.zweet-icons
  margin-left: -5px
</style>
