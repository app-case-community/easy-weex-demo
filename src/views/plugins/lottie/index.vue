<template>
    <scroller>
    <text>在线资源</text>
    <lottie ref="lottie3" style='width:200px;height:200px;border-width:2px;' @loaded="loadFinish" loop=true src="https://www.lottiefiles.com/storage/datafiles/nwHJNOUoNltzK7d/data.json" />
    <text>本地资源1</text>
    <lottie style='width:200px;height:200px;border-width:2px;' loop=true src="local://weex.com/lottie/coinpig.json" />
    <text>本地资源1</text>
    <lottie style='width:200px;height:200px;border-width:2px;' loop=true src="local://weex.com/lottie/preloader.json" />
    </scroller>
</template>
<script>
export default {
    methods: {
        loadFinish () {
            
        }
    }
}
</script>

