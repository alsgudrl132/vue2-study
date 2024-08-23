<template>
  <div id="app" style="display: flex; gap: 10vw">
    <div>
      <h1>회원정보</h1>
      <div class="flex-box">
        <h2>이름</h2>
        <h3>{{ user.name }}</h3>
      </div>
      <div class="flex-box">
        <h2>주소</h2>
        <h3>{{ user.address }}</h3>
      </div>
      <div class="flex-box">
        <h2>전화번호</h2>
        <h3>{{ user.phone }}</h3>
      </div>
    </div>
    <UserInput :user="user" @internal-user="updateUser" />
  </div>
</template>

<script>
import UserInput from "@/components/UserInput.vue";
export default {
  data() {
    return {
      user: {
        name: "민형기",
        address: "경기도 파주시 송화로13",
        phone: "010-3020-9437",
      },
    };
  },
  components: {
    UserInput,
  },
  methods: {
    updateUser(user) {
      console.log(user);
      this.user = user;
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
