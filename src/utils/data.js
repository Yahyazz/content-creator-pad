import { getFirestore, doc, onSnapshot, collection } from 'firebase/firestore';

let articles = [
  {
    id: 1,
    title: 'Belajar Menjadi Konten Kreator',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum?',
    duration: 15,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
  {
    id: 2,
    title: 'Jenis-jenis Konten dan Platform-nya',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum?',
    duration: 15,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
  {
    id: 3,
    title: 'Cara Agar Dapat Menarik Viewer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum?',
    duration: 15,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
  {
    id: 4,
    title: 'Macam-macam Cara Mengahasilkan Income',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum?',
    duration: 15,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
  {
    id: 5,
    title: 'Tricks and Tips Agar Trending',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum?',
    duration: 15,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
  {
    id: 6,
    title: 'Tutorial Videografi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum?',
    duration: 15,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
  {
    id: 7,
    title: 'Tarik Viewer mu Dengan Thumbnail Yang Menarik',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique sequi, itaque recusandae nulla quo qui eveniet reiciendis necessitatibus ipsa. Quod magni facilis quo, laborum modi iste reprehenderit numquam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet dolores error, porro dolorem mollitia fuga beatae similique aliquam aut. Accusamus quas nesciunt laborum incidunt esse quidem, dolore dolores harum?',
    duration: 15,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
];

function getDataList() {
  return articles;
}

function addContent(article) {
  articles = [...articles, { id: +new Date(), createdAt: new Date().toISOString(), ...article }];
}

function deleteContent(id) {
  articles = articles.filter((article) => article.id !== id);
}




const db = getFirestore()
const colRef = collection(db, 'articles')

onSnapshot(colRef, (snapshot) => {
    let articles = []
    snapshot.docs.forEach((doc) => {
        articles.push({ ...doc.data(), id: doc.id })
    })
    console.log(articles)
})

function getData(id) {
  
  const docRef = doc(db, 'articles', id)
  onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id)
  })

  // if (!id) {
  //   return null;
  // }
  // console.log(articles)
  // const filteredArticles = articles.filter((article) => article.id !== id);
  // console.log(filteredArticles)

  // if (!filteredArticles.length) {
  //   return null;
  // }

  // return filteredArticles[0];
}

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

export { getDataList, addContent, deleteContent, getData, showFormattedDate };
