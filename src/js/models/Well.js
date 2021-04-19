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
     * @param sc
     * @param lc
     * @param cac
     * @param op
     * @param months
     *
     * @return void Return value description.
     */
    // constructor(name, feas, rfac, pias, sr, gpl, gpi, pi, wdi, mi, alr, aod, lwi, cpi, whr, sc, lc, cac, op, months) {
    constructor(name, rt, rr, wbr, fvf, vis, pd, permbs, permas, perk, skinbs, skinas, perskinas, prbs, declineType, qa, di, b, gpl, gpi, pi, wdi, mi, alr, aod, lwi, cpi, whr, sc, lc, cac, op, months) {
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
        this.sc = sc;
        this.lc = lc;
        this.cac = cac;
        this.op = op;
        this.months = months;

        // Define Static Properties of The Well Instance
        this.min_pias = 10;
        this.min_feas = 1;
        this.max_rfac = 0.6;
        this.min_defects = 1;

    }


    get totalRev() {
        let totalProduction = this.months.reduce(function (total, month) {
            return total + month.value;
        }, 0);
        return (totalProduction * this.op);
    }

    get totalCost() {
        return (this.sc + this.lc + this.cac);
    }

    get payBackPeriod() {
        return 'NaN';
    }

    get profitIndex() {
        return 'NaN';
    }

    get investReturn() {
        return 'NaN';
    }

    get npv() {
        return 'NaN';
    }

    get defects() {
        let defects = 0;
        // if (this.pias < this.min_pias) {
        //     defects++;
        // }
        if (this.feas < this.min_feas) {
            defects++;
        }
        if (this.rfac < this.max_rfac) {
            defects++;
        }
        return defects;
    }


    get pias() {
        let part = (0.00708 * this.permas * this.rt);
        let part2 = this.vis  * this.fvf;
        // alert(part2);
        let part3 = 10.819 + parseFloat(this.skinas);
        // alert(part3);
        let pias = part/ (part2 * part3);
        if(!isNaN(pias)) {
            return pias.toFixed(2);
        }
    }

    get pibs() {
        let pibs = (this.prbs/ this.pd).toFixed(2);
        if(!isNaN(pibs)) {
            return pibs;
        }
    }

    get pideal() {
        let pideal = ((0.00708 * this.permbs * this.rt) / (this.vis * this.fvf * Math.log((this.rr/this.wbr)))).toFixed(2);
        if(!isNaN(pideal)) {
            return pideal;
        }
    }

    get febs() {
        let febs = (this.pibs/this.pideal).toFixed(2);
        if(!isNaN(febs)) {
            return febs;
        }
    }

    get pras() {
        let pras = (0.00708 * this.permas * this.rt * this.pd/ (this.vis * this.fvf * Math.log((this.rr/this.wbr)))).toFixed(2);
        if(!isNaN(pras)) {
            return pras;
        }
    }

    get feas() {
        let feas = (this.pias/this.pideal).toFixed(2);
        if(!isNaN(feas)) {
            return feas;
        }
    }

    get pskinbs() {
        let pskinbs = ((141.2 * this.prbs * this.vis * this.fvf * this.skinbs) / (this.permbs * this.rt)).toFixed(2);
        if(!isNaN(pskinbs)) {
            return pskinbs;
        }
    }

    get pskinas() {
        let pskinas = ((141.2 * this.prbs * this.vis * this.fvf * this.skinas) / (this.permbs * this.rt)).toFixed(2);
        if(!isNaN(pskinas)) {
            return pskinas;
        }
    }

    get rfacbs() {
        let rfacbs = (this.pskinbs / this.pd).toFixed(2);
        if(!isNaN(rfacbs)) {
            return rfacbs;
        }
    }

    get rfacas() {
        let rfacas = (this.pskinas / this.pd).toFixed(2);
        if(!isNaN(rfacas)) {
            return rfacas;
        }
    }

    get febs() {
        let febs = this.pibs / this.pideal;
        if(!isNaN(febs)) {
            return febs.toFixed(2);
        }
    }
    get feas() {
        let feas = this.pias / this.pideal;
        if(!isNaN(feas)) {
            return feas.toFixed(2);
        }
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
            relProd = (this.pras - this.qa)/this.di;
        }

        if(this.declineType == 'Hyperbolic') {
            relProd = (Math.pow(this.pras, this.pras) / (((parseFloat(this.b) - 1)) * this.di)) * Math.pow(this.qa, (1-(parseFloat(this.b)))) - (this.pras * (1- (parseFloat(this.b))))
        }

        if(this.declineType == 'Harmonic') {
            relProd = (this.pras /this.di)  * Math.log(this.pras/ this.pras);
        }

        console.log(relProd);
        if(!isNaN(relProd)) {
            return relProd.toFixed(2);
        }


    }
    isQualified() {
        return this.defects <= this.min_defects;
    }

    hasDefects() {
        return this.defects > 0;
    }

}