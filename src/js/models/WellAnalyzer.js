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
        this.unOrderedWells = unOrderedWells;
        let orderedWells = [];

        for (let i = 0; unOrderedWells.length > 0; i++) {
            let highestPiasValue = unOrderedWells.reduce(function (highestWell, well) {
                return (highestWell.pias || 0) >= well.pias ? highestWell : well;
            }, {});

            orderedWells.push(highestPiasValue);
            const highestPias = (element) => element.pias === highestPiasValue.pias;
            unOrderedWells.splice(unOrderedWells.findIndex(highestPias), 1);
        }
        this.wells = orderedWells
    }

    nonDefectiveWells() {
        return this.wells.filter(well => well.defects === 0);
    }

    singleDefectWells() {
        return this.wells.filter(well => well.defects === 1);
    }

    manyDefectWells() {
        return this.wells.filter(well => well.defects > 1);
    }

    wellRank() {
        return this.nonDefectiveWells().concat(
            this.singleDefectWells(),
            this.manyDefectWells()
        );
    }

    easyWorkOver() {
        return this.wells.filter(well => well.cof < 50);
    }

    diffWorkOver() {
        return this.wells.filter(well => well.cof >= 50);
    }

}