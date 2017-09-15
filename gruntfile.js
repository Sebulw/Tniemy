module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'style.css': 'style.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'build/'
  			}]
  		}
  	},
  	watch: {
	    scripts: {
	        files: ['style.sass'],
	        tasks: ['sass'],
	        options: {
	            spawn: false,
	        },
	    }
	},
	browserSync: {
	    bsFiles: {
	        src : ['index.html', 'style.sass']
	    },
	    options: {
	        server: {
	            baseDir: "./"
	        },
	        watchTask: true
	    }
	}
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).

  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};