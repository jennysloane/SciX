var welcome = {};

// --------------  things that vary from task to task --------------

welcome.task = {};
welcome.task.blurb = '<b>"Classic studies in Cognitive Psychology"</b> is a series of popular psychology experiments in addition to a few questionnaires.';
welcome.task.time = '30 minutes';
welcome.task.pay = 'US$7.50';

// --------------  things that vary between ethics approvals --------------

welcome.ethics = {};
welcome.ethics.approval = '3271';
welcome.ethics.name = 'Classic studies in Cognitive Psychology';
welcome.ethics.selection = 'You are invited to take part in this research study. The research study aims to learn about decision-making from some of the most classic cognitive psychology experiments. ' +
'You have been invited because you responded to a Human ' +
"Intelligence Task (HIT) on Amazon's Mechanical Turk platform.";
welcome.ethics.description = 'If you decide to take part in the research study, we will ask you to make responses and decisions in computer-based tasks. ' +
'It should take no longer ' +
'than 30 minutes to complete.<br>We cannot and do not guarantee or promise that you will receive any benefits from this study'

// ----------------------- function to start the task ------------------
welcome.run = function() {
    document.getElementById("welcome").innerHTML =
        welcome.section.header +
        welcome.section.start +
        welcome.section.consent //+
        //welcome.section.demographics; // comment out the demographics
}

// ------------- actions to take at the end of each click ----------------
welcome.click = {};
welcome.click.start = function() {
    welcome.helpers.setDisplay('start', 'none');
    welcome.helpers.setDisplay('consent', '');
    welcome.helpers.setHeader(' ');
}
welcome.click.consent = function() {
    welcome.helpers.setDisplay('consent', 'none');
    welcome.helpers.setDisplay('demographics', '');
    welcome.helpers.setHeader(' ');
    startExperiment(); // start the jsPsych experiment
}

welcome.click.demographics = function() {
    welcome.helpers.setDisplay('demographics', 'none');
    welcome.helpers.setDisplay('header', 'none');
    jsPsych.data.addProperties({  // record the condition assignment in the jsPsych data
        gender: welcome.helpers.getRadioButton("gender"),
        age: document.getElementById("age").value,
        language: document.getElementById("language").value,
        country: document.getElementById("country").value
    });
    startExperiment(); // start the jsPsych experiment
}



// ------------- html for the various sections ----------------
welcome.section = {};
welcome.section.header =
    '<!-- ####################### Heading ####################### -->' +
    '<a name="top"></a>' +
    '<h1 style="text-align:center; width:1200px" id="header" class="header">' +
    '   &nbsp; UNSW Computational Cognitive Science</h1>';

welcome.section.start =
    '<!-- ####################### Start page ####################### -->' +
    '<div class="start" style="width: 1000px">' +
    '<div class="start" style="text-align:left; border:0px solid; padding:10px;' +
    '                          width:800px; float:right; font-size:90%">' +
    '<p>Thanks for accepting the HIT. ' + welcome.task.blurb + ' It involves the following steps:</p>' +
    '<ol>' +
  //  '<li> We ask for demographic information (not connected to your Amazon ID)<br></li>' +
    '<li> Because this is a University research project, we ask for your informed consent. ' +
    '     (The format of the consent form is a  standard university document, so it sometimes ' +
    '     looks a little weird on MTurk)<br></li>' +
    '<li> You will read through detailed instructions before each task. </li>' +
    '<li> You will go through and complete 3 cognitive tasks followed by 3 brief questionnaires.<br></li>' +
    '<li> At the end, we will give you the completion code you need to get paid for the HIT.</li>' +
    '</ol>' +
    '<p>The total time taken should be about ' + welcome.task.time + '. Please <u>do not</u> use the "back" ' +
    '   button on your browser or close the window until you reach the end and receive your completion ' +
    '   code. This is very likely to break the experiment and may make it difficult for you to get paid.' +
    '   However, if something does go wrong, please contact us! When you are ready to begin, click on' +
    '   the "start" button below.</p>' +
    '<!-- Next button for the splash page -->' +
    '<p align="center"> <input type="button" id="splashButton" class="start jspsych-btn" ' +
    'value="Start!" onclick="welcome.click.start()"> </p>' +
    '</div>' +
    '</div>';

