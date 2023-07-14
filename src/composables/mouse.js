
import { readonly, ref } from 'vue';

const x = ref(0);
const y = ref(0);

let isWatching = false;


export function useMouse() {
    const asd = Math.random();
    if (!isWatching) {
        document.addEventListener('mousemove', function (event) {
            x.value = event.clientX;
            y.value = event.clientY;

            console.log('sdf');
        });
        isWatching = true;
    }

    return {
        x: readonly(x),
        y: readonly(y),
    };
}