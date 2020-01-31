const requestGetGare = async(searchParam:string) => {
    let response: any;
    try {
        response = await fetch(`https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=${searchParam}`);

    } catch (error) {
        console.log(" fetch failes");
    }

    try {
        let stations = await response.json();
        return stations.records.map((station:any) => station.fields.gare_ut_libelle);
    } catch (error) {
        console.log("gare not found")
    }
};

requestGetGare("lill")
    .then(data => console.log(data));

export default requestGetGare;
