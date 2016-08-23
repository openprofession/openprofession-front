module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      development: {
        options: {
          noCache: true
        },
        files: {
          "css/style.css": "dev/sass/style.sass"
        }
      },
      beautify: {
        files: {
          "css/style.css": "dev/sass/style.sass"
        }
      }
    },
    concat: {
      style: {
        files: {
          'css/style.css': [
            'css/style.css',
            'css/plugins/*.css'
          ]
        }
      },
      development: {
        files: {
          'js/libs.js': [
            'dev/js/jquery-1.11.3.min.js',
            'dev/js/lib/*.js',
            'dev/js/core/*.js'
          ]
        }
      },
      production: {
        files: {
          'dev/js/production.js': ['js/libs.js', 'js/common.js']
        }
      }
    },
    uglify: {
      options: {
        sourceMap: false
      },
      production: {
        src: 'dev/js/production.js',
        dest: 'js/production.min.js'
      }
    },
    htmlbuild: {
      development: {
        src: 'dev/templates/*.html',
        dest: './',
        options: {
          sections: {
            layout: {
              head: 'dev/chunks/head.html',
              header: 'dev/chunks/header.html',
              scripts: 'dev/chunks/scripts.html',
              footer: 'dev/chunks/footer.html',
              svg: 'dev/chunks/svg.html'
            }
          }
        },
        data: {
          // Data to pass to templates
          version: "0.1.0",
          title: "test"
        }
      }
    },
    replace: {
      html: {
        src: ['./*.html'],
        dest: './',
        replacements: [{
          from: /(\.\.\/)+/g,
          to: ''
        },{
          from: '.css"/>',
          to: '.css?timestamp=' + new Date().getTime() + '"/>'
        },{
          from: 'common.js',
          to: 'common.js?timestamp=' + new Date().getTime()
        }]
      },
      production: {
        src: ['./*.html'],
        dest: './',
        replacements: [{
          from: '<script src="//localhost:35729/livereload.js"></script>',
          to: ''
        },{
          from: /\?timestamp=\d+/g,
          to: ''
        },{
          from: 'style.css"/>',
          to: 'style.min.css"/>'
        }]
      },
      productionFinal: {
        src: ['./*.html'],
        dest: './',
        replacements: [{
          from: '<script src="js/libs.js"></script>',
          to: ''
        },{
          from: 'common.js',
          to: 'production.min.js'
        },{
          from: 'style.css"/>',
          to: 'style.min.css"/>'
        }]
      },
      beautify: {
        src: ['./*.html'],
        dest: './',
        replacements: [{
          from: 'style.min.css"/>',
          to: 'style.css"/>'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['dev/js/**/*.js', 'js/common.js'],
        tasks: ['concat:development', 'notify:watch'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      styles: {
        files: ['css/plugins/*.css', 'dev/sass/**', 'dev/sass/*.sass'],
        tasks: ['sass:development', 'postcss', 'concat:style', 'notify:watch'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      html: {
        files: ['dev/templates/*.html', 'dev/chunks/*.html'],
        tasks: ['htmlbuild', 'replace:html', 'notify:watch'],
        options: {
          livereload: true,
          spawn: false
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer-core')({
            browsers: ['last 2 version', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9', 'ie 10', 'ie 11']
          }).postcss,
          require('postcss-urlrewrite')({
            imports: true,
            properties: [ 'background', 'background-image', 'content', 'src' ],
            rules: [{ from: /(\.\.\/)+css\//, to: '' }]
          })
        ]
      },
      dist: {
        src: './css/style.css'
      }
    },
    csso: {
      production: {
        files: {
          './css/style.min.css': ['./css/style.css']
        }
      }
    },
    cssmin: {
      production: {
        files: {
          './css/style.min.css': ['./css/style.css']
        }
      }
    },
    modernizr: {
      dist: {
        // [REQUIRED] Path to the build you're using for development.
        "devFile" : "remote",

        // Path to save out the built file.
        "outputFile" : "js/modernizr.js",

        // Based on default settings on http://modernizr.com/download/
        "extra" : {
          "shiv" : true,
          "printshiv" : false,
          "load" : true,
          "mq" : false,
          "cssclasses" : true
        },

        // Based on default settings on http://modernizr.com/download/
        "extensibility" : {
          "addtest" : false,
          "prefixed" : true,
          "teststyles" : true,
          "testprops" : true,
          "testallprops" : true,
          "hasevents" : false,
          "prefixes" : false,
          "domprefixes" : true,
          "cssclassprefix": ""
        },
        "parseFiles" : false,
        "matchCommunityTests" : true,
        "tests" : [ // https://github.com/Modernizr/grunt-modernizr/blob/master/lib/customappr.js#L2-111
          'svg',
          'flexbox',
        ]
      }
    },
    removelogging: {
      dist: {
        src: "js/common.js"
      }
    },
    notify: {
      watch: {
        options: {
          enabled: true,
          title: 'Task Complete',  // optional
          message: 'Development task finished running', //required
          duration: 3
        }
      },
      prod: {
        options: {
          message: 'Production version is ready!'
        }
      },
      server: {
        options: {
          message: 'Server is ready!'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks("grunt-modernizr");
  grunt.loadNpmTasks("grunt-remove-logging");
  grunt.loadNpmTasks('grunt-notify');
  grunt.registerTask('development', ['concat:development', 'sass:development', 'postcss', 'concat:style', 'htmlbuild', 'replace:html', 'modernizr', 'notify:server', 'watch']);
  grunt.registerTask('production', ['concat:production', 'uglify:production', 'sass:development', 'postcss', 'htmlbuild', 'replace:html', 'replace:production', 'concat:style', 'cssmin:production', 'modernizr', 'removelogging', 'notify:prod']);
  grunt.registerTask('production-compress', ['concat:production', 'uglify:production', 'sass:development', 'postcss', 'htmlbuild', 'replace', 'cssmin:production', 'modernizr', 'removelogging','replace:productionFinal']);
  grunt.registerTask('css-beautify', ['sass:beautify', 'postcss', 'replace:beautify']);
};
