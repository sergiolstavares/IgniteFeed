import { Header } from "./components/Header"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/sergiolstavares.png',
      name: 'SΓ©rgio Leonardo',
      role: 'Desenvolvedor'
    },
    content: [
      {type:'paragraph', content: 'Fala galeraa π'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'},
      {type: 'link', content: 'π jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Desenvolvedor'
    },
    content: [
      {type:'paragraph', content: 'Fala galeraa π'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'},
      {type: 'link', content: '<a href="">π jane.design/doctorcare</a>'}
    ],
    publishedAt: new Date('2022-08-17 20:00:00')
  },
]


function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
