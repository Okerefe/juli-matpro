<template>
<!--    <div>-->
<!--        <br>-->

<!--        <div v-if="analyze == true">-->
<!--            <h4>IRR Values..</h4>-->


<!--            <span v-for="(well, a) in wellAnalyzer.wells" :key = "well.vis">-->
<!--                <div :class="'irr-' + a" style="height: 15px; width: 15px; display: inline-block;"></div>-->
<!--                <p style="display: inline-block; line-height: 20px; height: 20px;">{{ well.name }} IRR Value: <span style="font-weight: 700;">{{ irrs[a] }} </span></p>-->
<!--            <br/>-->
<!--            </span>-->

<!--        </div>-->

<!--        <div v-else>-->
<!--            <h4 v-if="!multi">IRR Value..</h4>-->
<!--            <span>-->
<!--            <div style="height: 15px; width: 15px; background: red; display: inline-block;" :style="'background :' + color"></div>-->
<!--            <p style="display: inline-block; line-height: 20px; height: 20px;">{{ well.name }} IRR Value: <span style="font-weight: 700;">{{ irr }} </span></p>-->
<!--        </span>-->

<!--        </div>-->

<!--    </div>-->
    <span>{{ irr }}</span>
</template>

<script>

    export default {
        name: 'irr-value',

        props: ["well", "wellAnalyzer", "analyze", "color", "multi"],

        data() {
            return {
                'irr' : 'Computing Value.....',
                'irrs' : []
            };
        },

        components: {
        },

        async created() {
            if(this.analyze == true) {
                for(let i = 0; i < this.wellAnalyzer.wells.length; i++) {
                    this.irrs[i] = "Computing Value.....";
                    await this.irrValue(this.wellAnalyzer.wells[i], i);
                }
            } else {
                await this.irrValue(this.well, 3);
            }
        },

        computed: {
        },

        methods: {
            async irrValue(well, a) {
                for(let i = 0; i < 120; i+=0.5) {
                    let val = well.totalNpvValue({'value': i});
                    // console.log(val);
                    if(val < 0) {
                        // console.log('IRR: ' + i);
                        if(this.analyze == true) {
                            this.irrs[a] = `${i.toFixed(4)}%`;
                        } else {
                            this.irr = `${i.toFixed(4)}%`;
                        }
                        break;
                    }
                }
            },
        },
    };
</script>

<style>
    .irr-0 {
        background: #8B0000;
    }
    .irr-1 {
        background: #00a86b;
    }
    .irr-2 {
        background: #FF6414;
    }
    .irr-3 {
        background: #004953;
    }
    .irr-4 {
        background: #004953;
    }

</style>