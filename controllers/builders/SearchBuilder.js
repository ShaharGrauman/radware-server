const { externalReferences, attack, vulnDataExtra } = require('../../models');
const sequelize = require('sequelize')
const Op = sequelize.Op

class SearchBuilder {
    constructor() {
        this.include = [];
        this.where = {};
    }
    build() {
        return {
            where: this.where,
            include: this.include
        };
    }
    setReference(reference) {
        this.include.push({
            model: externalReferences,
            where: {
                reference
            },
            attributes: ['reference']
        });
    }
    setScanUri(scan_uri) {
        Object.assign(this.where, { scan_uri });

    }
    setScanHeader(scan_header) {
        Object.assign(this.where, { scan_header });

    }
    setScanBody(scan_body) {
        Object.assign(this.where, { scan_body });

    }
    setScanParameters(scan_parameters) {
        Object.assign(this.where, { scan_parameters });

    }
    setScanFile(scan_file_name) {
        Object.assign(this.where, { scan_file_name });
    }
    setDescription(description) {
        Object.assign(this.where, { description: { [Op.like]: `%${description}%` } });

    }
    setAttackId(attack_id) {
        Object.assign(this.where, { attack_id });


    }
    setSeverity(severity) {
        Object.assign(this.where, { severity });

    }
    setStatus(status) {
        console.log(Object.assign(this.where, { status }));

    }
    setVulnerability(description) {
        this.include.push({
            model: vulnDataExtra,
            where: {
                description
            },
            attributes: ['description']
        });
    }

}
module.exports = SearchBuilder;