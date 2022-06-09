import React from "react";

import "../scss/dashboard/dashboard.scss"



const Dashboard = () => {
    return (
        <div className="dash-container">
            <h1 className="text-muted dash-title">Dashboard</h1>


            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
                            </div>
                            <div class="card-body">
                                <div class="chart-area">
                                    <canvas id="myAreaChart"></canvas>
                                </div>
                                <hr/>
                                    Styling for the area chart can be found in the
                                    <code>/js/demo/chart-area-demo.js</code> file.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;