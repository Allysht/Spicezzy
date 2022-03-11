import { domain } from '/domain/setup.js'

if (window.location.href === `${domain}/login`) {
     window.location.href = `${domain}/login/admin`
}

console.log(domain)
