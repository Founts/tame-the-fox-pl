module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // 2. Package configuration for files goes here.
        sass: {
            dist: {         // Target
                options: {  // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'source/css/scss-fox/main-styles.css' : 'source/css/scss-fox/main-styles.scss' 
                }
            }
        },
        autoprefixer: {
            options: {
                cascade: 'true'
            },
            dist: {
                src: 'source/css/scss-fox/main-styles.css',
                dest: 'source/css/scss-fox/main-styles.pre.css'
            }
        },
        cssmin: {
            dist: {
                src: 'source/css/scss-fox/main-styles.pre.css',
                dest: 'source/css/scss-fox/main-styles.min.css'
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: 'source/js/main.js',
                dest: 'source/js/prod.js'
            }
        },
        uglify: {
            dist: {
                src: 'source/js/prod.js',
                dest: 'source/js/prod.min.js'
            }
        },
        copy: {
            // NOTE PatternLab copies the files it needs to the public directory when generated
            dist_css: {
                files: [
                    { expand: true, cwd: "source/css/scss-fox/", src:"main-styles.css", dest:"dist/css/" },
                    { expand: true, cwd: "source/css/scss-fox/", src:"main-styles.min.css", dest:"dist/css/" },
                ]
            },
            wp_css: {
                files: [
                    { expand: true, cwd: "dist/css/", src:"main-styles.css", dest:"../fox-wp-theme/css/" },
                    { expand: true, cwd: "dist/css/", src:"main-styles.min.css", dest:"../fox-wp-theme/css/" },
                ]
            },
            dist_images: {
                files: [
                    { expand: true, cwd: 'dist/', src:"images/fox/*", dest:"public/" }
                ]
            },
            wp_images: {
                files: [
                    { expand: true, cwd: 'dist/', src:"images/*", dest:"../fox-wp-theme/" }
                ]
            },
            dist_js: {
                files: [
                    { expand: true, cwd:"source/", src:"js/fox/*", dest:"dist/" }
                ]
            },
            wp_js: {
                files: [
                    { expand: true, cwd:"dist/", src:"js/fox/*", dest:"../fox-wp-theme/js/" }
                ]
            }
            // php: {
            //     files: [
            //         { expand: true, cwd: "../../../fox-wp-theme/", src: ["*.php", "**/*.php", "!.git", "!.DS_Store"], dest: "../sites/fox.dev/wp-content/themes/podcaster-child/" }
            //     ]
            // }
        },
        shell: {
            patternlab: {
                command: "php core/builder.php -g"
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'source/images/fox',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/images'
                }]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.',
                    livereload: true,
                    // keepalive: true
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: ['source/_patterns/**/*.mustache', 'source/_patterns/**/*.json', 'source/_data/*.json'],
                tasks: ['shell:patternlab'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['source/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'cssmin', 'copy:dist_css', 'copy:wp_css', 'copy:wp_images', 'shell:patternlab']
            },
            js: {
                files: ['source/js/*.js'],
                tasks: ['concat', 'uglify', 'shell:patternlab', 'copy:dist_js', 'copy:wp_js']
            },
            // php: {
            //     files: ['/Users/jasonfounts/repos/fox-wp-theme/**/*.php'],
            //     tasks: ['copy:php']
            // },
            images: {
                files: ['source/images/**'],
                tasks: ['imagemin', 'copy:dist_images', 'copy:wp_images']
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'autoprefixer', 'copy', 'shell:patternlab']);
    grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('dist', ['connect', 'watch']);
    grunt.registerTask('images', ['imagemin']);
};