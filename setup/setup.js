const MeiliSearch = require('meilisearch')
const dataset = require('./Artworks.json')
require('dotenv').config()

Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize){
        var temporal = [];
        for (var i = 0; i < this.length; i+= chunkSize){
            temporal.push(this.slice(i,i+chunkSize));
        }                
        return temporal;
    }
});

;(async () => {
  // Create client
  const client = new MeiliSearch({
    host: process.env.VUE_APP_MEILISEARCH_HOST,
    apiKey: process.env.VUE_APP_MEILISEARCH_API_KEY
  })

  // Create Index
  await client.createIndex('artWorks', { primaryKey: 'ObjectID' })
  const index = client.getIndex('artWorks')
  console.log('Index "artWorks" created.')

  // Add settings
  const settings = {
    distinctAttribute: null,
    searchableAttributes: [
      'Title',
      'Artist',
      'ArtistBio',
      'Nationality',
      'Gender',
      'BeginDate',
      'Date',
      'Medium',
      'Department'
    ],
    displayedAttributes: [
      'Title',
      'Artist',
      'ArtistBio',
      'Nationality',
      'Gender',
      'BeginDate',
      'Date',
      'Medium',
      'Dimensions',
      'URL',
      'Department',
      'Classification',
      'ThumbnailURL'
    ],
    stopWords: ['a', 'an', 'the'],
    synonyms: { },
    attributesForFaceting: [
      'Nationality', 'Gender', 'Medium', 'Classification'
    ]
  }
  await index.updateSettings(settings)
  console.log('Settings added to "artWorks" index.')

  dataset.chunk(10000).forEach(batch => index.addDocuments(batch))

  console.log('Documents added to "artWorks" index.')
})()

// Split dataset into batches
function batch (array, size) {
  const batchedArray = []
  let index = 0
  while (index < array.length) {
    batchedArray.push(array.slice(index, size + index))
    index += size
  }
  return batchedArray
}
