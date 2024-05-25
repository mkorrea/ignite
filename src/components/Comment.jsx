import styles from './Comment.module.css'

import { Avatar } from './Avatar'

import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment () {
   return (
      <div className={styles.comment}>
          <Avatar hasBorder={false} src="https://github.com/luizcorreajr.png" />

          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong> Luiz Junior </strong>
                     <time 
                        title='24 de maio ás 17:00h'
                        dateTime="2024-05-24 17:00:00"
                     >
                        Cerca de 2h atrás
                     </time>
                  </div>

                  <button title='Deletar comentário'>
                     <Trash size={24} />
                  </button>
               </header>
               <p>
                  Muito bom Correa, parabens!!
               </p>
            </div>
            <footer>
               <button>
                  <ThumbsUp />
                  Aplaudir <span> 35 </span>
               </button>
            </footer>
          </div>
      </div>
   )
}