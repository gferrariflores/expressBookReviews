/*
let books = {
      1: {"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {} },
      2: {"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} },
      3: {"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} },
      4: {"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} },
      5: {"author": "Unknown","title": "The Book Of Job", "reviews": {} },
      6: {"author": "Unknown","title": "One Thousand and One Nights", "reviews": {} },
      7: {"author": "Unknown","title": "Nj\u00e1l's Saga", "reviews": {} },
      8: {"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} },
      9: {"author": "Honor\u00e9 de Balzac","title": "Le P\u00e8re Goriot", "reviews": {} },
      10: {"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} }
}

let books = {
      1: { "isbn": "978-0385474542", "author": "Chinua Achebe", "title": "Things Fall Apart", "reviews": ["A powerful portrayal of African culture.", "Compelling characters and storyline."] },
      2: { "isbn": "978-1509842562", "author": "Hans Christian Andersen", "title": "Fairy tales", "reviews": ["Classic fairy tales that captivate both children and adults.", "Beautifully illustrated and timeless stories."] },
      3: { "isbn": "978-0140449087", "author": "Dante Alighieri", "title": "The Divine Comedy", "reviews": ["An epic journey through Hell, Purgatory, and Heaven.", "Masterpiece of medieval literature."] },
      4: { "isbn": "978-0141026282", "author": "Unknown", "title": "The Epic Of Gilgamesh", "reviews": ["One of the oldest surviving works of literature.", "Rich in mythology and adventure."] },
      5: { "isbn": "978-0140445652", "author": "Unknown", "title": "The Book Of Job", "reviews": ["Profound exploration of human suffering and faith.", "Thought-provoking and philosophical."] },
      6: { "isbn": "978-0140443856", "author": "Unknown", "title": "One Thousand and One Nights", "reviews": ["A collection of enchanting Arabian tales.", "Intriguing stories with moral lessons."] },
      7: { "isbn": "978-0140445300", "author": "Unknown", "title": "Nj\u00e1l's Saga", "reviews": ["An Icelandic saga of feuds and honor.", "Gripping narrative and historical significance."] },
      8: { "isbn": "978-0141439518", "author": "Jane Austen", "title": "Pride and Prejudice", "reviews": ["Delightful romance with witty dialogue.", "Jane Austen's best-loved novel."] },
      9: { "isbn": "978-0140440169", "author": "Honor\u00e9 de Balzac", "title": "Le P\u00e8re Goriot", "reviews": ["A tragic tale of ambition and betrayal.", "Compelling characters and social commentary."] },
      10: { "isbn": "978-0802144423", "author": "Samuel Beckett", "title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": ["Experimental and existentialist literature.", "Challenges conventional narrative structure."] }
}
*/


let books = {
      1: {
            "isbn": "978-0385474542",
            "author": "Chinua Achebe",
            "title": "Things Fall Apart",
            "reviews": {
                  "john": "A powerful portrayal of African culture.",
                  "emma": "Compelling characters and storyline."
            }
      },
      2: {
            "isbn": "978-1509842562",
            "author": "Hans Christian Andersen",
            "title": "Fairy tales",
            "reviews": {
                  "john": "Classic fairy tales that captivate both children and adults.",
                  "alice": "Beautifully illustrated and timeless stories."
            }
      },
      3: {
            "isbn": "978-0140449087",
            "author": "Dante Alighieri",
            "title": "The Divine Comedy",
            "reviews": {}
      },
      4: {
            "isbn": "978-0141026282",
            "author": "Unknown",
            "title": "The Epic Of Gilgamesh",
            "reviews": {}
      },
      5: {
            "isbn": "978-0140445652",
            "author": "Unknown",
            "title": "The Book Of Job",
            "reviews": {}
      },
      6: {
            "isbn": "978-0140443856",
            "author": "Unknown",
            "title": "One Thousand and One Nights",
            "reviews": {}
      },
      7: {
            "isbn": "978-0140445300",
            "author": "Unknown",
            "title": "Nj\u00e1l's Saga",
            "reviews": {}
      },
      8: {
            "isbn": "978-0141439518",
            "author": "Jane Austen",
            "title": "Pride and Prejudice",
            "reviews": {}
      },
      9: {
            "isbn": "978-0140440169",
            "author": "Honor\u00e9 de Balzac",
            "title": "Le P\u00e8re Goriot",
            "reviews": {}
      },
      10: {
            "isbn": "978-0802144423",
            "author": "Samuel Beckett",
            "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
            "reviews": {}
      }
};

module.exports = books;
