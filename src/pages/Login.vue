<template>
    <div class="fit column wrap items-center content-center">
      <div class="q-my-md" style="max-width: 6000px">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="login"  label="Login" />
            <q-tab name="signup" label="Sign up" />
            
          </q-tabs>
  
          <q-separator />
  
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="login">
                
              <div class="text-h6">Teknosa’ya Hoş Geldiniz</div>
              <q-card square class="shadow-24" style="width:300px;height:500px;">
          <q-card-section style="background: #f58220">
            <h4 class="text-h5 text-white q-my-md">Login </h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="add" color="orange-6" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input square clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              <q-btn round color="indigo-7">
                <q-icon name="fab fa-facebook-f" size="1.2rem" />
              </q-btn>
              <q-btn round color="red-8">
                <q-icon name="fab fa-google-plus-g" size="1.2rem" />
              </q-btn>
              <q-btn round color="light-blue-5">
                <q-icon name="fab fa-twitter" size="1.2rem" />
              </q-btn>
            </div>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" style="background: #f58220" class="full-width text-white" label="Sign In" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Forgot your password?</p>
          </q-card-section>
        </q-card>
            </q-tab-panel>
  
            <q-tab-panel name="signup">
              <div class="text-h6">Teknosa’ya Hoş Geldiniz</div>
              <q-page class="fit column wrap items-center content-center">
                <q-card square class="shadow-24" style="width:300px;height:500px;">
          <q-card-section style="background: #f58220">
            <h4 class="text-h5 text-white q-my-md">Register</h4>
            <div class="absolute-bottom-right q-pr-md"  style="transform: translateY(50%);">
              <q-btn fab icon="close" color="orange-6" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input square clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="username" type="username" label="Username">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" style="background: #f58220" class="full-width text-white" label="Get Started" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Return to login</p>
          </q-card-section>
        </q-card>
  </q-page>
            </q-tab-panel>
  
          </q-tab-panels>
  
        
  
          
        </q-card>
      </div>
    </div>
    </template>
  <script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "Login",
    setup() {
      return {
        tab: ref('login'),
      };
    },
    data() {
      return {
        email: '',
        username: '',
        password: '',
      };
    },
  });
  </script>