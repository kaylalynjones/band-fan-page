'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // ---------------------------------------------------------------------- //
    watch: {
      code: {
        files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
        tasks: ['jshint:all']
      },
      styles: {
        files: ['app/static/css/*.less'],
        tasks: ['less']
      }
    },
    // ---------------------------------------------------------------------- //
    jshint: {
      options: {jshintrc: '.jshintrc', reporter: require('jshint-stylish')},
      all: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js']
    },
    // ---------------------------------------------------------------------- //
    less: {
      development: {
        options: {
          paths: ['app/static/css'],
        },
        files: {
          'app/static/css/style.css': 'app/static/css/style.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['jshint:all']);
  grunt.registerTask('default', ['build', 'watch']);

};

