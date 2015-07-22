module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jekyll: {                             // Task
      dist: {                             // Target
        options: {                        // Target options
          dest: '_site',
          config: '_config.yml'
        }
      },
    },





    'gh-pages': {
      options: {
        base: '_site'
      },
      src: ['**']
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-gh-pages');

  // Default task(s).
  grunt.registerTask('default', ['jekyll']);
  grunt.registerTask('publish', ['jekyll', 'gh-pages']);

};
