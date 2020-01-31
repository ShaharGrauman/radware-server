const Search = require('./Search');
class SearchBuilder {
    constructor() {

    }
    build() {
        return new Search(this);
    }
    setReference(reference) {
        this.reference = reference;
        return this;
    }
    setScan(scan) {
        this.scan = scan;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setAtack_id(attack_id) {
        this.attack_id = attack_id;
        return this;
    }
    setSeverity(severity) {
        this.severity = severity;
        return this;
    }
    setStatus(status) {
        this.status = status;
        return this;
    }
    setVulnerability(vulnerability) {
        this.vulnerability = vulnerability;
        return this;
    }

}
module.exports = SearchBuilder;