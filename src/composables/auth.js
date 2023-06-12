import { ref } from 'vue';


const isAuthed = ref(false);


const onLogin = (email, password) => {
    if (email == 'admin@loc.test' && password == 'pass') {
        isAuthed.value = true;
        return;
    }
    alert("введенные данные неверны!");
}

export function useAuth() {
    return {
        isAuthed, onLogin,
    }
}