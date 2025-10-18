<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list>
      <q-expansion-item popup default-opened icon="filter_list" label="Alt Kategoriler" caption="5 unread emails">
        <q-separator />
        <q-card>
          <div class="q-pa-mdd">
    <q-option-group
      :options="options" type="checkbox" v-model="group"/> </div>
          </q-card>
      </q-expansion-item>
      <q-expansion-item popup icon="devices" label="Outbox" caption="Empty">
        <q-separator />
        <q-card>
          <div class="q-pa-mdd">
    <q-option-group
      :options="options1" type="checkbox" v-model="group"/> </div>
        </q-card>
      </q-expansion-item>
      <q-expansion-item popup icon="high_quality" label="Draft" caption="Draft a new email">
        <q-separator />
        <q-card>
          <div class="q-pa-mdd">
    <q-option-group
      :options="options2" type="checkbox" v-model="group"/> </div>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
  
  <div class="q-pa-md">
    <q-img
      src="https://cdn.quasar.dev/img/parallax2.jpg"
      spinner-color="white"
      style="height: 170px; max-width: 300px"
      img-class="my-custom-image"
      class="rounded-borders"
    >
    
    </q-img>
  </div>

      <div class="">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card @click="$router.push('/details')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img  style="height: 270px; max-width: 250px" src="https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/200/200/productimage/125078436/125078436_0_MC/60698823.jpg"></q-img>

            <q-card-section class="q-pb-xs q-pt-md">
              <!--<q-btn-->
              <!--fab-->
              <!--color="primary"-->
              <!--icon="shopping_cart"-->
              <!--class="absolute"-->
              <!--style="top: 0; right: 12px; transform: translateY(-50%);"-->
              <!--&gt;</q-btn>-->

              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Samsung Galaxy S22 8GB/128GB Siyah Akıllı Telefon                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <!--<q-icon name="place"></q-icon>-->
                  <!--250 ft-->
                </div>
              </div>

              <q-rating v-model="stars" color="orange-10" :max="1" readonly size="20px" ></q-rating>
              <span class="text-caption text-weight text-black">4.6 (5 Değerlendirme)</span>
            </q-card-section>

            <q-card-section class="q-py-sm">
              <div>
                <span class="text-h6">₺3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through"></span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md"></span>
              </div>
            </q-card-section>

          </q-card>
          <q-card @click="$router.push('/details')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img  style="height: 270px; max-width: 250px" src="https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/200/200/productimage/125078436/125078436_0_MC/60698823.jpg"></q-img>

            <q-card-section class="q-pb-xs q-pt-md">
              <!--<q-btn-->
              <!--fab-->
              <!--color="primary"-->
              <!--icon="shopping_cart"-->
              <!--class="absolute"-->
              <!--style="top: 0; right: 12px; transform: translateY(-50%);"-->
              <!--&gt;</q-btn>-->

              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Samsung Galaxy S22 8GB/128GB Siyah Akıllı Telefon                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <!--<q-icon name="place"></q-icon>-->
                  <!--250 ft-->
                </div>
              </div>

              <q-rating v-model="stars" color="orange-10" :max="1" readonly size="20px" ></q-rating>
              <span class="text-caption text-weight text-black">4.6 (5 Değerlendirme)</span>
            </q-card-section>

            <q-card-section class="q-py-sm">
              <div>
                <span class="text-h6">₺3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through"></span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md"></span>
              </div>
            </q-card-section>

          </q-card>
          <q-card @click="$router.push('/details')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img  style="height: 270px; max-width: 250px" src="https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/200/200/productimage/125078436/125078436_0_MC/60698823.jpg"></q-img>

            <q-card-section class="q-pb-xs q-pt-md">
              <!--<q-btn-->
              <!--fab-->
              <!--color="primary"-->
              <!--icon="shopping_cart"-->
              <!--class="absolute"-->
              <!--style="top: 0; right: 12px; transform: translateY(-50%);"-->
              <!--&gt;</q-btn>-->

              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Samsung Galaxy S22 8GB/128GB Siyah Akıllı Telefon                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <!--<q-icon name="place"></q-icon>-->
                  <!--250 ft-->
                </div>
              </div>

              <q-rating v-model="stars" color="orange-10" :max="1" readonly size="20px" ></q-rating>
              <span class="text-caption text-weight text-black">4.6 (5 Değerlendirme)</span>
            </q-card-section>

            <q-card-section class="q-py-sm">
              <div>
                <span class="text-h6">₺3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through"></span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md"></span>
              </div>
            </q-card-section>

          </q-card><q-card @click="$router.push('/details')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img  style="height: 270px; max-width: 250px" src="https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/200/200/productimage/125078436/125078436_0_MC/60698823.jpg"></q-img>

            <q-card-section class="q-pb-xs q-pt-md">
              <!--<q-btn-->
              <!--fab-->
              <!--color="primary"-->
              <!--icon="shopping_cart"-->
              <!--class="absolute"-->
              <!--style="top: 0; right: 12px; transform: translateY(-50%);"-->
              <!--&gt;</q-btn>-->

              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Samsung Galaxy S22 8GB/128GB Siyah Akıllı Telefon                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <!--<q-icon name="place"></q-icon>-->
                  <!--250 ft-->
                </div>
              </div>

              <q-rating v-model="stars" color="orange-10" :max="1" readonly size="20px" ></q-rating>
              <span class="text-caption text-weight text-black">4.6 (5 Değerlendirme)</span>
            </q-card-section>

            <q-card-section class="q-py-sm">
              <div>
                <span class="text-h6">₺3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through"></span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md"></span>
              </div>
            </q-card-section>

          </q-card><q-card @click="$router.push('/details')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img  style="height: 270px; max-width: 250px" src="https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/200/200/productimage/125078436/125078436_0_MC/60698823.jpg"></q-img>

            <q-card-section class="q-pb-xs q-pt-md">
              <!--<q-btn-->
              <!--fab-->
              <!--color="primary"-->
              <!--icon="shopping_cart"-->
              <!--class="absolute"-->
              <!--style="top: 0; right: 12px; transform: translateY(-50%);"-->
              <!--&gt;</q-btn>-->

              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Samsung Galaxy S22 8GB/128GB Siyah Akıllı Telefon                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <!--<q-icon name="place"></q-icon>-->
                  <!--250 ft-->
                </div>
              </div>

              <q-rating v-model="stars" color="orange-10" :max="1" readonly size="20px" ></q-rating>
              <span class="text-caption text-weight text-black">4.6 (5 Değerlendirme)</span>
            </q-card-section>

            <q-card-section class="q-py-sm">
              <div>
                <span class="text-h6">₺3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through"></span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md"></span>
              </div>
            </q-card-section>

          </q-card><q-card @click="$router.push('/details')" class="cursor-pointer" :class="class_val"
                  @mouseover="class_val='my-card shadow-20'"
                  @mouseleave="class_val='my-card shadow-'">
            <q-img  style="height: 270px; max-width: 250px" src="https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/200/200/productimage/125078436/125078436_0_MC/60698823.jpg"></q-img>

            <q-card-section class="q-pb-xs q-pt-md">
              <!--<q-btn-->
              <!--fab-->
              <!--color="primary"-->
              <!--icon="shopping_cart"-->
              <!--class="absolute"-->
              <!--style="top: 0; right: 12px; transform: translateY(-50%);"-->
              <!--&gt;</q-btn>-->

              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis-2-lines text-grey-10">
                  Samsung Galaxy S22 8GB/128GB Siyah Akıllı Telefon                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <!--<q-icon name="place"></q-icon>-->
                  <!--250 ft-->
                </div>
              </div>

              <q-rating v-model="stars" color="orange-10" :max="1" readonly size="20px" ></q-rating>
              <span class="text-caption text-weight text-black">4.6 (5 Değerlendirme)</span>
            </q-card-section>

            <q-card-section class="q-py-sm">
              <div>
                <span class="text-h6">₺3,149</span><span class="q-ml-sm text-grey-6"
                                                         style="text-decoration: line-through"></span>
                <span class="q-ml-md text-caption text-green-8 text-weight-bolder q-mt-md"></span>
              </div>
            </q-card-section>

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
  name: "Login",
  name: "Filtre",
  setup() {
    return {
        tab: ref('login'),
        group: ref([]),
        options: [
        { label: 'Android Telefon  (361)', size:"xs", value: '1' },
        { label: 'iOS Telefon  (89)',size:"xs", value: '2',  },
        { label: 'Tuşlu Telefon  (10)',size:"xs", value: '3', }
      ],
      options1: [
        { label: 'Samsung  (115)',size:"xs", value: '4' },
        { label: 'Apple  (89)',size:"xs", value: '5',  },
        { label: 'Xiaomi  (46)',size:"xs", value: '6', }
      ],
      options2: [
        { label: '1080p (Full HD)   (119)',size:"xs", value: '7' },
        { label: '1080 x 2400   (43)',size:"xs", value: '8',  },
        { label: '2400 x 1080   (41)',size:"xs", value: '9', }
      ],
      lorem:
        "Samsung Galaxy A33 5G Beyaz 128 GB 6 GB Ram Akıllı Telefon (Samsung Türkiye Garantili)",
    };
  },
  data() {
    return {
      email: '',
    username: '',
    password: '',
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
      class_val: "shadow-1 my-card",
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

<style lang="sass">
.my-custom-image
</style>