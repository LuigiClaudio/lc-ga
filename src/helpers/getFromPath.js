const getFromPath = (set, pathToGet) =>
    pathToGet.split('.').reduce((newSet = {}, value) => newSet[value], set);

export default getFromPath;
