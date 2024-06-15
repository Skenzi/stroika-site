import { useRoute } from 'vue-router';
interface MapProps {
    [key: string]: string
}
const map: MapProps = {
    '/': 'Главная',
    '/cataloge': 'Каталог'
};

export default () => {
    const route = useRoute();
    const res = [];
    let link = route.path;
    const params = route.params;
    const pathParts = route.matched[0].path.split('/:');
    let endLinkInd = link.length;
    const startLinkInd = 0;
    let paramInd = pathParts.length - 1;
    while(startLinkInd !== endLinkInd) {
        const newLink = link.slice(startLinkInd, endLinkInd)
        endLinkInd = newLink.lastIndexOf('/');
        const namePath: string = map[newLink] || params[pathParts[paramInd]].toString();
        if(!map[newLink]) map[newLink] = namePath;
        res.unshift([namePath, newLink]);
        link = newLink;
        paramInd -= 1;
    }
    res.unshift(['Главная', '/'])
    return res;
}