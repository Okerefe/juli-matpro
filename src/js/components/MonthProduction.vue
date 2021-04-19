<template>
        <div class="flex flex-4">
                <article>
                </article>
        </div>
</template>

<script>

    export default {
        props:  ['value', 'i', 'disabled'],

        data() {
            return {
                isVisible: true
            }
        },

        methods: {
            hideModal() {
                this.isVisible = false;
            }
        },

        mounted() {
            console.log('disabled-component mounted');
        }
    }
</script>
