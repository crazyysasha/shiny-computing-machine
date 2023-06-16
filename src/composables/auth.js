import { computed, readonly, ref } from "vue";



const users = [
    {
        name: "Timofey",
        email: "tim@vecher.uz",
        password: '123',
    },
    {
        name: "Roman",
        email: "roma@vecher.uz",
        password: '123',
    },
    {
        name: "Nigina",
        email: "niga@vecher.uz",
        password: '123',
    },
];

const user = ref(null);

const isAuthed = computed(() => {
    return !!user.value
});


const onLogin = (email, password) => {
    const u = users.find((val) => {
        return val.email == email && val.password == password;
    })

    if (!!!u) {
        alert("pol'zovatel' ne nayden");
        return;
    }

    user.value = u;
}


const onLogout = () => {
    user.value = null;
}


export function useAuth() {
    return {
        user: readonly(user),
        isAuthed: readonly(isAuthed),
        onLogin,
        onLogout,
    };
}