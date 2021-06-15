// var titre_article = "Article n°1"
var app = new Vue({
    el: '#app',
    data: {
        articles: [
            {
                id_article: 1,
                titre_article: 'article 1',
                image: './assets/images/article1.jpg',
                isliked: false
            },
            {
                id_article: 2,
                titre_article: 'article 2',
                image: './assets/images/article2.jpg',
                isliked: false
            },
        ],
    },
    methods: {
        likeArticle: function (article){
            article.isliked = !article.isliked
        }
    },
  })