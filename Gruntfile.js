module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                files:{
                    './style/main.css' : 'main.less'
                }
            }
        },
        uglify: {
            target: {
                files:{
                    './script/main.min.js' : 'main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
}