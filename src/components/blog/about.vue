<template>
    <div class="about">
        <Card style="width:350px">
            <p slot="title" class="title">
                <Icon type="ios-home"></Icon>关于我
            </p>
            <div class="main">
                <img src="../../assets/tou.png" alt="">
                <p>wudner</p>
                <p>职业:Java/PHP</p>
                <p>Github:<a data-v-68dbade8="" target="_blank" href="https://github.com/Liangxiaowu">Liangxiaowu</a></p>
                <p>邮箱:965391514@qq.com</p>
                <p>永远不要停止思考</p>

            </div>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>
<style >

    .about .title{
        text-align: left;
        /*color: #2d8cf0;*/
    }

    .about .main{
        font-size: 14px;
        color: #767575;
    }
    .about .main img{
        width: 90px;
        height: 90px;
        border: 1px solid #dbdada;
        border-radius: 50%;

    }
</style>
<style scoped>

</style>