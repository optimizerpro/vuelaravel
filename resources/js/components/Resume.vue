<template>
    <header>
        <h1>John Doh!</h1>

        <div class="row">
            <ul>
                <li class="address"><i class="fa fa-home fa-1x"></i>123 Some Address, SomeCity, Ontario A1B 2C3</li>
                <li class="phone">
                    <span><i class="fa fa-phone fa-1x"></i>519 555 1234</span>
                    <span><i class="fa fa-mobile fa-1x"></i>519 666 1234</span>
                </li>
                <li class="email"><i class="fa fa-envelope fa-1x"></i>Youremail@yourdomain.ca</li>
            </ul>
        </div>
    </header>

    <article>
        <h2>Languages and Technologies</h2>

        <div class="row tech">
            <ul>
                <li><span>Communication</span>: English (fluent, native)</li>
                <li><span>Languages</span>: Java, PHP, SQL, HTML, CSS, LESS, JSON</li>
                <li><span>Exposure</span>: C, C++, C#, Objective-C, XML, UNIX Shell, JavaScript, Assembly</li>
                <li><span>SDKs</span>: Android, iOS</li>
                <li><span>IDE</span>: Eclipse, Aptana, Visual Studio, PhpStorm, Notepad++, Xcode</li>
                <li><span>Tools</span>: Photoshop, C Shell, GCC, SSH, FTP, MySQL, WAMP, LAMP stack, CodeIgniter,
                    Drupal, Concrete5, Bootstrap</li>
                <li><span>Version Control</span>: Git, SVN</li>
                <li><span>Operating Systems</span>: Windows XP, Windows Vista, Windows 7, Windows 8, Ubuntu, Linux
                </li>
            </ul>
        </div>
    </article>

    <article>
        <h2>Education</h2>

        <div class="row">
            <ul>
                <li class="right">
                    <ul>
                        <li>Sept 2011</li>
                        <li>Current</li>
                    </ul>
                </li>
                <li class="header">Undergraduate, BSc (Hons) Computer Science</li>
                <li>University of SomeCity, SomeCity, United Kingdom</li>
                <li class="description">Concentration in Object Oriented Programming, Web Development, and
                    Mathematics</li>
            </ul>
        </div>

        <div class="row">
            <ul>
                <li class="right">
                    <ul>
                        <li>Sept 2003</li>
                        <li>June 2009</li>
                    </ul>
                </li>
                <li class="header">Graduate, Ontario Secondary School Diploma</li>
                <li>AnotherCity Collegiate Institute, AnotherCity, Ontario, Canada</li>
            </ul>
        </div>
    </article>

    <article>
        <h2>Experience</h2>

        <div class="row exp-list">
            <ul>
                <li class="right">
                    <ul>
                        <li>Oct 2013</li>
                        <li>May 2014</li>
                    </ul>
                </li>
                <li class="header">Student Teaching Assistant, <span>University of SomeCity</span></li>
                <li><i class="fa fa-caret-right fa-1x"></i>Assisted instructors by providing additional aid to
                    students during their practical sessions</li>
                <li><i class="fa fa-caret-right fa-1x"></i>Reviewed materials prior to scheduled practical session
                    to provide accurate answers to questions</li>
            </ul>
        </div>

        <div class="row exp-list">
            <ul>
                <li class="right">
                    <ul>
                        <li>Feb 2009</li>
                        <li>Sept 2009</li>
                        <li></li>
                        <li>June 2010</li>
                        <li>Sept 2010</li>
                    </ul>
                </li>
                <li class="header">IT Technical Support Agent, <span>Fake Computer Systems Corporation</span></li>
                <li><i class="fa fa-caret-right fa-1x"></i>Performed full system setups, including building and
                    initial system configuration.</li>
                <li><i class="fa fa-caret-right fa-1x"></i>Installation of Windows or Linux Operating Systems.</li>
                <li><i class="fa fa-caret-right fa-1x"></i>Assisted clients in person, and over the phone, to
                    troubleshoot their system’s technical issues. Followed up to verify there were no additional
                    issues.</li>
                <li><i class="fa fa-caret-right fa-1x"></i>Installed software; provided technical support and
                    guidance for the software.</li>
                <li><i class="fa fa-caret-right fa-1x"></i>Ensured client’s hard drives were backed up to prevent
                    data loss.</li>
                <li><i class="fa fa-caret-right fa-1x"></i>Performed thin client setups, both onsite, and remotely
                    using a Remote Desktop Protocol connection. Followed a set of strict guidelines</li>
                <li><i class="fa fa-caret-right fa-1x"></i>Assisted in the launch of several websites, including
                    launch-day troubleshooting, and weekly maintenance and updates.</li>
            </ul>
        </div>

        <div class="row exp-list">
            <ul>
                <li class="right">
                    <ul>
                        <li>Aug 2013</li>
                    </ul>
                </li>
                <li class="header">Website Development, and Administration, <span>SomeCompany</span></li>
                <li><i class="fa fa-caret-right fa-1x"></i>Held key responsibility to research, develop, and deploy
                    a website for the company. Updated and maintained the website’s Sales section through documents
                    provided routinely via email.</li>
                <li><i class="fa fa-caret-right fa-1x"></i>Provided custom-written procedural documentation to the
                    business owner, on how to properly use their website’s core functions.</li>
            </ul>
        </div>
    </article>

    <article>
        <h2>References</h2>

        <div class="row">References Available Upon Request</div>
    </article>
</template>
<script>
export default {

}
</script>
<style scoped>
h1,
h2,
h3,
h4 {
    -webkit-margin-before: 0px;
    -webkit-margin-after: 0.5em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;

    border-bottom: 3px solid #E32636;
    display: inline-block;
    color: #333333;
    font-weight: 600;
    text-transform: uppercase;
}

ul {
    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;

    list-style: none;
}

.container {
    width: 50%;
    height: auto;

    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.row {
    padding-bottom: 15px;
    padding-left: 20px;
}

header {
    display: inline-block;
    margin-top: 50px;
}

header h1 {
    font-size: 40pt;
}

header ul {}

header ul li {
    height: 25px;
}

header ul li i {
    color: #E32636;
    padding-right: 5px;
    padding-left: 5px;
    font-size: 18px;
}

article {
    margin-top: 20px;
}

article h2 {
    font-size: 20pt;
}

article .header {
    color: #E32636;
    font-weight: 600;
}

article .header span {
    font-size: 10pt;
    font-style: italic;
}

article .right {
    float: right;
    width: 10%;
    font-weight: 600;

}

article .description {
    font-style: italic;
    font-size: 9pt;
}

article .exp-list .fa {
    color: #E32636;
    padding-right: 5px;
    font-size: 12px;
}

article ul li {
    min-height: 25px;
    max-width: 80%;
}

article .reference {
    width: 40%;
    display: inline-block;
}

article .reference ul li {
    max-width: 100%;
}

article .spacer {
    height: 15px;
}

article .tech ul li {
    max-width: 100% !important;
}

article .tech span {
    font-weight: 600;
    color: #E32636;
}
</style>