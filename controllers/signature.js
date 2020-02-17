const { signatures, historyUsersActions, attack, file, param, externalReferences, vulnDataExtra, webServer, users, signatureStatusHistory } = require('../models');
const sequelize = require('../config/database');
require('./sendEmail');
require('./XML/exportXML');
require('./XML/importXml');

const { signatureValidation, external_referenceValidation, fileValidation, web_serverValidation
    , attackValidation, permessionValidation, parameterValidation, vuln_data_extraValidation } = require('../middleware/validations');


const { signatureCreation, signatureUpdate } = require('../middleware/validations');
const Op = require('Sequelize').Op;

// const findStatus = async() =>{
//     sequelize.define('model', {
//         status: {
//           type:   Sequelize.ENUM,
//           values: ['in progress','in test','in QA','published','suspended','deleted']
//         }
//       })
// }


// const sigByAttack = async () => {
//     try {
//         const signaturesByAttack = await signatures.findAll({
            
//             include:[{model:attack, attributes:['name']}],
//             group: ['attack_id'],
//             attributes: ['attack_id', [sequelize.fn('COUNT', 'attack_id'), 'SigCount']],
//         }) 
//         console.log(signaturesByAttack);
//         return signaturesByAttack;
//     } catch (error) {
//         throw new Error(`Cant get signatures: ${error.message}`);
//     }
// }
const sigBySeverity = async () => {
    try {
        const signaturesBySeverity = await signatures.findAll({
            include:[{model:attack, attributes:['name']}],
            group: ['attack_id','severity'],
            attributes: ['severity', [sequelize.fn('COUNT', 'severity'), 'attackSev']],
        }) 
        console.log(signaturesBySeverity);
        return signaturesBySeverity;
    } catch (error) {
        throw new Error(`Cant get signatures: ${error.message}`);
    }
} 

const sigByReference = async (query) => {
    
    try{
        let result = [], serialArray = [], signaturesCveid = [], count 
    if(query.serial){

        const referenceArray = await sequelize.query(`select SignatureId from external_references where type = "cveid" and reference like "%${query.year}-${query.serial}%"`, { type: sequelize.QueryTypes.SELECT })

        for(i = 0 ; i < referenceArray.length ; i++){

        const signaturesByCveId = await signatures.findOne({
            attributes:['id',
                        ['pattern_id', 'patternId'],
                        'description',
                        'status'],
            where:{id:referenceArray[i].SignatureId}
        })

        signaturesCveid.push(signaturesByCveId)
    }
        return signaturesCveid

    }

    else{

    const referencesArray = await sequelize.query(`select reference from external_references where type = "cveid" and reference like "%${query.year}-%"`, { type: sequelize.QueryTypes.SELECT })
        
    for( i = 0; i < referencesArray.length ; i++){
        count = 0
       serialNumber =  referencesArray[i].reference.slice(referencesArray[i].reference.length - 4)
            if(!serialExist(serialArray, serialNumber)){
                serialArray.push(serialNumber)
        for(j = i ; j < referencesArray.length ; j++){
            if(serialNumber === referencesArray[j].reference.slice(referencesArray[j].reference.length - 4))
                count++
        }

        var temp = {cveid:`${query.year}-${serialNumber}`, quantity:count}
        result.push(temp)
    }
    }

    return result
    }


    }catch(error){
        throw new Error(`${error.message}`)
    }
}

const serialExist = (arr, serial) => {
    for(let i of arr){
        if (i == serial)
            return true
    }
    return false
}


