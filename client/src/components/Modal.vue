<template>
  <div
    class="
      modal
      bg-gray-800
      text-indigo-900
      flex
      content-center
      item-center
      bg-opacity-50
    "
    v-if="state.show"
  >
    <div class="update-modal w-2/3 h-56 bg-gray-800">
      <div class="modal-forms flex flex-col w-full items-center mt-5">
        <div class="box flex flex-col w-1/2 mb-3">
          <label for="name" class="text-sm text-gray-200">Club Name</label>
          <input
            type="text"
            id="name"
            v-model="club"
            class="bg-gray-900 py-1 rounded focus outline-none px-2"
          />
        </div>
        <div class="box flex flex-col w-1/2 mb-3">
          <label for="league" class="text-sm text-gray-200">League</label>
          <input
            type="text"
            id="league"
            v-model="league"
            class="bg-gray-900 py-1 rounded focus outline-none px-2"
          />
        </div>
        <button
          v-on:click="updateHandler"
          class="bg-gray-700 px-5 py-2 mt-5 mb-2 rounded text-gray-200"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    function showModal(e, id) {
      e.preventDefault();
      console.log("E - Update ", e);
      console.log("ID - ", id);
      const selectedClub = state.clubList.filter((cl, i) => cl.id === id)[0];
      state.club.name = selectedClub.name;
      state.club.league = selectedClub.league;
      props.name = selectedClub.name;
      props.league = selectedClub.league;
      console.log(props);
      state.show = true;
    }
    return{
      showModal
    }
  },
};
</script>