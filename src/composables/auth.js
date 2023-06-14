import { ref } from 'vue';
import { useRouter } from 'vue-router';


const isAuthed = ref(JSON.parse(localStorage.getItem('isAuthed')));


export function useAuth() {




    const onLogin = (email, password) => {

        if (email == 'admin@loc.test' && password == 'pass') {
            localStorage.setItem('isAuthed', 'true');
            isAuthed.value = true;
            return;
        }
        alert("введенные данные неверны!");
    }
    return {
        isAuthed, onLogin,
    }
}