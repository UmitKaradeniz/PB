<template>
  <q-tabs>
  
    <q-btn flat @mouseover="hello1= true" label="Tüm Ürünler" no-caps>
        <q-menu
        v-model="hello1" @mouseleave="hello1 = false"  fit
          transition-show="scale"
          transition-hide="scale"
        >
        </q-menu>
      </q-btn>
      
        <q-btn icon="loyalty" flat @mouseover="hello2 = true" label="Kampanyalar" no-caps>
        <q-menu
        v-model="hello2" @mouseleave="hello2 = false"  fit
          transition-show="scale"
          transition-hide="scale"
        >
         
        </q-menu>
      </q-btn>
    
      <q-btn icon="phone_iphone" flat @mouseover="hello3 = true" label="Telefon & Aksesuar" no-caps>
        <q-menu
        v-model="hello3" @mouseleave="hello3 = false"  fit
          transition-show="scale"
          transition-hide="scale"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>iOS Telefon</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Android Telefon</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Giyilebilir Teknoloji</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Kulaklık</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn icon="laptop" flat @mouseover="hello4 = true" label="Bilgisayar & Tablet" no-caps>
        <q-menu
        v-model="hello4" @mouseleave="hello4 = false"  fit
          transition-show="scale"
          transition-hide="scale"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Laptop / Notebook</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Çevre Bilimleri</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Masaüstü Bilgisayarlar</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Gaming Ürünleri</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Tablet</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn icon="tv" flat @mouseover="hello5 = true" label="TV, Ses ve Görüntü" no-caps>
        <q-menu
        v-model="hello5" @mouseleave="hello5 = false"  fit
          transition-show="scale"
          transition-hide="scale"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Televizyon</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>TV Aksesuarı</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Hoparlör</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn  icon="kitchen" flat @mouseover="hello6 = true" label="Beyaz Eşya&Ev Aletleri" no-caps>
        <q-menu
        v-model="hello6" @mouseleave="hello6 = false"  fit
          transition-show="scale"
          transition-hide="scale"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Buzdolabı</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Çamaşır Makinesi</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Ankastre Set</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
        
      <q-btn icon="maps_home_work" flat @mouseover="hello7 = true" label="Ev, Ofis, Müzik, Spor, Outdoor" no-caps>
        <q-menu
        v-model="hello7" @mouseleave="hello7 = false"  fit
          transition-show="scale"
          transition-hide="scale"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Mobilya</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Aydınlatma</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Hırdavat ve Yapı</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Dikiş Makinesi</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Anne ve Bebek</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
      <img src="https://svgshare.com/i/tp7.svg">
      <span class="q-mr-sm"></span>
        </q-toolbar-title>
        <img src="https://reimg-teknosa-cloud-static-p.mncdn.com/_ui/responsive/theme-teknosa/images/teknosa-hizmet-logo.svg">
        <span class="q-mr-sm"></span>

  </q-tabs>
  

  <div style="margin-left:25% ; margin-right:20%">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      arrows
    >
      <q-carousel-slide :name="1" img-src="https://i.ibb.co/M6HSdDm/333.jpg" />
      <q-carousel-slide :name="2" img-src="https://i.ibb.co/sFyqgdF/DDDDD.jpg" />
      <q-carousel-slide :name="3" img-src="https://i.ibb.co/KxzPh1D/deneme1-1-1.jpg" />
      <q-carousel-slide :name="4" img-src="https://i.ibb.co/fxKTCtM/4444.jpg" />
    </q-carousel>
  </div>
  
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-6">
        <q-img
          src="https://img-teknosa-sap.mncdn.com/home/widget/hpw_deprem_seferberligi_230324.jpg"
        />
      </div>
      <div class="col-6">
        <q-img
          src="https://img-teknosa-sap.mncdn.com/home/widget/hpw_afet_bolgesi_saticisi_230404_.jpg"
          />
        </div>
        <div class="col-4">
        <q-img
          src="https://img-teknosa-sap.mncdn.com/home/widget/widget_yenilenmishuaweip40lite_230609.jpg"
          />
        </div>
        <div class="col-4">
        <q-img
          src="https://img-teknosa-sap.mncdn.com/home/widget/widget_jeneriktvkamp_230609.jpg"
          />
        </div>
        <div class="col-4">
        <q-img
          src="https://img-teknosa-sap.mncdn.com/home/widget/msi_vga_ekran_karti_widget_230607.jpg"
          />
        </div>
        <div class="col-4">
        <q-img
          src="https://img-teknosa-sap.mncdn.com/home/widget/widget_wanboprojeksiyon_230609.jpg"
          />
        </div>
        <div class="col-4">
        <q-img
          src="https://img-teknosa-sap.mncdn.com/home/widget/widget_ssh_tckamp_230609.jpg"
          />
        </div>
        <div class="col-4">
        <q-img
          src="https://img-teknosa-sap.mncdn.com/home/widget/widget_philips_sda_babalar_gunu_230606.jpg"
          />
        </div>
        <div class="col-4">
        <q-img
          src="https://img-teknosa-sap.mncdn.com/home/widget/widget_xiaomiairfyer_230609.jpg"
          />
        </div>
        <div class="col-4">
        <q-img
          src="https://img-teknosa-sap.mncdn.com/home/widget/widget_70mai_arackamera_230609.jpg"
          />
        </div>
        <div class="col-4">
        <q-img
          src="https://img-teknosa-sap.mncdn.com/home/widget/sjrc_f11mp_drone_widget_230610.jpg"
          />
        </div>
    </div>
  </div>
  
  <div class="text-grey-9 text-weight-bold">
      <div class="row items-center q-mx-sm">
        <div class="col-12 q-mt-sm">
          <div class="q-pl-md bg-white q-pt-sm ">
            <span class="text-grey-9 text-h6 text-weight-bold">Markalar</span>
          </div>
          <q-carousel
            v-model="latest_slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            navigation
            padding
            arrows
            height="260px"
            class="rounded-borders"
          >
            <q-carousel-slide
              v-for="(val, idx) in [1, 2, 3]"
              :name="val"
              :key="idx"
              class="column no-wrap"
            >
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <div
                  @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height"
                >
                  <q-img
                    style=""
                    class="rounded-borders"
                    src="https://reimg-teknosa-cloud-prod.mncdn.com/staticimage/preo_brand_logo_220119_0_MC/9253370953778.png"
                  >
                  </q-img>
                  
                </div>
                <div
                  @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height"
                >
                  <q-img
                    style=""
                    class="rounded-borders"
                    src="https://reimg-teknosa-cloud-prod.mncdn.com/staticimage/apple_brand_logo_220119_0_MC/9253370560562.png"
                  >
                  </q-img>
                 
                </div>
                <div
                  @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height"
                >
                  <q-img
                    style=""
                    class="rounded-borders"
                    src="https://reimg-teknosa-cloud-prod.mncdn.com/staticimage/samsung_brand_logo_220119_0_MC/9253371019314.png"
                  >
                  </q-img>
                  
                </div>
                <div
                  @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height"
                >
                  <q-img
                    style=""
                    class="rounded-borders"
                    src="https://reimg-teknosa-cloud-prod.mncdn.com/staticimage/lg_brand_logo_220203_0_MC/9269457092658.png"
                  >
                  </q-img>
                 
                </div>
                <div
                  @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height"
                >
                  <q-img
                    style=""
                    class="rounded-borders"
                    src="https://reimg-teknosa-cloud-prod.mncdn.com/staticimage/braun_brand_logo_220119_0_MC/9253370691634.png"
                  >
                  </q-img>
                  
                </div>
                <div
                  @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height"
                >
                  <q-img
                    style=""
                    class="rounded-borders"
                    src="https://reimg-teknosa-cloud-prod.mncdn.com/staticimage/philips_logo_220125_0_MC/9260383109170.png"
                  >
                  </q-img>
                 
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>

</template>
<script>

import { defineComponent,ref } from "vue";
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
  data() {
    return {
      slide: ref(1),
      latest_slide: 1 ,
      tab: ref('Tüm Ürünler'),
      hello1: false,
      hello2: false,
      hello3: false,
      hello4: false,
      hello5: false,
      hello6: false,
      hello7: false,
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
      //TODO: önce buluta buharlaştır
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
}
);
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

