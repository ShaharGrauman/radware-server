class Search {
    constructor(description, attack_id, severity, status, vulnerability, reference, scan) {
        this.description = description;
        this.attack_id = attack_id;
        this.severity = severity;
        this.status = status;
        this.vulnerability = vulnerability;
        this.reference = reference;
        this.scan = scan;
    }
}
module.exports = Search;