const { signatures, historyUsersActions, attack, file, param, externalReferences, vulnDataExtra, webServer, users, signatureStatusHistory } = require('../models');
const sequelize = require('../config/database');
require('./sendEmail');
const { signatureCreation, signatureUpdate } = require('../middleware/validations');


const Op = require('Sequelize').Op;


const findAll = async () => {

    

    try {
        const signatureData = await signatures.findAll();
        sendMail('<h1>find all success </h1>');
        return signatureData;
    } catch (error) {
        throw new Error(`Cant get signatures: ${error.message}`);
    }
}

const loadSignaturesToExport = async (query) => {
    try{
        let signatureData, lastExportedSignatureDateByStatus, firstStatus, secStatus, checkDateOf;
        if(query.exportTo === 'Git'){
            firstStatus='published';
            secStatus='published';
            checkDateOf='export_for_git';
        }
        if (query.exportTo === 'Testing') {
            firstStatus = 'published';
            secStatus = 'in_test';
            checkDateOf='export_for_testing';
        }
        if (query.exportTo === 'QA') {
            firstStatus = 'published';
            secStatus = 'in_qa';
            checkDateOf='export_for_qa';

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
        let date=lastExportedSignatureDateByStatus[0].date;

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
            if(  secStatus === 'in_qa'){
                secStatus = 'In QA';
            }
            if(secStatus === 'in_test'){
                secStatus = 'In Test';
            }
            let hasNext = true, hasPrev = false;
            if(signatureData.length%(query.size*query.page) != 0){
              hasNext = false;
            }
            if(query.page != 1){
                hasPrev = true;
            }
            let status = [firstStatus]+", "+[secStatus];
            if(firstStatus === secStatus)
            {
                secStatus = undefined;
                status = [firstStatus];
            }

            signatureData.map((signature) => {
                if(signature.test_data==("" || null)){
                    signature.test_data = false;
                }else{
                    signature.test_data = true;
                }
            });
            return {
                signatureData,
                date,
                hasNext,
                hasPrev,
                status
            };
    }catch(error){
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

    const result = await Joi.validate(signatureData, signatureCreation);
    console.log(result);
    if (!result) {
        return result;
    }

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
            where: { ...search },

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
    const result = await Joi.validate(DataToUpdate, signatureUpdate);
    console.log(result);
    if (!result) {
        return result;
    }

    console.log(DataToUpdate);
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


        DataToUpdate.web_servers.map(webServ =>
            webServer.update({
                web: webServ.web,
            }, { where: { signatureId: webServ.signatureId } })
        );


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
    searchSignature,
    loadSignatures,
    loadSignaturesToExport
};