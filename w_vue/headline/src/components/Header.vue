<template>
  <div class="he">
    <span class="message">
      <img :src="message" alt />
    </span>
    <h1>
      <img :src="logo" alt />
      <p>{{header}}</p>
    </h1>
    <span class="sv">
      <img :src="sv" alt />
    </span>
  </div>
</template>
<script>
import logo from "../assets/021.png";
import message from "../assets/03.png";
import sv from "../assets/04.png";
export default {
  data() {
    return {
      header: "今日头条",
      logo,
      message,
      sv
    };
  }
};






</script>
<style>
.he {
  height: 2.75rem;
  width: 100%;
  background: #d43d3d;
  text-align: center;
  line-height: 2.75rem;
  display: flex;
}

.he h1 img {
  height: 1.325rem;
}
.he h1 {
  height: 2.75rem;
  width: 100%;
}

.he p {
  text-indent: -624.9375rem;
}

span {
  height: 2.75rem;
}

.he .message img {
  margin-top: 0.5rem;
  margin-left: 0.725rem;
  width: 2rem;
}
.he .sv img {
  width: 1.475rem;
  margin-top: 0.8rem;
  margin-right: 0.725rem;
}
</style>
