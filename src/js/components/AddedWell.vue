<template>
    <div>
        <h3 style="margin-bottom:10px;">{{ well.name }}</h3>

        <well-information :well="well"/>

        <technical-parameters :well="well"/>

        <workover-complexity :well="well"/>

        <decline-value :well="well"/>

        <economic-details :well="well"/>

        <production-profile v-if="Array.isArray(well.prodProfile)" :well="well" :key="prodProfileKey"/>

        <production-chart :well="well" :key="well.npvs.length + 'ffff'"/>

<!--        <h4 style="color: black;">Well Information</h4>-->
<!--        <div class="flex flex-4">-->
<!--            <article>-->
<!--                Name of Well<input :value="well.name"  type="text" disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                Re (Reservoir Radius)<input :value="well.rr"  type="text" disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                Rw (Well Bore radius)<input :value="well.wbr" placeholder="Rw (Well Bore radius)" type="text" disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                Bo (Formation volume factor)<input :value="well.fvf" placeholder="Bo (Formation volume factor)" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                μ (Viscocity)<input :value="well.vis" placeholder="μ (Viscocity)" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                H(Reservoir Thickness)<input :value="well.rt" placeholder="H(Reservoir Thickness)" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                Pr-Pwf (Pressure Drop)<input :value="well.pd" placeholder="Pr-Pwf (Pressure Drop)" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                K(b/s) (Permeability)<input :value="well.permbs" placeholder="K(b/s) (Permeability)" type="text" required disabled/>-->
<!--            </article>-->

<!--            <article>-->
<!--                K(a/s) (Permeability)<input :value="well.permas" placeholder="K(a/s) (Permeability)" type="text" required disabled/>-->
<!--            </article>-->

<!--            <article>-->
<!--                Percentage of K(a/s)<input :value="well.perk" placeholder="Percentage of K(a/s)" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                Skin (b/s)<input :value="well.skinbs" placeholder="Skin (b/s)" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                Skin (a/s)<input :value="well.skinas" placeholder="Skin (a/s)" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                Percentage of Skin a/s<input :value="well.perskinas" placeholder="Percentage of Skin a/s" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                Q(b/s) (Production rate)<input :value="well.prbs" placeholder="Q(b/s) (Production rate)" type="text" required disabled/>-->
<!--            </article>-->

<!--        </div>-->

<!--        <hr style="margin-bottom: 3px;"/>-->
<!--        <h4 style="color: black;">Technical Parameters</h4>-->
<!--        <div class="flex flex-4">-->
<!--            <article>-->
<!--                PI(B/S)<input :value="well.pibs" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                PI(A/S)<input :value="well.pias" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                PI Ideal<input :value="well.pideal" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                FE(B/S)<input :value="well.febs" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                FE(A/S)<input :value="well.feas" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                Q(a/s) (Production rate a/s)<input :value="well.pras" placeholder="Q(a/s) (Production rate a/s)" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                ΔP Skin (B/S)<input :value="well.pskinbs" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                ΔP Skin (A/S)<input :value="well.pskinas" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                R-Factor (B/S)<input :value="well.rfacbs" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                R-Factor (A/S)<input :value="well.rfacas" type="text" required disabled/>-->
<!--            </article>-->

<!--        </div>-->

<!--        <br/>-->
<!--        <article>-->
<!--            <input type="checkbox" id="workOverComplexity" v-model="workOverComplexity">-->
<!--            <label for="workOverComplexity">Calculate Workover Complexity</label>-->
<!--        </article>-->


<!--        <div class="flex flex-4">-->
<!--            <article v-if="workOverComplexity">-->
<!--                a(Gravel pack linear)<input :value="well.gpl" placeholder="a(Gravel pack linear" type="text" required disabled/>-->
<!--            </article>-->

<!--            <article v-if="workOverComplexity">-->
<!--                g(Gravel pack index)<input :value="well.gpi" placeholder="g(Gravel pack index)" type="text" required disabled/>-->
<!--            </article>-->

<!--            <article v-if="workOverComplexity">-->
<!--                p(Packer index)<input :value="well.pi" placeholder="p(Packer index)" type="text" required disabled/>-->
<!--            </article>-->


