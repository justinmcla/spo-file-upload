const core = require("@actions/core")
const spsave = require("spsave").spsave

try {

  // Get action inputs.
  const siteUrl = core.getInput("site_url")
  const username = core.getInput("username")
  const password = core.getInput("password")
  const destinationPath = core.getInput("destination_path")
  const source_path = core.getInput("source_path").split(";")

    // Define SPSave Configuration
  const coreOptions = {
    siteUrl: siteUrl
  }

  const credentials = {
    username: username,
    password: password
  }

  const fileOptions = {
    folder: destinationPath,
    glob: source_path
  }

  // Upload to SPO
  spsave(coreOptions, credentials, fileOptions)
  .catch(err => {
    throw new Error(err)
  })

} catch (error) {

  console.error(error)
  core.setFailed(error)

}