angular.module('app')
.service('CourseSvc', function () {
  this.courses = {
    'intermediate-rails': {
      title: 'Intermediate Rails',
      subtitle: 'Solve real-world problems on the top framework for startups',
      description: 'desc',
      image: '/images/rails.png'
    },
    'angular': {
      title: 'Angular',
      subtitle: 'Building JavaScript-driven web apps',
      description: 'desc',
      image: '/images/angular.png'
    }
  }
})