welcome.section.consent =
    '	<!-- ####################### Consent ####################### -->' +
    '	<div class="consent" style="display:none; width:1000px">' +
    '		<!-- Text box for the splash page -->' +
    '		<div class="consent" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
    '			<p align="right">Approval No ' + welcome.ethics.approval + '</p>' +
    '			<p align="center"><b>THE UNIVERSITY OF NEW SOUTH WALES<br>' +
    '			PARTICIPANT INFORMATION STATEMENT</b><br><br>' + welcome.ethics.name + '</p>' +

    '			<p><b>1.  What is the research study about?</b></p>' +
    '			<p>' + welcome.ethics.selection + '</p>' +

    '			<p><b>2.  Who is conducting this research?</b></p>' +
    '			<p>The study is being carried out by the following researchers: Steve Most and Jennifer Sloane from the School of Psychology. </p>' +
    "			<p><b>Research Funder:</b>This research is being funded by the UNSW School of Psychology and by the SciX program through UNSW's Faculty of Science. </p>" +

    '			<p><b>3.  Inclusion/Exclusion Criteria</b></p>' +
    '			<p>Before you decide to participate in this research study, you should meet the following criteria: </p>' +
    '     </ul>' +
    '         <li> Not have participated in this exact study before.</li>' +
    '     </ul>' +

    '			<p><b>4.  Do I have to take part in this research study?</b></p>' +
    '			<p>Participation in this research study is voluntary. If you do not want to take part, you do not have to. If you decide to take part and later change your mind, you are free to withdraw from the study at any stage. </p>' +

    '			<p><b>5.  What does participation in this research require, and are there any risks involved? </b></p>' +
    '			<p>If you decide to take part in the research study, we will ask you to make decisions in computer-based tasks. It should take no longer than 30 minutes to complete. </p>' +
    "			<p>We don't expect this research to cause any harm. Please let the researchers know if you need any assistance for any reason. </p>" +

    '			<p><b>6.  Total participation time</b></p>' +
    '			<p>In total, participation in this study will require 25-30 minutes. This will include completing consent, the cognitive tasks, demographic survey, and questionnaires all in one session. </p>' +

    '			<p><b>7.  Recompense to participants</b></p>' +
    '			<p>You will receive <b>$7.50</b> (30 minutes) as recompense for your participation. </p>' +

    '			<p><b>8.  What are the possible benefits to participation?</b></p>' +
    '			<p>We cannot promise that you will receive any benefits from this study, but we hope to use the findings from this study to better understand human decision-making. </p>' +

    '			<p><b>9.  What will happen to information about me?</b></p>' +
    "			<p>The information that you give us will be kept indefinitely after the project's completion. We will store your data in a non-identifiable digital format in private folders on UNSW computers. </p>" +
    '			<p>Information collected for this research project may be made available to other research projects, and/or published in a scientific journal. If this is the case, all data will remain de-identified (no one will know who you are). </p>' +
    '			<p>Researchers at UNSW are requested to store their aggregated research data in the UNSW data repository, this is a system called ResData. If the aggregated data are deposited into this repository, they will be retained in this system permanently, but in a format where your data will not be individually identifiable. </p>' +

    '			<p><b>10.  How and when will I find out what the results of the research study are?</b></p>' +
    '			<p>The research team intend to publish and/ report the results of the research study in a variety of ways. All information published will be done in a way that will not identify you. If you would like to receive a copy of the results you can let the research team know by emailing Steve Most or Jennifer Sloane (s.most@unsw.edu.au, j.sloane@unsw.edu.au). We will only use these details to send you the results of the research. </p>' +

    '			<p><b>11.  What if I want to withdraw from the research study?</b></p>' +
    '			<p>If you do consent to participate, you may withdraw at any time. You do not have to give any reason for withdrawing. To withdraw once the study has begun, you can simply close the program on your computer. To withdraw after you have finished (i.e., if you want to withdraw your data from any analyses), please e-mail the researchers with your worker ID number. </p>' +
    '			<p>Your decision not to participate or to withdraw from the study will not affect your relationship with UNSW Sydney. If you decide to withdraw from the research study, the researchers will not collect additional information from you. </p>' +

    '			<p><b>12.  What should I do if I have further questions about my involvement in the research study?</b></p>' +
    '			<p>If you require further information regarding this study or if you have any problems which may be related to your involvement in the study, you can contact the following member/s of the research team: Jennifer Sloane (j.sloane@unsw.edu.au) or Steve Most (s.most@unsw.edu.au). </p>' +
    '			<p><b>What if I have a complaint or any concerns about the research study?</b></p>' +
    '			<p>If you have a complaint regarding any aspect of the study or the way it is being conducted, please contact the UNSW Human Ethics Coordinator either by phone: +61 2 9385 6222 or email: humanethics@unsw.edu.au. </p>' +

    '			<p>Please keep a copy of this information sheet (you can download the pdf <a href="./wtf/info.pdf" target="_blank">here</a>)</p>' +
    '			<br>' +
    '			<p align="center"><b>PARTICIPANT CONSENT</b></p>' +
    '			By continuing, you are making a decision whether or not to participate.  Clicking the button below indicates that, having read the information provided on the participant information sheet, you have decided to participate.' +
    '			<br>' +
    '			<p align="center">' +
    '           <input type="button" id="consentButton" class="consent jspsych-btn" value="I agree" onclick="welcome.click.consent()" >' +
    '			</p>' +
    '			<p>To withdraw your consent, simply close the browser tab and return the HIT. Your data will be deleted from our records.</p>' +
    '		</div><br><br></div>';

