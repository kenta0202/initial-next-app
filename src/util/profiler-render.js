/* eslint-disable @typescript-eslint/restrict-template-expressions */
let COUNT = 1

const profileRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
  console.log(`${phase} (${COUNT++}) --------`)
  console.log(`startTime: ${startTime}`)
  console.log(`actualDuration: ${actualDuration}`)
  console.log(`commitTime: ${commitTime}`)
}

export default profileRender
