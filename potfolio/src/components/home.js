import React, { Component } from 'react';
import portifolioImg from '../images/picDress.jpg';
import ZyzyImg from '../images/Zz.gif';
import shelter from '../images/Shelter.png';
import techImg from '../images/techBot.gif';
import google from '../images/googleNest.png';
import jh from '../images/jh.jpg';
import python from '../images/skills/python.png';
import js from '../images/skills/js.png';
import sql from '../images/skills/sql.png';
import json from '../images/skills/json.png';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            activeContent:'skills',
        }
    }

    showContent=(content)=>{
        this.setState({activeContent:content});
    };

    render(){
        const {activeContent}=this.state;

        return(
        <div className="container">
            
            <div className="down">
                <nav className="menu">
                    <ul className="menu-list">
                        <li><a href="#" className={((activeContent==='claire')?'active':'')} onClick={()=>this.showContent('claire')}> Claire</a></li>
                        <li><a href="#" className={((activeContent==='projects')?'active':'')} onClick={()=>this.showContent('projects')}>Projects</a></li>
                        <li><a href="#" className={((activeContent==='skills')?'active':'')} onClick={()=>this.showContent('skills')}>Skills</a></li>
                        <li><a href="#" className={((activeContent==='blog')?'active':'')} onClick={()=>this.showContent('blog')}>Blog</a></li>
                        <li><a href="#" className={((activeContent==='career')?'active':'')} onClick={()=>this.showContent('career')}>Career</a></li>
                    </ul>
                </nav>

                <div className={"top "+((activeContent==='claire')?'show':'hide')}>
                    <img src={portifolioImg} alt="" className="protfolio-img" />
                    <h3 className="profile-name">Claire Muwanguzi</h3>
                    <h3 className="profession">Software Engineer</h3>
                    <ul className="social-link">
                        <li><a href="https://twitter.com/Claire_codes"><i className={'fab fa-facebook'} /></a></li>
                        <li><a href="https://twitter.com/Claire_codes"><i className={'fab fa-twitter'} /></a></li>
                        <li><a href="https://github.com/Claire56"><i className={'fab fa-github'} /></a></li>
                        <li><a href="https://www.linkedin.com/in/claire-muw/"><i className={'fab fa-linkedin'} /></a></li>
                    </ul>
            </div>
            
                <div className={"projects "+((activeContent==='projects')?'show':'hide')} >
                    <div className="project-item">
                        <img src={ZyzyImg} alt="Zyzy-gif" className ="project-img"/>
                        <h3 className="project-title"> Zyzy </h3>
                        <p className="project-info">
                        Zyzy app uses machine learning to estimate the value of
                        a house in a given location. A user provides his house details and gets
                        price estimate plus regional statistics.
                     <a href="https://github.com/Claire56/House_value_estimate"> More details </a>
                        </p>
                        <div className={'stack'}>
                            <p><b>Tech Stack:</b> Python, JavaScript, AJAX, SQL, Flask, jQuery, kepler.gl</p>
                        </div>
                    </div>
                    <div className="project-item">
                        <img src={techImg} alt="TechBot-gif" className ="project-img"/>
                        <h3 className="project-title"> Tech Bot</h3>
                        <p className="project-info">
                        Claire TechBot1 is a twitter bot, that uses the twitter API to search for
                        tweets retweets and likes tweets based on specifications.
                        <a href="https://twitter.com/ClaireTechBot1"> More details </a>
                        </p>
                        <div className={'stack'}>
                            <p><b>Tech Stack:</b> Python, JavaScript, AJAX, SQL, Flask, jQuery</p>
                        </div>
                    </div>
                    <div className="project-item">
                        <img src={techImg} alt="" className ="project-img"/>
                        <h3 className="project-title">Hellp</h3>
                        <p className="project-info">
                        Helper
                    Helper is a web app that uses the google geocode API and Four Square API
                    to get search for a venue based on the needs of the user.
                    <a href="https://github.com/Claire56/House_value_estimate"> More details </a>
                        </p>
                        <div className={'stack'}>
                            <p><b>Tech Stack:</b> Python, JavaScript, AJAX, SQL, Flask, jQuery</p>
                        </div>
                    </div>
                </div>
                <div className={"tech-skills "+((activeContent==='skills')?'show':'hide')}>
                    <div className="skills-grouping" >
                        <h3 >LANGUAGES</h3>
                        <div className='skills'>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span>Python</span>
                            </div>
                            <div className="skill">
                                <img src={"https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png"}  alt=""/>
                                <span>JavaScript</span>
                            </div>
                            <div className="skill">
                                <img src={'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'}  alt=""/>
                                <span> React</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span>HTML5</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span> CSS</span>
                            </div>
                            <div className="skill">
                                <img src={python} alt=""/>
                                <span>SAS</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span>R</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span>AJAX</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills-grouping" >
                        <h3 >Libraries and Frameworks</h3>
                        <div className='skills'>
                            <div className="skill">
                                <img src={python} alt =""/>
                                <span>SKLearn</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span>Pandas</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span>NumPy</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span>Matplotlib</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span> Seaborn</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span>Jinja</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span> Flask</span>
                            </div>
                             <div className="skill">
                                <img src={python}  alt=""/>
                                <span>JQuery</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span> Django</span>
                            </div>

                        </div>
                    </div>

                    <div className="skills-grouping" >
                        <h3 >Cloud Technologies</h3>
                        <div className='skills'>
                            <div className="skill">
                                <img src={python} alt =""/>
                                <span>AWS</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span>G Cloud</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span> IBM Cloud</span>
                            </div>

                        </div>
                    </div>

                    <div className="skills-grouping" >
                        <h3 >Databases</h3>
                        <div className='skills'>
                            <div className="skill">
                                <img src={python} alt =""/>
                                <span>PostgreSQl</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span>MySQl</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span> SQLite</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span>Oracle</span>
                            </div>
                            <div className="skill">
                                <img src={python}  alt=""/>
                                <span>SQL Server</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={'career ' +((activeContent==='career')?'show':'hide')}>
                    <div className= "careerLinks">
                    
                        <table className = 'career_table' >
                            
                        <tr>
                                <td class="company">
                                <a href="https://hackbrightacademy.com/"><img src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3982/s300/new-logo-monochromatic-gradient.png" width="70" height="60" class="country-tag" data-toggle="tooltip" data-placement="left" data-delay="-1" title="Hackbright Academy"/></a>
                                </td>
                                <td>
                                <a href="https://hackbrightacademy.com/"><b>Hackbright Academy</b></a>
                                
                                <h4 className ="profession">Software Engineer</h4>
                                </td>
                                <td>
                                <b>Jan 2018 - Present</b>
                                </td>
                             </tr>
                             <tr>
                                <td class="company">
                                <a href="https://shelterinc.org/"><img src={shelter} width="100" height="60" class="country-tag" data-toggle="tooltip" data-placement="left" data-delay="-1" title="shelter"/></a>
                                </td>
                                <td>
                                <a href="https://hackbrightacademy.com/"><b> Shelter INC</b></a>
                                
                                <h4 className ="profession"> Data Analyst-Python </h4>
                                </td>
                                <td>
                                <b>June 2018 - Dec 2018</b>
                                </td>
                             </tr>
                             <tr>
                                <td class="company">
                                <a href="https://nest.com/"><img src= {google} width="100" height="80" class="country-tag" data-toggle="tooltip" data-placement="left" data-delay="-1" title="google"/></a>
                                </td>
                                <td>
                                <a href="https://nest.com/"><b> Google Nest </b></a>
                                
                                <h4 className ="profession">  Data Specialist UX Research </h4>
                                </td>
                                <td>
                                <b> May 2017 - May 2018 </b>
                                </td>
                             </tr>
                            <tr>
                                <td class="company">
                                <a href="https://www.jacksonhewitt.com/"><img src= {jh} width="70" height="70" class="country-tag" data-toggle="tooltip" data-placement="left" data-delay="-1" title="jh"/></a>
                                </td>
                                <td>
                                <a href="https://www.jacksonhewitt.com/"><b> Jackson Hewwit </b></a>
                                
                                <h4 className ="profession"> Data Analyst </h4>
                                </td>
                                <td>
                                <b>Dec 2015 - May 2017</b>
                                </td>
                             </tr>
                        </table>
                    
                    </div>
                </div>

                <div className={"blogs "+((activeContent==='blog')?'show':'hide')} >
                    <div className='blog_item'>
                        <ul>
                            <li>
                            <p> How to build a twitter Bot: <b>Tech stack: </b>python, Tweepy, Twitter API</p>
                    
                            <a href= 'https://medium.com/@mclamu/build-a-twitter-bot-using-python-and-tweepy-31c50a0a835e'> More Details</a>

                            </li>
                            <li>
                            <p> Using gifs to showcase your web project: <b>Tech stack: </b>Giphy </p>
                            <a href= 'https://medium.com/@mclamu/create-a-gif-for-your-web-project-d091bf69c1a9'> More Details</a>
                            </li>
                            
                            <li>
                            <p> Analyse the titanic dataset: <b>Tech stack: </b>Tpython, Pandas, Numpy and Seaborn</p>
                            <a href= 'https://github.com/Claire56/Data_Analysis/blob/master/RoughCopy-Titanic.ipynb'> More Details</a>
                            </li>
                            <li><p>Investigate the exponential distribution in R and compare it with the Central Limit Theorem <b>Tech stack: </b> R</p>
                            <a href= 'http://rpubs.com/Claire56/331200'> More Details </a></li>
                            <li><p>Exploring the Impact of Severe Weather on the Health and Economy of USA, CASE STUDY:NOAA Storm Database <b>Tech stack: </b> R</p>
                            <a href= 'http://rpubs.com/Claire56/318191'> More Details </a></li>

                            <li><p> Analyzing the ToothGrowth data set  <b>Tech stack: </b> R</p>
                            <a href= 'http://rpubs.com/Claire56/331210'> More Details </a></li>

                            <li><p> Create a leaflet: <b>Tech stack: </b> R</p>
                             <a href= 'http://rpubs.com/Claire56/333823'> More Details</a></li>
                        </ul>
                    
                    </div>
                   
                    
                    <div className='blog_item'>
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
};

export default Home;
