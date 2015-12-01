module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    

    sass:{
      development: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          //'_assets/css/bootstrap.css' : 'src/scss/bootstrap.scss',
          '_assets/css/custom.css' : 'src/scss/custom.scss'
        }
      },
      production: {
        options:{
          outputStyle: 'compressed'
        },
        files:{
          //'_assets/css/bootstrap.css' : 'src/scss/bootstrap.scss',
          '_assets/css/custom.css' : 'src/scss/custom.scss'
        }
      }
    },

    watch: {
      css:{
        files: ['src/scss/*.scss', 'src/bootstrap-sass-3.3.5/assets/stylesheets/**/*.scss'],
        tasks: ['sass:development']
      }
    }


    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass:development']);
  grunt.registerTask('production', ['sass:production']);

};