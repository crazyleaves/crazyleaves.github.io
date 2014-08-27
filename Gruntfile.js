/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    less: {
      options: {
          paths: ['assets']
      },
      main: {
          files: [
              {
                  expand: true,
                  cwd: 'assets',
                  src: '*.less',
                  dest: 'assets',
                  ext: '.css'
              }
          ]
      }
    },
    watch: {
      files: ['assets/*.less'], // which files to watch
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['less']);

};
