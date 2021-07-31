import { getHeaders } from "../helpers"
import fetch from 'node-fetch'
import { unWrap, getErrorResponse } from "../../../utils/fetchUtils"

export default (algoliaConfig) => {
    const headers = getHeaders(algoliaConfig)
    return {

        create: async (homeId, payload) => {
            try {
                return unWrap (await fetch(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
                    headers,
                    method: 'PUT',
                    body: JSON.stringify(payload)
                }))
            } catch(err) {
                return getErrorResponse(err)
            }
        },

        delete: async (homeId) => {
            try {
                return unWrap (await fetch(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
                    headers,
                    method: 'DELETE',
                }))
            } catch(err) {
                return getErrorResponse(err)
            }
        },

        getByUserId: async (userId) => {
            try {
                return unWrap (await fetch(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/homes/query`, {
                    headers,
                    method: 'POST',
                    body: JSON.stringify({
                        filters: `userId:${userId}`,
                        attributesToRetrieve: [
                            'objectID',
                            'title',
                        ],
                        attributesToHighlight: [],
                    })
                }))
            } catch(err) {
                return getErrorResponse(err)
            }
        },


    }
}