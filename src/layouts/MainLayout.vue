
<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white-7 text-grey-8" style="background: #f58220" height-hint="64">    
      <q-toolbar style="background: #0c0c38" >
        <div class="col text">
      </div>
        <q-btn stretch flat label="Sipariş Takibi ·" color="white" no-caps=""  />
        <q-btn stretch flat label="Mağazalarımız ·" color="white" no-caps="" />
        <q-btn stretch flat label="Yardım Merkezi ·" color="white" no-caps="" />
        <q-btn stretch flat label="Kurumsal Satış" color="white" no-caps="" />
        <q-btn style="background: #3834f4" stretch flat label="Teknosa Blog" color="white" no-caps="" />
      </q-toolbar>
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          color="white"
          class="q-mr-sm"
        />
      <q-space />
        <q-toolbar-title v-if="$q.screen.gt.xs" shrink c class="row items-center no-wrap">
          <img src="https://img-teknosa-sap.mncdn.com/_ui/responsive/theme-teknosa/assets/images/logo.svg">
          <span class="q-ml-sm" color="black"></span>
       
        </q-toolbar-title>

        <q-space />

        <q-input style="background: #ffffff" class="GNL__toolbar-input" 
        outlined 
        
        rounded dense
         v-model="search" 
         placeholder="Ürün, kategori veya marka ara">  
          <template v-slot:append>
            <q-btn
             rounded
             
              outlined 
              aria-label="Menu"
              icon="ti-search"
              color="orange-8"
            >
            </q-btn>
          </template>
              <span class="q-ml-sm"></span>
    </q-input>

        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <img src="https://img-teknosa-sap.mncdn.com/_ui/responsive/theme-teknosa/assets/images/teknoclub-logo.svg">
        </q-toolbar-title>
        <div v-if="$q.screen.gt.sm" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <a ref="javascript:void(0)" class="text-black">
           
          </a>
          <a ref="javascript:void(0)" class="text-black">
            
          </a>
          <q-btn stretch flat label="Giriş Yap / Üye Ol" color="white" no-caps="" />
          <q-btn round flat>
           <q-icon name="person" color="white" />
            <q-tooltip>Hesap</q-tooltip>
          </q-btn>
          <a ref="javascript:void(0)" class="text-black">   
          </a>
        </div>
        
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$q.screen.gt.sm" round dense flat color="white" icon="shopping_cart">
            <q-badge color="blue-10" floating>0</q-badge>
            <q-tooltip>Sepetim</q-tooltip>
          </q-btn>
          
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="280"
    >
    <q-scroll-area style="height: calc(100% - 192px); border-right: 1px solid #ddd">
          <q-list padding>
            <q-item 
            to="/"
            exact
            clickable 
            v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>
              <q-item-section>
                Ana Sayfa
              </q-item-section>
            </q-item>
            <q-item
            to="/sepetim"
            exact 
            clickable
            v-ripple>
              <q-item-section avatar>
                <q-icon name="shopping_cart" />
              </q-item-section>

              <q-item-section>
                Sepetim
              </q-item-section>
            </q-item>
            <q-item to="/Login" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="login" />
            </q-item-section>

            <q-item-section> Giriş Yap / Üye Ol </q-item-section>
          </q-item>
      
            <q-item to="/Filtre" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="filter_alt" />
            </q-item-section>

            <q-item-section> Filtre </q-item-section>
          </q-item>
          <q-item to="/Urunler" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="devices" />
            </q-item-section>

            <q-item-section> Ürünler </q-item-section>
          </q-item>
            
          </q-list>
        </q-scroll-area>
    </q-drawer>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  
  

  
</template>



<script>
import { ref } from 'vue'
import { fasEarthAmericas, fasFlask } from '@quasar/extras/fontawesome-v6'

export default {
  name: 'GoogleNewsLayout',
  

  setup () {
    const leftDrawerOpen = ref(false)
    const search = ref('')
    const showAdvanced = ref(false)
    const showDateOptions = ref(false)
    const exactPhrase = ref('')
    const hasWords = ref('')
    const excludeWords = ref('')
    const byWebsite = ref('')
    const byDate = ref('Any time')

    function onClear () {
      exactPhrase.value = ''
      hasWords.value = ''
      excludeWords.value = ''
      byWebsite.value = ''
      byDate.value = 'Any time'
    }

    function changeDate (option) {
      byDate.value = option
      showDateOptions.value = false
    }

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      search,
      showAdvanced,
      showDateOptions,
      exactPhrase,
      hasWords,
      excludeWords,
      byWebsite,
      byDate,

     
      links2: [
        { icon: 'flag', text: 'Canada' },
        { icon: fasEarthAmericas, text: 'World' },
        { icon: 'place', text: 'Local' },
        { icon: 'domain', text: 'Business' },
        { icon: 'memory', text: 'Technology' },
        { icon: 'local_movies', text: 'Entertainment' },
        { icon: 'directions_bike', text: 'Sports' },
        { icon: fasFlask, text: 'Science' },
        { icon: 'fitness_center', text: 'Health ' }
      ],
      links3: [
        { icon: '', text: 'Language & region' },
        { icon: '', text: 'Settings' },
        { icon: 'open_in_new', text: 'Get the Android app' },
        { icon: 'open_in_new', text: 'Get the iOS app' },
        { icon: '', text: 'Send feedback' },
        { icon: 'open_in_new', text: 'Help' }
      ],
      
      
      onClear,
      changeDate,
      toggleLeftDrawer
    }
  }
}
</script>

<style lang="sass">
.GNL

  &__toolbar
    height: 64px

  &__toolbar-input
    width: 55%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      .q-icon
        color: #5f6368

    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>