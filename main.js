var app = new Vue ({
    el: '#root',
    data: {
        genreList: [],
        playlist: [],
        lookForGenre : ''
    },
    mounted() {

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((risposta) => {
                this.playlist = risposta.data.response;
                console.log(this.playlist);

                this.playlist.forEach((item, i) => {
                    if (!this.genreList.includes(item.genre)) {
                        this.genreList.push(item.genre);
                    }
                });


            });

    }











});
