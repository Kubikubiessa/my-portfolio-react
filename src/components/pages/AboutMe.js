import React from 'react';

function AboutMe() {
    return (
        <section>
<div>
<h1 className='pager-header'>About Me</h1>
</div>
<div className='page-center'>
    <img src={require('../../assets/me.png')} alt=' Heidrun Kubiessa'
    className='photo'/>

</div>
<div>
    <p>
        Hi there! I'm Heidrun Kubiessa, a fullstack web developer. From the humanities and the classroom to lines of code on a webpage, I love bringing together the tech world with the human experience at large. I'm poised to create interfaces and solve problems with a vision. 
        I'm excited for any opportunity for refining my skills and contribute with my ideas and creativity with an excellent and diverse team. Feel free to contact at: 
        </p>
        
    
</div>
        </section>
    )
}
export default AboutMe