const copySignature = async(id) => {

    try{
    signatures.addHook('afterCreate', (copiedSignature, options) => {

        signatures.update({
            pattern_id: copiedSignature.id
        }, { where: { id: copiedSignature.id } })
    })

    const currentSignature = await signatures.findOne({where:{id:id}})

    const copiedSignature = await signatures.create({
        attack_id: currentSignature.attack_id,
        type: currentSignature.type,
        creation_time: currentSignature.creation_time,
        creation_date: currentSignature.creation_date,
        status: currentSignature.status,
        in_qa_internal_status_manual: currentSignature.in_qa_internal_status_manual,
        in_qa_internal_status_performance: currentSignature.in_qa_internal_status_performance,
        in_qa_internal_status_automation: currentSignature.in_qa_internal_status_automation,
        vuln_data: currentSignature.vuln_data,
        keep_order: currentSignature.keep_order,
        start_break: currentSignature.start_break,
        end_break: currentSignature.end_break,
        right_index: currentSignature.right_index,
        left_index: currentSignature.left_index,
        scan_uri: currentSignature.scan_uri,
        scan_header: currentSignature.scan_header,
        scan_body: currentSignature.scan_body,
        scan_parameters: currentSignature.scan_parameters,
        scan_file_name: currentSignature.scan_file_name,
        severity: currentSignature.severity,
        description: currentSignature.description,
        test_data: currentSignature.test_data,
        attack_id: currentSignature.attackId,
        user_id: currentSignature.userId,
        limit: currentSignature.limit
    })
    return copiedSignature
    }catch(error){
        throw new Error(`Can't copy signature ${error.message}`)
    }
}

const findAll = async () => {
    try {
        const signatureData = await signatures.findAll();
        sendMail('<h1>find all success </h1>');
        return signatureData;
    } catch (error) {
        throw new Error(`Cant get signatures: ${error.message}`);
    }
}

const importFile = async () => {
    try {
        const result = await routeByType();
        return 'imported';
    } catch (error) {
        throw new Error(`cant get signatures: ${error.message}`)
    }
}

const exportFile = async id => {
    try {
        const signatureData = await signatures.findAll({
            where: {
                id
            },
            include: [
                { model: attack },
                { model: param },
                { model: externalReferences },
                { model: vulnDataExtra },
                { model: webServer },
                { model: param }
            ]
        });
        routeByType(signatureData);
    } catch (error) {
        throw new Error(`cant get signatures: ${error.message}`)
    }
}

const exportAllFile = async (query) => {

    let firstStatus, secStatus;

    if (query === 'Git') {
        firstStatus = 'published';
        secStatus = 'published';
    }
    if (query === 'Testing') {
        firstStatus = 'published';
        secStatus = 'in_test';
    }
    if (query === 'QA') {
        firstStatus = 'published';
        secStatus = 'in_qa';
    }

    try {
        const signatureData = await signatures.findAll({
            where: {
                status: {
                    [Op.or]: [firstStatus, secStatus]
                }
            },
            include: [
                { model: attack },
                { model: param },
                { model: externalReferences },
                { model: vulnDataExtra },
                { model: webServer }
            ]
        });
        console.log(signatureData)
        routeByType(signatureData);
    } catch (error) {
        throw new Error(`cant get signatures: ${error.message}`)
    }
}



const loadSignaturesToExport = async (query) => {
    try {
        let signatureData, lastExportedSignatureDateByStatus, firstStatus, secStatus, checkDateOf, signatureDataToXML;

        if (query.exportTo === 'Git') {
            firstStatus = 'published';
            secStatus = 'published';
            checkDateOf = 'export_for_git';
        }
        if (query.exportTo === 'Testing') {
            firstStatus = 'published';
            secStatus = 'in_test';
            checkDateOf = 'export_for_testing';
        }
        if (query.exportTo === 'QA') {
            firstStatus = 'published';
            secStatus = 'in_qa';
            checkDateOf = 'export_for_qa';

        }
        lastExportedSignatureDateByStatus = await historyUsersActions.findAll({
            attributes: ['date'],
            where: {
                action_name: checkDateOf
            },
            order:
                [
                    ['date', 'desc']
                ],
            limit: 1,
        });
        let date = lastExportedSignatureDateByStatus[0].date;

        signatureData = await signatures.findAll({
            attributes: ['id', 'pattern_id', 'description', 'test_data'],
            where: {
                status: {
                    [Op.or]: [firstStatus, secStatus]
                }
            },
            order:
                [
                    [query.sortBy, query.orderBy]
                ],
            offset: (parseInt(query.page) - 1) * parseInt(query.size),
            limit: parseInt(query.size),
        });


        let hasNext = true, hasPrev = false;
        if (signatureData.length % (query.size * query.page) != 0) {
            hasNext = false;
        }
        if (query.page != 1) {
            hasPrev = true;
        }


        signatureData.map((signature) => {
            if (signature.test_data == ("" || null)) {
                signature.test_data = false;
            } else {
                signature.test_data = true;
            }
        });
        if (secStatus === 'in_qa') {
            secStatus = 'In QA';
        }
        if (secStatus === 'in_test') {
            secStatus = 'In Test';
        }
        let status = [firstStatus] + ", " + [secStatus];
        if (firstStatus === secStatus) {
            secStatus = undefined;
            status = [firstStatus];
        }
        return {
            signatureData,
            date,
            hasNext,
            hasPrev,
            status
        };
    } catch (error) {
        throw new Error(`Cant get signatures: ${error.message}`);
    }
}
const sigByAttack = async () => {
    try {
        const signaturesByAttack = await signatures.findAll({
            
            include:[{model:attack, attributes:['name']}],
            group: ['attack_id'],
            attributes: ['attack_id', [sequelize.fn('COUNT', 'attack_id'), 'SigCount']],
        }) 
        console.log(signaturesByAttack);
        return signaturesByAttack;
    } catch (error) {
        throw new Error(`Cant get signatures: ${error.message}`);
    }
}

