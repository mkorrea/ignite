import styles from './Post.module.css'

export function Post() {
   return (
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <img src="https://github.com/mkorrea.png" />
               <div className={styles.authorInfo}>
                  <strong> Matheus Correa </strong>
                  <span> Web Developer </span>
               </div>
            </div>  

            <time 
               title='24 de maio ás 17:00h'
               dateTime="2024-05-24 17:00:00"
            >
               Publicado há 1h
            </time>
         </header>

         <div className={styles.content}>
         <p>Fala galeraa 👋</p>
         <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
         <p><a href="#">jane.design/doctorcare</a> </p>
         <p> 
            <a href="#">#novoprojeto</a> {' '}
            <a href="#">#nlw</a> {' '}
            <a href="#">#rocketseat</a>
         </p>
         </div>

         <form className={styles.commentForm}>
            <textarea 
               placeholder='Deixe um comentário'
            />

            <button type='submit'>Comentar</button>
         </form>
      </article>
   )
}