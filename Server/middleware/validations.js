Joi = require('joi');

module.exports = {
    userValidation: Joi.object().keys({
        name: Joi.string().min(2).max(18).required(),
        username: Joi.string().email().min(4).max(25).required(),
        password: Joi.string().min(6).max(18).required(),
        phone: Joi.string().min(6).max(22),
        roles: Joi.array()
    }),
    roleValidation: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        permissions: Joi.array()
    }),
    
    
    signatureValidation: Joi.object().keys({
        user_id: Joi.number(),
        type: Joi.string().valid('vuln', 'vuln_ex', 'vuln_reg_ex').allow('').optional(),
        status: Joi.string().valid('in_progress', 'in_test', 'in_qa', 'published', 'deleted'),
        in_qa_internal_status_manual: Joi.string().valid('init', 'passed', 'failed'),
        in_qa_internal_status_performance: Joi.string().valid('init', 'passed', 'failed'),
        in_qa_internal_status_automation: Joi.string().valid('init', 'passed', 'failed'),
        vuln_data: Joi.allow('').optional(),
        keep_order: Joi.boolean(),
        start_break: Joi.string().min(1).max(255),
        end_break: Joi.string().min(1).max(255),
        right_index: Joi.string().min(1).max(255),
        scan_uri: Joi.boolean(),
        scan_header: Joi.boolean(),
        scan_body: Joi.boolean(),
        scan_parameters: Joi.boolean(),
        scan_file_name: Joi.boolean(),
        severity: Joi.string().valid('low', 'medium', 'high'),
        description: Joi.string().min(1).max(255),
        test_data: Joi.string().min(1).max(255),
        files: Joi.array(),
        attack: Joi.object(),
        parameters: Joi.array(),
        external_references: Joi.array(),
        vuln_data_extras: Joi.array(),
        web_servers: Joi.array()
    }),
    
    loginValidation: Joi.object().keys({
        username: Joi.string().email().min(4).max(25).required(),
        password: Joi.string().min(6).max(18).required(),
    }),
    external_referenceValidation: Joi.object().keys({
        type: Joi.string().valid('cevid', 'bugtraqid'),
        reference: Joi.string().min(4).max(2048).required()
    }),
    attackValidation: Joi.object().keys({
        name: Joi.string().min(2).max(25).required()
    }),
    fileValidation: Joi.object().keys({
        file: Joi.string().min(2).required()
    }),
    parameterValidation: Joi.object().keys({
        parameter: Joi.string().min(2).required()
    }),
    permessionValidation: Joi.object().keys({
        name: Joi.string().min(2).required()
    }),
    vuln_data_extraValidation: Joi.object().keys({
        description: Joi.string().min(2).required()
    }),
    web_serverValidation: Joi.object().keys({
        web: Joi.string().min(2).required()
    })
};
