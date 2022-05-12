import './Side.css';

var fyllInn = document.getElementById('fyll');

function AboutClick(){
  fyllInn.innerHTML = '<h1>About me</h1> <p>I am a computer engineering student at USN Kongsberg. I enjoy working with frontend, and am fascinated with machine learning and robotics. During the winter i like to freeski and snowboard and went to folk high school after highschool to do exactly this. I like to watch football and movies and play video games.</p> <h1>Favourites</h1> <p>Football team: Liverpool<br/>Movie: 2001: A Space Odyssey<br/>Game: Skate 3</p>'
}
function ContactClick(){
  fyllInn.innerHTML = '<p>Phone: +4748028855<br/>E-mail: krstsolh@gmail.com</p>'
}
function YtClick(){
  fyllInn.innerHTML = '<h1>Coming Soon :p</h1>'
}
function SlhkClick(){
  fyllInn.innerHTML = '<h1>SolheimKoin</h1> <p>In the spring of 2022 I decided to create my own crypto token called SolheimKoin (SLHK). The token is based on the Solana blockchain. I did this just for fun and if you want some SolheimKoin you can create a Phantom wallet and contact me with the adress of your wallet and will send you 100 SolheimKoins!</p><a href="https://solscan.io/token/Fe49uKc9471umPfsSqPbJQR473dYMokdqNuLtWLCPxss">SolheimKoin on Solscan</a><br></br><a href="https://phantom.app/">Phantom</a>'
}

function Side() {
  return (
    <div id='side' className='side'>
        <div className='header'>
            <h1>Kristoffer Solheim</h1>
            <h3>Computer Engineering Student</h3>
        </div>
        <div id='menu' className='menu'>
            <h1 onClick={AboutClick}>About</h1>
            <h1 onClick={ContactClick}>Contact</h1>
            <h1 onClick={YtClick}>YouTube</h1>
            <h1 onClick={SlhkClick}>SolheimKoin</h1>
        </div>
        <div id='fyll' className='fyll'>
          
        </div>
    </div> 
  );
}

export default Side;