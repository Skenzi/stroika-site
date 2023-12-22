import { useRoute } from 'vue-router';

const map = {
    '/': 'Главная',
};

export default () => {
    const route = useRoute();
    const res = [];
    let currPath = route.path;
    const params = Object.values(route.params);
    let endInd = currPath.length;
    const startInd = currPath.indexOf('/');
    let paramInd = params.length - 1;
    while(startInd !== endInd) {
        const subpath = currPath.slice(startInd, endInd)
        endInd = subpath.lastIndexOf('/');
        const namePath = params[paramInd] || 'Cataloge'
        map[subpath] = namePath;
        res.unshift([namePath, subpath]);
        currPath = subpath;
        paramInd -= 1;
    }
    res.unshift(['Главная', '/'])
    return res;
}