angular.module('app')
.service('CourseSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/courses')
  }

  this.find = function (slug) {
    return $http.get('/api/courses/' + slug)
  }

  this.courses = {
    'intermediate-rails': {
      title: 'Intermediate Rails',
      subtitle: 'Solve real-world problems on the top framework for startups',
      description: 'desc',
      image: '/images/rails.png'
    },
    'angular': {
      title: 'Angular.js',
      subtitle: 'JavaScript-driven web apps',
      description: 'Web apps today look a lot different than they did a few years ago. Before we would build apps with a back-end server generating HTML to deliver to the browser. Today the browser is fast enough that it is capable of running an application client-side, and simply requesting data (JSON) from the server. This enables our applications to be more interactive and much more scalable. Although it does require the developer to change the way they think, the result is the ability to build immersive applications in ways we were never able to before.',
      image: '/images/angular.png',
      topPoints: [
        {
          icon: 'fa-sitemap',
          title: 'Client-MVC Architecture',
          description: 'Learn the right way to architect Client-MVC web apps.'
        },
        {
          icon: 'fa-code',
          title: 'Structure',
          description: 'Structure an Angular app with flexibility and testability in mind.'
        },
        {
          icon: 'fa-gears',
          title: 'Integrate',
          description: 'Integrate your Angular app with a back-end for a full stack app.'
        }
      ]
    }
  }
})
