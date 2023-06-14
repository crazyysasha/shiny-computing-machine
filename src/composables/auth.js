import { ref } from 'vue';


const isAuthed = ref(false);


const onLogin = (email, password) => {
    if (email == 'admin@loc.test' && password == 'pass') {
        isAuthed.value = true;
        return;
    }
    alert("введенные данные неверны!");
}

const onLogout = () => {
    isAuthed.value = false;
    
}

export function useAuth() {
    return {
        isAuthed, onLogin,onLogout
    }
}