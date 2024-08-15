export default defineEventHandler(async (event) => {

    // //handle query parameters
    // const { name } = getQuery(event)

    // //handle post data
    // const { age } = await readBody(event)

    //api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_cy6iKEg4UT1wO5qLITTcqcL2AEusz5zv5deHV7JD&currencies=EUR%2CUSD%2CCAD')

    return data
})