import axios from 'axios'
import router from "../router";
import SUPABASE_CLIENT from "../supabase_client";

export const login = ({ commit, state }, form) => {
    axios.post(
        'http://bookin-web.herokuapp.com/api/login',
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
        router.push('/tabs/profile');
    }).catch((error) => {
        console.log(error);
        state.msg.error = "Echec de connexion !"
    });
}

export const register = ({ commit, state }, form) => {
    axios.post(
        'http://bookin-web.herokuapp.com/api/register',
        {
            email: form.email,
            password: form.password,
            password_confirmation: form.password_confirmation,
        }
    ).then((response) => {
        console.log(response);
        commit('token', response.data.token)
        const user = {
            email: response.data.email,
        }
        commit('data', user)
        state.msg.success = 'Inscription réussie'
        window.location.href="/subscription"
    }).catch((error) => {
        state.msg.error = error
        state.msg.error = "Echec d'inscription !"
    });
}

export const logout = ({ commit, state }) => {
    const token = state.user.token;
    if (!token) {
        return;
    }
    axios.post(
        'http://bookin-web.herokuapp.com/api/logout', {}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        console.log(response);
        state.msg.success = 'Déconnexion réussie'
        router.push('/login');
    }).catch((error) => {
        console.log(error);
    });
    commit('token', null);
    commit('data', {});
    window.location.href = "/login"
}

export const showNews = ({ commit, state }) => {
    axios.get(
        'http://bookin-web.herokuapp.com/api/news')
        .then((response) => {
        const news = response.data.allNews
        console.log(news)
        commit('news', news)
    }).catch((error) => {
        console.log(error);
        state.msg.error = 'Nous rencontrons un problème, réssayez plus tard!'
    });
}

export const showOneNews = ({ commit, state }, newId) => {
    console.log(newId);
    axios.get(
        `http://bookin-web.herokuapp.com/api/article/${newId}`
    ).then((response) => {
        const article = response.data.news
        console.log(article)
        commit('article', article)
    }).catch((error) => {
        console.log(error);
        state.msg.error = 'Nous rencontrons un problème, réssayez plus tard!'
    });
}

export const sendMessage = ({ state }, form) => {
    axios.post(
        'http://bookin-web.herokuapp.com/api/sendMessage',
        {
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            body: form.body,
        }
        ).then((response) => {
        console.log(response);
        state.msg.success = 'Message envoyé !'
    }).catch((error) => {
        console.log(error);
        state.msg.error = "Echec d'envoi !"
    });
}