welcome.section.demographics =
 '	<!-- ####################### Demographics ####################### -->' +
    '	<div class="demographics" style="display:none; align:center; width: 1000px">' +
    '		<div class="demographics" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
    '			<!-- Explanatory text -->' +
    '            <p font-size:110%><b>Demographic information:</b></p>' +
    '			<p>We need this information for our records, but it is kept completely separate from'  +
    '                information about your Amazon ID. As long as you finish the experiment you will get ' +
    '                paid no matter what you put here, so please be honest.</p><br>' +
    '			<!-- Gender -->' +
    '           <label for="gender"><b>Gender: &nbsp;</b></label>' +
    '           <input type="radio" name="gender" value="male" /> Male &nbsp; ' +
    '           <input type="radio" name="gender" value="female" /> Female &nbsp;' +
    '           <input type="radio" name="gender" value="other" /> Other<br /><br />' +
    '			<!-- Age -->' +
    '           <label for="age"><b>Age: &nbsp;</b></label><input id="age" name="age" /><br /><br />' +
    '			<!-- Language -->' +
    '           <label for="language"><b>Native Language(s): &nbsp;</b></label>' +
    '            <input id="language" name="language" /><br /><br />' +
    '			<!-- Country -->' +
    '			<label for="country"><b>Country you live in: &nbsp;</b></label>  ' +
    '           <select name="country" id="country" class="drop-menu">' +
    '<option>Afghanistan</option><option>&Aring;land Islands</option><option>Albania</option><option>Algeria</option><option>American Samoa</option><option>Andorra</option><option>Angola</option><option>Anguilla</option><option>Antarctica</option><option>Antigua and Barbuda</option><option>Argentina</option><option>Armenia</option><option>Aruba</option><option>Australia</option><option>Austria</option><option>Azerbaijan</option><option>Bahamas</option><option>Bahrain</option><option>Bangladesh</option><option>Barbados</option><option>Belarus</option><option>Belgium</option><option>Belize</option><option>Benin</option><option>Bermuda</option><option>Bhutan</option><option>Bolivia</option><option>Bosnia and Herzegovina</option><option>Botswana</option><option>Bouvet Island</option><option>Brazil</option><option>British Indian Ocean territory</option><option>Brunei Darussalam</option><option>Bulgaria</option><option>Burkina Faso</option><option>Burundi</option><option>Cambodia</option><option>Cameroon</option><option>Canada</option><option>Cape Verde</option><option>Cayman Islands</option><option>Central African Republic</option><option>Chad</option><option>Chile</option><option>China</option><option>Christmas Island</option><option>Cocos (Keeling) Islands</option><option>Colombia</option><option>Comoros</option><option>Congo</option><option>Congo, Democratic Republic</option><option>Cook Islands</option><option>Costa Rica</option><option>C&ocirc;te d&#8217;Ivoire (Ivory Coast)</option><option>Croatia (Hrvatska)</option><option>Cuba</option><option>Cyprus</option><option>Czech Republic</option><option>Denmark</option><option>Djibouti</option><option>Dominica</option><option>Dominican Republic</option><option>East Timor</option><option>Ecuador</option><option>Egypt</option><option>El Salvador</option><option>Equatorial Guinea</option><option>Eritrea</option><option>Estonia</option><option>Ethiopia</option><option>Falkland Islands</option><option>Faroe Islands</option><option>Fiji</option><option>Finland</option><option>France</option><option>French Guiana</option><option>French Polynesia</option><option>French Southern Territories</option><option>Gabon</option><option>Gambia</option><option>Georgia</option><option>Germany</option><option>Ghana</option><option>Gibraltar</option><option>Greece</option><option>Greenland</option><option>Grenada</option><option>Guadeloupe</option><option>Guam</option><option>Guatemala</option><option>Guinea</option><option>Guinea-Bissau</option><option>Guyana</option><option>Haiti</option><option>Heard and McDonald Islands</option><option>Honduras</option><option>Hong Kong</option><option>Hungary</option><option>Iceland</option><option>India</option><option>Indonesia</option><option>Iran</option><option>Iraq</option><option>Ireland</option><option>Israel</option><option>Italy</option><option>Jamaica</option><option>Japan</option><option>Jordan</option><option>Kazakhstan</option><option>Kenya</option><option>Kiribati</option><option>Korea (north)</option><option>Korea (south)</option><option>Kuwait</option><option>Kyrgyzstan</option><option>Lao People&#8217;s Democratic Republic</option><option>Latvia</option><option>Lebanon</option><option>Lesotho</option><option>Liberia</option><option>Libyan Arab Jamahiriya</option><option>Liechtenstein</option><option>Lithuania</option><option>Luxembourg</option><option>Macao</option><option>Macedonia, Former Yugoslav Republic Of</option><option>Madagascar</option><option>Malawi</option><option>Malaysia</option><option>Maldives</option><option>Mali</option><option>Malta</option><option>Marshall Islands</option><option>Martinique</option><option>Mauritania</option><option>Mauritius</option><option>Mayotte</option><option>Mexico</option><option>Micronesia</option><option>Moldova</option><option>Monaco</option><option>Mongolia</option><option>Montenegro</option><option>Montserrat</option><option>Morocco</option><option>Mozambique</option><option>Myanmar</option><option>Namibia</option><option>Nauru</option><option>Nepal</option><option>Netherlands</option><option>Netherlands Antilles</option><option>New Caledonia</option><option>New Zealand</option><option>Nicaragua</option><option>Niger</option><option>Nigeria</option><option>Niue</option><option>Norfolk Island</option><option>Northern Mariana Islands</option><option>Norway</option><option>Oman</option><option>Pakistan</option><option>Palau</option><option>Palestinian Territories</option><option>Panama</option><option>Papua New Guinea</option><option>Paraguay</option><option>Peru</option><option>Philippines</option><option>Pitcairn</option><option>Poland</option><option>Portugal</option><option>Puerto Rico</option><option>Qatar</option><option>R&eacute;union</option><option>Romania</option><option>Russian Federation</option><option>Rwanda</option><option>Saint Helena</option><option>Saint Kitts and Nevis</option><option>Saint Lucia</option><option>Saint Pierre and Miquelon</option><option>Saint Vincent and the Grenadines</option><option>Samoa</option><option>San Marino</option><option>Sao Tome and Principe</option><option>Saudi Arabia</option><option>Senegal</option><option>Serbia</option><option>Seychelles</option><option>Sierra Leone</option><option>Singapore</option><option>Slovakia</option><option>Slovenia</option><option>Solomon Islands</option><option>Somalia</option><option>South Africa</option><option>South Georgia and the South Sandwich Islands</option><option>Spain</option><option>Sri Lanka</option><option>Sudan</option><option>Suriname</option><option>Svalbard and Jan Mayen Islands</option><option>Swaziland</option><option>Sweden</option><option>Switzerland</option><option>Syria</option><option>Taiwan</option><option>Tajikistan</option><option>Tanzania</option><option>Thailand</option><option>Togo</option><option>Tokelau</option><option>Tonga</option><option>Trinidad and Tobago</option><option>Tunisia</option><option>Turkey</option><option>Turkmenistan</option><option>Turks and Caicos Islands</option><option>Tuvalu</option><option>Uganda</option><option>Ukraine</option><option>United Arab Emirates</option><option>United Kingdom</option><option selected="selected">United States of America</option><option>Uruguay</option><option>Uzbekistan</option><option>Vanuatu</option><option>Vatican City</option><option>Venezuela</option><option>Vietnam</option><option>Virgin Islands (British)</option><option>Virgin Islands (US)</option><option>Wallis and Futuna Islands</option><option>Western Sahara</option><option>Yemen</option><option>Zaire</option><option>Zambia</option><option>Zimbabwe</option></select>' +
    '		<br><br>' +
    '		<!-- Demographics  button -->' +
    '        <p align="center">' +
    '                <input type="button" class="demographics jspsych-btn"' +
    '                        id="demographicsButton" value="Next >"' +
    '                       onclick="welcome.click.demographics()">' +
    '       </p></div>';



// ----------------------- helper functions ------------------

welcome.helpers = {};
welcome.helpers.getRadioButton = function(name) { // get the value of a radio button
    var i, radios = document.getElementsByName(name);
    for (i = 0; i < radios.length; i = i + 1) {
        if (radios[i].checked) {
            return (radios[i].value);
        }
    }
    return ("NA");
}
welcome.helpers.setDisplay = function(theClass, theValue) { // toggle display status
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.display = theValue;
    }
}
welcome.helpers.setVisibility = function(theClass, theValue) { // toggle visibility
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.visibility = theValue;
    }
}
welcome.helpers.setHeader = function(theValue) { // alter the header
    document.getElementById("header").innerText = theValue;
}
