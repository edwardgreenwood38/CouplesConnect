import React from 'react';

// Mock Who's online page 
function Members() {
    return (
        <div>
            <h2>Online Now</h2>
            {/* Buttons */}
            <div id="myBtnContainer">
                <button class="btn active" onclick="filterSelection('all')">Show all</button>
                <button class="btn" onclick="filterSelection('couples')">Couples</button>
                <button class="btn" onclick="filterSelection('friends')">Friends</button>
            </div>

            {/* Profolio Gallery Grid */}
            <div class="row">
                {/* online couples list, need to add images */}
                <div class="couples">
                    <div class="content">
                        <img src="/w3images/lights.jpg" alt="Lights" style= {{width: '100%'}} />
                        <h4>Todd & Amber</h4>
                            <p>Lorem ipsum dolor...</p>
                    </div>
                </div>
                <div class="couples">
                    <div class="content">
                        <img src="/w3images/lights.jpg" alt="Lights" style= {{width: '100%'}} />
                        <h4>Emma & Ryan</h4>
                            <p>Lorem ipsum dolor...</p>
                    </div>
                </div>
                <div class="couples">
                    <div class="content">
                        <img src="/w3images/lights.jpg" alt="Lights" style= {{width: '100%'}} />
                        <h4>Steve & Amanda</h4>
                            <p>Lorem ipsum dolor...</p>
                    </div>
                </div>
                <div class="couples">
                    <div class="content">
                        <img src="/w3images/lights.jpg" alt="Lights" style= {{width: '100%'}} />
                        <h4>Daniel & Haliey</h4>
                            <p>Lorem ipsum dolor...</p>
                    </div>
                </div>
                <div class="couples">
                    <div class="content">
                        <img src="/w3images/lights.jpg" alt="Lights" style= {{width: '100%'}} />
                        <h4>Jermaine & Chrystal</h4>
                            <p>Lorem ipsum dolor...</p>
                    </div>
                </div>
                <div class="couples">
                    <div class="content">
                        <img src="/w3images/lights.jpg" alt="Lights" style= {{width: '100%'}} />
                        <h4>Mark & Tammy</h4>
                            <p>Lorem ipsum dolor...</p>
                    </div>
                </div>
            </div>
            <div class="row">
                {/* online friends list, need to add images */}
                <div class="friends">
                    <div class="content">
                        <img src="/w3images/nature.jpg" alt="Nature" style= {{width: '100%'}} />
                        <h4>Terry & Sue</h4>
                            <p>Lorem ipsum dolor...</p>
                    </div>
                </div>
            </div>
            <div class="friends">
                    <div class="content">
                        <img src="/w3images/nature.jpg" alt="Nature" style= {{width: '100%'}} />
                        <h4>Moby & Tobi</h4>
                            <p>Lorem ipsum dolor...</p>
                    </div>
                </div>
                <div class="friends">
                    <div class="content">
                        <img src="/w3images/nature.jpg" alt="Nature" style= {{width: '100%'}} />
                        <h4>Matt & Lindsey</h4>
                            <p>Lorem ipsum dolor...</p>
                    </div>
                </div>
                <div class="friends">
                    <div class="content">
                        <img src="/w3images/nature.jpg" alt="Nature" style= {{width: '100%'}} />
                        <h4>Justin & Nicole</h4>
                            <p>Lorem ipsum dolor...</p>
                    </div>
                </div>
                <div class="friends">
                    <div class="content">
                        <img src="/w3images/nature.jpg" alt="Nature" style= {{width: '100%'}} />
                        <h4>Tanya & Omar</h4>
                            <p>Lorem ipsum dolor...</p>
                    </div>
                </div>
                <div class="friends">
                    <div class="content">
                        <img src="/w3images/nature.jpg" alt="Nature" style= {{width: '100%'}} />
                        <h4>Deroya & Brandon</h4>
                            <p>Lorem ipsum dolor...</p>
                    </div>
                </div>
           {/* END GRID */}
        </div>
        
    );
};


export default Members;