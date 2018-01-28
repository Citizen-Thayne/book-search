import COLLECTIONS from './COLLECTIONS.json'
import * as books from './books'

const {
  collections
} = COLLECTIONS

export function get (id) {
  return collections[id] || null
}

export async function mine () {
  let myCollections = collections
  let promises = []
  // console.log({books})
  for (let id in myCollections) {
    promises.push(async function () {
      let collectionBooks = await books.getMany(myCollections[id].books)
      myCollections[id].books = collectionBooks
    })
  }
  Promise.all(promises)
  return myCollections
}
