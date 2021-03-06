require('dotenv').config();

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

    'ga-replace': {
      options: {
        propertyId: process.env.GA_TRACKING_ID
      },
      dist: {
        expand: true,
        cwd: 'dist/',
        src: '**/*.html',
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

    clean: ['.tmp', 'dist'],

    ftps_deploy: {
      server: {
        options: {
          auth: {
            host: '0.0.0.0',
            port: 3000,
            authKey: 'key1',
            secure: true
          }
        },
        files: [{
          expand: true,
          cwd: 'dist',
          src: '**/*',
          dest: '/home/user/public_html'
        }]
      }
    },

    'sftp-deploy': {
      server: {
        auth: {
          host: 'server.com',
          port: 22,
          authKey: 'key1'
        },
        src: 'dist',
        dest: '/home/user/public_html',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ga-replace');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-ftps-deploy');
  grunt.loadNpmTasks('grunt-sftp-deploy');

  grunt.registerTask('build:dev', 'Build all the files needed for local/dev.', ['copy:dev']);
  grunt.registerTask('build:dist', 'Build all the files needed for production.', ['copy:dist', 'ga-replace:dist']);
  grunt.registerTask('build', 'Build all the files needed for local/dev and production.', ['build:dev', 'build:dist']);

  grunt.registerTask('dev', 'Development task for building files, launch a server and watch changes.', ['build:dev', 'connect:dev', 'watch']);

  grunt.registerTask('server', 'Run the server.', ['connect:server:keepalive']);

  grunt.registerTask('deploy', 'Deploy built code to the server.', ['build:dist', 'ftps_deploy']);

  grunt.registerTask('default', ['build']);
};
