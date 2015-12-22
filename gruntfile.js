module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    htmlmin: {                                     // Task 
        production: {                                      // Target 
          options: {                                 // Target options 
            removeComments: true,
            collapseWhitespace: true
          },
          files: {
            'prod/index.html': 'src/index.html'     // 'destination': 'source' 
          }
        },
        development: {
          files: {
            'dev/index.html': 'src/index.html'
          }
        }
    },
    

    sass:{
      development: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'dev/assets/css/app.css' : 'src/scss/app.scss'
        }
      },
      production: {
        options:{
          outputStyle: 'compressed'
        },
        files:{
          'prod/assets/css/app.css' : 'src/scss/app.scss'
        }
      }
    },

    uglify: {
      production: {
        files: {
          'prod/assets/js/scripts.min.js' : ['src/javascript/lib/jquery-1.11.3.js', 'src/bootstrap-sass-3.3.6/assets/javascripts/bootstrap.js', 'node_modules/angular/angular.js', 'bower_components/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js', 'src/javascript/custom/*.js']
        }
      },
      development: {
        options: {
          beautify: true, 
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
        files: {
          'dev/assets/js/scripts.min.js' : ['src/javascript/lib/jquery-1.11.3.js', 'src/bootstrap-sass-3.3.6/assets/javascripts/bootstrap.js', 'node_modules/angular/angular.js', 'bower_components/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js', 'src/javascript/custom/*.js']
        }
      }
    },

    watch: {
      css:{
        files: ['src/scss/*.scss', 'src/bootstrap-sass-3.3.6/assets/stylesheets/**/*.scss'],
        tasks: ['sass:development']
      },
      scripts:{
        files: 'src/javascript/**/*.js',
        tasks: ['uglify:development']
      },
      html:{
        files: 'src/*.html',
        tasks: ['htmlmin:development']
      }
    }


    
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');



  // Default tasks.
  grunt.registerTask('default', ['htmlmin:development', 'sass:development', 'uglify:development']);

  // Production tasks.
  grunt.registerTask('production', ['htmlmin:production', 'sass:production', 'uglify:production']);

};