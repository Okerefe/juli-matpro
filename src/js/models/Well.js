/**
 * Well Class
 *
 */
export default class Well {


    /**
     * Constructor Method
     *
     * Boots up the Well Class by assigning all it's attributes
     *
     *
     * @param name
     * @param rt
     * @param rr
     * @param wbr
     * @param fvf
     * @param vis
     * @param pd
     * @param permbs
     * @param permas
     * @param perk
     * @param skinbs
     * @param skinas
     * @param perskinas
     * @param prbs
     * @param declineType
     * @param qa
     * @param di
     * @param b
     * @param workOverComplex
     * @param gpl
     * @param gpi
     * @param pi
     * @param wdi
     * @param mi
     * @param alr
     * @param aod
     * @param lwi
     * @param cpi
     * @param whr
     * @param ic
     * @param yearlyOperateCost
     * @param npvs
     * @param lc
     * @param cac
     * @param op
     * @param updateChart
     * @param tax
     * @param royal
     * @param operate
     * @param costType
     * @param months
     *
     * @return void Return value description.
     */
    // constructor(name, feas, rfac, pias, sr, gpl, gpi, pi, wdi, mi, alr, aod, lwi, cpi, whr, sc, lc, cac, op, months) {
    constructor(name, rt, rr, wbr, fvf, vis, pd, permbs, permas, perk, skinbs, skinas, perskinas, prbs, declineType, qa, di, b, workOverComplex, gpl, gpi, pi, wdi, mi, alr, aod, lwi, cpi, whr, ic, yearlyOperateCost, npvs, lc, cac, op, updateChart, tax, royal, operate, costType, profileUpdate, months) {
        this.name = name;
        this.rt = rt;
        this.rr = rr;
        this.wbr = wbr;
        this.fvf = fvf;
        this.vis = vis;
        this.pd = pd;
        this.permbs = permbs;
        this.permas = permas;
        this.perk = perk;
        this.skinbs = skinbs;
        this.skinas = skinas;
        this.perskinas = perskinas;
        this.prbs = prbs;
        this.declineType = declineType;
        this.qa = qa;
        this.di = di;
        this.b = b;
        this.workOverComplex = workOverComplex;
        this.gpl = gpl;
        this.gpi = gpi;
        this.pi = pi;
        this.wdi = wdi;
        this.mi = mi;
        this.alr = alr;
        this.aod = aod;
        this.lwi = lwi;
        this.cpi = cpi;
        this.whr = whr;
        this.ic = ic;
        this.yearlyOperateCost = yearlyOperateCost;
        this.npvs = npvs;
        this.lc = lc;
        this.cac = cac;
        this.op = op;
        this.updateChart = updateChart;
        this.tax = tax;
        this.royal = royal;
        this.operate = operate;
        this.costType = costType;
        this.profileUpdate = profileUpdate;
        this.months = months;
    }

    get min_pibs() {
        return 10;
    }

    get min_febs() {
        return 1;
    }

    get max_rfacbs() {
        return 0.6;
    }

    get min_defects() {
        return 1;
    }

    get totalRev() {
        return this.commas(this.totalGrossValue());
    }

    get totalCost() {
        // return (this.sc + this.lc + this.cac);
    }

    get payBackPeriod() {
        return ((this.ic/this.totalGrossValue()) * 12).toFixed(4);
    }

    get profitIndex() {
        return (this.totalNpvValue({'value': 10}) / this.ic).toFixed(4);
    }

    get npvTens(){
        return this.totalNpvValue({'value': 10});
    }

    get npvTensComma(){
        return this.commas(this.totalNpvValue({'value': 10}));
    }

    get investReturn() {
        return 'NaN';
    }

    get defects() {
        let defects = 0;
        if (this.febs > this.min_febs) { defects++; }
        if (this.rfacbs < this.max_rfacbs) { defects++; }
        if (this.pibs > this.min_pibs) { defects++; }
        return defects;
    }

