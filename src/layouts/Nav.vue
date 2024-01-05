<script lang="ts" setup>

const menus = [
    {
        name: "Home",
        path: "/",
    },
    {
        name:"gnb1",
        path:'/gnb1',
        children:[
            {
                name: "gnb1-sub1",
                path: "/gnb1/sub1",
            },
            {
                name: "gnb1-sub2",
                path: "/gnb1/sub2",
            },
        ]
    },
    {
        name:"gnb2",
        path:'/gnb2',
        children:[
            {
                name: "gnb2-sub1",
                path: "/gnb2/sub1",
            },
            {
                name: "gnb2-sub2",
                path: "/gnb2/sub2",
            },
            {
                name: "gnb2-sub3",
                path: "/gnb2/sub3",
            },
        ]
    },
]


</script>
<template>
    <header>
        <ul class="gnb">
            <li v-for="menu in menus" :key="`menu_${menu.name}`">
                <router-link :to="menu.path" exact>{{menu.name}}</router-link> 
                <ul class="submenu" v-if="menu.children">
                    <li v-for="submenu in menu.children" :key="`submenu_${submenu.name}`">
                        <router-link :to="submenu.path" exact>{{submenu.name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </header>
    
    <!-- 
            <nav>
        <router-link to="/">
            <h1><img src="/public/vite.svg" alt="logo" />이름</h1>
        </router-link>
        <div>
            <h3>프로필영역</h3>  
            <div>
                <p>내 정보</p>
                <p>키워드 설정</p>
            </div>
        </div>
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
        -->
</template>

<style lang="scss" scoped>
header{
    width: 100%;
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .gnb{
        display: flex;
        height:64px;
        background-color: #f2f2f2;
        >li{
            line-height: 64px;
            min-width: 180px;
            position: relative;
            display: inline-block;
            height:100%;
            text-align: center;
            a{
                text-decoration: none;
                display: block;
                font-size: 18px;
                font-weight: bold;
                color: #000;
            }
            .submenu{
                display: none;
                background-color: #f2f2f2;
                position: absolute;
                left:0;
                top:100%;
                width: 100%;
                text-align: center;
                a{
                    font-weight: normal;
                }
            }
            &:hover .submenu{
                display: block;
            }
        }
    }
    .router-link-active{
        color: cyan !important;
    }
    .router-link-exact-active{
        color: cyan !important;
    }
}

</style>
