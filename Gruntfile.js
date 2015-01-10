module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch : {

          less : {
            files : ['client/app/**/*/less', 'client/assets/styles/*.less'],
            tasks : ['css']
          }
        },
        less: {
            development: {
                options: {
                    paths: ['client/assets/styles', 'client/bower_components']
                },
                files: {
                    '.tmp/app/app.css': 'client/app/app.less'
                }
            }
        },
        autoprefixer: {
            development: {

                src: '.tmp/app/app.css',
                dst: '.tmp/app/app.css'
            }
        },
        clean: {
            development: '.tmp'
        },
        concat : {
            development : {
              src : '/client/app/**/*.js',
              dst : '.tmp/app/combined-scripts.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).

    grunt.registerTask('css', ['less', 'autoprefixer']);
    grunt.registerTask('default', ['css']);

};
