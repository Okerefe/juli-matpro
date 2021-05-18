<template>
    <div>
        <h3>Economic Details..</h3>
        <div class="flex flex-4">
            <article>
                Investment (Cost)<input v-model="well.ic" placeholder="Investment (Cost)" type="text" required/>
            </article>
            <article>
                Oil Price($)<input v-model="well.op" placeholder="Oil Price" type="text" required/>
            </article>
        </div>

        <div class="flex flex-4">
            <article v-for="(npv, i) in well.npvs" :key="i" style="margin-bottom: 7px;">
                <input :value="npv.value" type="text" disabled/>
            </article>
            <article>
                <div style="display: inline;">
                    <input style="display: inline; width: 100px;" v-model="currentNpv" placeholder="NPV (%)" type="text"
                           required/>
                    <button @click="addNpv" type="button" class="special"
                            style="background: #5a5a5a; display: inline; width: 110px;">+ Add NPV
                    </button>

                </div>
            </article>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'economic-details',
        props: {
            well: {},
        },

        data() {
            return {
                currentNpv: '',
            }
        },

        methods :{
            addNpv() {
                this.well.npvs = this.well.npvs.concat({'value': this.currentNpv});
                this.currentNpv = '';
            },
        }

    }
</script>