export default defineNitroPlugin((nitroApp) => {
  // nitroApp.hooks.hook('content:file:beforeParse', (file) => {
  //   const id = file._id
  //   if (id.endsWith('.md')) {
  //     console.log('Before Parse:', id)
  //   }
  // })

  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    const id = file._id
    if (id.endsWith('.md')) {
      console.log('After Parse:', id)
    }
  })
})
