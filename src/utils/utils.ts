function URLSearchParams(searchParams: string | any) {
    let params: string = '';

    if (typeof searchParams === 'string') params = searchParams;
    else if (typeof searchParams === 'object') params = searchParams.search;

    return params
    .replaceAll('?', '')
    .split('&')
    .reduce((acc, cur) => {
        const list = cur.split('=');
        acc[list[0]] = list[1];
        return acc;
    }, {} as {[k: string]: any;});
}

export { URLSearchParams };