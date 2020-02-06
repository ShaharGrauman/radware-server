Joi = require('joi');

module.exports = {
    userCreation: Joi.object().keys({
        username: Joi.string().email().required().min(4).max(25),
        password: Joi.required().min(6).max(18),
        phone: Joi.number().required().min(6).max(12),
        status: Joi.string().valid('active', 'deleted')
    }),
    signatureCreation: Joi.object().keys({
        user_id: Joi.required(),
        attack_id: number().required().min(1).max(12),
        pattern_id: Joi.required(),
        type: Joi.string().valid('vuln', 'vuln_ex', 'vuln_reg_ex'),
        creation_time: Joi.required(),
        creation_date: Joi.required(),
        status: Joi.string().valid('in_progress', 'in_test', 'in_qa', 'published', 'deleted'),
        in_qa_internal_status_manual: Joi.string().valid('init', 'passed', 'failed'),
        in_qa_internal_status_performance: Joi.string().valid('init', 'passed', 'failed'),
        in_qa_internal_status_automation: Joi.string().valid('init', 'passed', 'failed'),
        vuln_data: Joi.allow('').optional().min(1).max(255),
        keep_order: Joi.boolean(),
        start_break: Joi.string().min(1).max(255),
        end_break: Joi.string().min(1).max(255),
        right_index: Joi.number().min(1).max(255),
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
        parameters: Joi.array()
        , external_references: Joi.array()
        , vuln_data_extras: Joi.array()
        , web_servers: Joi.array()

    }),
    signatureUpdate: Joi.object().keys({
        attack_id: Joi.required(),
        type: Joi.string().valid('vuln', 'vuln_ex', 'vuln_reg_ex'),
        status: Joi.string().valid('in_progress', 'in_test', 'in_qa', 'published', 'deleted'),
        in_qa_internal_status_manual: Joi.string().valid('init', 'passed', 'failed'),
        in_qa_internal_status_performance: Joi.string().valid('init', 'passed', 'failed'),
        in_qa_internal_status_automation: Joi.string().valid('init', 'passed', 'failed'),
        vuln_data: Joi.allow('').optional(),
        keep_order: Joi.boolean(),
        start_break: Joi.string(),
        end_break: Joi.string(),
        right_index: Joi.number(),
        scan_uri: Joi.boolean(),
        scan_header: Joi.boolean(),
        scan_body: Joi.boolean(),
        scan_parameters: Joi.boolean(),
        scan_file_name: Joi.boolean(),
        severity: Joi.string().valid('low', 'medium', 'high'),
        description: Joi.string(),
        test_data: Joi.string(),
        attack_id: Joi.number()
    }),
    loginAttempt: Joi.object().keys({
        username: Joi.string().email().required().min(4).max(25),
        password: Joi.required().min(6).max(18),
    })

};