    get pias() {
        let module1 = (0.00708 * this.permas * this.rt);
        let module2 = this.vis  * this.fvf;
        let module3 = 10.819 + parseFloat(this.skinas);
        let pias = module1/ (module2 * module3);
        return (!isNaN(pias)) ? pias.toFixed(4) : '';
    }

    get pibs() {
        let pibs = (this.prbs/ this.pd).toFixed(4);
        return (!isNaN(pibs)) ? pibs : '';
    }

    get pideal() {
        let module1 = (0.00708 * this.permbs * this.rt);
        let module2 = (this.vis * this.fvf * Math.log((this.rr/this.wbr)));
        let pideal = (module1 / module2).toFixed(4);
        return (!isNaN(pideal)) ? pideal : '';
    }

    get febs() {
        let febs = (this.pibs/this.pideal).toFixed(4);
        return (!isNaN(febs)) ? febs : '';
    }

    get pras() {
        let module1 = (0.00708 * this.permas * this.rt * this.pd);
        let module2 = (Math.log((this.rr/this.wbr))  + parseFloat(this.skinas));
        let module3 = (this.vis * this.fvf * module2);
        let pras = (module1 / module3).toFixed(4);
        return (!isNaN(pras)) ? pras : '';
    }

    get feas() {
        let feas = (this.pias/this.pideal).toFixed(4);
        return (!isNaN(feas)) ? feas : '';
    }

    get pskinbs() {
        let module1 = (141.2 * this.prbs * this.vis * this.fvf * this.skinbs);
        let module2 = (this.permbs * this.rt)
        let pskinbs = ( module1 / module2).toFixed(4);
        return (!isNaN(pskinbs)) ? pskinbs : '';
    }

    get pskinas() {
        let module1 = (141.2 * this.prbs * this.vis * this.fvf * this.skinas);
        let module2 = (this.permbs * this.rt);
        let pskinas = ( module1 / module2).toFixed(4);
        return (!isNaN(pskinas)) ? pskinas : '';
    }

    get rfacbs() {
        let rfacbs = (this.pskinbs / this.pd).toFixed(4);
        return (!isNaN(rfacbs)) ? rfacbs : '';
    }

    get rfacas() {
        let rfacas = (this.pskinas / this.pd).toFixed(4);
        return (!isNaN(rfacas)) ? rfacas : '';
    }

    get cof() {
        return ((10 * this.gpl)
            + (9 * this.gpi)
            + (8 * this.pi)
            + (7 * this.wdi)
            + (6 * this.mi)
            + (5 * this.alr)
            + (4 * this.aod)
            + (3 * this.lwi)
            + (2 * this.cpi)
            + (this.whr));
    }

    get relProd() {
        let relProd;
        if(this.declineType == 'Exponential') {
            relProd = ((this.pras - this.qa)/this.di).toFixed(4);
        }

        if(this.declineType == 'Hyperbolic') {
            let module1 = (Math.pow(this.pras, this.pras) / (((parseFloat(this.b) - 1)) * this.di));
            let module2 = Math.pow(this.qa, (1-(parseFloat(this.b))));
            let module3 = (this.pras * (1- (parseFloat(this.b))));
            relProd = (module1 * module2 - module3).toFixed(4);
        }

        if(this.declineType == 'Harmonic') {
            relProd = ((this.pras /this.di)  * Math.log(this.pras/ this.pras)).toFixed(4);
        }

        return (!isNaN(relProd)) ? relProd : '';
    }

    get timeAbandon() {
        let timeAbandon;
        if( this.di > 0) {
            timeAbandon = (((1 / this.di) * (Math.log(this.pras / this.qa))) / 365).toFixed(4);
        }
        return (!isNaN(timeAbandon)) ? timeAbandon : '';
    }

    get irrUpdate() {
       return this.updateChart + this.operate + this.tax + this.ic + this.op + this.royal + this.costType;
    }

