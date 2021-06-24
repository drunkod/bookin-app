import axios from 'axios'
import router from "../router";

export const login = ({ commit, state }, form) => {
    axios.post(
        'http://127.0.0.1:8000/api/login',
        {
            email: form.email,
            password: form.password,
        }
    ).then((response) => {
        console.log(response);
        commit('token', response.data.token)
        const user = {
            email: response.data.email,
        }
        commit('data', user)
        state.msg.success = 'Connexion réussie'
        router.push('/subscription');
    }).catch((error) => {
        console.log(error);
        state.msg.error = error
    });
}