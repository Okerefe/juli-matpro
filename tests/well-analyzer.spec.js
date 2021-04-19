import WellAnalyzer from "../src/js/models/WellAnalyzer";
import { expect } from 'chai';
import Well from "../src/js/models/Well";

describe ('WellAnalyzer', () => {

    let wellAnalyzer;
    beforeEach(() => {
        let wells = [
            new Well( 'well4',1.69, 0.70, 10.04, 5.59, 0, 0, 0, 5, 0, 1, 1, 0, 0, 0, 5,5,4,5,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
            new Well( 'well2',3.83, 0.65, 31.82, 10.90, 0, 0, 0, 5, 0, 2, 1, 0, 0, 0, 5,5,4,5,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
            new Well( 'well3',3.91, 0.59, 16.12, 9.49, 0, 0, 0, 5, 6, 0, 1, 1, 0, 0, 5,5,4,5,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
            new Well( 'well1',7.13, 0.62, 88.26, 19.00, 0, 0, 0, 4, 6, 0, 1, 0, 0, 0, 4,5,3,4,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
        ];
        wellAnalyzer = new WellAnalyzer(wells);
    });

    it('arranges well in correct order of their PIAS upon construction', () => {
        expect(wellAnalyzer.wells[0].pias).to.equal(88.26);
        expect(wellAnalyzer.wells[1].pias).to.equal(31.82);
        expect(wellAnalyzer.wells[2].pias).to.equal(16.12);
        expect(wellAnalyzer.wells[3].pias).to.equal(10.04);
    });

    it('Returns a valid list of Non Defective Wells', () =>     {
        let nonDefective = wellAnalyzer.nonDefectiveWells();
        expect(nonDefective[0].pias).to.equal(88.26);
        expect(nonDefective[1].pias).to.equal(31.82);
        expect(nonDefective[2].pias).to.equal(10.04);
        expect(nonDefective.length).to.equal(3);
    });

    it('Returns a valid list of Single Defect Wells', () => {
        let singleDefective = wellAnalyzer.singleDefectWells();
        expect(singleDefective[0].pias).to.equal(16.12);
        expect(singleDefective.length).to.equal(1);
    });

    it('Returns a valid list of Wells with more than one Defects', () => {
        let manyDefectWells = wellAnalyzer.manyDefectWells();
        expect(manyDefectWells.length).to.equal(0);
    });

    it('Returns the Well Rank in correct Order', () => {
        let wellRank = wellAnalyzer.wellRank();
        expect(wellRank[0].name).to.equal('well1');
        expect(wellRank[1].name).to.equal('well2');
        expect(wellRank[2].name).to.equal('well4');
        expect(wellRank[3].name).to.equal('well3');

        expect(wellRank.length).to.equal(4);
    });

});
