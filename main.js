var app = new Vue ({
    el: '#root',
    data: {
        funMeta:'',
        genreList: [],
        playlist: [],
        lookForGenre : ''
    },
    methods: {
        sortByYear(disc) {
            return disc.sort(function(a, b) {
            return a.year - b.year;
            });
        },
        sortByTitle(disc) {
            return disc.sort((a,b)=> (a.title > b.title? 1 : -1 ))
        },
        sortByAuthor(disc) {
            return disc.sort((a,b)=> (a.author > b.author? 1 : -1 ))
        },
    },
    mounted() {

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((risposta) => {
                this.playlist = risposta.data.response;
                this.funMeta = risposta.data.response;

                //genero in automatico la lista per i generi musicali
                this.playlist.forEach((item, i) => {
                    if (!this.genreList.includes(item.genre.toLowerCase())) {
                        this.genreList.push(item.genre.toLowerCase());
                    }
                });


            });

    }











});
