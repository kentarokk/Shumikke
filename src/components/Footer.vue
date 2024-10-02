<template>
    <div class="footer">
        <router-link to="/" class="footer-icon" exact-active-class="current"><i class="fas fa-home"></i></router-link>
        <router-link to="/PostingScreen" class="footer-icon" exact-active-class="current"><i class="far fa-plus-square"></i></router-link>
        <router-link to="/todohobbylist" class="footer-icon" exact-active-class="current"><i class="far fa-heart"></i></router-link>
        <router-link to="/mypage" class="footer-icon" exact-active-class="current"><i class="far fa-user"></i></router-link>
    </div>
</template>

<script>
export default {
  name: "MainFooter",
  props: {},
};
</script>

<style scoped>
.footer {
    position: fixed;
    width: 100%;
    bottom: 0px;
    font-size: 0;
    z-index: 10;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background-color: #00c0a3;
}
 
.footer-icon {
    color: white;
    font-size: 24px;
    text-decoration: none;
}

.current {
    color: rgb(179, 24, 65);
    font-size: 30px;
}
</style>
