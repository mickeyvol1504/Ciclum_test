import axios from 'axios';

const query = 'https://jsonplaceholder.typicode.com/photos?_limit=300';

export const fetchPhotos = () => (
    axios.get(query)
        .then(({ status, statusText, data }) => {
            if(status !== 200) throw statusText;

            return data;
        })
        .catch(err => { throw err; })
);
