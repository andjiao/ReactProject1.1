import useData from "./useData";

export interface Genre {
id: number;
name: string;
image_background: string;
}

const useGenres = () => {
if (window.localStorage) {
const strgenre = window.localStorage.getItem('genres');
if (strgenre !== null) {
const genreData = JSON.parse(strgenre);
return { data: genreData, error: false, isLoading: false };
}
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const dataResponse = useData('/genres');
if (dataResponse.data.length > 0) {
if (window.localStorage) {
window.localStorage.setItem('genres', JSON.stringify(dataResponse.data));
}
}
return dataResponse;
};

export default useGenres;