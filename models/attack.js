module.exports = (db, type) => {
    return db.define('attacks', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.ENUM('URL Access Violation', 'LDAP Injection',
                'Cross Site Scripting', 'Brute Force','SSI Injection',
                 'Path Traversal', 'Hot Link','Folder Access Violation', 
                'Security Misconfiguration', 'Invalid Client Certificate Attributes',
                'Server Information Leakage', 'HTTP Request Header Size Violation',
                'Revoked Client Certificate Request', 'Access from Unauthorized source IP',
                'HTTP Method Violation', 'Credit Card Number Leakage',
                'Social Security Number Leakage', 'Other Pattern Leakage',
                'Cookie Poisoning', 'Session Fixation', 'Server Misconfiguration',
                'File Upload Violation', 'Evasion', 'Web Services Abuse', 'Non-Valid XML Structure',
                'Null Byte Injection', 'Remote File Inclusion', 'XPath Injection',
                'High Resource Utilization', 'Buffer Overflow', 'Abuse of Functionality', 'Application Misconfiguration',
                'Mail Command Injection', 'Fingerprinting',
                'Input Validation Violation', 'Application Information Leakage',
                'Web Worms', 'Directory Indexing', 'Predictable Resource Location',
                'Unauthorized Access Attempt', 'Session Flow Violation', 'Cross Site Request Forgery','Unauthorized access attempt',
                'Wrong Username Password Authentication','Authentication Event','Israeli ID Leakage)')
        }
    },
        { timestamps: false, underscored: true })
} 
