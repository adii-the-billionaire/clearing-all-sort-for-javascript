function cW(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = cW(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;
}
console.log(cW(['Mia', 'iai', 'kIa']))['MIA', 'IAI', 'KIA']
    //res = cw(['Mia', 'iai']) return = ['MIA','IAI'].push(KIA)
    //      res = cw('Mia') return = ['MIA','IAI']=['MIA'].push(array.slice(array.length-1)[0].toUpperCase())
    //             ['MIA']