<template>
    <!--    Well Form HTML Template-->
    <form id="well-form" @submit.prevent="submitMonth">
        <h3>Fill Well Details</h3>

        <h4 style="color: black;">Well Information</h4>
        <div class="flex flex-4">
            <article>
                Name of Well<input v-model="well.name" placeholder="Name of Well" type="text" required/>
            </article>
            <article>
                Re (Reservoir Radius)<input v-model="well.rr" placeholder="Re (Reservoir Radius)" type="text" required/>
            </article>
            <article>
                Rw (Well Bore radius)<input v-model="well.wbr" placeholder="Rw (Well Bore radius)" type="text" required/>
            </article>
            <article>
                Bo (Formation volume factor)<input v-model="well.fvf" placeholder="Bo (Formation volume factor)" type="text" required/>
            </article>
            <article>
                μ (Viscocity)<input v-model="well.vis" placeholder="μ (Viscocity)" type="text" required/>
            </article>
            <article>
                H(Reservoir Thickness)<input v-model="well.rt" placeholder="H(Reservoir Thickness)" type="text" required/>
            </article>
            <article>
                Pr-Pwf (Pressure Drop)<input v-model="well.pd" placeholder="Pr-Pwf (Pressure Drop)" type="text" required/>
            </article>
            <article>
                K(b/s) (Permeability)<input v-model="well.permbs" placeholder="K(b/s) (Permeability)" type="text" @input="calculatePercentAndPermeability" required/>
            </article>

            <article>
                K(a/s) (Permeability)<input v-model="well.permas" placeholder="K(a/s) (Permeability)" type="text" @input="checkPermeability" required/>
            </article>

            <article>
                Percentage of K(a/s)<input v-model="well.perk" placeholder="Percentage of K(a/s)" type="text" @input="checkPercentage" required/>
            </article>
            <article>
                Skin (b/s)<input v-model="well.skinbs" placeholder="Skin (b/s)" type="text"  required/>
            </article>
            <article>
                Skin (a/s)<input v-model="well.skinas" placeholder="Skin (a/s)" type="text" @input="checkSkin" required/>
            </article>
            <article>
                Percentage of Skin a/s<input v-model="well.perskinas" placeholder="Percentage of Skin a/s" type="text" @input="checkSkinPercentage" required/>
            </article>
            <article>
                Q(b/s) (Production rate b/s)<input v-model="well.prbs" placeholder="Q(b/s) (Production rate b/s)" type="text" required/>
            </article>
        </div>
        <br/>

        <hr style="margin-bottom: 3px;"/>
        <h4 style="color: #000000;">Technical Parameters</h4>
        <div class="flex flex-4">
            <article>
                PI(A/S)<input :value="well.pias" type="text" required disabled/>
            </article>
            <article>
                PI(B/S)<input :value="well.pibs" type="text" required disabled/>
            </article>
            <article>
                PI Ideal<input :value="well.pideal" type="text" required disabled/>
            </article>
            <article>
                FE(A/S)<input :value="well.feas" type="text" required disabled/>
            </article>
            <article>
                FE(B/S)<input :value="well.febs" type="text" required disabled/>
            </article>
            <article>
                Q(a/s) (Production rate a/s)<input :value="well.pras" placeholder="Q(a/s) (Production rate a/s)" type="text" required disabled/>
            </article>
            <article>
                ΔP Skin (B/S)<input :value="well.pskinbs" type="text" required disabled/>
            </article>
            <article>
                ΔP Skin (A/S)<input :value="well.pskinas" type="text" required disabled/>
            </article>
            <article>
                R-Factor (B/S)<input :value="well.rfacbs" type="text" required disabled/>
            </article>
            <article>
                R-Factor (A/S)<input :value="well.rfacas" type="text" required disabled/>
            </article>

        </div>

        <br/>
        <article>
            <input type="checkbox" id="workOverComplexity" v-model="workOverComplexity">
            <label for="workOverComplexity">Calculate Workover Complexity</label>
        </article>


        <div class="flex flex-4">
            <article v-if="workOverComplexity">
                a(Gravel pack linear)<input v-model="well.gpl" placeholder="a(Gravel pack linear" type="text" required/>
            </article>

            <article v-if="workOverComplexity">
                g(Gravel pack index)<input v-model="well.gpi" placeholder="g(Gravel pack index)" type="text" required/>
            </article>

            <article v-if="workOverComplexity">
                p(Packer index)<input v-model="well.pi" placeholder="p(Packer index)" type="text" required/>
            </article>


            <article v-if="workOverComplexity">
                d(Workover depth index)<input v-model="well.wdi" placeholder="d(Workover depth index)" type="text" required/>
            </article>


            <article v-if="workOverComplexity">
                m(Mandrel index)<input v-model="well.mi" placeholder="m(Mandrel index)" type="text" required/>
            </article>


            <article v-if="workOverComplexity">
                r(Age of last re-entry)<input v-model="well.alr" placeholder="r(Age of last re-entry)" type="text"
                                              required/>
            </article>

            <article v-if="workOverComplexity">
                v(Angle of deviation)<input v-model="well.aod" placeholder="v(Angle of deviation)" type="text"
                                            required/>
            </article>


            <article v-if="workOverComplexity">
                t(Lost wireline index)<input v-model="well.lwi" placeholder="t(Lost wireline index)" type="text"
                                             required/>
            </article>


            <article v-if="workOverComplexity">
                c(Casing patch index)<input v-model="well.cpi" placeholder="c(Casing patch index)" type="text"
                                            required/>
            </article>

            <article v-if="workOverComplexity">
                w(Well head repair index)<input v-model="well.whr" placeholder="w(Well head repair index)" type="text"
                                                required/>
            </article>

        </div>


        <hr/>
        <div class="flex flex-4">
            <article>
                Choose Type of Decline:
                <select name="declineType" id="declineType" v-model="well.declineType" @change="changeDecline($event)">
                    <option value="Exponential" selected>Exponential Decline</option>
                    <option value="Hyperbolic">Hyperbolic Decline</option>
                    <option value="Harmonic">Harmonic Decline</option>
                </select>
            </article>
        </div>

        <div class="flex flex-4">
            <article>
                Qa (Abandonment Rate)<input v-model="well.qa" placeholder="Qa (Abandonment Rate)" type="text" required/>
            </article>

            <article>
                Di (Decline Rate)<input v-model="well.di" placeholder="Di (Decline Rate)" type="text" required/>
            </article>

            <article v-if="well.declineType == 'Hyperbolic'">
                b (Constant)<input v-model="well.b" placeholder="b (Constant)" type="text" required/>
            </article>

            <article>
                Np (Relative Production)<input :value="well.relProd" placeholder="Np (Relative Production)" type="text" required disabled/>
            </article>

        </div>
        <hr/>


        <h3>Economic Details..</h3>
        <article>
            <input type="checkbox" id="detailedCost" v-model="detailedCost">
            <label for="detailedCost">Input Detailed Cost</label>
        </article>
        <div class="flex flex-4">
            <article v-if="detailedCost">
                Special Cost<input v-model="well.sc" placeholder="SC(Special Cost)" type="text" required/>
            </article>
            <article v-if="detailedCost">
                Labour Cost<input v-model="well.lc" placeholder="LC(Labour Cost)" type="text" required/>
            </article>
            <article v-if="detailedCost">
                CAC Cost<input v-model="well.cac" placeholder="CAC Cost" type="text" required/>
            </article>
            <article v-if="!detailedCost">
                Total Cost($)<input v-model="well.op" placeholder="Total Cost" type="text" required/>
            </article>
            <article>
                Oil Price($)<input v-model="well.op" placeholder="Oil Price" type="text" required/>
            </article>

        </div>

        <br>
        <div id="month-cover">
            <div class="flex flex-4" v-for="(month, i) in months">
                <article>
                    Production for Month {{ ++i }}<br>
                    <ul class="actions" style="margin-bottom: -2px;">
                        <li>
                            <input
                                type="text"
                                :placeholder="'Production for Month ' + i"
                                v-model="month.value"
                                required/>

                        </li>
                        <li v-if="i === months.length && months.length > 1"
                            style="margin-left: -20px;">
                            <button type="button" v-on:click="months.pop()" class="button special icon fa-close">Close
                            </button>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
        <button type="button" class="special" style="margin-top: 7px;margin-bottom: 5px; background: #5a5a5a;"
                v-on:click="addMonth">+ Add
            More Month
        </button>
        <br>
        <button name="submit" type="submit" class="special" id="submitwell" data-wellid="1">Add Well</button>
    </form>
