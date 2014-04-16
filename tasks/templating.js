var handlebars = require('handlebars');
var yaml = require('js-yaml');

module.exports = function(grunt) {
	grunt.registerTask('templating', 'process templates', function() {
		var indexSrc = grunt.file.read('index.mustache');
		var template = handlebars.compile(indexSrc);
		grunt.log.writeln('compiled mustache template...');
		var dataSrc = grunt.file.read('data.yml');
		grunt.log.writeln('read yaml data...');		
		var data = yaml.load(dataSrc);
		grunt.log.writeln('loaded yaml data...');
		var rendered = template(data);
		grunt.log.writeln('rendered html...');		
		grunt.file.write('build/index.html', rendered);
	});
};