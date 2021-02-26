import React from 'react'

function LoadingBox() {
    return (
        <div style={{display:'flex', justifyContent:'center',alignItems: 'center', height:'100vh'}}>
            <i className='fa fa-spinner fa-spin'></i>
             <h3> Loading...</h3>
        </div>
    )
}

export default LoadingBox
