import React, { Component } from 'react';
import './interest.css';

export class Interest extends Component {
    render() {
        return (
            <>
                <div className="interest_main">
                    <h2>My Web Development LifeCycle</h2>
                    <div className="interestHead_main">
                        <div className="interest_area">
                            <img src="https://cdn3.iconfinder.com/data/icons/creativity-and-design-1/512/Web_Development_Icon-01-512.png" alt="no" />
                            <p>Web Design</p>
                        </div>
                        <div className="interest_area">
                            <img src="https://icons-for-free.com/iconfiles/png/512/ui+ux+web+web+design+icon-1320166165572916697.png" alt="no" />
                            <p>Responsive Website</p>
                        </div>
                        <div className="interest_area">
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/web-development-56-692509.png" alt="no" />
                            <p>Web Development</p>
                        </div>
                        <div className="interest_area">
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/web-hosting-503942.png" alt="no" />
                            <p>Web Server</p>
                        </div>
                        <div className="interest_area">
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/database-management-8-805222.png" alt="no" />
                            <p>DataBase</p>
                        </div>
                        <div className="interest_area">
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/deployment-2369058-1978336.png" alt="no" />
                            <p>Deployment</p>
                        </div>
                    </div>

                </div>
                <div className="interested_quotes">
                    <pre>
                        " <span>SUCCESS</span> is a lousy teacher.<br />
                        It seduces smart people into<br />
                            thinking they can't lose. "
                    </pre>
                </div>
            </>

        )
    }
}

export default Interest;
