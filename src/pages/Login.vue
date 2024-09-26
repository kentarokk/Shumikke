<script setup lang="js">
import { Authenticator } from "@aws-amplify/ui-vue";
import {useStore} from "vuex"

import AmplifyVue from '@aws-amplify/ui-vue';

import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

const store = useStore()


async function vuex(){
  const user = await getCurrentUser()
  store.commit('setUser', user)

}
</script>

<template>
  <main>
    <authenticator>
      <template v-slot="{ user, signOut }">
        <h1>Hello {{ user?.signInDetails?.loginId }}'s todos</h1>
        <button @click="signOut">Sign Out</button>
        <button @click="vuex()">Check</button>
      </template>
    </authenticator>
  </main>
</template>
