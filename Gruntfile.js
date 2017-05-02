module.exports = function(grunt) {
    grunt.initConfig({
        express: {
            options: {
                // Override defaults here
                // Override the command used to start the server.
                // (do not use 'coffee' here, the server will not be able to restart
                //  see below at opts for coffee-script support)
                cmd: process.argv[0],

                // Will turn into: `node OPT1 OPT2 ... OPTN path/to/server.js ARG1 ARG2 ... ARGN`
                // (e.g. opts: ['node_modules/coffee-script/bin/coffee'] will correctly parse coffee-script)
                opts: [],
                args: [],

                // Setting to `false` will effectively just run `node path/to/server.js`
                background: true,

                // Called when the spawned server throws errors
                fallback: function() {},

                // Override node env's PORT
                port: 3004,

                // Override node env's NODE_ENV
                node_env: undefined,

                // Enable Node's --harmony flag
                harmony: false,

                // Consider the server to be "running" after an explicit delay (in milliseconds)
                // (e.g. when server has no initial output)
                delay: 0,

                // Regular expression that matches server output to indicate it is "running"
                output: ".+",

                // Set --debug (true | false | integer from 1024 to 65535, has precedence over breakOnFirstLine)
                debug: false,

                // Set --debug-brk (true | false | integer from 1024 to 65535)
                breakOnFirstLine: false,

                // Object with properties `out` and `err` both will take a path to a log file and
                // append the output of the server. Make sure the folders exist.
                logs: undefined


            },
            dev: {
                options: {
                    script: 'node_modules/webserver/webserver.js'
                }
            }
        },

        karma: {
            options: {
                configFile: 'test/karma-conf.js'
            },
            unit: {
                singleRun: true
            },
            continuous: {
                background: true
            }
        },

        protractor: {
            options: {
                configFile: "test/protractor-conf.js", // Default config file
                // keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                // debug: true,
                args: {

                }
            },
            e2e: {
                options: {
                    keepAlive: false
                }
            },
            continuous: {
                options: {
                    keepAlive: true
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            protractor: {
                files: ['test/e2e/specs/*.js'], //'app/js/**/*.js', 
                tasks: ['protractor:continuous']
            },
            express: {
                files: ['app/*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
                }
            }
        },

        run: {
            mock_server: {
                options: {
                    wait: false
                },
                args: ['node_modules/webserver/webserver.js']
            }
        },

        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    livereload: 35729,
                    open: true,
                    base: ['app']

                }
            },
            test: {
                options: {
                    base: ['app']
                }
            }
        },
        concat: {
            options: {
                // separator: ';',
            },
            dist: {
                src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
                dest: 'dist/built.js',
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-express-server');


    grunt.registerTask('e2e', ['express:dev', 'connect:test', 'protractor:continuous', 'watch:protractor', 'connect:livereload']);


};
