import { getHeaders } from "../helpers"
import fetch from 'node-fetch'
import { unWrap, getErrorResponse } from "../../../utils/fetchUtils"

export default (algoliaConfig) => {
    const headers = getHeaders(algoliaConfig)
    return {

        create: async (identity, payload) => {
            try {
                return unWrap (await fetch(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/users/${identity.id}`, {
                    headers,
                    method: 'PUT',
                    body: JSON.stringify(payload)
                }))
            } catch(err) {
                return getErrorResponse(err)
            }
        },

        getById: async (identity) => {
            try {
                return unWrap (await fetch(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/users/${identity.id}`, {
                    headers,
                }))
            } catch(err) {
                return getErrorResponse(err)
            }        
        },

        assignHome: async function(identiy, homeId) {
            const payload = (await this.getById(identiy)).json
            payload.homeId.push(homeId)
            this.create(identiy, payload)
        },



    }
}