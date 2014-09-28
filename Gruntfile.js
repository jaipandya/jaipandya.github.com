module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/style.css' : 'sass/style.scss',
                    'css/style-normal.css' : 'sass/style-normal.scss',
                    'css/style-mobile.css' : 'sass/style-mobile.scss',
                    'css/style-mobilep.css' : 'sass/style-mobilep.scss',
                    'css/style-noscript.css' : 'sass/style-noscript.scss',
                    'css/style-wide.css' : 'sass/style-wide.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
}