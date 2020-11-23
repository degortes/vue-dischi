var app = new Vue ({
    el: '#root',
    data: {
        genreList: [],
        playlist: [],
        lookForGenre : ''
    },
    methods: {
        sortByYear() {
            this.playlist.sort((a,b) => (a.year - b.year));
        },
        sortByTitle() {
            this.playlist.sort((a,b)=> (a.title > b.title? 1 : -1 ))
        },
        sortByAuthor() {
            this.playlist.sort((a,b)=> (a.author > b.author? 1 : -1 ))
        },
    },
    mounted() {

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((risposta) => {
                this.playlist = risposta.data.response;
                //genero in automatico la lista per i generi musicali
                this.playlist.forEach((item, i) => {
                    if (!this.genreList.includes(item.genre.toLowerCase())) {
                        this.genreList.push(item.genre.toLowerCase());
                    }
                });

            });

    }











});
