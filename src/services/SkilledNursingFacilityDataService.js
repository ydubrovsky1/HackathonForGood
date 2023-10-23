const axios = require('axios');
const providerBaseURL = axios.create({
    baseURL: "https://data.cms.gov/provider-data/api"
});


async function getDistributionIdentifier(datasetID) {
    let distributionData;
    console.log("dataset id: ")
    console.log(datasetID);
    try {
        const apiUrl = "https://data.cms.gov/provider-data/api/1/metastore/schemas/dataset/items/" + datasetID
//        const response = await providerBaseURL.get("/1/metastore/schemas/dataset/items/" + datasetID, {
//            params: { show_reference_ids: true },
//        });
        console.log(apiUrl)
           const response = await axios.get(apiUrl, {
                 params: {
                   show_reference_ids: true // Add authorization header if required.
                 },
                       headers: {
                         'Access-Control-Allow-Origin': `*` // Add authorization header if required.
                       },

               });
                                                console.log("response:");
               console.log(response);
        distributionData = response.data?.distribution || [];
    } catch (err) {
        console.log("ERROR");
        console.error(err);
    }

    if (distributionData.length > 0) {
        return distributionData[0]?.identifier;
    }
}

async function getProviderResults(queryString) {
    let providers;
    try {
        const response = await providerBaseURL.get("/1/datastore/sql", {
            params: {
                query: queryString,
                show_db_columns: true
            }
        });
        providers = response.data;
    } catch (err) {
        console.error(err);
    }

    return providers;
}

function buildQueryFromFilters(distributionID, filters={}, limit=10, offset=0) {
    let query = "[SELECT * FROM " + distributionID + "]";

    if (Object.keys(filters).length > 0) {
        query += generateWhereClause(filters);
    }

    query += generateLimitClause(limit, offset);
    return query;
}

function generateWhereClause(filters) {
    let where_clause = "[WHERE ";

    if ("zip_code" in filters) {
        where_clause += 'zip_code = "' + filters.zip_code + '"';
    }

    where_clause += "]";
    return where_clause;
}

function generateLimitClause(limit, offset) {
    return "[LIMIT " + limit + " OFFSET " + offset + "]";
}

async function snfDataServiceMain() {
    const providerDatasetID = "4pq5-n9py";
    console.log("gettingDistributionId")
    const distributionID = await getDistributionIdentifier(providerDatasetID);
    //expect this to be a map of values from filters provided by user
        const filters = {
            zip_code: "60525"
        }
    const query = buildQueryFromFilters(distributionID, filters)
    const providers = await getProviderResults(query);
    console.log(providers);
    console.log(query);
    return "ranDataService";
}

export{snfDataServiceMain};