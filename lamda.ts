function handler(event) {
    console.log("Job Stared" )

    return {
        body: JSON.stringify({message: 'SUCCESS'}),
        statusCode: 200,
    };
}
module.exports = {handler};
