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
      options: {
        base: '.tmp'
      },
      dev: {
        options: {
          livereload: true,
          open: true
        }
      },
      server: {}
    },
    watch: {
      app: {
        options: {
          livereload: true
        },
        files: 'app/**',
        tasks: ['build']
      }
    },
    clean: ['.tmp', 'dist']
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build:dev', 'Build all the files needed for local/dev.', ['copy:dev']);
  grunt.registerTask('build:dist', 'Build all the files needed for production.', ['copy:dist']);
  grunt.registerTask('build', 'Build all the files needed for local/dev and production.', ['build:dev', 'build:dist']);

  grunt.registerTask('dev', 'Development task for building files, launch a server and watch changes.', ['build:dev', 'connect:dev', 'watch']);

  grunt.registerTask('server', 'Run the server.', ['connect:server:keepalive']);

  grunt.registerTask('default', ['build']);
};

/*
 * Tasks:
 * OK grunt dev -> build:dev, server and watch
 * OK grunt watch
 * OK grunt | grunt build
 * OK grunt build:dev
 * OK grunt build:dist
 * grunt deploy -> grunt build:dist and deploy
 * OK grunt clean
 */
