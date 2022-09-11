import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'
import styles from './Comment.module.css'

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment(props: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        props.onDeleteComment(props.content)
    }

    function handleLikeComment()  {
        setLikeCount((state) => {
            return state + 1
        })
    }
    
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/sergiolstavares.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Sérgio Leonardo</strong>
                            <time title="11 de maio as 08:13" dateTime="2022-07-28 08:13:11">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24}></Trash>
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}