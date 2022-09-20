import {findAllByDisplayValue} from "@testing-library/react";

export const ListComponent = ()=>{
    const items = ['React', 'Angular', 'Vue']
    return (
        <div>
            {
                items.map((item) => {
                    return <div key={item} className={'lang'}>{item}</div>
                })
            }
        </div>
    )

}