var gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass')),
	sourcemaps = require('gulp-sourcemaps'),
	scss_config = {
		// outputStyle: 'nested', // (預設的樣式): 巢狀顯示
		// outputStyle: 'expanded', // 不要巢狀
		// outputStyle: 'compact', //簡潔樣式，縮進成一行
		outputStyle: 'compressed', //壓縮模式
		indentWidth: 0
	},
	scss_list = [
		{
			'name':'output_scss',
			'src':'WebAdmin/style/scss/*.scss',
			'dest':'WebAdmin/style/css/'
		},{
			'name':'front_end_scss',
			'src':'asset/scss/*.scss',
			'dest':'asset/css/'
		},
	],
	scss_watchs = [];

// 生成 task
scss_list.map(function(el){
	var name = 'sass:'+el.name,
		sc_conf = scss_config;

	if(typeof(el.scss) == 'object' && !Array.isArray(el.scss)){
		sc_conf = el.scss;
	}

	gulp.task(name,function() {
		return gulp.src(el.src)
			.pipe(sourcemaps.init())
			.pipe(sass(sc_conf))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest(el.dest));
	});

	scss_watchs.push({
		'name':name,
		'src':el.src
	});
});

// 設定 watch
gulp.task('scss:watch', function() {
	scss_watchs.map(function(el){
		gulp.watch(el.src, gulp.series(el.name));
	});
});

// gulp初始化
gulp.task('default', gulp.parallel('scss:watch'));
