<template>
    <div class="catalog">
        <text class="text">{{title}}</text>
    </div>
</template>
<style>
    .catalog {
        height: 80px;
        background-color: #FAEBD7;
        padding-left: 20px;
        justify-content: center;
    }
    .text{
        font-size: 32px;
    }
</style>
<script>
    module.exports = {
        props: {
            title: {
                type: String
            }
        }
    }
</script>