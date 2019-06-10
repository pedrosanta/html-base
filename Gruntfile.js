module.exports = grunt => {

  grunt.initConfig({
    copy: {
      dev: {
        expand: true,
        cwd: 'app/',
        src: '**',
        dest: '.tmp/'
      },
      dist: {
        expand: true,
        cwd: 'app/',
        src: '**',
        dest: 'dist/'
      }
    },
    connect: {
      server: {
        options: {
          base: '.tmp',
          livereload: true,
          open: true
        }
      }
    },
    clean: ['.tmp', 'dist']
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build:dev', ['copy:dev']);
  grunt.registerTask('build:dist', ['copy:dist']);
  grunt.registerTask('build', ['build:dev', 'build:dist']);

  grunt.registerTask('server', ['connect:server:keepalive']);

  grunt.registerTask('dev', ['build:dev']);

  grunt.registerTask('default', ['build']);
};

/*
 * Tasks:
 * grunt dev -> build:dev, server and watch
 * grunt watch
 * OK grunt | grunt build
 * OK grunt build:dev
 * OK grunt build:dist
 * grunt deploy -> grunt build:dist and deploy
 * OK grunt clean
 */
