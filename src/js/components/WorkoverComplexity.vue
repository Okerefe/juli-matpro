<template>
    <div>
        <article>
            <input type="checkbox" id="workOverComplexity" v-model="well.workOverComplexity">
            <label for="workOverComplexity">Calculate Workover Complexity</label>
        </article>
        <div class="flex flex-4">
            <article v-if="well.workOverComplexity">
                a(Gravel pack linear)<input v-model="well.gpl" placeholder="a(Gravel pack linear" type="text" required/>
            </article>

            <article v-if="well.workOverComplexity">
                g(Gravel pack index)<input v-model="well.gpi" placeholder="g(Gravel pack index)" type="text" required/>
            </article>

            <article v-if="well.workOverComplexity">
                p(Packer index)<input v-model="well.pi" placeholder="p(Packer index)" type="text" required/>
            </article>


            <article v-if="well.workOverComplexity">
                d(Workover depth index)<input v-model="well.wdi" placeholder="d(Workover depth index)" type="text"
                                              required/>
            </article>


            <article v-if="well.workOverComplexity">
                m(Mandrel index)<input v-model="well.mi" placeholder="m(Mandrel index)" type="text" required/>
            </article>


            <article v-if="well.workOverComplexity">
                r(Age of last re-entry)<input v-model="well.alr" placeholder="r(Age of last re-entry)" type="text"
                                              required/>
            </article>

            <article v-if="well.workOverComplexity">
                v(Angle of deviation)<input v-model="well.aod" placeholder="v(Angle of deviation)" type="text"
                                            required/>
            </article>


            <article v-if="well.workOverComplexity">
                t(Lost wireline index)<input v-model="well.lwi" placeholder="t(Lost wireline index)" type="text"
                                             required/>
            </article>


            <article v-if="well.workOverComplexity">
                c(Casing patch index)<input v-model="well.cpi" placeholder="c(Casing patch index)" type="text"
                                            required/>
            </article>

            <article v-if="well.workOverComplexity">
                w(Well head repair index)<input v-model="well.whr" placeholder="w(Well head repair index)" type="text"
                                                required/>
            </article>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'workover-complexity',
        props: {
            well: {},
        }
    }
</script>