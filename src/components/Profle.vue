<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="header"><slot name="header"></slot></div>
                <div class="content"><slot name="content"></slot></div>
                <div class="footer"><slot name="footer"></slot></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container{
        border: 2px;
        background-color: aqua;
    }
    .header{
        background-color: black;
        color: aliceblue;
    }
</style>