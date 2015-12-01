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

    watch: {
      css:{
        files: ['src/scss/*.scss', 'src/bootstrap-sass-3.3.6/assets/stylesheets/**/*.scss'],
        tasks: ['sass:development']
      }
    }


    
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');



  // Default task(s).
  grunt.registerTask('default', ['htmlmin:development', 'sass:development']);
  grunt.registerTask('production', ['htmlmin:production', 'sass:production']);

};