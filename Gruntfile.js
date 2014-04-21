module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //clean folders
    clean: {
      styleguide: ['styleguide'],
      css: ['css'],
      images:['images']
    },
    //copy files
    copy: {
      styleguide: {
        files: [
          { src: ['sass/styleguide.md'], dest: 'css/styleguide.md'}
        ]
      },
    },
    // compass
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          config: 'config.rb'
        }
      }
    },
    //cssmin compress css
    cssmin: {
      //fixes the non production .scss file & compress it to the max min.css
      minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }
    },
    //uglify compress js
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/<%= pkg.name %>.js',
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
    //compress images
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images-src/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/',
        }]
      }
    },
    //shell geekyness to the max
    shell: {
      //build the styleguide based on the style.css file we created with compass
      styleguide: {
          command: 'kss-node css styleguide --css css/style.css --template styleguide-template'
      },
      //@todo: drush clear cache theme + epic clear cache on builds
    },
    // symlink the css to the styleguide for quicker building of the styleguide css with browsersync
    symlink: {
      styleguide: {
        src: 'css/style.css',
        dest: 'styleguide/style.css'
      }
    },
    //browserSync
    browserSync: {
      dev: {
        bsFiles: {
          src: 'css/*.css'
        },
        options:{
          watchTask : true,
          server: {
            baseDir: "styleguide"
          }
        }
      }
    },
    //watch
    watch: {
      sass: {
        files: 'sass/**/*.scss',
        tasks: ['compass'],
        options: {
          reload: true
        }
      },
      // copy the style.css file - maybe a should do a symlink instead
      styleguide: {
        files: 'sass/**/*.scss',
        tasks: ['compass'],
        options: {
          reload: true
        }
      },
      js:{
        files: ['js/*.js'],
        tasks: ['uglify'],
      }
    },


  });

  //load------------------------------------------
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-symlink');

  //register----------------------------------------
  //Build it all, ready for release  the css, js & files compressed
  grunt.registerTask('build', ['clean', 'copy', 'compass', 'cssmin', 'uglify', 'imagemin', 'shell:styleguide']);

  // build the styleguide: clean up everything first run compass copy styleguide.md to create index page
  // for the styleguide. Then run the shell & create all tehe files
  grunt.registerTask('build-styleguide', ['clean', 'compass' ,'copy:styleguide' ,'symlink','shell:styleguide']);

  //Styleguide building with browser sync on css file 'browserSync',
  grunt.registerTask('styleguide', ['shell:styleguide','symlink', 'browserSync','watch:sass'] );

  //Just for the sass building - no compression no nothing
  grunt.registerTask('sass','watch:sass');
  //Just the js
  grunt.registerTask('js', 'watch:js');
  //crunch the images
  grunt.registerTask('image', 'imagemin');

  grunt.registerTask('symlinktest', 'symlink');
}
