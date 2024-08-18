<template>
    <div class="page-success">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Thank you</h1>

                <p>Thank you for your order! Our team will process it within 48 hours and notify you as soon as it’s on its way.</p>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: 'Success',
        mounted() {
            document.title = 'Success | Cartify'
        }
    }

</script>