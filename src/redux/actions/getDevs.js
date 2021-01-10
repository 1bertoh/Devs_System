

export default function getDevs(devs) {
    console.log(devs)
    return {
        type: 'GET_DEVS',
        devs
    }
}