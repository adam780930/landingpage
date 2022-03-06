import classes from './AboutPage.module.css';

function AboutPage() {
    return (
        
        <div className={classes.content}>
            <img src='https://www.hlj.com/media/catalog/product/cache/467d58fefb7842fb1aed595e14a86f25/b/a/bans63358_0.jpg' 
            className={classes.portrait} alt=""></img>
            
            <header className={classes.text}><span>Hi, I am Adam</span> <br></br>
            A self-taught front-end-developer currently pursuing opportunities <br></br>
            to begin my career in the web developer industry. <br></br>
            I am currently located in Los Angeles, California. I can make websites
            using HTML, CSS, JAVASCRIPT and REACT.JS <br></br>
            I am always looking to learn more and open for all opportunities and projects.
            
            </header>


            
        </div>
    );
}

export default AboutPage;
