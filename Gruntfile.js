module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),





    sass: {
      dist: {
        files: {
          'css/style.css': '_sass/style.scss'
        }
      }
    },





    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        map: true
      },
      dist: {
        src: 'css/style.css'
      }
    },





    cssmin: {
      options: {
        sourceMap: true
      },
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },





    jekyll: {
      dist: {
        options: {
          dest: '_site',
          config: '_config.yml'
        }
      },
      dev: {
        options: {
          dest: '_site',
          config: '_config.dev.yml'
        }
      },
    },





    watch: {
      html: {
        files: ['**/*.html'],
        tasks: ['jekyll:dev'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['_sass/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin', 'jekyll:dev'],
        options: {
          spawn: false,
        },
      },
    },





    'gh-pages': {
      options: {
        base: '_site'
      },
      src: ['**']
    }





  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');

  // Default task(s).
  grunt.registerTask('dev', ['sass', 'autoprefixer', 'cssmin', 'jekyll:dev', 'watch']);
  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'jekyll:dev']);
  grunt.registerTask('publish', ['sass', 'autoprefixer', 'cssmin', 'jekyll:dist', 'gh-pages']);

};
