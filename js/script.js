const app = new Vue(
    {
        el: '#app',

        data: {
            mail: '',

            listMails: [],
        },

        methods: {
            generateMails() {

                this.listMails = [];

                for (let i = 0; i <= 9; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            this.mail = response.data.response;
                            this.listMails.push(this.mail);
                            this.mail = '';
                        })
                }

            }
        },

        created() {

        },
    }
);