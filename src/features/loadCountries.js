export const loadCountries = async () => {
    res = await fetch("http://localhost:8000/coutries")
    data = await res.json() 
    return data 
}