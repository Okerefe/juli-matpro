<template>
    <div>
        <article>
            <input type="checkbox" :id="'ii' + well.name" v-model="well.workOverComplex">
            <label :for="'ii' + well.name">Calculate Workover Complexity</label>
        </article>

        <h4 v-if="well.workOverComplex">Workover Complexity..</h4>
        <div class="flex flex-4">
            <article v-if="well.workOverComplex">
                a(Gravel pack linear)<input v-model="well.gpl" placeholder="a(Gravel pack linear" type="text" :disabled="disabled"  required/>
            </article>

            <article v-if="well.workOverComplex">
                g(Gravel pack index)<input v-model="well.gpi" placeholder="g(Gravel pack index)" type="text" :disabled="disabled" required/>
            </article>

            <article v-if="well.workOverComplex">
                p(Packer index)<input v-model="well.pi" placeholder="p(Packer index)" type="text" :disabled="disabled" required/>
            </article>


            <article v-if="well.workOverComplex">
                d(Workover depth index)<input v-model="well.wdi" placeholder="d(Workover depth index)" type="text" :disabled="disabled" required/>
            </article>


            <article v-if="well.workOverComplex">
                m(Mandrel index)<input v-model="well.mi" placeholder="m(Mandrel index)" type="text" :disabled="disabled" required/>
            </article>


            <article v-if="well.workOverComplex">
                r(Age of last re-entry)<input v-model="well.alr" placeholder="r(Age of last re-entry)" type="text" :disabled="disabled" required/>
            </article>

            <article v-if="well.workOverComplex">
                v(Angle of deviation)<input v-model="well.aod" placeholder="v(Angle of deviation)" type="text" :disabled="disabled" required/>
            </article>


            <article v-if="well.workOverComplex">
                t(Lost wireline index)<input v-model="well.lwi" placeholder="t(Lost wireline index)" type="text" :disabled="disabled" required/>
            </article>


            <article v-if="well.workOverComplex">
                c(Casing patch index)<input v-model="well.cpi" placeholder="c(Casing patch index)" type="text" :disabled="disabled" required/>
            </article>

            <article v-if="well.workOverComplex">
                w(Well head repair index)<input v-model="well.whr" placeholder="w(Well head repair index)" type="text" :disabled="disabled" required/>
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
        name: 'workover-complexity',
        props: {
            well: {},
            disabled: {},
        }
    }
</script>