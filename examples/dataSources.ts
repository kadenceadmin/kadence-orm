import { KadenceDataSource } from "../src/types/source";

export const pgDataSource = new KadenceDataSource("postgres", {
    host: "t1hfq4369e.reewxmyri6.tsdb.cloud.timescale.com",
    database: "tsdb",
    user: "tsdbadmin",
    password: "jyw1tl5pukwjlijx",
    port: 38347,
});

/*export const airtableApi = new KadenceDataSource("rest-api", {
    url: "https://api.airtable.com/v0/appiQBQXvVIJ1urk8/employee",
    authType: "bearer",
    token: "patSqQ7hpN857rVaO.802931fe842cbc15f2d9e9df5ee5076f61607b9d207ebe491b7fe3acf5f45e37",
});

export const weatherApi = new KadenceDataSource("rest-api", {
    url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/94105/today?unitGroup=us&include=current%2Calerts&key={api_key}&contentType=json",
    authType: "none",
});*/