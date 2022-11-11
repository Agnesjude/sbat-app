import react from 'react';

export const GlobalFilter = ({ filter, setFilter }: { filter: any; setFilter: any }) => {
    return (
        <>
            <div className='globalSearch'>
                Search:
                <input value={filter || ''} onChange={e => setFilter(e.target.value)}></input>
            </div>
        </>

    )
}

export default GlobalFilter