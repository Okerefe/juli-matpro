<template>
    <div>
        <div class="flex flex-4">
            <article>
                Choose Type of Decline:
                <select name="declineType" id="declineType" v-model="well.declineType">
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
                Np (Relative Production)<input :value="well.relProd" placeholder="Np (Relative Production)" type="text"
                                               required disabled/>
            </article>
            <article>
                Time of Abandonement (Years)<input :value="well.timeAbandon" placeholder="Np (Relative Production)"
                                                   type="text" required disabled/>
            </article>

        </div>

    </div>
</template>
<script>
    export default {
        name: 'decline-value',
        props: {
            well: {}
        }
    }
</script>