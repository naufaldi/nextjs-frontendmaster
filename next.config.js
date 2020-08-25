const  { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')
// Setting up module for server and production
module.exports = (phase, {defaultConfig})=>{
  if(phase === PHASE_DEVELOPMENT_SERVER){
    console.log("Server")
    return defaultConfig
  }
  return defaultConfig
 
}