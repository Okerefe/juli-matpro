<template>
    <div>
        <h4>Economic Details..</h4>
        <div class="flex flex-4">
            <article>
                Investment (Cost)($)<input v-model="well.ic" placeholder="Investment (Cost)" type="text" :disabled="disabled" required/>
            </article>
            <article>
                Oil Price($)<input v-model="well.op" placeholder="Oil Price" type="text" :disabled="disabled" required/>
            </article>
            <article>
                Tax(%)<input v-model="well.tax" placeholder="Tax (%)" type="text" :disabled="disabled" required/>
            </article>
            <article>
                Royalties(%)<input v-model="well.royal" placeholder="Royalties (%)" type="text" :disabled="disabled" required/>
            </article>
            <article>
                Choose Type of Operation Cost:
                <label for="declineType"></label>
                <select name="declineType" id="declineType" v-model="well.costType" v-on:change="update()">
                    <option value="percent" selected="selected">Percentage of Revenue</option>
                    <option value="custom">Custom Cost</option>
                </select>
            </article>

            <article v-if="well.costType === 'percent'" :key="updateCost">
                Operation Cost(%)<input v-model="well.operate" placeholder="Operation Cost(%)" type="text" :disabled="disabled" required/>
            </article>

        </div>

        <br>
        <div class="flex flex-4">
            <article v-for="(npv, i) in well.npvs" :key="i" style="margin-bottom: 7px;">
                <input :value="npv.value" type="text" disabled/>
            </article>
            <article>
                <div style="display: inline;">
                    <input style="display: inline; width: 100px;" v-model="currentNpv" placeholder="NPV (%)" :disabled="disabled" type="text"/>
                    <button @click="addNpv" type="button" class="special"
                            style="background: #5a5a5a; display: inline; width: 110px;" :disabled="disabled">+ Add NPV
                    </button>
                    <button  v-if="!disabled" @click="well.npvs.pop()" type="button" class="special"
                            style="background: #c04000; display: inline; width: 110px;">- Clear NPV
                    </button>

                </div>
            </article>
        </div>
        <br/>
        <br/>
        <hr/>
        <br/>
    </div>
</template>
<script>
    export default {
        name: 'economic-details',
        props: {
            well: {},
            disabled: {},
        },

        data() {
            return {
                currentNpv: '',
                updateCost: 0,
            }
        },

        methods :{
            addNpv() {
                this.well.npvs = this.well.npvs.concat({'value': this.currentNpv});
                this.currentNpv = '';
                this.well.profileUpdate++;
                this.well.updateChart++;
            },

            update () {
                this.updateCost++;
                this.well.profileUpdate++;
                this.well.updateChart++;
            }
        }

    }
</script>