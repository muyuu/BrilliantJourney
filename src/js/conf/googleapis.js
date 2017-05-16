// @flow

const googleapi = ()=> {
    return {
        key   : 'AIzaSyCCqO_cGMqZWCpCvNX4GndvkBFgmYHGA-M',
        url   : 'https://maps.googleapis.com/maps/api/',
        format: 'json',

        get directions(){
            return `${this.url}directions/${this.format}?key=${this.key}`;
        },
        get autocomplete(){
            return `${this.url}place/autocomplete/${this.format}?key=${this.key}&language=ja&type=geocode`;
        },
    };
};

export default googleapi();
