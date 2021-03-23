import React from 'react';
import './style.css';
import './games'
import Button from '../Button';


const Stadia = ({ list, feature, text }) => {
    // const {list, feature} = props;
    return (

        <div >
            <div style={{ textAlign: 'center' }}>
                <h2>Featured Games</h2>
            </div>
            <div className="body2">

                {feature.map((games) => {
                    return (

                        <div key={feature}>{games.image} <br />{games.name}
                        </div>

                    );
                })}

                <img src="https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Cyberpunk_2077_300x400.jpg" alt="" /><br />Cyberpunk
                 <img src="https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Immortals_Fenyx_Rising_300x400.jpg" alt="" /><br />Immortals
                 <img src="https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Destiny_2__The_Collection_1x.jpg" alt="" /><br />Destiny_2
                 <img src="https://www.gstatic.com/stadia/gamers/landing_page/assets/games/assassinscreed_valhalla_1x.jpg" alt="" /><br />assassinscreed_valhalla
                 <img src="https://www.gstatic.com/stadia/gamers/landing_page/assets/games/outcasters_1x.jpg" alt="" /><br />outcasters

            </div>
            <div style={{ textAlign: 'center' }}>
                <logo />
                <svg class="xduoyf" width="263" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M57.424 6.806C47.966 2.196 25.496-5.172.695 12.253a1.622 1.622 0 00-.543 2.012L5.38 26.04a1.67 1.67 0 002.082.881C13.458 24.73 22.51 22.424 31.9 23.78c-6.359 1.084-11.473 3.322-15.388 5.718a1.657 1.657 0 00-.656 2.056s2.082 4.77 3.213 7.368a1 1 0 001.63.294c1.199-1.266 2.534-2.192 3.62-2.825 5.069-2.938 12.084-5.13 21.565-4.61a1.639 1.639 0 001.652-1.13l2.398-7.188a1.652 1.652 0 00-.679-1.92c-7.037-4.43-17.853-8.137-33.557-6.035l.045-.023c16.428-7.39 30.774-2.938 38.445.791.724.34 1.584 0 1.833-.768l2.24-6.713a1.621 1.621 0 00-.837-1.989z" fill="url(#i5)"></path><path d="M116.551 12.252V9.314a.917.917 0 00-.928-.926H94.466a.917.917 0 00-.928.926v2.916c0 .52.407.926.928.926h8.01v18.895c0 .52.408.926.928.926h3.281a.917.917 0 00.928-.926V13.179h8.01a.917.917 0 00.928-.927zM85.596 18.264H75.232c-.86 0-1.561-.7-1.561-1.56v-1.966c0-.858.701-1.559 1.561-1.559h14.822c.52 0 .927-.407.927-.927V9.314a.917.917 0 00-.927-.926h-13.94c-2.85 0-4.525.52-5.815 1.785-1.2 1.198-1.697 2.712-1.697 5.266v.497c0 2.532.498 4.069 1.697 5.266 1.267 1.266 2.942 1.786 5.816 1.786H86.5c.86 0 1.561.7 1.561 1.56v2.124c0 .859-.701 1.56-1.561 1.56H70.887a.917.917 0 00-.927.926v2.915c0 .52.407.927.928.927h14.708c2.851 0 4.525-.52 5.815-1.785 1.2-1.198 1.697-2.712 1.697-5.266v-.656c0-2.531-.497-4.068-1.697-5.266-1.29-1.243-2.964-1.763-5.815-1.763zM153.82 8.388h-11.292a.917.917 0 00-.927.926v22.782c0 .52.407.927.927.927h11.292c3.824 0 6.743-.995 8.689-2.939 2.127-2.124 2.874-4.542 2.874-9.288v-.159c0-4.746-.747-7.164-2.874-9.289-1.946-1.966-4.888-2.96-8.689-2.96zm6.426 12.408c0 3.164-.203 4.678-1.448 5.921-1.018 1.017-2.647 1.514-5.001 1.514h-7.082V13.224h7.082c2.354 0 3.983.498 5.001 1.514 1.245 1.244 1.448 2.758 1.448 5.922v.136zM172.782 8.388h-3.281a.917.917 0 00-.928.926v22.737c0 .52.407.926.928.926h3.281c.52 0 .927-.406.927-.926V9.314a.946.946 0 00-.927-.926zM128.928 9.838a3.298 3.298 0 00-2.941-1.831 3.298 3.298 0 00-2.942 1.83l-10.5 21.833a.935.935 0 00.838 1.333h3.462c.475 0 .928-.27 1.131-.723l1.584-3.435h12.83l1.584 3.435c.204.43.634.723 1.132.723h3.462a.935.935 0 00.837-1.333L128.928 9.838zm-7.263 14.441l4.344-9.83 4.322 9.83h-8.666zM202.968 31.67L192.446 9.838a3.298 3.298 0 00-2.941-1.831 3.298 3.298 0 00-2.942 1.83L176.064 31.67a.934.934 0 00.837 1.333h3.507a1.19 1.19 0 001.086-.7l1.607-3.458h12.83l1.584 3.435c.204.43.634.723 1.132.723h3.462c.701 0 1.154-.723.859-1.333zm-17.763-7.39l4.345-9.832 4.322 9.831h-8.667z" fill="#3D4043"></path><path d="M259.501 25.633h-51.524a1.743 1.743 0 01-1.561-.995l-9.776-20.34a.994.994 0 01.905-1.424h51.525c.656 0 1.267.384 1.561.994l9.776 20.34c.294.656-.181 1.425-.906 1.425z" fill="url(#i6)">
                </path><path d="M247.305 8.751c-1.041-1.04-2.58-1.56-4.594-1.56h-.497c-2.014 0-3.576.52-4.594 1.56-1.131 1.13-1.516 2.396-1.516 4.927v1.153c0 2.508.407 3.797 1.516 4.927 1.041 1.04 2.58 1.56 4.594 1.56h.497c2.014 0 3.576-.52 4.594-1.56 1.131-1.13 1.516-2.396 1.516-4.927v-1.176c0-2.508-.385-3.797-1.516-4.904zm-.973 6.08c0 1.74-.113 2.599-.815 3.3-.565.564-1.493.858-2.806.858h-.497c-1.313 0-2.241-.271-2.806-.859-.702-.7-.815-1.56-.815-3.3v-1.175c0-1.74.113-2.599.815-3.3.565-.564 1.493-.858 2.806-.858h.497c1.313 0 2.241.271 2.806.859.702.7.815 1.56.815 3.3v1.175zM228.116 7.462h-4.979c-.068 0-.135.023-.203.045-.136.046-.227.159-.294.294-.023.068-.046.136-.046.204V20.57a.55.55 0 00.543.542h1.449a.55.55 0 00.543-.542v-3.797h3.009c.385 0 .747-.023 1.109-.068.226.43.611 1.153.882 1.672v.023c.136.249 1.154 2.215 1.177 2.238.136.248.317.474.702.474h1.267c.181 0 .384-.09.475-.248.068-.113.09-.226.045-.34-.045-.135-1.765-3.39-2.104-4l-.294-.542c.249-.159.452-.34.656-.52.656-.655 1.018-1.379 1.177-2.396 0 0 .09-.497.09-.926a5.4 5.4 0 00-.113-.972c-.181-.995-.521-1.695-1.177-2.35-.882-.905-2.195-1.357-3.914-1.357zm-3.055 2.328h3.055c1.018 0 1.719.204 2.149.633.408.407.589.95.589 1.695 0 .746-.204 1.288-.589 1.695-.43.43-1.131.633-2.149.633h-3.055V9.79zM214.811 7.462h-4.978c-.068 0-.136.023-.204.045-.136.046-.226.159-.294.294a.648.648 0 00-.045.204V20.57a.55.55 0 00.543.542h1.448a.55.55 0 00.543-.542v-3.797h3.009c1.72 0 3.033-.452 3.938-1.334.656-.655 1.018-1.378 1.176-2.395 0-.023.091-.498.091-.927 0-.43-.113-.95-.113-.972-.181-.994-.543-1.695-1.199-2.35-.883-.882-2.195-1.334-3.915-1.334zm-3.055 2.328h3.055c1.018 0 1.72.204 2.15.633.407.407.588.95.588 1.695 0 .746-.204 1.288-.588 1.695-.43.43-1.132.633-2.15.633h-3.055V9.79z" fill="#fff"></path><defs><linearGradient id="i5" x1="20.948" y1="-.504" x2="42.591" y2="34.175" gradientUnits="userSpaceOnUse"><stop offset=".099" stop-color="#FF4C1D"></stop><stop offset=".251" stop-color="#F64523"></stop><stop offset=".499" stop-color="#DE3334"></stop><stop offset=".811" stop-color="#B61550"></stop><stop offset="1" stop-color="#9B0063"></stop></linearGradient><linearGradient id="i6" x1="196.541" y1="14.253" x2="218.508" y2="44.623" gradientUnits="userSpaceOnUse"><stop stop-color="#F8491B"></stop><stop offset=".505" stop-color="#F12F3F"></stop><stop offset="1" stop-color="#DC1860"></stop></linearGradient></defs></svg>
                <br />
                <h2>Play games in all their glory for free with Stadia Pro</h2>
                <p>Free games. More every month. Keep them as long as you’re a Stadia Pro member.<sup>1</sup></p>
            </div>

            <div className="body1" >
                {list.map((games) => {
                    return (

                        <div key={games}>{games.image} <br />{games.name}
                        </div>

                    );
                })}
            </div>
            <div className="restyle">
                <Button className="big-button" text={'Try Stadia Pro free for 1 month'} /><br />
             {/* {text.map((list) =>{
                    return (<Button className="big-button">{'Try Stadia Pro free for 1 month'}</Button>);
               }) }; */}
                <p><sup>1</sup>$9.99/mo after trial, cancel anytime.</p><br />
                <h2>More great games are waiting in the Stadia store</h2><br />
                <p>The games you buy go from screen… to screen… to screen. <a href="www.stadia.com">Compatible</a> laptops and phones. TVs. You have what it takes.</p>
            </div>
            <div className="body2">

                {list.map((list) => {
                    return (

                        <div key={list}>{list.image} <br />{list.name}
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default Stadia;
