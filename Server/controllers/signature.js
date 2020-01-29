const { signatures, attack, file, param, externalReferences, vulnDataExtra, webServer, users, signatureStatusHistory } = require('../models');


// const searchSignature = async (search) => {
//     try {
//         const signatureData = await signatures.findAll({
//             where:  search 

//         }
//         );
//         return signatureData;
//     } catch (error) {
//         throw new Error(`Cant get signatures: ${error.message}`);
//     }
// }


const findAll = async () => {
    try {
        const signatureData = await signatures.findAll();
        return signatureData;
    } catch (error) {
        throw new Error(`Cant get signatures: ${error.message}`);
    }
}

const create = async (signatureData) => {
    console.log(signatureData);
    try {
        const signatureDataCreate = await signatures.create({
            id: signatureData.id,
            pattern_id: signatureData.pattern_id,
            type: signatureData.type,
            creation_time: signatureData.creation_time,
            creation_date: signatureData.creation_date,
            status: signatureData.status,
            in_qa_internal_status_manual: signatureData.in_qa_internal_status_manual,
            in_qa_internal_status_performance: signatureData.in_qa_internal_status_performance,
            in_qa_internal_status_automation: signatureData.in_qa_internal_status_automation,
            vuln_data: signatureData.vuln_data,
            keep_order: signatureData.keep_order,
            start_break: signatureData.start_break,
            end_break: signatureData.end_break,
            right_index: signatureData.right_index,
            scan_uri: signatureData.scan_uri,
            scan_header: signatureData.scan_header,
            scan_body: signatureData.scan_body,
            scan_parameters: signatureData.scan_parameters,
            scan_file_name: signatureData.scan_file_name,
            severity: signatureData.severity,
            description: signatureData.description,
            test_data: signatureData.test_data,
            attack_id: signatureData.attackId,
            user_id: signatureData.userId,
        });
        //// feach file data 
        signatureData.files.map(FileData => {
            file.create({
                id: FileData.id,
                signatureId: signatureData.id,
                file: FileData.file
            });

        })
        /// attack data 
        attack.create({
            id: signatureData.attack.id,
            name: signatureData.attack.name
        });
        ///feach external reference data
        signatureData.external_references.map(externalRef => {
            externalReferences.create({
                id: externalRef.id,
                type: externalRef.type,
                reference: externalRef.reference,
                signatureId: signatureData.id
            });
            ///feach web server data
            signatureData.web_servers.map(webServ => {
                webServer.create({
                    id: webServ.id,
                    web: webServ.web,
                    signatureId: signatureData.id
                });
            });
            ///feach vuln_data_extras data 
            signatureData.vuln_data_extras.map(vlunData => {
                vulnDataExtra.create({
                    id: vlunData.id,
                    signatureId: signatureData.id,
                    parameter: vlunData.description
                });
            });
            /// feach parameters data 
            signatureData.parameters.map(params => {
                param.create({
                    id: params.id,
                    parameter: params.parameter,
                    signatureId: signatureData.id,
                });
            });


        })

        return signatureDataCreate;
    } catch (error) {
        throw new Error(`Cant create signatures: ${error.message}`);
    }
}

const searchSignature = async (search) => {
    console.log(search)
    try {
        const signatureData = await signatures.findAll({
            where: {...search},
            include: [{ model: file },
            ]
        }
        );
        return signatureData;
    } catch (error) {
        throw new Error(`Cant get signatures: ${error.message}`);
    }
}

const findById = async (id) => {
    console.log('ss')
    console.log(search)
    try {
        const signatureData = await signatures.findAll({
            where: { id: id },
            include: [{ model: file },
            { model: attack },
            { model: param },
            { model: externalReferences },
            { model: vulnDataExtra },
            { model: webServer },
            { model: signatureStatusHistory }
            ]
            // include: [{ all: true }]
        });
        return signatureData;
    } catch (error) {
        throw new Error(`Cant get signatures: ${error.message}`);
    }
}

const update = async (DataToUpdate, id) => {
    try {
        const updatedSignature = signatures.update({
            type: DataToUpdate.type,
            status: DataToUpdate.status,
            in_qa_internal_status_manual: DataToUpdate.in_qa_internal_status_manual,
            in_qa_internal_status_performance: DataToUpdate.in_qa_internal_status_performance,
            in_qa_internal_status_automation: DataToUpdate.in_qa_internal_status_automation,
            vuln_data: DataToUpdate.vuln_data,
            keep_order: DataToUpdate.keep_order,
            start_break: DataToUpdate.start_break,
            end_break: DataToUpdate.end_break,
            right_index: DataToUpdate.right_index,
            scan_uri: DataToUpdate.scan_uri,
            scan_header: DataToUpdate.scan_header,
            scan_body: DataToUpdate.scan_body,
            scan_parameters: DataToUpdate.scan_parameters,
            scan_file_name: DataToUpdate.scan_file_name,
            severity: DataToUpdate.severity,
            description: DataToUpdate.description,
            test_data: DataToUpdate.test_data,
            attack_id: DataToUpdate.attackId,
        }, { returning: true, where: { id: id } })

        console.log('updatedSignature');
        console.log(updatedSignature);
        return updatedSignature;
    } catch (error) {
        throw new Error(`Cant update signatures: ${error.message}`);
    }
}

const Delete = async id => {
    try {
        const result = signatures.destroy({
            where: { id: id }
        })
        return result;
    } catch (error) {
        throw new Error(`Cant get signatures: ${error.message}`);
    }
}


module.exports = {
    findAll,
    findById,
    create,
    update,
    Delete,
    searchSignature
};