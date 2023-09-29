const map = {
    '/': 'Главная',
    '/cataloge': 'Cataloge',
};

export default () => {
    const res = [];
    let currPath = window.location.pathname; // window.location.pathname
    let endInd = currPath.length;
    const currInd = currPath.indexOf('/');
    console.log(currPath)
    while(currInd !== endInd) {
        const subpath = currPath.slice(currInd, endInd)
        res.unshift(subpath);
        currPath = subpath;
        endInd = currPath.lastIndexOf('/');
    }
    res.unshift('/')
    return res;
}