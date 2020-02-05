const Qa = require('./QaUpdateStatus');
class QABuilder {
    constructor() {

    }
    build() {
        return new Qa(this);
    }
    setManual(manual) {
        this.manual = manual;
        return this;
    }
    setPerformance(performance) {
        this.performance = performance;
        return this;
    }
    setAutomation(automation) {
        this.automation = automation;
        return this;
    }

}
module.exports = QABuilder;