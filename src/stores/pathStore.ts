import { defineStore } from "pinia";
import { ref } from "vue";
interface PathProps {
    name: string,
    link: string
}
export const usePathStore = defineStore('path', () => {
    const path = ref<PathProps[]>([{
        name: 'Главная',
        link: '/'
    }]);
    function slicePath(key: string) {
        const newPath = []
        for(const part of path.value) {
            newPath.push(part)
            if(part.name === key) break;
        }
        console.log(newPath)
        path.value = newPath
    }
    function addNewPart(part: PathProps) {
        const { link } = getLastLink()
        path.value.push({...part, link: link.link+part.link})
    }
    function getPath() {
        return path
    }
    function getLastLink() {
        return path.value[path.value.length-1]
    }
    return { path, slicePath, addNewPart, getPath, getLastLink }
})