const sigPerSeverity = async () => {
    try {
        const sigPerSeverity = await signatures.findAll({
            group: ['severity'],
            attributes: ['severity', [sequelize.fn('COUNT', 'severity'), 'SigSevCount']],
        }) 
        console.log(sigPerSeverity);
        return sigPerSeverity;
    } catch (error) {
        throw new Error(`Cant get signatures: ${error.message}`);
    }
}

const loadSignatures = async (query) => {
    try {
        let signatureData, signaturesCountByStatus;
        if (query.status === 'all') {

            signatureData = await signatures.findAll({
                attributes: ['id', 'pattern_id', 'description'],
                order:
                    [
                        [query.sortBy, query.orderBy]
                    ],

                offset: (parseInt(query.page) - 1) * parseInt(query.size),
                limit: parseInt(query.size),
            });
        } else {

            signatureData = await signatures.findAll({
                attributes: ['id', 'pattern_id', 'description'],
                where: {
                    status: query.status
                },
                order:
                    [
                        [query.sortBy, query.orderBy]
                    ],

                offset: (parseInt(query.page) - 1) * parseInt(query.size),

                limit: parseInt(query.size),
            });

        }
        signaturesCountByStatus = await signatures.findAll({
            group: ['status'],
            attributes: ['status', [sequelize.fn('COUNT', 'status'), 'Count']],
        });
        let hasNext = true, hasPrev = false;
        if (signatureData.length % (query.size * query.page) != 0) {
            hasNext = false;
        }
        if (query.page != 1) {
            hasPrev = true;
        }

        return {
            signatureData,
            signaturesCountByStatus,
            hasNext,
            hasPrev,

        };
    } catch (error) {

        throw new Error(`Cant get signatures: ${error.message}`);
    }
}


