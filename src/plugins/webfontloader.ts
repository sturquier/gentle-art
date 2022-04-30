export async function loadFonts () {
  const webFontLoader = await import('webfontloader')

  webFontLoader.load({
    google: {
      families: ['Merriweather', 'Open Sans'],
    },
  })
}
