<template>
  <div class="Club">
    <div class="container mx-auto mt-5 bg-gray-700 text-gray-300">
      <h2 class="text-2xl p-3">UCL Clubs</h2>
      <div class="forms flex flex-col w-full items-center">
        <div class="box flex flex-col w-1/2 mb-3">
          <label for="name" class="text-sm">Club Name</label>
          <input
            type="text"
            id="name"
            v-model="state.club.name"
            class="bg-gray-800 py-1 rounded focus outline-none px-2"
          />
        </div>
        <div class="box flex flex-col w-1/2 mb-3">
          <label for="league" class="text-sm">League</label>
          <input
            type="text"
            id="league"
            v-model="state.club.league"
            class="bg-gray-800 py-1 rounded focus outline-none px-2"
          />
        </div>
        <button
          v-on:click="submitHandler"
          class="bg-gray-200 px-5 py-2 mb-5 rounded text-gray-900"
        >
          Submit
        </button>
      </div>
    </div>
    <br />
    <div class="all-clubs mt-4 container mx-auto">
      <ul class="list space-y-2 flex inline-flex flex-wrap justify-between">
        <li
          class="
            text-gray-300
            w-1/3
            bg-gray-800
            p-2
            list-item
            shadow
            hover:bg-gray-700
            transition-all transition-colors
          "
          v-for="(item, i) in state.clubList"
          v-bind:key="i"
        >
          <div
            class="
              inside-list
              flex
              justify-between
              flex-row
              border-b border-solid border-indigo-900
              mb-2
            "
          >
            <p class="w-1/2">{{ item.name }}</p>
            <p class="w-1/2">{{ item.league }}</p>
          </div>
          <button
            v-on:click="(e) => deleteHandler(e, item.id)"
            class="bg-red-600 py-1 px-2 rounded"
          >
            Delete
          </button>
          <button
            v-on:click="(e) => updateHandler(e, item.id)"
            class="bg-blue-600 py-1 px-2 ml-2 rounded"
          >
            Update
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { onMounted, reactive } from "vue";
/*
// TRIED WITH GRAPHQL APOLLO CLIENT BUT IT WAS NOT WORKING
import { useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";
*/
import { getClubs } from "../graphql/queries";
import { addClub, updateClub, deleteClub } from "../graphql/mutations";

export default {
  setup(props) {
    const state = reactive({
      club: {
        name: null,
        league: null,
      },
      clubList: [
        { id: 1, name: "FC Bayern", league: "Bundesliga" },
        { id: 2, name: "RP Leipzig", league: "Bundesliga" },
        { id: 3, name: "FC Lisverpool", league: "EPL" },
      ],
      update: false,
      isLoading: false,
    });

    onMounted(async () => {
      console.log("Component is mounted");
      /*
      // GRAPHQL APOLLO (NOT WORKING)
      const { result, loading } =  useQuery(gql`
        query getClubs {
          clubs {
            id
            name
            league
          }
        }
      `);
      // getClubs();
      const clubs =  useResult(result, null, (data) => data);
      console.log(clubs.value);

      const clubs = await $apollo.query({ query: GET_ALL_USERS_QUERY });
      console.log(clubs);

      console.log(res);
      state.clubList = clubs.value.clubs;
      */

      const clubs = await getClubs(state);
      state.clubList = clubs;
    });

    async function submitHandler(e) {
      e.preventDefault();
      // state.club = props.club;
      // state.league = props.league;
      console.log("E - submit ", e);
      console.log("Update -", state.update);
      if (state.update) {
        const res = await updateClub(state, state.club.id);
      } else {
        const res = await addClub(state);
      }

      // console.log(state.club);
      const clubs = await getClubs(state);
      state.clubList = clubs;

      // console.log(res);
      state.club = { name: null, league: null };
      state.update = false;
    }

    async function deleteHandler(e, id) {
      e.preventDefault();
      console.log("E - Delete ", e);
      console.log("ID - ", id);

      const res = await deleteClub(state, id);

      // console.log(state.club);
      const clubs = await getClubs(state);
      state.clubList = clubs;
    }

    function updateHandler(e, id) {
      e.preventDefault();
      // console.log("E - Update ", e);
      // console.log("ID - ", id);
      const selectedClub = state.clubList.filter((cl, i) => cl.id === id)[0];
      state.club.name = selectedClub.name;
      state.club.league = selectedClub.league;
      state.club.id = id;
      state.update = true;
    }
    return {
      submitHandler,
      deleteHandler,
      updateHandler,
      state,
    };
  },
};
</script>

<style scoped>
.modal {
  height: 100vh;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  /* left: 0; */
  width: 100%;
  z-index: 1;
}
.list-item {
  width: 30%;
}
</style>