import React from 'react'

const OtherCard = ({ clouds, precipitation }) => {
    return (
        <div className="other-info card">
            <span className="card-title">Other</span>
            <table className="without-border">
                <tbody>
                    <tr>
                        <td>Clouds:</td>
                        <td>{parseInt(clouds)}%</td>
                    </tr>
                    <tr>
                        <td>Precipitation:</td>
                        <td>{parseInt(precipitation * 100)}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OtherCard
