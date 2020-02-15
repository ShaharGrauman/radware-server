
module.exports = (db, type) => {
    return db.define('signatures', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: type.INTEGER
        },
        attack_id: {
            type: type.INTEGER
        },
        pattern_id: {
            type: type.INTEGER,
        },
        type: {
            type: type.ENUM('vuln', 'vuln_ex', 'vuln_reg_ex')
        },
        creation_time: {
            type: type.DATE
        },
        creation_date: {
            type: type.TIME
        },
        status: {
            type: type.ENUM('in_progress', 'in_test', 'in_qa', 'published', 'deleted')
        },
        in_qa_internal_status_manual: {
            type: type.ENUM('init', 'passed', 'failed')
        },
        in_qa_internal_status_performance: {
            type: type.ENUM('init', 'passed', 'failed')
        },
        in_qa_internal_status_automation: {
            type: type.ENUM('init', 'passed', 'failed')
        },
        vuln_data: {
            type: type.TEXT
        },
        keep_order: {
            type: type.BOOLEAN
        },
        start_break: {
            type: type.STRING
        },
        end_break: {
            type: type.STRING
        },
        right_index: {
            type: type.INTEGER
        },
        left_index:{
            type: type.INTEGER
        },
        scan_uri: {
            type: type.BOOLEAN
        },
        scan_header: {
            type: type.BOOLEAN
        },
        scan_body: {
            type: type.BOOLEAN
        },
        scan_parameters: {
            type: type.BOOLEAN
        },
        scan_file_name: {
            type: type.BOOLEAN
        },
        severity: {
            type: type.ENUM('low', 'medium', 'high')
        },
        description: {
            type: type.TEXT
        },
        test_data: {
            type: type.TEXT
        },
        limit:{
            type:type.ENUM('user_agent','referer','range','cookie','origin','last_modified','keep_alive','content_disposition','content_encoding','content_language','content_length','content_location','content_type')
        }

    }, { timestamps: false, underscored: true })
} 