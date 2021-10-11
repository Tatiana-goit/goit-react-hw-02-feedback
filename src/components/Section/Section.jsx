import s from './Section.module.css'

function Section ({title,children}) {
    return (
        <div className={s.section}>
            <h1 className={s.title}>{title}</h1>
            {children}
        </div>
    )
}

export default Section;