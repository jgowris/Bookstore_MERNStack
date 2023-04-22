const db = require("./");

const initial_users = [
  {
    username: "admin",
    password: "123",
    admin: "yes",
  },
  {
    username: "jgowris",
    password: "123",
    admin: "no",
  },
  {
    username: "democustomer",
    password: "123",
    admin: "no",
  },
];

const initial_books = [
  {
    title: "The Challenge",
    author: "Danielle Steel",
    published: 2022,
    isbn: 98765432111,
    abstract:
      "A small community is tested when their children go missing while exploring a dangerous local PerformanceMark, forcing them to band together during the crisis-- Provided by publisher.",
    language: "English",
    classiication: "fiction",
    sub_classification: "adult",
    status: "available",
    copies: 9,
    image: "/images/ds_1.jpeg",
  },
  {
    title: "Blowback",
    author: "James Patterson",
    published: 2022,
    isbn: 98765432112,
    abstract:
      "Two CIA Agents find their loyalties divided between chain of command and their constitution when their former Director, now the President of the United States, asks them to carry out a clandestine power grab with deadly consequences.",
    language: "English",
    classiication: "fiction",
    sub_classification: "adult",
    status: "available",
    copies: 8,
    image: "/images/jp_1.jpeg",
  },
  {
    title: "Desperation in Death",
    author: "J D Robb",
    published: 2022,
    isbn: 98765432156,
    abstract:
      "The #1 New York Times Bestselling autor presents a gripping new thriller that pits homicide detective Eve Dallas against a conspiracy of exploitation and evil...--Provided by Publisher.",
    language: "English",
    classiication: "fiction",
    sub_classification: "adult",
    status: "available",
    copies: 7,
    image: "/images/jdrobb_1.jpeg",
  },
  {
    title:
      "The Neuroscience of You: How Every Brain is different and how to understand Yours",
    author: "Chantel Spring Prat",
    published: 2022,
    isbn: 98765431605,
    abstract:
      "With style and wit, Chantel Prat takes us on a tour of the meaningful ways that our brains are dissimilar fromo one another. Using real-world examples, along with take-them -yourself tests and quizzes, she knows you how to identify the strength and weakness of your brain, while learning what might be going on in hte brains of those who are unlike you. With Sections like focus, Navigate and Connect, The Neuroscience of You help us see how brains that are engineered differently ultimately take diverse paths whne it comes to prioritize information, use what they've learned from experience , relate to other people, and so much more. -- Provided by publisher.",
    language: "English",
    classiication: "fiction",
    sub_classification: "adult",
    status: "available",
    copies: 9,
    image: "/images/ns_1.jpeg",
  },
  {
    title:
      "Like, Comment, Subscribe: Inside Youtube's Chaotic Rise to World Dominiation",
    author: "Mark Bergen",
    published: 2022,
    isbn: 98765431349,
    abstract:
      "The definitive, deeply reported account of outube, the company that unpended media culture, industry, and democracy-by a leading tech journalist Across the world, people watch over a billion hours of video on Youtube every day. The sheer amount of video produced there is beyond comprehension. Every minute, over five hundred hours of footage are uploaded to the site, the equivalent of eighty-two years of video a day. That anyone can easily access any minute of this footage-and the trillion minutes more already on Youtube-is a technical feat unmatched in the history of computing. Everyone knows Youtube. And yet virtually no one knows how it works. -- Provided by publisher.",
    language: "English",
    classiication: "fiction",
    sub_classification: "adult",
    status: "available",
    copies: 5,
    image: "/images/ds_1.jpeg",
  },
];

// db.User.deleteMany({})
// , (err, users) => {
//   if (err) {
//     console.log("Error occurred in remove", err);
//   } else {
//     console.log("Removed all users");
//   }

//   db.User.create(initial_users)
//   , (err, users) => {
//     if (err) {
//       console.log("Error on creating books", err);
//     } else {
//       console.log("Created", users.length, "users");
//     }
//   });
// });

// db.Book.deleteMany({})
// , (err, books) => {
//   if (err) {
//     console.log("Error occurred in remove", err);
//   } else {
//     console.log("Removed all books");
//   }

  db.Book.create(initial_books)
//   , (err, books) => {
//     if (err) {
//       console.log("Error on creating books", err);
//     } else {
//       console.log("Created", books.length, "books");
//     }
//   });
// });
