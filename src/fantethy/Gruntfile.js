/**
 * Created by UK948142 on 12/01/2015.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat:  {
            options: {
                seperator: ';'
            },
            dist: {
                src: ['app/javascripts/**/*.js'],
                dest: 'app/dist/fantethy.js'
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'app/javascripts/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'app/dist/fantethy.min.js': ['app/dist/fantethy.js']
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["app/stylesheets"],
                    yuicompress: true
                },
                files: {
                    "app/stylesheets/app.css": "app/stylesheets/app.less"
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['app/**/*.js','tests/server/**/*.js', 'lib/**/*.js']
            }
        },
        watch: {
            files: ['<%= jshint.files %>','tests/**/*Spec.js','lib/**/*.js','app/stylesheets/*.less'],
            tasks: ['jshint','concat' ,'less', 'uglify']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-go');

    grunt.registerTask('default', ['jshint','concat' ,'less', 'uglify','copy']);
//    grunt.registerTask('test', ['jshint', 'concat','mochaTest']);
};