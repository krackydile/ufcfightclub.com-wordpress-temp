const webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {
	// Config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		dirs: {
			src_css: '../include/css/front-end/core',
			tp: '../include/ext',

			dest_js_base: '../include/js/front-end',

			dest_css_combo: '../include/css/front-end/combo',
			dest_css_combo_slider: '../include/css/front-end/combo-slider',

			i18n_src: '..',
			langs: 'languages'
		},

		vars: { },

		webpack: {
			myConfig: webpackConfig,
		},

		clean: {
			css: {
				options: {
					force: true
				},
				src: [
					'<%= dirs.dest_css_combo %>',
					'<%= dirs.dest_css_combo_slider %>'
				]
			},
			js: {
				options: {
					force: true
				},
				src: [
					'<%= dirs.dest_js_base %>/module/**/*.*',
					'<%= dirs.dest_js_base %>/nomodule/**/*.*',
				]
			},
			jsLicenses: {
				options: {
					force: true
				},
				src: [
					'<%= dirs.dest_js_base %>/module/**/*.txt',
					'<%= dirs.dest_js_base %>/nomodule/**/*.txt',
				]
			},
		},

		makepot: {
			target: {
				options: {
					type: 'wp-plugin',
					potFilename: 'photonic.pot',
					cwd: '<%= dirs.i18n_src %>',
					domainPath: '<%= dirs.langs %>'
				}
			}
		}
	});

	// Load plugins
	const cwd = process.cwd();
	process.chdir('../../../../..');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-wp-i18n');
	process.chdir(cwd);

	const lightboxes = [
		'BaguetteBox',
		'BigPicture',
		'Colorbox',
		'Fancybox',
		'Fancybox2',
		'Fancybox3',
		'Featherlight',
		'GLightbox',
		'ImageLightbox',
		'Lightcase',
		'Lightgallery',
		'Magnific',
		'none',
		'PhotoSwipe',
		'PrettyPhoto',
		'Strip',
		'Swipebox',
		'Thickbox'
	];

	function buildCSS() {
		const tasks = [];
		const coreCSS = [
			'<%= dirs.src_css %>/photonic.css'
		];

		grunt.task.run([
			'clean:css'
		]);

		for (let i = 0; i < lightboxes.length; i++) {
			let lower = lightboxes[i].toLowerCase();
			lower = lower.replace('_', '-');

			const comboCSS = ['<%= dirs.tp %>/' + lower + '/' + lower + '.css'].concat(coreCSS);
			const comboSliderCSS = ['<%= dirs.tp %>/splide/splide.css'].concat(comboCSS);

			grunt.config(['concat', lower + '_css_combo'], {
				options: {
					process: true
				},
				separator: '\r\n',
				src: comboSliderCSS,
				dest: '<%= dirs.dest_css_combo %>/photonic-' + lower + '.css'
			});
			tasks.push('concat:' + lower + '_css_combo');

			grunt.config(['concat', lower + '_css_slider_combo'], {
				options: {
					process: true
				},
				separator: '\r\n',
				src: comboSliderCSS,
				dest: '<%= dirs.dest_css_combo_slider %>/photonic-' + lower + '.css'
			});
			tasks.push('concat:' + lower + '_css_slider_combo');

			grunt.config(['copy', lower + '_css_img'], {
				files: [{
					expand: true,
					cwd: '<%= dirs.tp %>/' + lower,
					src: [
						lower + '-img/**',
						lower + '-fonts/**'
					],
					dest: '<%= dirs.dest_css_combo %>/'
				}]
			});
			tasks.push('copy:' + lower + '_css_img');

			grunt.config(['copy', lower + '_css_img_slider'], {
				files: [{
					expand: true,
					cwd: '<%= dirs.tp %>/' + lower,
					src: [
						lower + '-img/**',
						lower + '-fonts/**'
					],
					dest: '<%= dirs.dest_css_combo_slider %>/'
				}]
			});
			tasks.push('copy:' + lower + '_css_img_slider');
		}
		grunt.config(['cssmin', 'combo'], {
			files: [{
				expand: true,
				cwd: '<%= dirs.dest_css_combo %>',
				src: ['*.css', '!*.min.css'],
				dest: '<%= dirs.dest_css_combo %>/',
				ext: '.min.css'
			}]
		});

		tasks.push('cssmin:combo');

		grunt.config(['cssmin', 'combo_slider'], {
			files: [{
				expand: true,
				cwd: '<%= dirs.dest_css_combo_slider %>',
				src: ['*.css', '!*.min.css'],
				dest: '<%= dirs.dest_css_combo_slider %>/',
				ext: '.min.css'
			}]
		});
		tasks.push('cssmin:combo_slider');

		grunt.task.run(tasks);
	}

	function buildPOT() {
		grunt.task.run([
			'makepot:target'
		]);
	}

	function buildAll() {
		buildJS();
		buildCSS();
		buildPOT();
	}

	function buildJS() {
		// First run WebPack to generate the files. This generates 2 files per library - one minified and the other unminified.
		grunt.task.run([
			'clean:js',
			'webpack',
			'clean:jsLicenses',
		]);
	}

	grunt.registerTask('buildAll', buildAll);
	grunt.registerTask('buildCSS', buildCSS);
	grunt.registerTask('buildPOT', buildPOT);
	grunt.registerTask('buildJS', buildJS);
};