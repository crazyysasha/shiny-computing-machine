import { readonly, ref } from "vue";


const users = ref([
    {
        id: 1,
        name: "Timofey",
        email: "tim@vecher.uz",
        password: '123',
    },
    {
        id: 2,
        name: "Roman",
        email: "roma@vecher.uz",
        password: '123',
    },
    {
        id: 3,
        name: "Nigina",
        email: "niga@vecher.uz",
        password: '123',
    },
]);


const updateUser = (id, { name, email, password }) => {
    const index = users.value.findIndex((val) => val.id == id);

    if (!index) {
        return alert("пользователь не найден");
    }
    users.value[index] = { id, name, email, password };
}

export function useUsers() {
    return {
        users: readonly(users),
        updateUser,
    };
} 