const e = React.createElement; 
var position = false; 

function goLeft() {
    panel = document.getElementsByClassName('nav_panel')[0];
    panel.style.right += 1 + 'px';
    
}

window.addEventListener('scroll', function() {
    var temp = position;
    if(pageYOffset > 160) position = true;
    else position = false;
    if(position != temp){
        class NavPanel extends React.Component {
        constructor(props) {  
            super(props);
            this.state = { show: false };
        }
        render() {
            this.state.show = (pageYOffset > 160);
            if (this.state.show == false) {
                return null; 
            }
            else {
                return e(
                    'div', 
                    {className: 'nav_panel'},
                    e('div',{onClick: () => window.scrollTo(pageXOffset, 0), className: 'home_panel panel_active'}, 'HOME'),
                    e('div',{className: 'portf_panel'}, 'PORTFOLIO'),
                    e('div',{className: 'about_panel'}, 'ABOUT US'),
                    e('div',{className: 'contact_panel'}, 'CONTACT')
                );
            }
        }
    } 
    domContainer = document.getElementById('nav_panel');
    ReactDOM.render(e(NavPanel), domContainer);
    goLeft();
}
});