    get prodProfile() {
        let prodProfile = [];
        let noOfProfile = Math.ceil(this.timeAbandon);
        let prevProdRate = 0;
        if(this.di > 0) {
            for(let i=0; i <= noOfProfile; i++) {

                let time = (i == noOfProfile) ? this.timeAbandon : i;

                let prodRateReal = (this.pras * Math.exp(-1 * this.di * 365 * time)).toFixed(4);
                let prodRateValue = (!isNaN(prodRateReal)) ? prodRateReal : '';
                let prodRate = (i == 0) ? this.pras : prodRateValue;

                let productionReal = ((prevProdRate - prodRate)/this.di).toFixed(4);
                let productionValue = (!isNaN(productionReal)) ? productionReal : '';
                let production = (i == 0) ? 0 : productionValue;

                let revenueValue = (production * this.op).toFixed(4);
                let revenue = (!isNaN(revenueValue)) ? revenueValue : '';


                //
                let tax = (!isNaN(revenueValue)) ? (this.tax * revenue / 100).toFixed(4) : '';
                let royal = (!isNaN(revenueValue)) ? (this.royal * revenue / 100).toFixed(4) : '';
                let operate = (!isNaN(revenueValue)) ? (this.operate * revenue / 100).toFixed(4) : '';
                // let royal = (this.royal * revenue / 100).toFixed(4);

                let ncf;
                if (this.costType == 'percent') {
                    let add1 = (!isNaN(operate)) ? parseInt(operate) : 0;
                    let add2 = (!isNaN(tax)) ? parseInt(tax) : 0;
                    let add3 = (!isNaN(royal)) ? parseInt(royal) : 0;
                    // let minus = (add1 + add2 + add3);
                    let minus = (add1 + add2 + add3);
                    // console.log('minus'+ minus);
                    let ncfValue = (i == 0) ? (-1 * this.ic) : (revenue - minus).toFixed(4);
                    ncf = (!isNaN(ncfValue)) ? ncfValue : '';
                } else {
                    let add1 = (!isNaN(operate)) ? parseInt(operate) : 0;
                    let add2 = (!isNaN(tax)) ? parseInt(tax) : 0;
                    let add3 = (!isNaN(royal)) ? parseInt(royal) : 0;

                    let minus = (add1 + add2 + add3);
                    // console.log('minus'+ minus);
                    let ncfValue = (i == 0) ? (-1 * this.ic) : (revenue - minus).toFixed(4);
                    ncf = (!isNaN(ncfValue)) ? ncfValue : '';
                }


                prevProdRate = prodRate;
                // prodProfile.push({'time' : time, 'prodRate' : prodRate, 'production' : production, 'revenue' : revenue, 'ncf' : ncf})
                prodProfile.push({'time' : time, 'prodRate' : prodRate, 'production' : production, 'revenue' : revenue, 'ncf' : ncf, 'tax' : tax, 'royal': royal, 'operate' : operate})
            }
        }
        return prodProfile;
    }
    commas(n) {
        var parts=n.toString().split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
    }

    interpolate() {

        let arr = [];
        let last = (this.npvs.length - 1)
        // console.log('arrlennnnn' + arr.length);

        this.npvs.forEach((npv) =>{
        });

        // console.log('last' + last);

        if(last !== -1){
            for(let i = 1; i < parseInt(npvs[last].value); i+=10) {
                arr.push(null);
            }

            let lastTotalNpvValue = this.totalNpvValue(this.npvs[last]);
            // console.log('lastvalue' + lastTotalNpvValue);
            arr.push(lastTotalNpvValue);

            let currentAddition = 10;
            let lo = 0;
            // for (
            //     let nextTotalNpv = this.totalNpvValue({'value': (parseInt(this.npvs[last].value) + currentAddition)});
            //     nextTotalNpv > 1;
            //     currentAddition+=10
            // ) {
            //     arr.push(nextTotalNpv);
            // }
            while(true) {
                let value = parseInt(this.npvs[last].value) + currentAddition;
                let nextTotalNpv = this.totalNpvValue({'value': value})
                currentAddition +=10;
                lo++;
                arr.push(nextTotalNpv);
                // console.log('nextttt>>>>>>>>>: ' + nextTotalNpv);
                if(lo == 500 || nextTotalNpv < 1) {
                    // console.log('loooooo' + lo)
                    break;
                }
            }
        }

        // while ()

        return arr;
    }


