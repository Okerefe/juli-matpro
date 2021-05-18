<template>
    <div>
        <h4 style="color: black; font-weight: 500;">Well Information</h4>
        <div class="flex flex-4">
            <article>
                Name of Well<input v-model="well.name" placeholder="Name of Well" type="text" required/>
            </article>
            <article>
                Re (Reservoir Radius)<input v-model="well.rr" placeholder="Re (Reservoir Radius)" type="text" required/>
            </article>
            <article>
                Rw (Well Bore radius)<input v-model="well.wbr" placeholder="Rw (Well Bore radius)" type="text"
                                            required/>
            </article>
            <article>
                Bo (Formation volume factor)<input v-model="well.fvf" placeholder="Bo (Formation volume factor)"
                                                   type="text" required/>
            </article>
            <article>
                μ (Viscocity)<input v-model="well.vis" placeholder="μ (Viscocity)" type="text" required/>
            </article>
            <article>
                H(Reservoir Thickness)<input v-model="well.rt" placeholder="H(Reservoir Thickness)" type="text"
                                             required/>
            </article>
            <article>
                Pr-Pwf (Pressure Drop)<input v-model="well.pd" placeholder="Pr-Pwf (Pressure Drop)" type="text"
                                             required />
            </article>
            <article>
                K(b/s) (Permeability)<input v-model="well.permbs" placeholder="K(b/s) (Permeability)" type="text"
                                            @input="checkPermeability" required/>
            </article>

            <article>
                K(a/s) (Permeability)<input v-model="well.permas" placeholder="K(a/s) (Permeability)" type="text"
                                            @input="checkPermeability" required/>
            </article>

            <article>
                Percentage of K(a/s)<input v-model="well.perk" placeholder="Percentage of K(a/s)" type="text"
                                           @input="checkPercentage" required/>
            </article>
            <article>
                Skin (b/s)<input v-model="well.skinbs" placeholder="Skin (b/s)" type="text" @input="checkSkin"
                                 required/>
            </article>
            <article>
                Skin (a/s)<input v-model="well.skinas" placeholder="Skin (a/s)" type="text" @input="checkSkin"
                                 required/>
            </article>
            <article>
                Percentage of Skin a/s<input v-model="well.perskinas" placeholder="Percentage of Skin a/s" type="text"
                                             @input="checkSkinPercentage" required/>
            </article>
            <article>
                Q(b/s) (Production rate b/s)<input v-model="well.prbs" placeholder="Q(b/s) (Production rate b/s)"
                                                   type="text" required/>
            </article>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'well-information',
        props: ['well'],

        methods : {
            checkPercentage() {
                let permas = (1 + (this.well.perk/100)) * this.well.permbs;
                if (!isNaN(permas)) {
                    this.well.permas = permas.toFixed(2);
                }
            },

            checkPermeability() {
                let perk = (((this.well.permas/this.well.permbs) - 1) * 100).toFixed(4);
                this.well.perk = (!isNaN(perk)) ?  perk : '';
            },

            checkSkin() {
                let perc = (((this.well.skinas/this.well.skinbs) - 1) * 100).toFixed(4);
                this.well.perskinas = (!isNaN(perc)) ?  perc : '';
            },

            checkSkinPercentage() {
                let peras = ((1 + (this.well.perskinas/100)) * this.well.skinbs).toFixed(4);
                this.well.skinas = (!isNaN(peras)) ?  peras : '';
            },

        },
    }
</script>