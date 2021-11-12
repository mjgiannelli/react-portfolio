import './index.css';

const BaseballCardBack = (props) => {
    return (
        <div>
            <div id='back-card-container' className='card-container' onClick={props.handleClick}>
                <div id='back-card-body'>
                    <div id='back-header' className='row'>
                        <div className='topps-div'>
                            <img className='topps' src="https://www.logosurfer.com/wp-content/uploads/2018/03/topps-logo_0.png" alt="Topps Logo" />
                        </div>
                        <div id='num'>
                            14
                        </div>
                    </div>
                    <div id='stats-div'>
                        <h5 id='git-stats-header'>GitHub Stats</h5>
                        <div id='stats-box' className='box'>
                            <div id='stats-row-titles' className='row'>
                                <p className='col-2 stats'>Year</p>
                                <p className='col-2 stats'>Commits</p>
                                <p className='col-2 stats'>PRs</p>
                                <p className='col-2 stats'>Issues</p>
                                <p className='col-2 stats'>Total</p>
                            </div>
                            <div id='stats-row-nums' className='row'>
                                <p id='year' className='col-2 stats'>2021</p>
                                <p className='col-2 stats'>1,548</p>
                                <p className='col-2 stats'>144</p>
                                <p className='col-2 stats'>372</p>
                                <p className='col-2 stats'>2,064</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p id='placeholder-div' className="col-10">
                
            </p>
        </div>

    )
}

export default BaseballCardBack;