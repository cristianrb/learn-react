import { useState } from "react"

export function TwitterFollowCard({children, userName = 'unknown'}) {
    const [isFollowing, setIsFollowing] = useState(false)
    const imageSrc = `https://unavatar.io/${userName}`

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassname = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    const handleClick = () => {
      setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imageSrc} alt="El avatar de asd" />
                <div className='tw-followCard-info'>
                    {children}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassname} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}