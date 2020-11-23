var app = new Vue ({
    el: '#root',
    data: {
        playlist: [],
        lookForGenre : ''
    },
    mounted() {

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((risposta) => {
                this.playlist = risposta.data.response;
                console.log(this.playlist);
            });

    }











});
