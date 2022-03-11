const hostName = window.location.hostname
const protocol = window.location.protocol
const port = window.location.port

const domain = `${protocol}//${hostName}:${port}`

export { domain }