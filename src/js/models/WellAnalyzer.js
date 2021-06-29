/**
 * WellAnalyzer Class
 *
 */

export default class WellAnalyzer {
    /**
     * Constructor Method
     *
     * Accepts an Array of Well on which Analysis can be performed on
     *
     * @return void Return value description.
     * @param unOrderedWells
     */
    constructor(unOrderedWells) {
        let orderedWells = [];

        this.unOrderedWells = [...unOrderedWells];
        for (let i = 0; unOrderedWells.length > 0; i++) {
            let highestRelProdValue = unOrderedWells.reduce(function (highestWell, well) {
                return (highestWell.relProd || 0) >= well.relProd ? highestWell : well;
            }, {});

            orderedWells.push(highestRelProdValue);
            const highestRelProd = (element) => element.relProd === highestRelProdValue.relProd;
            unOrderedWells.splice(unOrderedWells.findIndex(highestRelProd), 1); //the problem is coming from here splicing the array will mess with it at the store, but it works now bcos i  deep copy it first
        }

        this.wells = orderedWells;
    }

    nonDefectiveWells() {
        return this.wells.filter((well) => well.defects === 0);
    }

    singleDefectWells() {
        return this.wells.filter((well) => well.defects === 1);
    }

    manyDefectWells() {
        return this.wells.filter((well) => well.defects > 1);
    }

    wellRank() {
        return this.nonDefectiveWells().concat(
            this.singleDefectWells(),
            this.manyDefectWells()
        );
    }

    economicRank() {
        let econsRank = [];
        let unOrderedWells = [...this.wells];
        for (let i = 0; unOrderedWells.length > 0; i++) {
            let highestEconsValue = unOrderedWells.reduce(function (highestWell, well) {
                return (highestWell.npvTens || 0) >= well.npvTens ? highestWell : well;
            }, {});

            econsRank.push(highestEconsValue);
            const highestEcons = (element) => element.npvTens === highestEconsValue.npvTens;
            unOrderedWells.splice(unOrderedWells.findIndex(highestEcons), 1); //the problem is coming from here splicing the array will mess with it at the store, but it works now bcos i  deep copy it first
        }
        return econsRank;
    }

    chartDataPoints() {
        let data = [];
        this.wellRank().forEach((well) =>{
            data.push({
                label: well.name, y : well.pibs
            });
        });
        return data;
    }

    canvasChartData() {
        return [
            {
                type: "column",
                dataPoints:  this.chartDataPoints()
            }
        ]
    }

    easyWorkOver() {
        return this.wells.filter((well) => well.cof < 50);
    }

    diffWorkOver() {
        return this.wells.filter((well) => well.cof >= 50);
    }

}
