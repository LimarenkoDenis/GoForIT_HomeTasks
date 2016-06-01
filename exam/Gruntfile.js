// 'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.initConfig({

        clean: {
            build: [
                'build/css',
                'build/img',
                'build/js',
                'build/font'
            ]
        },

        includereplace: {
            htm: {
                src: '*.html',
                dest: 'build/',
                expand: true,
                cwd: 'src/'
            }
        },

        copy: {
            img: {
                expand: true,
                cwd: 'src/img/',
                src: ['**/*.{png,jpg,gif,svg}'],
                dest: 'build/img/'
            },
            fonts: {
                expand: true,
                cwd: 'src/font/',
                src: ['*.{eot,svg,woff,ttf}'],
                dest: 'build/font/'
            }
        },

        sass: {
            dist: {
                options: {
                    sourcemap: 'inline',
                    style: 'expanded'
                },
                files: {
                    'build/css/style.css': 'src/sass/style.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9'],
                map: true
            },
            style: {
                src: 'build/css/style.css'
            }
        },

        csscomb: {
            style: {
                options: {
                    config: 'csscomb.json'
                },
                files: {
                    'build/css/style.css': ['build/css/style.css']
                }
            }
        },

        cmq: {
            options: {
                log: false
            },
            your_target: {
                files: {
                    'build/css/style.css': ['build/css/style.css']
                }
            }
        },

        cssmin: {
            style: {
                options: {
                    keepSpecialComments: 0
                },
                files: {
                    'build/css/style.min.css': ['build/css/style.css']
                }
            }
        },

        concat: {
            dist: {
                src: ['src/js/*.js'],
                dest: 'build/js/script.js'
            }
        },

        uglify: {
            start: {
                files: {
                    'build/js/script.min.js': ['build/js/script.js']
                }
            }
        },

        imagemin: {
            build: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    src: ['build/img/*.{png,jpg,gif,svg}']
                }]
            }
        },

        htmllint: {
            options: {
                force: true
            },
            all: ['build/**/*.html']
        },


        sprite: {
            all: {
                src: 'src/images/icons/*.png', // Path to the icons
                // retinaSrcFilter: 'src/images/icons/*@2x.png', // Path to the icon for the retina, it is important to place them in the same directory as the usual icons, with the addition of @ 2x
                dest: 'build/img/sprites.png', // Specify the path where the generated sprite
                // retinaDest: 'build/sprites@2x.png', // Specify the path where the generated retina sprite
                destCss: 'scss/setup/_sprites.scss', // Specify the path where the generated scss
                imgPath: '../images/sprites.png',
                // retinaImgPath: '../images/sprites@2x.png', // Specify the path that will be in scss (by default is relative the generated file .scss)
                padding: 10 // padding in sprite
            }
        },

        watch: {
            style: {
                files: ['src/sass/**/*.scss'],
                tasks: ['style'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['js'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            images: {
                files: ['src/img/**/*.{png,jpg,gif,svg}'],
                tasks: ['img'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['includereplace'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            sprite: {
                files: 'src/images/icons/*.png',
                tasks: ['sprite', 'sass']
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'build/css/*.css',
                        'build/js/*.js',
                        'build/fonts/**',
                        'build/img/**/*.{png,jpg,gif,svg}',
                        'build/**/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: 'build/'
                    },
                    startPath: '/index.html',
                    ghostMode: {
                        clicks: true,
                        forms: true,
                        scroll: false
                    }
                }
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'includereplace',
        'copy',
        'sass',
        'cmq',
        'autoprefixer',
        'csscomb',
        'cssmin',
        'concat',
        'uglify',
        'imagemin',
        'browserSync',
        'sprite',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean',
        'includereplace',
        'copy',
        'sass',
        'cmq',
        'autoprefixer',
        'csscomb',
        'cssmin',
        'concat',
        'uglify',
        'imagemin',
        'htmllint'
    ]);

    grunt.registerTask('style', [
        'sass',
        'cmq',
        'autoprefixer',
        'csscomb',
        'cssmin'
    ]);

    grunt.registerTask('js', [
        'concat',
        'uglify'
    ]);

    grunt.registerTask('img', [
        'copy:img',
        'imagemin'
    ]);
};
