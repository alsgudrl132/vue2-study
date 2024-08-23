<template>
  <div>
    <h1>회원정보</h1>
    <div class="flex-box">
      <h2>이름</h2>
      <input v-model="internalUser.name" />
    </div>
    <div class="flex-box">
      <h2>주소</h2>
      <input v-model="internalUser.address" />
    </div>
    <div class="flex-box">
      <h2>전화번호</h2>
      <input v-model="internalUser.phone" />
    </div>
    <button @click="saveUser">저장</button>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      internalUser: {
        ...this.user,
      },
    };
  },
  methods: {
    saveUser() {
      this.$emit("internal-user", this.internalUser);
    },
  },
};
</script>

<style>
.flex-box {
  display: flex;
}
h2 {
  margin-right: 15px;
}
</style>
