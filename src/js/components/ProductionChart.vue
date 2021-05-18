<template>
    <div>
        <h3>Production Chart</h3>
        <vue-chartist :data="data" :options="options" type="Line"></vue-chartist>
    </div>
</template>

<script>
    import VueChartist from 'v-chartist';

    export default {
        name: 'production-chart',

        props: ["well"],

        components: {
            'vue-chartist': VueChartist,
        },

        created() {
            let npvs = [];
            console.log(this.well.npvs.length);
            for(let i = 0; i < this.well.npvs.length; i++) {
                npvs.push(`${this.well.npvs[i].value}%`);
                console.log(this.well.npvs[i].value);
            }
            console.log('labels');
            console.log(npvs);
            this.npvs = npvs;
        },
        data() {
            return {
                npvs: [],
                data: {
                    labels: this.labels(),
                    series: this.series(),
                },
                options: {
                    fullWidth: true,
                    chartPadding: {
                        right: 40,
                        left: 40
                    },
                    height: 500,
                },
            };
        },
        computed: {
        },
        methods: {
            getNpvs()  {
                // console.log('rrrr' + this.npvs);
                return this.npvs;
            },

            series()  {
                let seriesData = []
                this.well.npvs.forEach((npv) =>{
                    seriesData.push(this.well.totalNpvValue(npv));
                });

                console.log('seriesData');
                console.log([seriesData]);
                return [seriesData];
                // return [
                //     [12, 9, 7, 8, 5],
                //     [2, 1, 3.5, 7, 3],
                //     [1, 3, 4, 5, 6]
                // ];
            },

            labels() {
                let npvs = [];
                console.log(this.well.npvs.length);
                for(let i = 0; i < this.well.npvs.length; i++) {
                    npvs.push(`${this.well.npvs[i].value}%`);
                    console.log(this.well.npvs[i].value);
                }
                return npvs;
            }
        },
    };
</script>