const create = async (signatureData) => {
    // let result = await Joi.validate(signatureData, signatureValidation);
    // if (!result) {
    //     return result;
    // }
    
    

    signatures.addHook('afterCreate', (signatureDataCreate, options) => {

        signatures.update({
            pattern_id: signatureDataCreate.id
        }, { where: { id: signatureDataCreate.id } })
    });
    try {
        const signatureDataCreate = await signatures.create({
            // id: signatureData.id,
            pattern_id: signatureData.pattern_id,
            attack_id: signatureData.attack_id,
            type: signatureData.type,
            creation_time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric" }),
            creation_date: new Date(),
            status: signatureData.status,
            in_qa_internal_status_manual: signatureData.in_qa_internal_status_manual,
            in_qa_internal_status_performance: signatureData.in_qa_internal_status_performance,
            in_qa_internal_status_automation: signatureData.in_qa_internal_status_automation,
            vuln_data: signatureData.vuln_data,
            keep_order: signatureData.keep_order,
            start_break: signatureData.start_break,
            end_break: signatureData.end_break,
            right_index: signatureData.right_index,
            left_index: signatureData.left_index,
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
            limit: signatureData.limit
        });
        //// feach file data 
        signatureData.files.map(FileData => {

            file.create({
                // id: FileData.id,
                signatureId: signatureDataCreate.id,
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
                // id: externalRef.id,
                type: externalRef.type,
                reference: externalRef.reference,
                signatureId: signatureDataCreate.id
            });
        })
        ///feach web server data
        signatureData.web_servers.map(webServ => {
            console.log(webServ.webserver)
            webServer.create({
                // id: webServ.id,

                web: webServ.webserver,
                signatureId: signatureDataCreate.id
            });
        })

        ///feach vuln_data_extras data 
        signatureData.vuln_data_extras.map(vlunData => {
            vulnDataExtra.create({
                // id: vlunData.id,
                signatureId: signatureDataCreate.id,
                description: vlunData.description
            });
        });
        /// feach parameters data 
        signatureData.parameters.map(params => {
            param.create({
                // id: params.id,
                parameter: params.parameter,
                signatureId: signatureDataCreate.id,
            });
        });

        historyUsersActions.create({
            userId: '1', action_name: "add",
            time: new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: "numeric",
                minute: "numeric"
            }), date: new Date()
        });

        


        return signatureDataCreate;
    } catch (error) {
        throw new Error(`Cant create signatures: ${error.message}`);
    }

}

const searchSignature = async (search) => {
    console.log(search)
    try {
        const signatureData = await signatures.findAll(search);
        return signatureData;
    } catch (error) {
        throw new Error(`Cant get signatures: ${error.message}`);
    }
}

const findById = async (id) => {
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
        historyUsersActions.create({
            userId: '1', action_name: "search",
            description: "search signature " + id,
            time: new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: "numeric",
                minute: "numeric"
            }), date: new Date()
        });
        return signatureData;
    } catch (error) {
        throw new Error(`Cant get signatures: ${error.message}`);
    }
}

const update = async (DataToUpdate, id) => {
    // let result = await Joi.validate(signatureData, signatureValidation);
    // if (!result) {
    //     return result;
    // }
    
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
        }, { returning: true, where: { id: id } });

        DataToUpdate.web_servers.map(() =>
            webServer.destroy(
                { where: { signatureId: id } })
        );

        DataToUpdate.web_servers.map(webServ =>
            webServer.create({
                signatureId: id,
                web: webServ.webserver
            })
        );

        DataToUpdate.vuln_data_extras.map(() =>
            vulnDataExtra.destroy(
                { where: { signatureId: id } })
        );

        DataToUpdate.vuln_data_extras.map((vuln) =>
            vulnDataExtra.create({
                signatureId: id, description: vuln.description
            })
        );
        DataToUpdate.parameters.map(() =>
            param.destroy(
                { where: { signatureId: id } })
        );

        DataToUpdate.parameters.map(paramNode =>
            param.create({
                signatureId: id, parameter: paramNode.parameter
            })
        );

        DataToUpdate.files.map(() =>
            file.destroy(
                { where: { signatureId: id } })
        );

        DataToUpdate.files.map(fileNode =>
            file.create({
                signatureId: id, file: fileNode.file
            })
        );

        DataToUpdate.external_references.map(() =>
            externalReferences.destroy(
                { where: { signatureId: id } })
        );

        DataToUpdate.external_references.map(ref =>
            externalReferences.create({
                signatureId: id, reference: ref.reference, type: ref.type
            })
        );


        historyUsersActions.create({
            userId: '1', action_name: "edit",
            description: "edit signature " + id,
            time: new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: "numeric",
                minute: "numeric"
            }), date: new Date()
        });

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
        historyUsersActions.create({
            userId: '1', action_name: "delete",
            description: "delete signature " + id,
            time: new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: "numeric",
                minute: "numeric"
            }), date: new Date()
        });
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
    searchSignature,
    loadSignatures,
    loadSignaturesToExport,
    exportFile,
    exportAllFile,
    sigByAttack,
    sigPerSeverity,
    importFile,
    sigBySeverity,
    //findStatus
    exportAllFile,
    sigByReference,
    copySignature
};