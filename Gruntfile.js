module.exports = function (grunt) {

    grunt.initConfig({
        email_templates: {
            default_options: {
                files: {
                    'target/templates/welcome': 'src/templates/welcome'
                }
            }

        }
    });

    grunt.loadNpmTasks('grunt-email-templates');


    grunt.registerTask('default', [
        'email_templates'
    ]);
}