</template>

<script>
    import Well from "../models/Well";
    import store from "../stores/store";

    export default {

        data() {

            return {
                workOverComplexity: 0,
                detailedCost: 1,
                well: new Well(),
                expo: '',
                exponential: 0,
                hyperbolic: 0,
                harmonic: 0,
                months: [{'value': ''},], // Initializes the Months Array with one Value
            }
        },
        methods: {
            hideModal() {
                this.isVisible = false;
            },

            changeDecline(event) {
                let value = event.target.value;
                if (value == "exponential") {
                    this.exponential = 1;
                }
                if (value == "hyperbolic") {
                    this.hyperbolic = 1;
                }
                if (value == "harmonic") {
                    this.harmonic = 1;
                }
                console.log(value);
            },

            submitMonth() {
                this.well.months = this.months;


                store.commit('addToWell', this.well);
                this.well = {};
                this.months = [{'value': ''},];
            },

            addMonth() {
                this.months = this.months.concat({'value': ''});
            },

            calculatePercentAndPermeability() {
               this.checkPercentage();
               this.checkPermeability();
            },

            checkPercentage() {
                let permas = (1 + (this.well.perk/100)) * this.well.permbs;
                if (!isNaN(permas)) {
                    this.well.permas = permas.toFixed(2);
                }
            },

            checkPermeability() {
                let perk = ((this.well.permas/this.well.permbs) - 1) * 100;
                if (!isNaN(perk)) {
                    this.well.perk = perk.toFixed(2);
                }
            },

            checkSkin() {
                let perc = ((this.well.skinas/this.well.skinbs) - 1) * 100;
                if (!isNaN(perc)) {
                    this.well.perskinas = perc.toFixed(2);
                }
            },

            checkSkinPercentage() {
                let peras = (1 + (this.well.perskinas/100)) * this.well.skinbs;
                if (!isNaN(peras)) {
                    this.well.skinas = peras.toFixed(2);
                }
            },


            displayPi() {
                // alert(this.well.pias());
            }
        },

        created() {
            // this.well.months = this.months;
            // let well1 = new Well("Well 1", 55, 1500, 0.03, 1.47, 0.37, 473.5, 187, 964, 415.51, 18, -3, 44, 2200, "Exponential", 50, 70, 12, 0, 0, 0, 5, 0, 1, 1, 0, 0, 0, 5,5,4,5, [{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]);
            // let well2 = new Well("Well 2", 41, 1500, 0.03, 1.14, 0.3, 202.8, 106, 418, 415.51, 20, 0.33, 44, 592, "Exponential", 50, 70, 12, 0, 0, 0, 5, 0, 2, 1, 0, 0, 0, 5,5,4,5, [{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]);
            // let well3 = new Well("Well 3", 50, 1500, 0.03, 1.72, 0.3, 583.5, 65, 262, 415.51, 15.4, 0.33, 44, 991, "Exponential", 50, 70, 12, 0, 0, 0, 5, 6, 0, 1, 1, 0, 0, 5,5,4,5, [{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]);
            // let well4 = new Well("Well 4", 30, 1500, 0.03, 1.4, 0.385, 241.3, 110, 165, 415.51, 13.2, 2, 44, 825, "Exponential", 50, 70, 12, 0, 0, 0, 4, 6, 0, 1, 0, 0, 0, 4,5,3,4, [{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]);
            // store.commit('addToWell', this.well);

        }
    }
</script>
