export const Candidate = () => {

    const names = ['React', 'Angular', 'Vue']


    return (
        names.map((name) => {
            let type = 'Library'
            if (name === 'Angular') {
                type = 'Framework'
            }
            return (
                <div className={'prfCard'} key={name}>
                    <div className={'prfImg'}>

                    </div>
                    <div className={'prfInfo'}>
                        <div>{name}</div>
                        <div>Unknown</div>
                        <div>{name} is a JS {type} and it is SUPER COOL!</div>
                    </div>

                </div>
            )
        })

    )
}