    containsNpv(npvs, contains) {
        console.log(contains);
        let value = false;
        npvs.forEach((npv) =>{
            if(npv.value == contains) {
                value = true;
            }
        });
        return value;

    }
    seriesPlot() {
        let seriesData = []
        // let npvs = [...this.npvs];
        //
        // while(npvs.length > 0) {
        for(let i = 0; i < 120; i+=10) {
            seriesData.push(this.totalNpvValue({'value': i}))

            // if(this.containsNpv(this.npvs, i)) {
            //     seriesData.push(this.totalNpvValue({'value': i}))
            // } else {
            //     seriesData.push(null);
            // }
        }

        // console.log('series....>>' + seriesData);
        return seriesData;
        // this.npvs.forEach((npv) =>{
        //     seriesData.push(this.totalNpvValue(npv));
        // });
        //
        // // console.log('seriesData');
        // // console.log([seriesData]);
        //
        // let extra = this.interpolate();
        // return [seriesData, extra];

    }

    labelsPlot() {

        // // console.log('interpolate' + this.interpolate())
        // let totalLabel = (this.npvs.length + this.interpolate().length - 1);
        // console.log('totallabell>' + totalLabel);
        // let tens = 0;
        // for(let i = 1; i<= totalLabel; i++) {
        //     tens++;
        //     if(tens == 1) {
        //         npvs.push(`${i * 10}%`);
        //         tens = 0;
        //     } else {
        //         npvs.push(null);
        //     }
        // }

        return ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%', '110%', '120%', '130%', '140%', '150%'];

        // console.log(npvs);
        // console.log(this.npvs.length);
        // let lastValue = 0;
        // this.npvs.forEach((npv) =>{
        //     // npvs.push(`${npv.value}%`);
        //     npvs.push(npv.value);
        //     lastValue = npv.value;
        //     // console.log(npv.value);
        // });
        //
        //
        // let start = lastValue + 10;
        // if(this.interpolate().length > 0) {
        //     for(let i = 0; i < (this.interpolate().length -1); i++) {
        //         npvs.push(start);
        //         start+=10;
        //     }
        // }

        // return npvs;
    }

    npvValue(i, npv) {
        let module1 = this.prodProfile[i].ncf;
        let module2 = (1 + (npv.value/100));
        let module3 = this.prodProfile[i].time;
        let npvValue = (module1/ Math.pow(module2, module3)).toFixed(4);
        return (!isNaN(npvValue)) ? npvValue : '';
    }

    totalNcfValue() {
        let value = 0;
        for (let i = 0; i < this.prodProfile.length; i++) {
            value += parseInt(this.prodProfile[i].ncf);
        }
        return value;
    }

    totalGrossValue() {
        let value = 0;
        for (let i = 0; i < this.prodProfile.length; i++) {
            value += parseInt(this.prodProfile[i].revenue);
        }
        return value;
    }

    totalNpvValue(npv) {
        let value = 0;
        for (let i = 0; i < this.prodProfile.length; i++) {
            let npvPres = this.npvValue(i, npv);
            // console.log(npvPres);
            value += parseInt(npvPres);
        }
        return (!isNaN(value)) ? value : '';
    }

    isQualified() {
        return this.defects <= this.min_defects;
    }

    hasDefects() {
        return this.defects > 0;
    }
}