var app = new Vue ({
    el: '#root',
    data: {
        genreList: [],
        playlist: [],
        lookForGenre : ''
    },
    methods: {
        sortedByYear: function(disc) {
            return disc.sort(function(a, b) {
            return a.year - b.year;
            });
        }
    },
    mounted() {

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((risposta) => {
                this.playlist = risposta.data.response;

                this.playlist.forEach((item, i) => {
                    if (!this.genreList.includes(item.genre.toLowerCase())) {
                        this.genreList.push(item.genre.toLowerCase());
                    }
                });


            });

    }











});
