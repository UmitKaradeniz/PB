<template>
  <q-toolbar style="background: #f88424">
    <div
      v-if="$q.screen.gt.sm"
      class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap"
    >
      <q-space /> <q-space /> <q-space /> <q-space /> <q-space /> <q-space />
      <q-space /> <q-space /> <q-space /> <q-space /> <q-space /> <q-space />
      <q-space /> <q-space /> <q-space /> <q-space /> <q-space /> <q-space />
      <q-space /> <q-space /> <q-space /> <q-space /> <q-space /> <q-space />
      <q-space /> <q-space /> <q-space /> <q-space /> <q-space /> <q-space />
          <q-btn round flat>
            <q-space />
           <q-icon class="col text" name="looks_one" color="white" />
            <q-tooltip>Account</q-tooltip>
            <q-space />
          </q-btn>
          <a ref="javascript:void(0)" class="text-white">
            Sepet
          </a>
          <a ref="javascript:void(0)" class="text-white">   
            _______
          </a> 
          <q-btn round flat>
           <q-icon name="looks_two" color="grey-5" />
            <q-tooltip>Account</q-tooltip>
          </q-btn>
          <a ref="javascript:void(0)" class="text-white">
            Teslimat ve Ödeme
          </a>
    </div>
  </q-toolbar>

  <div class="row q-col-gutter-md q-pt-md">
    <div class="col-xs-12 col-sm-6 col-md-6">
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-img
            class="col-4"
            src="https://cdn.pazarama.com/asset/8806094107852/d0922605-2e8c-4ac4-0fb4-08d98a57dc84/samsunggalaxya335g128gbbeyazsamsungtrkiyegarantili-1.jpg"
          />

          <q-card-section>
            {{ lorem }}
          </q-card-section>
          <q-item-section avatar>
            <q-icon name="delete" />
          </q-item-section>
        </q-card-section>

        <div class="q-pa-lg flex flex-center">
          <q-pagination v-model="current" :max="5" direction-links />
        </div>

        <q-separator />

        <q-card-actions>
          <q-btn flat> Fiyat: 8.999,00 TL </q-btn>
          <q-btn flat> Renk siyah</q-btn>
          <q-btn flat color="primary"> Ödemeye Geç </q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6">
      <q-card class="my-card">
        <q-card-section class="bg-white text-black">
          <div class="text-h6">TOPLAM</div>
          <q-space /><q-space />
          <div class="text-subtitle2">8.999,00 TL</div>
        </q-card-section>
        <q-card-section>
        </q-card-section>
        <q-card-section>
        </q-card-section>
        <q-card-section>
        </q-card-section>

        <q-card-actions class="bg-white text-black" vertical>
          <q-btn
            rounded
            size="lg"
            color="orange-7"
            class="full-width text-white"
            label="Alışverişi Tamamla"
            no-caps
          />
          </q-card-actions>
          <q-card class="my-card" flat bordered>
 
      <q-card-actions>
        <q-card-section class="text-subitle2">
            {{ lorem3 }}
          </q-card-section>

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          
          <q-card-section class="text-subitle2">
            {{ lorem2 }}
            <q-input
            class="full-width text-white"
            outlined
            dense
            v-model="search"
            color="bg-grey-3 shadow-1"
            placeholder="İndirim Kodu"
          >
            <template v-slot:append>
              <q-btn aria-label="Menu" color="orange" no-caps>
                <div>Ekle</div>
               
              </q-btn>
            </template>
          </q-input>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
      </q-card>
    </div>
  </div>
  
</template>

<script>
import { defineComponent, ref } from "vue";

import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

export default defineComponent({
  name: "TodoPage",
  name: "Help",
  setup() {
    return {
      current: ref(1),
      expanded: ref(false),
      lorem:
        "Samsung Galaxy A33 5G Beyaz 128 GB 6 GB Ram Akıllı Telefon (Samsung Türkiye Garantili)",
        lorem2:
        "İndirim kodunuzu aşağıdaki alana girerek sepete uygulayabilirsiniz.",
        lorem3:
        "İndirim kodum var",
    };
  },
  data() {
    return {
      slide: ref(1),
      hello1: false,
      hello2: false,
      hello3: false,
      hello4: false,
      hello5: false,
      hello6: false,
      hello7: false,
      hello8: false,
      hello9: false,
      hello10: false,
      loading: false,
      updating: [],
      newTask: "",
      tasks: [],
      checked: true,
      tasksColRef: "Tasks",
      unsub: {},
    };
  },

  async created() {
    await this.getTasks();
    this.updating = new Array(this.tasks.length).fill(false);
    const tasks = this.tasks;
    this.unsub = onSnapshot(
      doc(this.$db, this.tasksColRef, this.tasks[0].id),
      (doc) => {
        tasks[0] = { ...doc.data(), id: tasks[0].id };
        console.log("Current data: ", doc.data());
      }
    );
  },
  methods: {
    async getTasks() {
      this.loading = true;
      this.tasks = [];

      const q = query(
        collection(this.$db, "Tasks"),
        where("done", "==", false)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((todo) => {
        console.log({ ...todo.data(), id: todo.id });
        this.tasks.push({ ...todo.data(), id: todo.id });
      });

      this.loading = false;
    },
    async toggleDone(task, index) {
      this.updating[index] = true;
      await setDoc(
        doc(this.$db, this.tasksColRef, task.id),
        { done: !task.done },
        { merge: true }
      );
      task.done = !task.done;
      this.updating[index] = false;
    },
    updated(task, i) {
      task.done = !task.done;
      this.toggleDone(task, i);
      //console.log("done: " + t);
      console.log(i);
    },
    deleteTask(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          let gorev = this.tasks[index].title;
          deleteDoc(doc(this.$db, this.tasksColRef, this.tasks[index].id));
          this.tasks.splice(index, 1);
          this.$q.notify("Task: " + gorev + " deleted");
        });
    },
    async addTask() {
      this.loading = true;
      //TODO : önce buluta buharlaştır
      let todo = {
        title: this.newTask,
        done: false,
      };
      const docRef = await addDoc(collection(this.$db, "Tasks"), todo);
      todo.id = docRef.id;
      this.tasks.push(todo);
      this.newTask = "";
      this.loading = false;
    },
  },
});
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-tasks {
  opacity: 0.5;
}
</style>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>