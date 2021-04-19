<template>
<div>
<h3 style="margin-bottom:10px;">Well {{ i }}  {{ well.name }}feef</h3>
<div class="flex flex-4">
        <article>
                FE(A/S)<input :value="well.feas" type="text" required disabled/>
        </article>
        <article>
                R-Factor<input :value="well.rfac" type="text" required disabled/>
        </article>
        <article>
                PI(A/S)<input :value="well.pias" type="text" required disabled/>
        </article>
        <article>
                SR(Simulation Ratio)<input :value="well.sr" type="text" required disabled/>
        </article>
        <article>
                a(Gravel pack linear)<input :value="well.gpl" type="text" required  disabled/>
        </article>
        <article>
                g(Gravel pack index)<input :value="well.gpi" type="text" required disabled/>
        </article>
        <article>
                p(Packer index)<input :value="well.pi" type="text" required  disabled/>
        </article>
        <article>
                d(Workover depth index)<input :value="well.wdi" type="text" required  disabled/>
        </article>
        <article>
                m(Mandrel index)<input :value="well.mi" type="text" required disabled/>
        </article>
        <article>
                r(Age of last re-entry)<input :value="well.alr" type="text" required  disabled/>
        </article>
        <article>
                v(Angle of deviation)<input :value="well.aod" type="text" required disabled/>
        </article>
        <article>
                t(Lost wireline index)<input  :value="well.lwi" type="text" required  disabled/>
        </article>
        <article>
                c(Casing patch index)<input :value="well.cpi" type="text" required disabled/>
        </article>
        <article>
                w(Well head repair index)<input :value="well.whr" type="text" required disabled/>
        </article>
</div><br>
</div>
</template>

<script>

    export default {
        props:  ['well', 'i'],

        data() {
            return {
            }
        },

        methods: {
        },

        mounted() {
            console.log('disabled-component mounted');
        }
    }
</script>