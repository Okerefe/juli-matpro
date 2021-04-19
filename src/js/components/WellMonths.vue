<template>
    <div id="month-cover">
        <div class="flex flex-4" v-for="(month, i) in months" :key="i">
            <article v-if="i === 0 || visibilityStatus">
                Production for Month {{ plusOne(i) }}<br/>
                <ul class="actions" style="margin-bottom: -2px">
                    <li>
                        <input
                            type="text"
                            :placeholder="'Production for Month ' + month.value"
                            v-model="month.value"
                            required
                            disabled
                        />
                    </li>
                </ul>
            </article>
        </div>

        <a
            href="#"
            v-on:click.prevent="toggleVisibilityStatus"
            style="display: inline-block; margin-top: 10px"
            v-text="visibilityStatusText"
        >
        </a>
    </div>
</template>

<script>
    export default {
        props: ["months"],

        data() {
            return {
                visibilityStatus: false,
            };
        },
        computed: {
            visibilityStatusText() {
                return this.visibilityStatus ?
                    "View Less Months" :
                    "View More Months";
            },
        },
        methods: {
            toggleVisibilityStatus() {
                this.visibilityStatus = !this.visibilityStatus;
            },
            plusOne(num) {
                return ++num;
            },
        },
    };
</script>