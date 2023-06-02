<script lang="ts" setup>


</script>
<template>
    <nav>
        <router-link to="/">
            <h1><img src="/public/vite.svg" alt="logo" />이름</h1>
        </router-link>
        <!-- <div>
            <h3>프로필영역</h3>  
            <div>
                <p>내 정보</p>
                <p>키워드 설정</p>
            </div>
        </div> -->
        <ul class="gnb">
            <li>
                <router-link to="/menu1"><svg-icon type="mdi" :path="$iconDashboard"/>DASHBOARD </router-link>
            </li>
            <li><router-link to="/menu2"><svg-icon type="mdi" :path="$iconCast"/>기사분석 </router-link></li>
            <li><router-link to="/notion"><svg-icon type="mdi" :path="$iconMagnify"/>노션테스트</router-link></li>
        </ul>
        <ul>
            <li><router-link to="#"><svg-icon type="mdi" :path="$iconOpenInNew"/>바로가기</router-link></li>
            <li><router-link to="#"><svg-icon type="mdi" :path="$iconHelp"/>사용가이드</router-link></li>
            <li><router-link to="#"><svg-icon type="mdi" :path="$iconLogout "/>로그아웃</router-link></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>