<!--            <article v-if="workOverComplexity">-->
<!--                d(Workover depth index)<input :value="well.wdi" placeholder="d(Workover depth index)" type="text"-->
<!--                                              required disabled/>-->
<!--            </article>-->


<!--            <article v-if="workOverComplexity">-->
<!--                m(Mandrel index)<input :value="well.mi" placeholder="m(Mandrel index)" type="text" required disabled/>-->
<!--            </article>-->


<!--            <article v-if="workOverComplexity">-->
<!--                r(Age of last re-entry)<input :value="well.alr" placeholder="r(Age of last re-entry)" type="text" required disabled/>-->
<!--            </article>-->

<!--            <article v-if="workOverComplexity">-->
<!--                v(Angle of deviation)<input :value="well.aod" placeholder="v(Angle of deviation)" type="text" required disabled/>-->
<!--            </article>-->


<!--            <article v-if="workOverComplexity">-->
<!--                t(Lost wireline index)<input :value="well.lwi" placeholder="t(Lost wireline index)" type="text" required disabled/>-->
<!--            </article>-->


<!--            <article v-if="workOverComplexity">-->
<!--                c(Casing patch index)<input :value="well.cpi" placeholder="c(Casing patch index)" type="text" required disabled/>-->
<!--            </article>-->

<!--            <article v-if="workOverComplexity">-->
<!--                w(Well head repair index)<input :value="well.whr" placeholder="w(Well head repair index)" type="text" required disabled/>-->
<!--            </article>-->

<!--        </div>-->


<!--        <hr/>-->
<!--        <div class="flex flex-4">-->
<!--            <article>-->
<!--                Choose Type of Decline:-->
<!--                <select name="cars" id="cars" disabled>-->
<!--                    <option value="declineType" selected>{{ well.declineType }} Decline</option>-->
<!--                </select>-->
<!--            </article>-->
<!--        </div>-->

<!--        <div class="flex flex-4">-->
<!--            <article>-->
<!--                Qa (Abandonment Rate)<input :value="well.qa" placeholder="Qa (Abandonment Rate)" type="text" required disabled/>-->
<!--            </article>-->

<!--            <article>-->
<!--                Di (Decline Rate)<input :value="well.di" placeholder="Di (Decline Rate)" type="text" required disabled/>-->
<!--            </article>-->

<!--            <article v-if="well.declineType == 'Hyperbolic'">-->
<!--                b (Constant)<input :value="well.b" placeholder="b (Constant)" type="text" required disabled/>-->
<!--            </article>-->



<!--        </div>-->


<!--        <hr style="margin-bottom: 3px;"/>-->
<!--        <h4 style="">Economic Details..</h4>-->
<!--        <div class="flex flex-4">-->
<!--            <article>-->
<!--                Special Cost<input :value="well.sc" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                Labour Cost<input :value="well.lc" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                CAC Cost<input :value="well.cac" type="text" required disabled/>-->
<!--            </article>-->
<!--            <article>-->
<!--                Oil Price($)<input :value="well.op" type="text" required disabled/>-->
<!--            </article>-->
<!--        </div>-->

        <br>
        <br>
        <hr>
        <hr style="margin-top: -25px;">
    </div>
</template>

<script>

    import EconomicDetails from "./EconomicDetails";
    import DeclineValue from "./DeclineValue";
    import WorkoverComplexity from "./WorkoverComplexity";
    import WellInformation from "./WellInformation";
    import TechnicalParameters from "./TechnicalParameters";
    import ProductionProfile from "./ProductionProfile";
    import ProductionChart from "./ProductionChart";

    export default {
        props: ['well'],

        data () {
            return {
                workOverComplexity: 1,
            }
        },

        components: {
            EconomicDetails,
            DeclineValue,
            WorkoverComplexity,
            WellInformation,
            TechnicalParameters,
            ProductionProfile,
            ProductionChart,
        },

        methods: {
            plusOne(num) {
              return ++num;
            },
        },

        created() {
        }
    }
</script>